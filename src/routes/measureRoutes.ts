import express, { Router } from 'express'
import measureController from '../controllers/measureController'

export const measureRouter: Router = express.Router()

measureRouter.post('/seed', measureController.teste)