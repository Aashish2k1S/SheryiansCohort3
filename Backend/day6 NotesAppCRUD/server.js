const { app } = require("./src/app");

let PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`server is running at PORT: ${PORT}`);
});
