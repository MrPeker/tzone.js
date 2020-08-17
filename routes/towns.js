const express = require('express');
const router = express.Router();
const fs = require('fs');
const slugify = require('slugify');

const province = require('./../datasets/province');
const counties = require('./../datasets/county');
const towns = require('./../datasets/towns');

router.get('/', (req, res) => {
  res.json(towns);
});

router.get('/:province', (req, res) => {
  let query = slugify(req.params.province.toLowerCase());
  let findProvince = towns.find((o) => {
    return slugify(o.provinceName.toLowerCase()) === query;
  });

  if (findProvince) {
    res.json(findProvince);
  } else {
    res.status(404);
  }
});

router.get('/:province/:county', (req, res) => {
  let province = slugify(req.params.province.toLowerCase());
  let county = slugify(req.params.county.toLowerCase());

  let findProvince = towns.find((o) => {
    return slugify(o.provinceName.toLowerCase()) === province;
  });

  let findCounty = findProvince.provinceCounties.find((o) => {
    return slugify(o.countyName.toLowerCase()) === county;
  });

  if (findCounty) {
    res.json(findCounty);
  } else {
    res.status(404);
  }
});

router.get('/:province/:county/:town', (req, res) => {
  let province = slugify(req.params.province.toLowerCase());
  let county = slugify(req.params.county.toLowerCase());
  let town = slugify(req.params.town.toLowerCase());

  let findProvince = villages.find((o) => {
    return slugify(o.provinceName.toLowerCase()) === province;
  });

  let findCounty = findProvince.provinceCounties.find((o) => {
    return slugify(o.countyName.toLowerCase()) === county;
  });

  let findTown = findCounty.countyTowns.find((o) => {
    return slugify(o.townName.toLowerCase()) === town;
  });

  if (findTown) {
    res.json(findTown);
  } else {
    res.status(404);
  }
});

module.exports = router;
