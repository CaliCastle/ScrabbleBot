import 'jest'
import { makeScrabbleText } from '../lib/scrabbler'

describe('Scrabbler', () => {
  test('scrabbles a word correctly', () => {
    const input = 'intErEsTinG'
    const result = makeScrabbleText(input)
    expect(result).toEqual(
      ':-i::-n::-t::-e::-r::-e::-s::-t::-i::-n::-g:'
    )
  })

  test('scrabbles a sentence correctly', () => {
    const input = 'ScrAbblE lIke A boSs'
    const result = makeScrabbleText(input)
    expect(result).toEqual(
      ':-s::-c::-r::-a::-b::-b::-l::-e::-blank::-l::-i::-k::-e::-blank::-a::-blank::-b::-o::-s::-s:'
    )
  })

  test('only scrabbles alphabetically', () => {
    const input = '-!2ScrAbblE 3lIke A boSs@04123854'
    const result = makeScrabbleText(input)
    expect(result).toEqual(
      '-!2:-s::-c::-r::-a::-b::-b::-l::-e::-blank:3:-l::-i::-k::-e::-blank::-a::-blank::-b::-o::-s::-s:@04123854'
    )
  })
})
