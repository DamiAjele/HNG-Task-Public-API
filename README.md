# Public API to Retrieve Basic Information

This project is a simple public API that returns basic information in JSON format. The API provides the following details:
- My registered email address.
- The current datetime in ISO 8601 format (UTC).
- The GitHub URL of my project's codebase.

## Setup Instructions

### Prerequisite
- Node.js 

### Run Project Locally

#### Install Dependencies

```bash
npm install
```
- Start Server

The API will be available at port 3000

## API Specification

### Endpoint
- **GET** `https://hng-task-public-api.onrender.com`

### Required JSON Response Format (200 OK)
```json
{
  {
  "email": "damilolaaje05@gmail.com",
  "current_datetime": "2025-01-30T01:23:51.003Z",
  "github_url": "https://github.com/DamiAjele/HNG-Task-Public-API.git"
}
```

## How to Fetch API
```javascript
fetch('https://hng-task-public-api.onrender.com')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```
## Hire a Skilled Backend Developer

https://hng.tech/hire/nodejs-developers