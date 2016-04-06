var titleCase = require('titlecase')
  , trim = require('trim')

module.exports = function (slug) {
  return trim(titleCase(slug.replace(/[-_]+/g, ' ').replace(/([\.,;])/g, '$1 ')))
}
