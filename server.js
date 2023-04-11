const express = require ('express')
const app = express()


app.get('/', (req,res)=>{ 
    res.end('Bienvenidos al servidor BACKEND corriendo')
})

// configuramos  servidor de manera basica

app.listen(5000, function(){
    console.log('El servidor node esta corriendo')
})