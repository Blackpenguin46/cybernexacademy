const express = require('express');
const app = express();
app.use(express.json());

app.post('/api/discord-news', (req, res) => {
    const { author, content } = req.body;
    console.log(`Received message from ${author}: ${content}`);
    // Update your website's news feed with the new message
    res.status(200).send('Message received');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}); 