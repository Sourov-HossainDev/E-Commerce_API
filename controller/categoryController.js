const CategoryList = require("../models/categorySchema");
const subCategoryList = require("../models/subCategorySchema");

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

async function categoryStatusController(req,res){
    const {name,status} = req.body;
    

    if(status == 'rejected' || status == 'waiting'){
        const updatecategory = await CategoryList.findOneAndUpdate(
            {name},
            {$set:  {isActive: false, status: status}},
            {new: true}
        )
       
    }else if(status == 'approved'){
        const updatecategory = await CategoryList.findOneAndUpdate(
            {name},
            {$set: {isActive: true, status: status}},
            {new: true}
        )
    }
    res.json({success: "Status updated"})
}

// Sub Category -->

async function createSubCategoryController(req,res){
    const {name,description, category} = req.body;
 
    // res.send(name);
    const duplicateCategory = await subCategoryList.find({name})
    if(duplicateCategory.length > 0){
        res.json({error: 'This category already exist, Try agin'})
    }

    const subCategory = new subCategoryList({
        name,
        description,
        category
    })
    res.json({success: "subCategory create successfully"})
    subCategory.save(); 
}

async function subCategoryStatusController(req,res){
    const {name,status} = req.body;
    

    if(status == 'rejected' || status == 'waiting'){
        const updatecategory = await CategoryList.findOneAndUpdate(
            {name},
            {$set:  {isActive: false, status: status}},
            {new: true}
        )
       
    }else if(status == 'approved'){
        const updatecategory = await CategoryList.findOneAndUpdate(
            {name},
            {$set: {isActive: true, status: status}},
            {new: true}
        )
    }
    res.json({success: "Status updated"})
}

module.exports = {createCategoryController, categoryStatusController, createSubCategoryController, subCategoryStatusController};
