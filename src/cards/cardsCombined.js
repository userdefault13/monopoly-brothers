import { cornersConfig } from "./corners";
import { propertyConfig } from "./properties";
import { railroadConfig } from "./railroads";
import { utilityConfig } from "./utilities";
import { chanceConfig } from "./chance";
import { communityChestArray } from "./communityChest";
import { taxConfig } from "./tax";


export default function getTiles() {
    const allTiles = [
        ...cornersConfig,
        ...propertyConfig,
        ...railroadConfig,
        ...utilityConfig, 
        ...chanceConfig, 
        ...communityChestArray,
        ...taxConfig
    ].sort((a, b) => a.index - b.index);

    return allTiles;
}

