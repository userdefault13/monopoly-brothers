import { cornersConfig } from "./corners";
import { propertyConfig } from "./properties";
import { railroadConfig } from "./railroads";
import { utilityConfig } from "./utilities";
import { chanceCards } from "./chance";
import { communityChestCards } from "./communityChest";
import { taxConfig } from "./tax";


export default function getTiles() {
    const allTiles = [
        ...cornersConfig,
        ...propertyConfig,
        ...railroadConfig,
        ...utilityConfig, 
        ...chanceCards, 
        ...communityChestCards,
        ...taxConfig
    ].sort((a, b) => a.index - b.index);

    return allTiles;
}

