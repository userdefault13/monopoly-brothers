import UtilityTile from "./tiles/UtilityTile";

const utilityConfig = [
{
    index: 0,
    name: "Electric Compamy",
    width: 180,
    height: 240,
    price: 200,
    fare: [25, 50, 175, 100],
},
{
    index: 1,
    name: "Water Company",
    width: 180,
    height: 240,
    price: 200,
    fare: [25, 50, 175, 100],
}
]

const utilities = utilityConfig.map(utilityConfig => {
    return new UtilityTile(utilityConfig)
})

export default { utilities };