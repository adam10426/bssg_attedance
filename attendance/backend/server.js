const memberRoutes = require("./routes/members.routes");
const app = require('./index')


//routes
app.use('/member', memberRoutes)

app.listen('3000', () => { 
    console.log('App is up and running on port 3000')
})