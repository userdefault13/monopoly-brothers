import { cornersConfig } from "./cards/corners";
import { propertyConfig } from "./cards/properties";
import { railroadConfig } from "./cards/railroads";
import { utilityConfig } from "./cards/utilities";
import { chanceConfig } from "./cards/chance";
import { communityChestArray } from "./cards/communityChest";
import { taxConfig } from "./cards/tax";


function getTiles() {
    const allTiles = [
        ...cornersConfig,
        ...propertyConfig,
        ...railroadConfig,
        ...utilityConfig, 
        ...chanceConfig, 
        ...communityChestArray
    ].sort((a, b) => a.index - b.index);

    return allTiles;
}