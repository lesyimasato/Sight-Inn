import moongose from 'mongoose'
import favorito from './favorito.js'

const usuario = new moongose.Schema({
    email : String,
    senha : String,
    telefone : Number,
    favorito:[favorito]
})

const Usuario = moongose.model("usuario", usuario)

export default Usuario