const { Product} = require('../models/product.model');


module.exports.addProduct = (req, res) => {
  console.log("---", req);
  Product.create(req.body)
    .then((product) => res.json(product))
    .catch((err) => res.status(400).json(err));
};
module.exports.getAllProducts = async (req, res) => {
  await Product.find().populate("owner")
    .then((product) => res.json(product))
    .catch((err) => res.status(400).json(err));
};

 // GET ONE Movie BY ID
module.exports.getOneProduct = (req, res) => {
  Product.findOne({ _id: req.params.id }).populate('owner')
    .then((product) => res.json(product))
    .catch((err) => res.status(400).json(err));
};

 // UPDATE Movie
module.exports.updateProduct = (req, res) => {
  Product.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })

    .then((product) => res.json({product}))
    .catch((err) => res.status(400).json(err));
};

 // DELETE Movie
module.exports.deleteProdcut = (req, res) => {
  Product.deleteOne({ _id: req.params.id })
    .then((result) => res.json({ result }))
    .catch((err) => res.status(400).json(err));
};


// add review
module.exports.addReview = (req, res) => {
  Product.findOneAndUpdate(
    { _id: req.params.id },
    { $push: { reviews: req.body } },
    {
      new: true,
      runValidators: true,
    }
  )
    .then((Product) => res.json(Product))
    .catch((err) => res.status(400).json(err));
};

