package models

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
	"time"
	
)
type User struct{
	ID        primitive.ObjectID `json:"id,omitempty" bson:"_id,omitempty"`          //Auto create ID
	Username  string             `json:"username" bson:"username" binding:"required"`
	Email     string             `json:"email" bson:"email" binding:"required,email"`
	Password  string             `json:"password" bson:"password" binding:"required,min=8"`
	CreatedAt time.Time          `json:"createdAt" bson:"createdAt"`
    BirthDate time.Time          `json:"birthDate" bson:"birthDate"`
}
type LoginInput struct {
	Email    string `json:"email" binding:"required,email"`
	Password string `json:"password" binding:"required"`
}