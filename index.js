// Import necessary libraries and dependencies
const express = require('express');
const bodyParser = require('body-parser');
const photoEditor = require('./photoEditor');

// Create an instance of the Express application
const app = express();

// Set up middleware
app.use(bodyParser.json());

// Define routes
app.post('/edit-photo', (req, res) => {
    // Extract photo data from the request body
    const photoData = req.body.photo;

    // Process photo editing using the photoEditor module
    const editedPhoto = photoEditor.editPhoto(photoData);

    // Send the edited photo back as a response
    res.json({ editedPhoto });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`PhotoEnhance server is running on port ${PORT}`);
});
