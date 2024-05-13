import moongose from 'moongose'
import avaliacao from 'avaliacao.js'
import quarto from 'quarto.js'
import imagem from 'imagem.js'

const hotel = new moongose.Schema({
    nome:String,
    endereco:String,
    desc:String,
    avaliacao:avaliacao,
    num_avalicacao:Number,
    quarto:quarto,
    imagem:imagem
})

const Hotel = moongose.model("hotel", hotel)

export default Hotel