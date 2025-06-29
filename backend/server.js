import express from 'express'
import 'dotenv/config'
import usersRoutes from './routes/users.routes.js'
import cors from 'cors'

const PORT=process.env.PORT
const app = express()
app.use(express.json())
app.use(cors())

app.use(usersRoutes)
app.listen(PORT,console.log(`Server on http://localhost:${PORT}`))