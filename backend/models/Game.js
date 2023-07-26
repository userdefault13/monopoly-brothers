const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    players: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Player' }],
    boardState: {
        // Define the structure of the game board state here
        // For example, you can store the positions of players, property ownership, etc.
    },
    chatMessages: [
        {
        player: { type: mongoose.Schema.Types.ObjectId, ref: 'Player' },
        message: String,
        timestamp: { type: Date, default: Date.now },
        },
    ],
    // Add any other game-related fields as needed
});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;
