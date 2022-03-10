const router = require('express').Router();

const {
    getAllUsers,
    getUsersById,
    createUsers,
    updateUsers,
    deleteUsers,
    createFriends,
  } = require('../../controllers/user-controller');

router
  .route('/')
  .get(getAllUsers)
  .post(createUsers);

router
    .route('/:id')
    .get(getUsersById)
    .put(updateUsers)
    .delete(deleteUsers);

router
  .route('/:userId/friends/:friendId')
  .post(createFriends)

module.exports = router;