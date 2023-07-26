import UtilityTile from "../tiles/UtilityTile"

export const utilityConfig = [
{
    index: 38,
    name: "Electric\nCompany",
    width: 180,
    height: 240,
    price: 200,
    fare: [25, 50, 175, 100],
},
{
    index: 28,
    name: "Water\nWorks",
    width: 180,
    height: 240,
    price: 200,
    fare: [25, 50, 175, 100],
}
]

const utilities = utilityConfig.map(utilityConfig => {
    return new UtilityTile(utilityConfig)
})

export { utilities };