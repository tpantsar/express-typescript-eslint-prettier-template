import cors from 'cors'
import dotenv from 'dotenv'
import express, { Application, Request, Response } from 'express'

//For env File
dotenv.config()

const app: Application = express()
app.use(express.json())
app.use(cors())

const port = process.env.PORT ?? '8000'

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Express & TypeScript Server')
})

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`)
})
