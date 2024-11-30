const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

const users = [
    {id: 1, name: "Messi", email: "lm10@gmail.com"},
    {id: 2, name: "Ronaldo", email: "cr7@gmail.com"},
    {id: 3, name: "Neymar", email: "njr10@gmail.com"},
]

app.get("/", (req, res) => {
    res.send("Users management server is running");
})

app.get("/users", (req, res) => {
    res.send(users);
})

app.post("/users", (req, res) => {
    console.log("Post Api Hitting");
    console.log(req.body);
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser);
})

app.listen(port, () => {
    console.log(`Server is running on PORT: ${port}`);
})