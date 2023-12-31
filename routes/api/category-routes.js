const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  try{
    const category = await Category.findAll({
      attributes: ["id","category_name"],
      include: [{
        model: Product,
        attributes: ["id","product_name","price","stock","category_id"],
      },
    ],
    });
    res.status(200).json(category);
  } catch (err) {
    res.status(400).json(err);
  };
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
