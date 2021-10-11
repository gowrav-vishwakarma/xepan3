const fs = require('fs')
const path = require('path')

const express = require('express')
const router = express.Router()

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('pong')
  next()
})

router.get('/tools/list', function (req, res, next) {
  const toolList = fs.readFileSync(
    path.resolve(
      path.join(__dirname, '../../../../../../assets', 'developer-tools.json')
    )
  )
  res.send(JSON.parse(toolList))
})

router.get('/tools/recompile', function (req, res, next) {
  const toolsJson = {}

  fs.readdirSync(path.join(__dirname, '..', '..', 'developer-tools'), {
    flag: 'rs',
  })
    .filter((file) => {
      return file.indexOf('.') !== 0 && file.slice(-3) === '.js'
    })
    .forEach((file) => {
      const p = path.join(__dirname, '..', '..', 'developer-tools', file)
      delete require.cache[require.resolve(p)]
      const tool = require(p)
      console.log('Doing ', file, tool)
      if (!toolsJson[tool.toolBlock]) toolsJson[tool.toolBlock] = { tools: [] }
      toolsJson[tool.toolBlock].tools.push(tool)
    })

  fs.writeFileSync(
    path.resolve(
      path.join(__dirname, '../../../../../../assets', 'developer-tools.json')
    ),
    JSON.stringify(toolsJson)
  )
  res.send('Done')
  next()
})

module.exports = router
