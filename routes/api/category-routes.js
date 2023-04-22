const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
// 
  const categoryData = await Category.findAll();

  return res.json(categoryData)
});

router.get('/:id', async (req, res) => {
// 
  const categoryData = await Category.findByPk(req.params.id);

  return res.json(categoryData)
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
