module.exports = (str, pattern, newSubStr) => escape(str).replace(new RegExp(escape(pattern), 'g'), newSubStr)
