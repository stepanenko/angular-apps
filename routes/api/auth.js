
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const config = require('config');
const jwt = require('jsonwebtoken');

/**
 * @route   POST api/auth
 * @desc    Auth user
 * @access  Public
 */
router.post('/', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ msg: 'Enter all fields' });
  }

  User.findOne({ email }).then(user => {
    if (!user) return res.status(400).json({ msg: 'User does not exist' });

    // Validate password
    bcrypt.compare(password, user.password)
      .then(isMatch => {
        if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

        jwt.sign(
          { id: user.id },
          config.get('jwtSecret'),
          { expiresIn: 3600 },
          (err, token) => {
            if (err) throw err;
            res.json({
              token,
              user: {
                id: user._id,
                name: user.name,
                email: user.email
              }
            });
          }
        );
      });
  });
});

module.exports = router;
