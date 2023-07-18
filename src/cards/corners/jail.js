// corners.js
import JailTile from "../../tiles/corners/JailTile";

export const jailConfig = [
    {
        type:"Jail",
        index: 20,
        width: 240,
        height: 240,
        setPositionX: 0,
        setPositionY: 0,
        name: "Jail",
        action: (player) => {
            player.moveToTile(0);
            player.collectMoney(0);
        }
    }
];

const jail = jailConfig.map(jailConfig => {
    return new JailTile(jailConfig)
})

export { jail };