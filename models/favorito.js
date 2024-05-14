import moongose from 'mongoose'
import hotel from '../models/hotel.js'

const favorito = new moongose.Schema({
    hotel:hotel
})

export default favorito