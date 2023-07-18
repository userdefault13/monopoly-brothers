import TaxTile from "../tiles/TaxTile"

export const taxConfig = [
{
    index: 26,
    name: "Income Tax",
    fee: [25],
},
{
    index: 12,
    name: "Luxury Tax",
    fee: [75],
}
]

const tax = taxConfig.map(taxConfig => {
    return new TaxTile(taxConfig)
})

export { tax };