const express = require('express');
const Accomplished = require('../models/Accomplished');

const router = express.Router();

// GET all accomplished tasks
router.get('/', async (req, res) => {
  try {
    const accomplishedTasks = await Accomplished.find();
    res.json(accomplishedTasks);
  } catch (error) {
    console.error('Error fetching accomplished tasks:', error);
    res.status(500).json({ message: 'Failed to fetch accomplished tasks' });
  }
});

// POST a new accomplished task
router.post('/', async (req, res) => {
  const { title, dateCompleted } = req.body;
  try {
    const accomplished = new Accomplished({
      title,
      dateCompleted
    });
    await accomplished.save();
    res.status(201).json(accomplished); // HTTP 201 Created
  } catch (error) {
    console.error('Error creating accomplished task:', error);
    res.status(500).json({ message: 'Failed to create accomplished task' });
  }
});

// PUT update an accomplished task by ID
// router.put('/:id', async (req, res) => {
//   const { id } = req.params;
//   const { title, dateCompleted } = req.body;
//   try {
//     const accomplished = await Accomplished.findByIdAndUpdate(id, { title, dateCompleted }, { new: true });
//     if (!accomplished) {
//       return res.status(404).json({ message: 'Accomplished task not found' }); // HTTP 404 Not Found
//     }
//     res.json(accomplished);
//   } catch (error) {
//     console.error('Error updating accomplished task:', error);
//     res.status(500).json({ message: 'Failed to update accomplished task' });
//   }
// });

// // DELETE an accomplished task by ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedAccomplished = await Accomplished.findByIdAndDelete(id);
    if (!deletedAccomplished) {
      return res.status(404).json({ message: 'Accomplished task not found' }); // HTTP 404 Not Found
    }
    res.json({ message: 'Accomplished task deleted successfully' });
  } catch (error) {
    console.error('Error deleting accomplished task:', error);
    res.status(500).json({ message: 'Failed to delete accomplished task' });
  }
});

module.exports = router;