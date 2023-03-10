const axios = require("axios");
// const { BACKEND_URL } = require("../../constants/apiEndPoints");
// const { ERROR_ROUTE } = require("../../constants/routes");

const makeRequest = async (
  apiEndPoint,
  dynamicConfig,
  token
) => {
  try{
    const requestDetails = {
      baseURL: "http://localhost:3000",
      url: apiEndPoint.url,
      method: apiEndPoint.method,
      headers: {
        authorization: token
    },
      ...dynamicConfig,
    };
    const { data } = await axios(requestDetails);
    return data;
  }
  catch(error){
    throw new Error(error.message)
  }
};

module.exports = makeRequest;