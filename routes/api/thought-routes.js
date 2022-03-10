const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtsById,
    createThoughts,
  } = require('../../controllers/thought-controller');


router
    .route('/')
    .get(getAllThoughts)
    .post(createThoughts);

router
    .route('/:id')
    .get(getThoughtsById)    

module.exports = router;