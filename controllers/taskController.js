const getAllTasks = (req, res) => {
  res.send('get all tasks');
};

const createTask = (req, res) => {
  res.send('create task');
};

const updateTask = (req, res) => {
  res.send('update task');
};

const deleteTask = (req, res) => {
  res.send('delete task');
};

const clearCompleted = (req, res) => {
  res.send('clear all completed tasks');
};

module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
  clearCompleted,
};
