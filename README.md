# GoPolicy - Public Policy Online Voting Platform

## 1. Project Overview

**GoPolicy** is a secure, identity-based online platform designed for public policy voting. It allows registered and authenticated users to vote on various public policy issues, ensuring the integrity of the process by limiting each user to a single vote per issue.

This project is built with a modern technology stack, featuring a Go backend API and a React frontend, containerized with Docker for seamless deployment.

## 2. Technology Stack

| Category | Technology |
| :--- | :--- |
| **Backend** | Go (Golang) with the Gin web framework |
| **Frontend** | React with TypeScript (using Vite for tooling) |
| **Database** | MongoDB (managed via MongoDB Atlas) |
| **Containerization** | Docker |
| **Deployment** | Render (Web Service for Backend, Static Site for Frontend) |

## 3. Getting Started

Follow these instructions to set up and run the project on your local machine for development and testing purposes.

### Prerequisites

* **Go**: Version 1.18 or higher.
* **Node.js**: Version 18.x or higher.
* **MongoDB Atlas Account**: A free MongoDB Atlas account is required to host the database.
* **Git**: For cloning the repository.

### 3.1. Backend Setup (Go API)

1.  **Navigate to the Backend Directory:**
    ```bash
    cd backend
    ```

2.  **Create the Environment File:**
    Create a file named `.env` in the `backend` directory. This file will store your sensitive credentials. It is already included in `.gitignore` to prevent it from being committed.

3.  **Configure Environment Variables:**
    Open the `.env` file and add the following lines. Replace the placeholders with your actual credentials from MongoDB Atlas.

    ```env
    # Get this from your MongoDB Atlas cluster -> Connect -> Drivers
    MONGO_URI=mongodb+srv://<username>:<password>@<cluster-url>/?retryWrites=true&w=majority

    # Create a long, random, and secret string for signing JWTs
    JWT_SECRET=your_super_secret_and_random_jwt_key
    ```

4.  **Install Dependencies:**
    Go will automatically download the necessary dependencies when you run the application for the first time, based on the `go.mod` file.

5.  **Run the Backend Server:**
    ```bash
    go run cmd/api/main.go
    ```
    The backend server will start and listen on `http://localhost:8080`. You should see a log message confirming the connection to MongoDB.

### 3.2. Frontend Setup (React App)

1.  **Navigate to the Frontend Directory:**
    Open a **new terminal window or tab** and navigate to the frontend directory:
    ```bash
    cd frontend
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    ```

3.  **Run the Frontend Development Server:**
    ```bash
    npm run dev
    ```
    The React development server (powered by Vite) will start and be accessible at `http://localhost:5173`. Your browser should open to this address automatically.

    The `vite.config.ts` file is already configured to proxy any requests from `/api` to the backend server at `http://localhost:8080`, handling Cross-Origin (CORS) issues during development.

## 4. Project Structure

### Backend

The backend follows the standard Go project layout for scalability and maintainability.

/backend
|-- /cmd/api/main.go    # Main application entrypoint
|-- /internal/          # All private application logic
|   |-- /database/      # MongoDB connection logic
|   |-- /handlers/      # HTTP request handlers (business logic)
|   |-- /models/        # Data structure definitions (structs)
|   |-- /routes/        # API route definitions
|-- .env                # Environment variables (local)
|-- go.mod              # Go module dependencies
`-- go.sum              # Dependency checksums


### Frontend

The frontend uses a feature-based folder structure to keep the code organized.

/frontend
|-- /src
|   |-- /api/           # Functions for API communication (e.g., authService)
|   |-- /components/    # Reusable UI components (e.g., Navbar)
|   |-- /contexts/      # React Context for global state (e.g., AuthContext)
|   |-- /hooks/         # Custom React hooks
|   |-- /pages/         # Page-level components (e.g., LoginPage, HomePage)
|   |-- /styles/        # Global CSS files
|   |-- App.tsx         # Main app component with layout
|   -- main.tsx        # Application entrypoint |-- vite.config.ts      # Vite configuration (including proxy) -- package.json        # Node.js dependencies and scripts