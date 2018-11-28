var infoModel = require('./mongo').infoModel
var express = require('express')
var fs = require('fs')
var path = require('path')
var router = express.Router()
var formidable = require('formidable')

router.post('/api/register', (req, res, next) => {
  console.log('/api/register')
  let info = new infoModel.Info({
    name: req.body.name,
    contact: req.body.contact,
    needsAccom: req.body.needsAccom,
    demandsSingle: req.body.demandsSingle,
    date: req.body.date,
    // gender: req.body.gender,
    presTitle: req.body.presTitle,
    isOral: req.body.isOral,
    isInEnglish: req.body.isInEnglish,
    notes: req.body.notes
  })
  // core saving functionalities in mongoDB
  info.save((err, data) => {
    if (err) {
      onsole.log('POST failed in info.save: ' + err)
      res.send(err)
    } else {
      console.log('POST successfully in info.save: ' + Date())
      console.log('POST data: ' + data)
      res.send(data)
    }
  })
})

router.post('/api/search', (req, res, next) => {
  console.warn('/api/search')
  infoModel.Info.findOne({'name': req.body.name}, (err, data) => {
    if (err) {
      console.log('GET error: ' + err)
      res.send('GET: ' + err)
    } else {
      console.log('GET successful: ' + Date())
      console.log('GET data: ' + data)
      res.send(data)
    }
  })
})

router.post('/api/update', (req, res, next) => {
  console.warn('info.set() called')
  infoModel.Info.update({name: req.body.name}, {$set: {contact: req.body.contact,
      needsAccom: req.body.needsAccom,
      demandsSingle: req.body.demandsSingle,
      date: req.body.date,
      presTitle: req.body.presTitle,
      isOral: req.body.isOral,
      isInEnglish: req.body.isInEnglish,
      notes: req.body.notes}}, (err, data) => {
    if (err) {
      res.send('UPDATE error: ' + err)
      res.send(err)
    } else {
      console.log('UPDATE successful: ' + Date())
      console.log('UPDATE data: ' + data)
      res.send(data)
    }
  })
})

router.get('/api/getAll', (req, res, next) => {
  console.warn('/api/getAll')
  infoModel.Info.find({}, (err, data) => {
    if (err) {
      console.log('Retrieving error: ' + Date())
      res.send(err)
    } else {
      console.log('Info successfully retrieved: ' + Date())
      console.log(data + ': ' + data)
      res.send(data)
    }
  })
})

module.exports = router
