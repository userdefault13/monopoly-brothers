import RailroadTile from "./tiles/RailroadTile";

const railroadConfig = [
{
    index: 0,
    name: "Reading Railroad",
    width: 180,
    height: 240,
    price: 200,
    fare: [25, 50, 175, 100],
},
{
    index: 1,
    name: "Pennsylvania Railroad",
    width: 180,
    height: 240,
    price: 200,
    fare: [25, 50, 175, 100],
},
{
    index: 0,
    name: "B & O Railroad",
    width: 180,
    height: 240,
    price: 200,
    fare: [25, 50, 175, 100],
},
{
    index: 0,
    name: "Short Line Railroad",
    width: 180,
    height: 240,
    price: 200,
    fare: [25, 50, 175, 100],
}
]

const railroads = railroadConfig.map(railroadConfig => {
    return new RailroadTile(railroadConfig)
})

export default { railroads };