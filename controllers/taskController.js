const Task = require('../models/Task');
const { StatusCodes } = require('http-status-codes');
const { BadRequestError, NotFoundError } = require('../errors');

const getAllTasks = async (req, res) => {
  const { completed } = req.query;
  const queryObject = {};
  if (completed) {
    queryObject.completed = completed;
  }
  const tasks = await Task.find(queryObject).sort('-createdAt');
  res.status(StatusCodes.OK).json({ tasks });
};

const createTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.status(StatusCodes.CREATED).json({ task });
};

const updateTask = async (req, res) => {
  const {
    body: { name, completed },
    params: { id: taskId },
  } = req;

  if (name === '' || completed === '') {
    throw new BadRequestError(
      'Task name or completed fields cannot be empty'
    );
  }
  const task = await Task.findByIdAndUpdate(
    { _id: taskId },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!task) {
    throw new NotFoundError(`No task with the id ${taskId}`);
  }
  res.status(StatusCodes.OK).json({ task });
};

const deleteTask = async (req, res) => {
  const { id: taskId } = req.params;
  const task = await Task.findByIdAndDelete({ _id: taskId });

  if (!task) {
    throw new NotFoundError(`No task with the id ${taskId}`);
  }
  res.status(StatusCodes.OK).send();
};

const clearCompleted = async (req, res) => {
  const tasks = await Task.deleteMany({ completed: true });

  if (!tasks) {
    throw new NotFoundError(`No task with the id ${taskId}`);
  }
  res.status(StatusCodes.OK).send();
};

module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
  clearCompleted,
};
