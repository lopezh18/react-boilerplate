/* eslint-disable prefer-const */
// const jsonschema = require('jsonschema');
// const searchSchema = require('./schemas/searchSchema.json');
// const ExpressError = require('../expressError');

// function validateUserSearch(req, res, next) {
//   const result = jsonschema.validate(req.body, searchSchema);

//   if (!result.valid) {
//     let listOfErrors = result.errors.map(err => err.stack);
//     let error = new ExpressError(listOfErrors, 400);
//     return next(error);
//   }

//   return next();
// }

// module.exports = {
//   validateUserSearch,
// };
