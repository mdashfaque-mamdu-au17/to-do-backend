const Task = require('../models/Task');
const { StatusCodes } = require('http-status-codes');

const getAllTasks = (req, res) => {
  res.send('get all tasks');
};

const createTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.status(StatusCodes.CREATED).json({ task });
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
