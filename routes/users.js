const express = require('express')
const router = express.Router()
const User = require('../models/users')

router.get('/', async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (error) {
        res.send("Error" + error)
    }
})

router.post('/', async (req, res) => {
    const user = new User({
        name: req.body.name,
        country: req.body.country,
        email: req.body.email
    })

    try {
        const userProfile = await user.save()
        res.json({ message: "User has been successfully created.", user })
    } catch (error) {
        res.send("Error " + error)
    }
})

router.patch('/:id', async (req, res) => {
    try {
        const updates = req.body
        const user = await User.findByIdAndUpdate({ _id: req.params.id }, updates)
        if (!user) {
            res.json({ message: " User is not in our database.", user })
        }
        res.json({ message: "User profile successfully Updated.", user })
    } catch (error) {
        res.send("Error" + error)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndRemove({ _id: req.params.id })
        if (!user) {
            res.json({ message: " User is not in our database.", user })
        }
        res.json({ message: "User successfully deleted.", user })
    } catch (error) {
        res.send("Error" + error)
    }
})
module.exports = router