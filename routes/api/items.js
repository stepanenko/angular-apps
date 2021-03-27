
const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Item = require('../../models/Item');

/**
 * @route   GET api/items
 * @desc    Get All Items
 * @access  Public
 */
router.get('/', async (req, res) => {
  try {
    const items = await Item.find();
    if (!items) throw Error('No items');

    res.status(200).json(items);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

/**
 * @route   POST api/items
 * @desc    Create An Item
 * @access  Private
 */
router.post('/', async (req, res) => { // removed auth middleware for testing
  const newItem = new Item({
    name: req.body.name
  });

  try {
    const item = await newItem.save();
    if (!item) throw Error('Something went wrong saving the item');

    res.status(200).json(item);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

/**
 * @route   DELETE api/items/:id
 * @desc    Delete An Item
 * @access  Private
 */
router.delete('/:id', auth, async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) throw Error('No item found');

    const removed = await item.remove();
    if (!removed)
      throw Error('Something went wrong while trying to delete the item');

    res.status(200).json({ success: true });
  } catch (e) {
    res.status(400).json({ msg: e.message, success: false });
  }
});

module.exports = router;
