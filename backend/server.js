import express from 'express'
import 'dotenv/config'

const PORT=process.env.PORT
const app = express()
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('Hola mundo desde express')
})
app.listen(PORT,console.log(`Server on http://localhost:${PORT}`))