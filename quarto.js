import moongose from 'moongose'
import comodidades from 'comodidades.js'
import alugado from 'alugado.js'

const quarto = new moongose.Schema({
    tamanho_cama:String,
    hospedes:Number,
    comodidades:comodidades,
    tipo:String,
    alugado:alugado,
    valor:Number,
})

const Quarto = moongose.model("quarto", quarto)

export default Quarto