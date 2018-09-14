const express = require('express')
const User = require('../../models/User')

const router = express.Router()

// @route  GET /api/users/user
// @desc   get the user data
// @access private
router.get('/', async (req, res) => {
  const users = await User.find()
  res.status(200).json(users)
})


// @route  GET /api/users/user
// @desc   get the user data
// @access private
router.post('/', async (req, res) => {
  const user = await User.findOne({ email: req.body.email })
  if (user) {
    newUser = (res.status(400).json({ error: 'user already exit' }))
  }
  const newUser = new User({
    email: req.body.email
  })
  await newUser.save()
  console.log('success');
  res.redirect('https://www.performance-marketing.dk/')
})


module.exports = router
