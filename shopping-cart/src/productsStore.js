
const productArray =[
    {
        id: 'price_1MJNk7Ac9GzR57XmWV14pcVr',
        title: 'Diamond Ring',
        price: '1400.00'
    },
    {
        id: 'price_1MJNo4Ac9GzR57XmiK09NGuV',
        title: 'Engagement Ring',
        price: '300.00'
    },
    {
        id: 'price_1MJNp3Ac9GzR57XmT7iaaMhu',
        title: 'Diamond Necklace',
        price: '600.00'
    },
    {
        id: 'price_1MJNqXAc9GzR57Xmzd37z9ai',
        title: 'Gold Ring',
        price: '400.00'
    },
    {
        id: 'price_1MJNt2Ac9GzR57Xmlpu6Dbtd',
        title: 'Tahiti Bracelet',
        price: '150.00'
    },
    {
        id: 'price_1MJNuLAc9GzR57XmvAF8trex',
        title: 'Belize Necklace',
        price: '250.00'
    },
    {
        id: 'price_1MJNvSAc9GzR57XmDVp4zgTP',
        title: 'Turquoise Bracelet',
        price: '50.00'
    },
    {
        id: 'price_1MJNwJAc9GzR57XmzNp8br90',
        title: 'Emerald Bracelet',
        price: '80.00'
    },
    {
        id: 'price_1MJNxRAc9GzR57Xmu8IOP8wM',
        title: 'Onyx Multicolor Bracelet',
        price: '75.00'
    },
    {
        id: 'price_1MJNyeAc9GzR57Xm5472qlSh',
        title: 'Golden Necklace',
        price: '139.99'
    },
    {
        id: 'price_1MJO02Ac9GzR57XmljIDOrPp',
        title: 'White Gold Bracelt',
        price: '220.00'
    },
    {
        id: 'price_1MJO0lAc9GzR57Xmmv26NVLI',
        title: 'Topaz and Onyx Bracelet',
        price: '300.00'
    },
]

function getProductData(id){
    let productData = productArray.find(product=> product.id === id)

    if (productData == undefined){
        console.log('Product not found for ID: ' + id)
        return undefined
    }
    return productData;
}

export {productArray, getProductData };