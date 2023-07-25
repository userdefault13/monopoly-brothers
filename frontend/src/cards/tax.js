import TaxTile from "../tiles/TaxTile"

export const taxConfig = [
{
    index: 26,
    name: "Income\nTax",
    fee: [25],
},
{
    index: 12,
    name: "Luxury\nTax",
    fee: [75],
}
]

const tax = taxConfig.map(taxConfig => {
    return new TaxTile(taxConfig)
})

export { tax };