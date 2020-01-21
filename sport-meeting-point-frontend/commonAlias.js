const path = require('path')

/*

IMPORTANT!!!!!

When you add new items to the list,
do not forget to update the file
jsconfig.json

*/

const commonAlias = {
  restApi: path.join(__dirname, './src/rest'),
  utils: path.join(__dirname, './src/utils'),
  data: path.join(__dirname, './src/redux')
}

module.exports = commonAlias
