const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors()); // Allow frontend requests

app.get("/flip", (req, res) => {
    const isHeads = Math.random() < 0.5;
    const result = isHeads ? "HEADS" : "TAILS";
    res.json({ result });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
