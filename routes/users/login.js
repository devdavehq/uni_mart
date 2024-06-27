import { Router } from "express";

const route = Router()

route.get('/login', (req, res)=>{
    res.status(200).json({ msg : 'successfully created'})
})


export default route