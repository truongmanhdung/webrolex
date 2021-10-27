const formatprice = (price) => {
    const newPrice = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(price)
    return newPrice
}
export default formatprice