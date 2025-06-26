package main

import (
	"log"

	"github.com/joho/godotenv"
	"gopolicy/backend/internal/database"
	"gopolicy/backend/internal/routes"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Println("No .env file found, using environment variables")
	}

    
	database.ConnectDB()

	router := routes.SetupRouter()

	log.Println("Starting server on :8080")
	if err := router.Run(":8080"); err != nil {
		log.Fatal("Failed to start server: ", err)
	}
}