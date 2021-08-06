// IMPORTACION
const mongoose =  require("mongoose")
const app = require("./app");
// var port = 3000;

mongoose.Promise = global.Promise
mongoose.connect('mongodb+srv://proyecto:root@weeklyscheduleplannerba.z77ti.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
    console.log('Se encuentra conectado a la base de datos Weekly-Schedule-Planner');

    app.listen(process.env.PORT || 3000, function () {
        console.log("Servidor corriendo en el puerto 3000");
    })
}).catch((err) => console.log('Error de conexión a la base de datos', err))
