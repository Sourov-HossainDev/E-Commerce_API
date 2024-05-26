const express = require('express');
const {createCategoryController, categoryStatusController, createSubCategoryController, subCategoryStatusController, getAllCategory} = require('../../controller/categoryController');
const router = express.Router();


router.post('/createCategory', createCategoryController)
router.post('/statusCategory', categoryStatusController)
router.post('/createSubCategory', createSubCategoryController)
router.post('/statusSubCategory', subCategoryStatusController) 
router.post('/getallcategory', getAllCategory) 

module.exports = router;