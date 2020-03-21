import express from 'express'
import validate from '../../middleware/validation/body'
import users from '../controllers/users'

const { signup } = users
const router = express.Router()

router.post("/signup", validate("signup"), signup);

export default router
