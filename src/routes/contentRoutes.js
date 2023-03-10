/* eslint-disable no-unused-vars */
const express  =  require('express');
const {getContentsController,getContentController,addContentController,addContentFieldController,
    deleteContentFieldController,getContentEntriesController,addContentEntriesController,
    updateContentEntriesController,updateContentFieldController,updateContentNameController,
    deleteContentEntriesController} = require('../controllers/contentController.js');
// const userAuth = require('../middleware/userAuth');
const contentRouter = express.Router();

// get all content-types
contentRouter.get('/contents',getContentsController);

// //get content-types by ID
contentRouter.get('/content/:Id',getContentController);

//post content-type
contentRouter.post('/content',addContentController);

//update content-type name
contentRouter.put('/contents/:Id',updateContentNameController);
//post new field to content-type
contentRouter.post('/content/:Id',addContentFieldController);

//update content-type field
contentRouter.put('/content/:Id',updateContentFieldController);

// //delete content-type field
contentRouter.delete('/contents/:Id',deleteContentFieldController);

//get entries of specific content-type
contentRouter.get('/content/:Id/entries',getContentEntriesController);

//add entries of specific content-type
contentRouter.post('/content/:Id/entries',addContentEntriesController);

//update entries of specific content-type
contentRouter.put('/content/:id/entries/:entryId',updateContentEntriesController);

//delete extries of specific content-type
contentRouter.delete('/content/:id/entries/:entryId',deleteContentEntriesController);
module.exports  = contentRouter;