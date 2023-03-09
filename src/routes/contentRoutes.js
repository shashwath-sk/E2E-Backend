/* eslint-disable no-unused-vars */
const express  =  require('express');
const {getContentsController,getContentController,addContentController,addContentFieldController,
    deleteContentFieldController,getContentEntriesController,addContentEntriesController,
    updateContentEntriesController} = require('../controllers/contentController.js');
// const userAuth = require('../middleware/userAuth');
const contentRouter = express.Router();

// get all content-types
contentRouter.get('/contents',getContentsController);

// //get content-types by ID
contentRouter.get('/content/:Id',getContentController);

//post content-type
contentRouter.post('/content',addContentController);

//post new field to content-type
contentRouter.post('/content/:Id',addContentFieldController);

// //delete content-type field
contentRouter.delete('/contents/:Id',deleteContentFieldController);

//get entries of specific content-type
contentRouter.get('/content/:Id/entries',getContentEntriesController);

//add entries of specific content-type
contentRouter.post('/content/:Id/entries',addContentEntriesController);

//update entries of specific content-type
contentRouter.put('/content/:Id/entries/:id',updateContentEntriesController);
module.exports  = contentRouter;