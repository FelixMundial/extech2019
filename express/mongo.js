// ENV required
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/extech2019', { useNewUrlParser: true })

var mongodb = mongoose.connection
mongodb.once('error', () => {
  console.log('mongoose.connection: error!')
})
mongodb.once('open', () => {
  console.log('mongoose.connection: open/established...')
})

// schema
var infoSchema = mongoose.Schema({
  name: String,
  contact: String,
  needsAccom: Boolean,
  demandsSingle: Boolean,
  date: String,
  // gender: String,
  presTitle: String,
  isOral: Boolean,
  isInEnglish: Boolean,
  notes: String
})

// model
var infoModel = {
  Info: mongoose.model('main', infoSchema)
}

module.exports = {
  infoModel
}
