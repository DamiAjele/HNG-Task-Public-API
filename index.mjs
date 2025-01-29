import express from 'express';
import cors from 'cors';

const app = express();

const PORT = process.env.port || 3000;

// Enable CORS
app.use(cors());

// API Endpoint
app.get("/", (request, response) => {
    response.json({
        email: "damilolaaje05@gmail.com",
        current_datetime: new Date().toISOString(),
        github_url: "https://github.com/DamiAjele/HNG-Task-Public-API.git"
    });
});



// localhost:3000/
app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
});