import express from 'express'
import 'dotenv/config'
import usersRoutes from './routes/users.routes.js'
import cors from 'cors'
import authRoutes from './routes/auth.routes.js'
import { consultasRecibidas } from './middleware/consultas.middleware.js'

const PORT=process.env.PORT
const app = express()
app.use(express.json())
app.use(cors())

app.use(usersRoutes)
app.use(authRoutes)
app.use(consultasRecibidas)

app.listen(PORT,console.log(`Server on http://localhost:${PORT}`))