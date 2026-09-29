const express = require("express");

const app = express();

app.use(express.json());

let PORT = 3000;

let user = [];

//READ
app.get("/", (_, res) => {
    res.send(user);
});

//CREATE
app.post("/create", (req, res) => {
    let body = req.body;
    user.push(body);

    res.send({ status: 200, message: "user added sucessfully." });
});

//DELETE
app.delete("/delete/:id", (req, res) => {
    let id = Number(req.params.id);

    let userData = user.filter((val) => val.id !== id);
    
    console.log(user);
    console.log(userData);
    
    user = userData;

    res.send({
        status: 200,
        message: `user with id: ${id} deleted sucessfully.`,
    });
});

//UPDATE 
app.put("/update/:id", (req, res) => {
    let id = Number(req.params.id);
    let body = req.body;

    let userIndex = user.findIndex((val) => val.id === id);

    if (userIndex === -1) {
        return res.status(404).send({
            status: 404,
            message: `User with id: ${id} not found.`
        });
    }

    // Update the existing user object in-place
    user[userIndex] = {
        ...user[userIndex],
        name: body.name,
        age: body.age
    };

    res.send({
        status: 200,
        message: `User with id: ${id} updated successfully.`,
        data: user[userIndex]
    });
});

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
});
