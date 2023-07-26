const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  balance: {
    type: Number,
    required: true,
    default: 1500, // Initial balance for each player
  },
  properties: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Property' }],
  position: {
    type: Number,
    required: true,
    default: 0, // Initial position at the "Go" tile
  },
  // Add any other player-related fields as needed
});

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;
