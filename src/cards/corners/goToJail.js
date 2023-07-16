// goToJail.js
import GoToJailTile from "../../tiles/corners/GoToJailTile";

export const goToJailConfig = [
    {
        type:"Go to Jail",
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
    }
];

const goToJail = goToJailConfig.map(goToJailConfig => {
    return new GoToJailTile(goToJailConfig)
})

export { goToJail };