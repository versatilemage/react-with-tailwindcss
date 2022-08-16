const express = require("express");
const app = express()

app.use("/pokemon/", require("./routes/usersRoute"))

app.listen(3001, () => {
    console.log("express server is running on 3001")
})
