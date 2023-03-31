function validateMethod(req, res, next) {
    const allowedMethods = ['GET', 'POST', 'PATCH','DELETE'];
    if (!allowedMethods.includes(req.method)) {
       res.status(405).send('Method Not Allowed');
       console.log("Can't Use methods other than GET,POST, PATCH and DELETE")
    }
    next();
  }
  
  function checkRequestBody(req, res, next) {
      if (!req.body || Object.keys(req.body).length === 0) {
        const error = new Error('Request body missing');
        error.status = 400;
        return next(error);
      }
      next();
    }
  
    function checkRequestId(req, res, next) {
      if (!req.params || Object.keys(req.params).length === 0) {
        const error = new Error('Request Query is missing');
        error.status = 400;
        return next(error);
      }
      next();
    }

    module.exports = {
        validateMethod:validateMethod,
        checkRequestBody:checkRequestBody,
        checkRequestId:checkRequestId
    }