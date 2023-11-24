// routes.js

const express = require('express');
const router = express.Router();
const Panji = require('../model/Panji'); // Import your Mongoose model

// GET route to fetch Panji data
router.get('/panjiData', async (req, res) => {
  try {
    const { ENG_DATE } = req.query;
    // console.log(req.query);

    if (ENG_DATE) {
      const panjiData = await Panji.find({ "DATE (English)": ENG_DATE  }); // Fetches all records, you can modify this as needed
      // console.log(panjiData);
      res.status(200).json(panjiData);

    } else {
      const panjiData = await Panji.find(); // Fetches all records, you can modify this as needed
      res.status(200).json(panjiData);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
