import {Router} from 'express'
import { allActions, createAction, updateAction } from '../controller/actionCarbon.controller.js'


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

carbonActionRoutes.patch('/update/:id',(req,res)=>{
const id = req.params.id;
const {volunteerActionName } = req.body;
const actionUpdated = updateAction(id,volunteerActionName)
res.json({actionUpdated})


})

export { carbonActionRoutes }