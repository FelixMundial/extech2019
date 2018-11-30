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
      console.log('POST failed in info.save: ' + err)
      res.send(err)
    } else {
      console.log('POST successfully in info.save: ' + Date())
      console.log('POST data: ')
      console.log(data)
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
      console.log('GET data: ')
      console.log(data)
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
      console.log('UPDATE data: ')
      console.log(data)
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
      console.log('GETALL: ')
      console.log(data)
      res.send(data)
    }
  })
})

router.get('/api/download', (req, res, next) => {
  console.warn('/api/download')
  // var outputName = req.query.name
  var filePath = path.join(__dirname, '../dist/static/files/' + 'demo' + '.docx')
  var stats = fs.statSync(filePath)
  var isFile = stats.isFile()
  var docxType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  // var docType = 'application/msword'
  if (isFile) {
    res.set({
      'Content-Type': docxType,
      'Content-Disposition': 'attachment; filename=' + 'demo' + '.docx',
      'Content-Length': stats.size
    })
    fs.createReadStream(filePath).pipe(res)
  } else {
    res.end(404)
  }
})

router.post('/api/upload', (req, res, next) => {
  var FILE_DIR = '/fileRcv'
  var form = new formidable.IncomingForm()
  form.encoding = 'utf-8'
  form.uploadDir = path.join(__dirname, '../dist' + FILE_DIR)
  form.keepExtensions = true
  form.parse(req, (err, fields, files) => {
    var parsedFile = files.file
    if (err) {
      res.json({
        status: '3',
        msg: 'Parsing failure when uploading',
        result: ''
      })
    }
    var docName = parsedFile.name
    var docPath = form.uploadDir + '/' + docName
    // Uploading file to the final path
    fs.rename(parsedFile.path, docPath, (err) => {
      if (err) {
        console.log('upload err')
        res.json({
          status: '1',
          msg: 'Document failed to upload'
        })
      } else {
        console.log('upload ready')
        // json set in res.body or res.data
        res.json({
          status: '0',
          msg: 'Document successfully uploaded',
          result: {
            data: FILE_DIR + '/' + docName
          }
        })
      }
    })
  })
})

module.exports = router
