const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
   const categoryData = await Category.findAll({
      attributes: ['id', 'category_name'],
      include: [{ model: Product }],
    });
   res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
    try {
    const categoryData = await Category.findByPk(req.params.id, {
      attributes: ['id', 'category_name'],
      include: [{ model: Product }],
    });
    if (!categoryData) {
      res.status(404).json({ message: 'No category found.' });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});
});

router.post('/', (req, res) => {
  // create a new category
try {
    const categoryData = await Category.create({
      category_name: req.body.category_name,
    });
    res.status(200).json(categoryData);
  }
  catch (err) {
    res.status(400).json(err)
  }
});
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
   try {
    const updatedCategoryData = Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!updatedCategoryData) {
      res.status(404).json({ message: 'No category found.' });
      return;
    }
    res.status(200).json(updatedCategoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  try {
    const deletedCategoryData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(deletedCategoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});
});

module.exports = router;
