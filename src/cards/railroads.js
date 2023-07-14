import RailroadTile from "../tiles/RailroadTile";

export const railroadConfig = [
{
    index: 5,
    name: "Reading Railroad",
    price: 200,
    fare: [25, 50, 175, 100],
},
{
    index: 15,
    name: "Pennsylvania Railroad",
    price: 200,
    fare: [25, 50, 175, 100],
},
{
    index: 25,
    price: 200,
    fare: [25, 50, 175, 100],
},
{
    index: 35,
    name: "Short Line Railroad",
    price: 200,
    fare: [25, 50, 175, 100],
}
]

const railroads = railroadConfig.map(railroadConfig => {
    return new RailroadTile(railroadConfig)
})

export { railroads };