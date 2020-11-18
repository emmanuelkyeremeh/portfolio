const router = require('express').Router()
let Submit = require('../models/submitModel')


router.route('/').post((req,res)=>{
  const firstName = req.body.firstName
  const lastName = req.body.lastName
  const email = req.body.email
  const subject = req.body.subject
  const message = req.body.message

  const newSubmit = new Submit({
      firstName,
      lastName,
      email,
      subject,
      message,
  })
  newSubmit.save()
  .then(()=> res.json('Form sent!'))
  .catch(err => res.status(400).json(`Error: ${err}`))
})

module.exports = router