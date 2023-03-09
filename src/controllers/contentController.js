const {addContent,getContents,getContent,addNewContentField,deleteContentField,
    getContentEntries,addContentEntries,updateContentEntries} = require('../services/contentService.js');

const getContentsController = async(req, res)=>{
    try{
        const contentTypes = await getContents();
        res.status(200).json(contentTypes);
    }
    catch(error){
        res.status(500).json(error);
    }
}
const getContentController = async(req, res)=>{
    try{
        const {Id} = req.params;
        console.log(Id)
        const contentType = await getContent(Id);
        res.status(200).json(contentType);
        if(!contentType){
            res.status(404).json({message:'Content-Type not found'});
        }
    }
    catch(error){
        res.status(500).json(error);
    }
}

const addContentController = async(req, res)=>{
    try{
        const name = req.body.name;
        const contentTypes = await addContent(name);
        res.status(201).json(contentTypes);
    }
    catch(error){
        res.status(500).json(error);
    }
}

const addContentFieldController = async(req, res)=>{
    try{
        const {newField} = req.body;
        const {Id} = req.params;
        const contentType = await addNewContentField(Id,newField);
        res.status(200).json(contentType);
    }
    catch(error){
        res.status(500).json(error);
    }
}

const deleteContentFieldController = async(req, res)=>{
    try{
        const {delField} = req.body;
        const {Id} = req.params;
        const contentType = await deleteContentField(Id,delField);
        res.status(200).json(contentType);
    }
    catch(error){
        res.status(500).json(error);
    }
}

const getContentEntriesController = async(req, res)=>{
    try{
        const {Id} = req.params;
        const contentTypeEntries = await getContentEntries(Id);
        res.status(200).json(contentTypeEntries);
    }
    catch(error){
        res.status(500).json(error);
    }
}

const addContentEntriesController = async(req, res)=>{
    try{
        const {Id} = req.params;
        const {newEntry} = req.body;
        const contentTypeEntries = await addContentEntries(Id,newEntry);
        res.status(200).json(contentTypeEntries);
    }
    catch(error){
        res.status(500).json(error);
    }
}

const updateContentEntriesController = async(req, res)=>{
    try{
        const {id} = req.params;
        const {newEntry} = req.body;
        const contentTypeEntries = await updateContentEntries(id,newEntry);
        res.status(200).json(contentTypeEntries);
    }
    catch(error){
        res.status(500).json(error);
    }
}  



module.exports = {
    getContentsController,
    getContentController,
    addContentController,
    addContentFieldController,
    deleteContentFieldController,
    getContentEntriesController,
    addContentEntriesController,
    updateContentEntriesController
}