import test from 'ava'
import replaceAll from './'

test('path', t => {
  const expected = 'path-to-file'
  const actual = replaceAll('path/to/file', '/', '-')
  t.is(actual, expected)
})

test('remove spaces', t => {
  const expected = 'Thequickbrownfoxjumpsoverthelazydog'
  const actual = replaceAll('The quick brown fox jumps over the lazy dog', ' ', '')
  t.is(actual, expected)
})

test('special characters', t => {
  const expected = 'The quick brown fox jumps!'
  const actual = replaceAll('The quick brown fox jumps?', '?', '!')
  t.is(actual, expected)
})
