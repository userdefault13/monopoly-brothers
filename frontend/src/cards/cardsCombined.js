import { goConfig } from "./corners/go";
import { goToJailConfig } from "./corners/goToJail";
import { freeParkingConfig } from "./corners/freeParking";
import { jailConfig } from "./corners/jail";
import { propertyConfig } from "./properties";
import { railroadConfig } from "./railroads";
import { utilityConfig } from "./utilities";
import { chanceCards } from "./chance";
import { communityChestCards } from "./communityChest";
import { taxConfig } from "./tax";


export default function getTiles() {
    const allTiles = [
        ...goConfig,
        ...goToJailConfig,
        ...freeParkingConfig,
        ...jailConfig,
        ...propertyConfig,
        ...railroadConfig,
        ...utilityConfig, 
        ...chanceCards, 
        ...communityChestCards,
        ...taxConfig
    ].sort((a, b) => a.index - b.index);

    return allTiles;
}

