// properties.js
import PropertyTile from "../tiles/PropertyTile";

export const propertyConfig = [
{
    index: 29,
    name: "Mediterranean Avenue",
    price: 60,
    rent: [2, 10, 30, 90, 160, 250],
    houseCost: 50,
    hotelCost: 50,
    colorBox: "0x945537"
},
{
    index: 27,
    name: "Baltic Avenue",
    price: 60,
    rent: [4, 20, 60, 180, 320, 450],
    houseCost: 50,
    hotelCost: 50,
    colorBox: "0x945537"
    
},
{
    index: 24,
    name: "Oriental Avenue",
    price: 100,
    rent: [6, 30, 90, 270, 400, 550],
    houseCost: 50,
    hotelCost: 50,
    colorBox: "0xace0fc"
},
{
    index: 22,
    name: "Vermont Avenue",
    price: 100,
    rent: [6, 30, 90, 270, 400, 550],
    houseCost: 50,
    hotelCost: 50,
    colorBox: "0xace0fc"
},
{
    index: 21,
    name: "Connecticut Avenue",
    price: 120,
    rent: [8, 40, 100, 300, 450, 600],
    houseCost: 50,
    hotelCost: 50,
    colorBox: "0xace0fc"
},
{
    index: 39,
    name: "St. Charles Place",
    price: 140,
    rent: [10, 50, 150, 450, 625, 750],
    houseCost: 100,
    hotelCost: 100,
    colorBox: "0xd63d96"
},
{
    index: 37,
    name: "States Avenue",
    price: 140,
    rent: [10, 50, 150, 450, 625, 750],
    houseCost: 100,
    hotelCost: 100,
    colorBox: "0xd63d96"
},
{
    index: 36,
    name: "Virginia Avenue",
    price: 160,
    rent: [12, 60, 180, 500, 700, 900],
    houseCost: 100,
    hotelCost: 100,
    colorBox: "0xd63d96"
},
{
    index: 34,
    name: "St. James Place",
    price: 180,
    rent: [14, 70, 200, 550, 750, 950],
    houseCost: 100,
    hotelCost: 100,
    colorBox: "0xf69421"
},
{
    index: 32,
    name: "Tennessee Avenue",
    price: 180,
    rent: [14, 70, 200, 550, 750, 950],
    houseCost: 100,
    hotelCost: 100,
    colorBox: "0xf69421"
},
{
    index: 31,
    name: "New York Avenue",
    price: 200,
    rent: [16, 80, 220, 600, 800, 1000],
    houseCost: 100,
    hotelCost: 100,
    colorBox: "0xf69421"
},
{
    index: 9,
    name: "Kentucky Avenue",
    price: 220,
    rent: [18, 90, 250, 700, 875, 1050],
    houseCost: 150,
    hotelCost: 150,
    colorBox: "0xec1a25"
},
{
    index: 7,
    name: "Indiana Avenue",
    price: 220,
    rent: [18, 90, 250, 700, 875, 1050],
    houseCost: 150,
    hotelCost: 150,
    colorBox: "0xec1a25"
},
{
    index: 6,
    name: "Illinois Avenue",
    price: 240,
    rent: [20, 100, 300, 750, 925, 1100],
    houseCost: 150,
    hotelCost: 150,
    colorBox: "0xec1a25"
},
{
    index: 4,
    name: "Atlantic Avenue",
    price: 260,
    rent: [22, 110, 330, 800, 975, 1150],
    houseCost: 150,
    hotelCost: 150,
    colorBox: "0xfef104"
},
{
    index: 3,
    name: "Ventnor Avenue",
    price: 260,
    rent: [22, 110, 330, 800, 975, 1150],
    houseCost: 150,
    hotelCost: 150,
    colorBox: "0xfef104"
},
{
    index: 1,
    name: "Marvin Gardens",
    price: 280,
    rent: [24, 120, 360, 850, 1025, 1200],
    houseCost: 150,
    hotelCost: 150,
    colorBox: "0xfef104"
},
{
    index: 19,
    name: "Pacific Avenue",
    price: 300,
    rent: [26, 130, 390, 900, 1100, 1275],
    houseCost: 200,
    hotelCost: 200,
    colorBox: "0x1eb25b"
},
{
    index: 18,
    name: "North Carolina Avenue",
    price: 300,
    rent: [26, 130, 390, 900, 1100, 1275],
    houseCost: 200,
    hotelCost: 200,
    colorBox: "0x1eb25b"
},
{
    index: 16,
    name: "Pennsylvania Avenue",
    price: 320,
    rent: [28, 150, 450, 1000, 1200, 1400],
    houseCost: 200,
    hotelCost: 200,
    colorBox: "0x1eb25b"
},
{
    index: 13,
    name: "Park Place",
    price: 350,
    rent: [35, 175, 500, 1100, 1300, 1500],
    houseCost: 200,
    hotelCost: 200,
    colorBox: "0x0173b7"
},
{
    index: 11,
    name: "Boardwalk",
    price: 400,
    rent: [50, 200, 600, 1400, 1700, 2000],
    houseCost: 200,
    hotelCost: 200,
    colorBox: "0x0173b7"
},
];

const properties = propertyConfig.map(propertyConfig => {
    return new PropertyTile(propertyConfig)
})

export { properties };