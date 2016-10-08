import test from 'ava'
import replaceAll from './'

test(t => {
  const expected = 'path-to-file'
  const actual = replaceAll('path/to/file', '/', '-')
  t.is(actual, expected)
})
