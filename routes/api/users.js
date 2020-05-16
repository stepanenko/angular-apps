
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User');

/**
 * @route   POST api/users
 * @desc    Register new user
 * @access  Public
 */
router.post('/', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      res.status(400).json({ msg: 'Enter all fields' });
    }

    User.findOne({ email }).then(user => {
      if (user) return res.status(400).json({ msg: 'User already exist' });

      const newUser = new User({ name, email, password });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser.save().then(user => {
            res.json({
              user: {
                id: user._id,
                name: user.name,
                email: user.email
              }
            });
          });
        });
      });
    });
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

module.exports = router;
