const express = require('express');

const app = express();

app.use(express.json());

let PORT = 3000;

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});



app.get("/", (req, res) => {
    res.send("server is working fine");
})