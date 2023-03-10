const {NotFoundError} =  require('../../error');
const makeRequest = require('../utils/makeRequest');

const userAuth = async(req,res,next)=>{
    const token = req.headers.authorization;
    if(!token)
    {
        res.status(401).json(new NotFoundError('unauthorized access is restricted'));
    }
    try{
        const userId = await makeRequest({ url: '/api/validate', method: "POST" },{},token);
        if(!userId){
            res.status(401).json(new NotFoundError('unauthorized access is restricted'));
        }
        req.userId = userId;
        next();
    }
    catch(error)
    {
        res.status(403).json(new NotFoundError('unauthorized access is restricted'));
    }
}


module.exports = userAuth;