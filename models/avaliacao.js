import moongose from 'mongoose'

const avaliacao = new moongose.Schema({
    avaliacaoGeral:Number,
    avaliacaoLimpeza:Number,
    avaliacaoLocalizacao:Number,
    avaliacaoCustoBeneficio:Number,
    avaliacaoComunicacao:Number
})

const Avaliacao = moongose.model("avaliacao", avaliacao)

export default Avaliacao