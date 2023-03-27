const express = require("express")

const path = require("path")
const app = express()
const port = 3000
const hbs = require("hbs")

const Templates = (path.join(__dirname, `Templates`, `view`))
const partials = (path.join(__dirname, `Templates`, `partials`))

app.set("view engine", "hbs")
app.use(express.json())
app.set("views", Templates)
hbs.registerPartials(partials)

app.get("/", (req, res) => {
     res.render("index", {
          Name: "Gautam Vaja",
          Field: "React Js Developer"
     })
})

app.get("/about", (req, res) => {
     res.render("about")

})

app.get("*", (req, res) => {
     res.render("404")
})

app.listen(port, () => {
     console.log(`Listening On   http://localhost:${port}`);
})