
import CalcRoute from './routes/CalcRoute.js'
import express from 'express';
import cors from 'cors'

const PORT = process.env.PORT || 8888;
const app = express();

app.use(cors())
app.use('/' , CalcRoute)

app.listen(PORT)