import moongose from 'mongoose'

const image = new moongose.Schema({
    url:String,
})

const Image = moongose.model("image",image)

export default Image