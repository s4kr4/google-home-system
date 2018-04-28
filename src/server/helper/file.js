import fs from 'fs'
import csvSync from 'csv-parse/lib/sync'

module.exports = {
  readFile: path => {
    const data = fs.readFileSync(path, 'utf8')
    return csvSync(data)
  }
}

