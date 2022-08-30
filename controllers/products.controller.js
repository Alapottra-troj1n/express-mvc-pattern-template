const products = [
    {id: '1', name: 'Alapottra'},
    {id: '2', name: 'Alapottra2'},
    {id: '3', name: 'Alapottra3'},
];


module.exports.getAllProducts = (req, res) => {

    res.status(200).json({products : products })

}

module.exports.addProduct = (req, res) => {

    res.status(200).json({products : 'ADD PRODUCT'})

}

module.exports.getProduct = (req, res) => {

    res.status(200).json({products : 'GET 1 PRODUCT'})

}
