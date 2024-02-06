import {Router} from 'express'
import { getAllTips, createTip } from '../controller/tips.controller.js'


const tipRoutes = Router()

tipRoutes.get("/showTips",(req,res) =>{
  const allTips = getAllTips();
  res.json(allTips)
})

tipRoutes.post('/createTip',(req,res) =>{
    const {description,author} = req.body;
    const newTip =  createTip(description, author)
    res.json({newTip})    

})

export { tipRoutes }