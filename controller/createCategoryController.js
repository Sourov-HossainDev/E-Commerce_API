const CategoryList = require("../models/categorySchema");

async function createCategoryController(req,res){
    const {name,description} = req.body;
 
    // res.send(name);
    const duplicateCategory = await CategoryList.find({name})
    if(duplicateCategory.length > 0){
        res.json({error: 'This category already exist, Try agin'})
    }

    const category = new CategoryList({
        name,
        description
    })
    res.json({success: "Category create successfully"})
    category.save(); 
}
   
module.exports = createCategoryController;
