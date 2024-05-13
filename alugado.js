import moongose from 'moongose'

const alugados = new moongose.Schema({
    data_checkin:Date,
    data_checkout:Date,
})

const Alugados = moongose.model("alugados", alugados)

export default Alugados