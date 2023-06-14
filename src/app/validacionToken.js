const jwt = require("jsonwebtoken");

function verifyToken(token) {
  console.log(token,"soy el token de comprobacion");
  try{
    token = token.split(" ")[1];
    const cargaUtil = jwt.verify(token, "SegmentationFault");
    console.log("se valido correctamente")
    return cargaUtil;
  }catch(error){
    console.log(error,"se valido incorrectamente");
  }
  
  
}

module.exports = verifyToken;
