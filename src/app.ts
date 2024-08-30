import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import "reflect-metadata"

dotenv.config()


export const app = express()
app.use(express.json())
app.use(cors())