const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameController');

router.post('/', gameController.createGame);
router.get('/', gameController.getAllGames);
router.get('/:id', gameController.getGameById);
router.put('/:id', gameController.updateGame);
router.delete('/:id', gameController.deleteGame);
router.post('/:id/players', gameController.joinGame);
router.put('/:id/players/:playerId', gameController.updatePlayer);
router.delete('/:id/players/:playerId', gameController.removePlayer);
router.get('/:id/board', gameController.getGameBoard);
router.post('/:id/roll', gameController.rollDice);
router.post('/:id/buy', gameController.buyProperty);
router.post('/:id/upgrade', gameController.addHouseOrHotel);

module.exports = router;
