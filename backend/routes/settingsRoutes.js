const express = require('express')
const router = express.Router()
const { getSettings, adminUpdateSettings, getSettingsById } = require("../controllers/settingsController")

const { verifyIsLoggedIn, verifyIsAdmin } = require("../middleware/verifyAuthToken")

router.get("/", getSettings)
router.get("/:id", getSettingsById);

// admin routes:
router.use(verifyIsLoggedIn)
router.use(verifyIsAdmin)
router.get("/:id", getSettingsById);
router.put('/:id', adminUpdateSettings)

module.exports = router