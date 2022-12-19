const { authenticate } = require('../config/jwt.config');

const {
  addProduct,
  getAllProducts,
  getOneProduct,
  updateProduct,
  deleteProdcut,
  addReview,

} = require('../controller/product.controller');

module.exports = (app) => {

  app.post('/api/products',authenticate, addProduct)
  app.get('/api/product', getAllProducts);
  app.get('/api/products', authenticate, getAllProducts);
  app.get('/api/products/:id', authenticate, getOneProduct);
  app.put('/api/products/:id',authenticate, updateProduct);
  app.delete('/api/products/:id' ,authenticate, deleteProdcut);

  app.put('/api/products/review/:id', addReview);
};
