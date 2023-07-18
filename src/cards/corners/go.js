// go.js
import GoTile from "../../tiles/corners/GoTile";

export const goConfig = [
    {
        type:"Go",
        index: 10,
        width: 240,
        height: 240,
        setPositionX: 0,
        setPositionY: 0,
        name: "Go",
        action: (player) => {
            player.moveToTile(0);
            player.collectMoney(200);
        }
    }
];

const go = goConfig.map(goConfig => {
    return new GoTile(goConfig)
})

export { go };