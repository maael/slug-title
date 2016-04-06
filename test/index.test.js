var assert = require('assert')
  , slugTitle = require('../index.js')

describe('slug title', function () {
  describe('generate title from a string', function () {
    it('should capitalise words in slug', function () {
      assert(slugTitle('hello'), 'Hello')  
    })

    it('should replace \'-\' with a space', function () {
      assert(slugTitle('hello-world'), 'Hello World')
    })

    it('should replace \'_\' with a space', function () {
      assert(slugTitle('hello_world'), 'Hello World')
    })
    
    it('should strip trailing \'-\'', function () {
      assert(slugTitle('hello-'), 'Hello')
    })

    it('should strip trailing \'_\'', function () {
      assert(slugTitle('hello_'), 'Hello')
    })
  })
})
