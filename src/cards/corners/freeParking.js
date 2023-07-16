// freeParking.js
import FreeParkingTile from "../../tiles/corners/FreeParkingTile";

export const freeParkingConfig = [
    {
        type:"Free Parking",
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
    }
];

const freeParking = freeParkingConfig.map(freeParkingConfig => {
    return new FreeParkingTile(freeParkingConfig)
})

export { freeParking };