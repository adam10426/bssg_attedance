const memberRoutes = require("./routes/members.routes");
const app = require('./index')
const db = require("./config/db.config");
require("dotenv").config()

//connecting to local database
db.connect((err) => {
    if (err) {
        console.log(err)
        throw err
    };
  console.log("db connected successfully");
});


//routes
app.use('/member', memberRoutes)

const port = process.env.PORT ||  '3000'
app.listen(port, () => { 
    console.log(`App is up and running on port ${port}`)
})