import {Router} from 'express'
import { allActions, createAction } from '../controller/actionCarbon.controller.js'


const carbonActionRoutes = Router()

carbonActionRoutes.get("/showActions",(req,res) =>{
  const actions = allActions();
  res.json(actions)
})

carbonActionRoutes.post('/createAction',(req,res) =>{
    const {action,category,volunteerActionName} = req.body;
    const newAction =  createAction(action,category,volunteerActionName)
    res.json({newAction})    

})

export { carbonActionRoutes }