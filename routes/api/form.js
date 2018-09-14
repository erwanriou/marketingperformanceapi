const express = require('express')
var multer  = require('multer')
var multipart = multer()

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
router.post('/', multipart.fields([]) ,async (req, res) => {
  res.setHeader('Content-type', 'application/json')
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*.ampproject.org')
  res.setHeader('AMP-Access-Control-Allow-Source-Origin', 'http://' + req.headers.host)
  res.setHeader('Access-Control-Expose-Headers', 'AMP-Access-Control-Allow-Source-Origin')

  const user = await User.findOne({ email: req.body.email })
  if (user) {
    newUser = (res.status(400).json({ error: 'user already exit' }))
  }
  const newUser = new User({
    email: req.body.email
  })
  await newUser.save()
  res.redirect('https://www.performance-marketing.dk/thank-you.html')
})


module.exports = router
