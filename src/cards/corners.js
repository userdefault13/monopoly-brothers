// corners.js
import CornerTile from "../tiles/CornerTile";

export const cornersConfig = [
    {
        index: 0,
        width: 240,
        height: 240,
        setPositionX: 0,
        setPositionY: 0,
        name: "go",
        action: (player) => {
            player.moveToTile(0);
            player.collectMoney(200);
        }
    },
    {
        index: 10,
        width: 240,
        height: 240,
        setPositionX: 0,
        setPositionY: 0,
        name: "Jail",
        action: (player) => {
            player.moveToTile(0);
            player.collectMoney(200);
        }
    },
    {
        index: 20,
        width: 240,
        height: 240,
        setPositionX: 0,
        setPositionY: 0,
        name: "Free Parking",
        action: (player) => {
            player.moveToTile(0);
            player.collectMoney(200);
        }
    },
    {
        index: 30,
        width: 240,
        height: 240,
        setPositionX: 0,
        setPositionY: 0,
        name: "Go to Jail",
        action: (player) => {
            player.moveToTile(0);
            player.collectMoney(200);
        }
    },
];

const corners = cornersConfig.map(cornersConfig => {
    return new CornerTile(cornersConfig)
})

export { corners };