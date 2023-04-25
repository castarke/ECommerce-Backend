const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
// get  all categories route
router.get('/', async (req, res) => {
// 
try{
  const categoryData = await Category.findAll(
    {
      include: [{
        model: Product
      }],
    }
  )
  res.status(200).json(categoryData);
  }
  catch(err){
    console.log(err)
    res.status(500).json({message:'error in getting the categories'})
}});

// get category by id route
router.get('/:id', async (req, res) => {

try{
  const categoryData = await Category.findByPk(req.params.id, {
    include:[{
      model: Product
    }],
  }
  )
  res.status(200).json(categoryData);
  }
  catch(err){
    console.log(err)
    res.status(500).json('error in getting the category')
  }});

  // create (post) a new category
router.post('/', async (req, res) => {

  try{
const categoryData = await Category.create({
  category_name:req.body.category_name});
  res.status(200).json(categoryData);
  }
  catch(err){
    console.log(err)
    res.status(500).json('error in creating the category')
}});

  // update a category by its `id` value
router.put('/:id', async (req, res) => {

  try{
  const categoryData = await Category.update({
    category_name: req.body.category_name
    },{
      where: {
        id: req.params.id,
      },
    }
  );
  res.status(200).json(categoryData);
  }
  catch(err){
    console.log(err)
    res.status(500).json('error in updating the category')
}});

  // delete a category by its `id` value
router.delete('/:id', async (req, res) => {

  try{
  const categoryData = await Category.destroy({
    where: { 
      id: req.params.id
    }
  });
  res.status(200).json(categoryData);
  }
  catch(err){
    console.log(err)
    res.status(500).json('error in deleting the category')
}});

module.exports = router;
