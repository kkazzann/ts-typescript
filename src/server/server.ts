import express, { Express, Request, Response } from 'express'

const app: Express = express()
const port: number = 3000

app.get('/health', (_req: Request, res: Response) => {
  res.status(200).send('Server is up!')
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
