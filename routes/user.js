const express = require('express')
const router = express.Router()

const mongoose = require('mongose')
const eschema = mongoose.Schema

const eschemausuario = new eschema({
    nombre: String,
    email: String,
    telefono: String,
    idusuario: String
})

const ModeloUsuario = mongoose.model('usuarios',eschemausuario)