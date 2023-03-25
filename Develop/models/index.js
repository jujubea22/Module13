// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
product.belongsTo(Category);

// Categories have many Products
category.hasMany(Product);

// Products belongToMany Tags (through ProductTag)
products.belongToMany (Tags, {
  through:'productTag',
  foreignKey: 'product_id'
});
// Tags belongToMany Products (through ProductTag)
tag.belongsToMany(product, { through: 'productTag',
                            foreignKey: 'tag_id' });


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
