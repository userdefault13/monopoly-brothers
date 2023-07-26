const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');

// Route to get the chat messages for a specific game lobby
router.get('/:id', chatController.getChatMessages);

// Route to send a chat message in the game lobby
router.post('/:id', chatController.sendChatMessage);

module.exports = router;
