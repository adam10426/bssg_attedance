const memberRoutes = require("./routes/members.routes");
const app = require('./index')
const db = require("./config/db.config");


db.connect((err) => {
    if (err) {
        console.log(err)
        throw err
    };
  console.log("db connected successfully");
});


//routes
app.use('/member', memberRoutes)

app.listen('3000', () => { 
    console.log('App is up and running on port 3000')
})