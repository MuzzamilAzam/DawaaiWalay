import express from 'express';
import Product from '../models/productModel';
import { isAdmin, isAuth } from '../util';
// import { isAuth, isAdmin } from '../util';

const router = express.Router();

// router.get('/', async (req, res) => {
//   const products = await Product.find({});
//   res.send(products);
// });

router.get('/', async (req, res) => {
  const type = req.query.type ? { type: req.query.type } : {};
  console.log(type);
  const searchKeyword = req.query.searchKeyword
    ? {
        name: {
          $regex: req.query.searchKeyword,
          $options: 'i',
        },
      }
    : {};
  const sortOrder = req.query.sortOrder
    ? req.query.sortOrder === 'lowest'
      ? { price: -1 }
      : { price: 1 }
    : { _id: -1 };
  const products = await Product.find({ ...type, ...searchKeyword }).sort(
    sortOrder
  );
  console.log(products);
  res.send(products);

});


router.get('/:id', async (req, res) => {
  const product = await Product.findOne({ _id: req.params.id });
  if (product) { 
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found.' });
  }
});

router.put('/:id', isAuth, isAdmin, async (req, res) => {
  const productId = req.params.id;
  const product = await Product.findById(productId);
  if (product) {
    product.name = req.body.name;
    product.price = req.body.price;
    product.image = req.body.image;
    // product.brand = req.body.brand;
    product.type = req.body.type;
    product.countInStock = req.body.countInStock;
    product.description = req.body.description;
    const updatedProduct = await product.save();
    if (updatedProduct) {
      return res
        .status(200)
        .send({ message: 'Product is Updated', data: updatedProduct });
    }
  }
  return res.status(500).send({ message: 'Product Could not be updated due to error.' });
});

router.delete('/:id', isAuth, isAdmin, async (req, res) => {
  const deletedProduct = await Product.findById(req.params.id);
  if (deletedProduct) {
    await deletedProduct.remove();
    res.send({ message: 'Product Deleted' });
  } else {
    res.send('Error in Deletion.');
  }
}
);

router.post('/', isAuth, isAdmin, async (req, res) => {
  const product = new Product({
    name: req.body.name,
    image: req.body.image,
    price: req.body.price,
    // brand: req.body.brand,
    type: req.body.type,
    countInStock: req.body.countInStock,
    // rating: req.body.rating,
    // numReviews: req.body.numReviews,
    description: req.body.description,
  });
  const newProduct = await product.save();
  if (newProduct) {
    return res
      .status(201)
      .send({ message: 'New Product is Added.', data: newProduct });
  }
  return res.status(500).send({ message: 'Product Could not be created due to error.' });
});

export default router;