package handlers

import (
	"context"
	"gopolicy/backend/internal/database"
	"gopolicy/backend/internal/models"
	"net/http"
	"os"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v5"
	"go.mongodb.org/mongo-driver/bson"
	"golang.org/x/crypto/bcrypt"
)
func RegisterUser(c *gin.Context) {
	var userCollection = database.GetCollection("Users") 

	var user models.User
	if err := c.ShouldBindJSON(&user); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	var existingUser models.User
	err := userCollection.FindOne(context.TODO(), bson.M{"$or": []bson.M{{"username": user.Username}, {"email": user.Email}}}).Decode(&existingUser)
	if err == nil {
		c.JSON(http.StatusConflict, gin.H{"error": "Username or email already exists"})
		return
	}

	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(user.Password), bcrypt.DefaultCost)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to hash password"})
		return
	}
	user.Password = string(hashedPassword)
	user.CreatedAt = time.Now()

	_, err = userCollection.InsertOne(context.TODO(), user)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create user"})
		return
	}

	c.JSON(http.StatusCreated, gin.H{"message": "User created successfully"})
	
}
func LoginUser(c *gin.Context){
	var userCollection = database.GetCollection("Users")
	var input models.LoginInput
	var user models.User
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Search user's email in the database
	err := userCollection.FindOne(context.TODO(), bson.M{"email": input.Email}).Decode(&user)
	if err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid email or password"})
		return
	}
	//CompareHashAndPassword 
	err = bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(input.Password))
	c.JSON(http.StatusOK, gin.H{"message": "Login successful"})
	if err != nil{
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid email or password"})
	}
	// Generate JWT token
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"sub": user.ID,
		"exp": time.Now().Add(time.Hour * 24).Unix(),
	})

	tokenString, err := token.SignedString([]byte(os.Getenv("JWT_SECRET")))
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to generate token"})
		return
	}

	// token passed to frontend
	c.JSON(http.StatusOK, gin.H{"token": tokenString})

}