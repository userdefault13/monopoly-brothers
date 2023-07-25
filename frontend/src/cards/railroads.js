import RailroadTile from "../tiles/RailroadTile";

export const railroadConfig = [
{
    index: 25,
    name: "Reading\nRailroad",
    price: 200,
    fare: [25, 50, 175, 100],
},
{
    index: 35,
    name: "Pennsylvania\nRailroad",
    price: 200,
    fare: [25, 50, 175, 100],
},
{
    index: 5,
    name: "B & O\nRailroad",
    price: 200,
    fare: [25, 50, 175, 100],
},
{
    index: 15,
    name: "Short\nLine\nRailroad",
    price: 200,
    fare: [25, 50, 175, 100],
}
]

const railroads = railroadConfig.map(railroadConfig => {
    return new RailroadTile(railroadConfig)
})

export { railroads };
