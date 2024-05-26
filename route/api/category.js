const express = require('express');
const {createCategoryController, categoryStatusController, createSubCategoryController, subCategoryStatusController} = require('../../controller/categoryController');
const router = express.Router();


router.post('/createCategory', createCategoryController)
router.post('/statusCategory', categoryStatusController)
router.post('/createSubCategory', createSubCategoryController)
router.post('/statusSubCategory', subCategoryStatusController)

module.exports = router