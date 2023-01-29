const express = require('express')
const router = express.Router()
const { getMessages, newMessage, getMessagesById } = require("../controllers/messageController")

const { verifyIsLoggedIn, verifyIsAdmin } = require("../middleware/verifyAuthToken")

router.post("/", newMessage)
router.get("/", newMessage)

// admin routes:
router.use(verifyIsLoggedIn)
router.use(verifyIsAdmin)
router.get("/admin", getMessages)
router.get("/admin/:id", getMessagesById);

module.exports = router