today we have studied that how do we connect mongoDB
`npm i mongoose`

import mongoose
then make a function which is a promise so make it with async await
then mongoose.sonnect(mongodb_URI)

now in our backend we have to make 50+ endpoint and what if we will write entire endpoints into a single file, will it be a good readable or managable code? Absolutely not ie, due to which we have multple architecture to make a optimized code like

1. MVC [MODEL VIEW CONROLLER]
2. Layer Base
3. Service Base
   but here we will be following MVC architecture in our backend

```
backend
    src
        config
            db.js
        models
            note.model.js
        app.js
    server.js
```

and here we will only keep `app.listen` on `server.js`
and move everything else to `app.js` and then export the `app` and import to `server.js`
and then also move the mongoose connect method to the `config>db.js` and import the same to the `app.js`

now our backend is all about handeling data from client and db side so we use to maintain the expected data model and if the client provides the data which misses any of the entity in it then we will throw `status code 4xx` ie, for client side error

to maintain the model for the expected data we have to create a `mongoose.Schema` and then we have to create the model of that schema into our DB `cluster > collection`

and we have to define the schema and create the model like this

```
const mongoose = require("mongoose");

let noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        minlength: 10,
    },
});

const NotesModel = mongoose.model("notes", noteSchema);

module.exports = NotesModel;
```


and then at the endpoint controller we have to create the model document with the client data like this 
```
app.post("/create", async (req, res) => {
    let { title, description } = req.body;

    const newNote = await NotesModel.create({ title, description });

    res.send({
        success: true,
        message: "Note created successfully",
        data: newNote,
    });
});
```