import moongose from 'mongoose'

const comodidades = new moongose.Schema({
    wifi:Boolean,
    estacionamento:Boolean,
    arcondicionado:Boolean,
    secador:Boolean,
    Tv_Smart:Boolean,
    varanda:Boolean
})

const Comodidades = moongose.model("comodidades", comodidades)

export default Comodidades