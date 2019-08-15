const express = require('express');
const router = new express.Router();
const axios = require('axios');

// const searchValidation = require('../middlewares/validation');

/**
 * Route to get yelp data
 */

// eslint-disable-next-line func-names
router.get('/', async function(req, res, next) {
  try {
    const term = req.body.term
      .trim()
      .split(' ')
      .join('%20');
    const location = req.body.location
      .trim()
      .split(' ')
      .join('%20');
    const results = await axios({
      method: 'GET',
      url: `https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&limit=20`,
      headers: {
        Authorization:
          'bearer mlY7qOBm9HMW8ZfuajlZRGU-IdGJIrH5fzNBiZWKnv38gE-wuusJMv85PRgtL8Rb-zX11CEF4Qum55RtK1OuYDlASLsHQm5q_mdaiimgIEpTEpngQRXcVDdsnYNPXXYx',
      },
    });
    return res.json(results.data);
  } catch (e) {
    return next(e);
  }
});

module.exports = router;
