const escapeRegExp = str => str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1')

module.exports = (str, pattern, newSubStr) => str.replace(new RegExp(escapeRegExp(pattern), 'g'), newSubStr)
