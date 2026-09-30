const {app} = require('./src/app')


let PORT = 3000;

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});
