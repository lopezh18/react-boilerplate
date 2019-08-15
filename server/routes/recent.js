const express = require('express');
const router = new express.Router();
// const searchValidation = require('../middlewares/validation');

/**
 * Route to get recent searches
 */
const recent = [{ location: 'San Francisco', term: 'Bao' }];

// eslint-disable-next-line func-names
router.get('/', function(req, res, next) {
  try {
    return res.json(recent);
  } catch (e) {
    return next(e);
  }
});

// eslint-disable-next-line func-names
router.post('/', function(req, res, next) {
  try {
    const newSearch = req.body;
    recent.push(newSearch);
    return res.json(recent);
  } catch (e) {
    return next(e);
  }
});

module.exports = router;
