import express from "express"

const router = express.Router()

router.post("/hotel", async(req,res) => {
    const response = await HotelService.Create(
        req.body.nome,
        req.body.endereco,
        req.body.desc
    )
})

