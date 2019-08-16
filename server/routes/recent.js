const express = require('express');
const router = new express.Router();

/**
 * Route to get recent searches
 */
const recent = [];

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
    recent.unshift(newSearch);
    return res.json(recent);
  } catch (e) {
    return next(e);
  }
});

module.exports = router;
