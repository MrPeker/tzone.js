const express = require('express');
const router = express.Router();
const fs = require('fs');
const slugify = require('slugify')

const province = require('./../datasets/province');
const counties = require('./../datasets/county');

router.get('/', (req, res) => {
  res.json(counties);
});

router.get('/:name', (req, res) => {
  let query = slugify(req.params.name.toLowerCase());
  let findProvince = counties.find((o) => {
    return slugify(o.provinceName.toLowerCase()) === query;
  });

  if (findProvince) {
    res.json(findProvince);
  } else {
    res.status(404);
  }
});


module.exports = router;
