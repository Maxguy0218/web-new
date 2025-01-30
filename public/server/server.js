const express = require('express');
const app = express();
const PORT = 3000;

// Serve static files
app.use(express.static('public'));

// API Endpoint for FAQ Data
app.get('/api/faqs', (req, res) => {
    const faqs = [
        { id: 1, question: "What is CLM?", answer: "CLM stands for Contract Lifecycle Management." },
        { id: 2, question: "How do templates work?", answer: "Templates standardize contracts." }
    ];
    res.json(faqs);
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
