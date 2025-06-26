package routes
import(
	"gopolicy/backend/internal/handlers"
	"github.com/gin-gonic/gin"
)

func SetupRouter() *gin.Engine {
	r := gin.Default()

	reactApi := r.Group("/api/v1")
	{
		reactApi.GET("/health", func(c *gin.Context) {
			c.JSON(200, gin.H{"status": "UP"})
		})

        
        reactApi.POST("/register", handlers.RegisterUser)
	}

	return r
}