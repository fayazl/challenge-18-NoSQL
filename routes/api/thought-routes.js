const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtsById,
    createThoughts,
    updateThoughts,
    deleteThoughts,
    addReactions,
  } = require('../../controllers/thought-controller');


router
    .route('/')
    .get(getAllThoughts)
    .post(createThoughts);

router
    .route('/:id')
    .get(getThoughtsById)
    .put(updateThoughts)
    .delete(deleteThoughts)  

router
    .route('/:thoughtId/reactions')
    .post(addReactions)

module.exports = router;