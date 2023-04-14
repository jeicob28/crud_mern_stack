const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/crudmernstack');

const objectoBD =mongoose.connection

objectoBD.on('connected', () => {console.log('Conexion correcta a mongo DB')} )
objectoBD.on('error', () => {console.log('Error en la Conexion correcta a mongo DB')} )

module.exports= mongoose