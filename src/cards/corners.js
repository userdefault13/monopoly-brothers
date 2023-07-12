// corners.js
import CornerTile from "../tiles/CornerTile";


const corners = cornerConfigs.map(cornerConfig => {
    return new CornerTile(cornerConfig)
})

const cornerConfigs = [
{
    index: 0,
    width: 240,
    height: 240,
    setPositionX: 0,
    setPositionY: 0,
    name: "go",
    action: (player) => {
        player.moveToTile(goTile);
        player.collectMoney(200);
    }
},
{
    index: 1,
    width: 240,
    height: 240,
    setPositionX: 0,
    setPositionY: 0,
    name: "Jail",
    action: (player) => {
        player.moveToTile(goTile);
        player.collectMoney(200);
    }
},
{
    index: 2,
    width: 240,
    height: 240,
    setPositionX: 0,
    setPositionY: 0,
    name: "Free Parking",
    action: (player) => {
        player.moveToTile(goTile);
        player.collectMoney(200);
    }
},
{
    index: 3,
    width: 240,
    height: 240,
    setPositionX: 0,
    setPositionY: 0,
    name: "Go to Jail",
    action: (player) => {
        player.moveToTile(goTile);
        player.collectMoney(200);
    }
},
];

export default corners;