const express = require('express');
const router = express.Router();

const {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
  clearCompleted,
} = require('../controllers/taskController');

router.route('/').get(getAllTasks).post(createTask);
router.route('/clearCompleted').delete(clearCompleted);
router.route('/:id').patch(updateTask).delete(deleteTask);

module.exports = router;
