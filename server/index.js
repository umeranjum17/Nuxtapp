const cors = require("cors");
const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const mongoose = require("./database");
var bcrypt = require('bcryptjs')
const helmet = require("helmet");
const app = express()
var api = require('./routes/userRoutes')
const bodyParser = require('body-parser')
app.use(helmet());
app.enable("trust proxy");
app.set('secretKey', 'heavy');

app.use([cors(), bodyParser.json()]);
// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')

config.dev = process.env.NODE_ENV !== 'production'
const db = "mongodb://umer:<rpkcAS2kYvKwEzdF>@ds250607.mlab.com:38485/test-db";
app.use("/", api)
async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server
  const db = mongoose.connection;
  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
