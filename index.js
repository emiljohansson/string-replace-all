'use strict'

module.exports = (str, pattern, newSubStr) => str.replace(new RegExp(pattern, 'g'), newSubStr)
