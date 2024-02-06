import express from 'express';
import { tipRoutes } from './src/routes/tipsCarbon.Routes.js';
import { carbonActionRoutes } from './src/routes/actionCarbon.Routes.js';
const port = 3040

const app = express()




app.use(express.json())
app.use(tipRoutes)
app.use(carbonActionRoutes)






app.listen(port, () => {
    console.log(`O servidor esta na porta ${port}`)
})