# Public API to Retrieve Basic Information

This project is a simple public API that returns basic information in JSON format. The API provides the following details:
- Your registered email address.
- The current datetime in ISO 8601 format (UTC).
- The GitHub URL of the project's codebase.

## API Specification

### Endpoint
- **GET** `https://hng-task-public-api.onrender.com`

### Required JSON Response Format (200 OK)
```json
{
  "email": "your-email@example.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/yourusername/your-repo"
}

## Setup Instructions

### Prerequitse
- Node.js 
- Express.js

### Run Project Locally
- install dependencies
- start server

The API will be available at port 3000