const express = require('express');
const app = express();
app.use(express.json());
let PORT = 3000;

let user = [{ name: 'aashish', age: 25 }];


app.get("/", (req, res) => {
    res.send(user);
})

app.post("/create", (req, res) => {
    res.send(req.body);
})


app.listen(PORT, () => { console.log(`server is running on ${PORT}`); });