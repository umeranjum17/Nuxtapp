var express = require('express')
var router = express.Router()
var user = require('../models/User')
// router.use((req, res, next) => {
//     Object.setPrototypeOf(req, app.request)
//     Object.setPrototypeOf(res, app.response)
//     req.res = res
//     res.req = req
//     next()
// })
// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now())
    next()
})
// define the home page route
router.get('/api/signUP', function (req, res) {
    let u = new user
    u.name = "umer";
    u.email = "umer@gmail.com";
    u.password = "sjdflksjfdlj"
    u.save(u)
    console.log("httitng")
    res.send('Birds home page')
})
// define the about route
router.get('/api/about', function (req, res) {
    res.send('About birds')
})

module.exports = router