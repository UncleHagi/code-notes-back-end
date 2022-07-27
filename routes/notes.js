import { Router } from "express";
import * as notesCtrl from '../controllers/notes.js'
import {decodeUserFromToken, checkAuth} from '../middleware/auth.js'
const router = Router()

// Public Routers



// ProtectedRouters
router.use(decodeUserFromToken)
router.post('/', checkAuth, notesCtrl.create)


export {
  router
}