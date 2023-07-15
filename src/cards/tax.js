import TaxTile from "../tiles/TaxTile"

export const taxConfig = [
{
    index: 4,
    name: "Income Tax",
    fee: [25],
},
{
    index: 38,
    name: "Luxury Tax",
    fee: [75],
}
]

const tax = taxConfig.map(taxConfig => {
    return new TaxTile(taxConfig)
})

export { tax };