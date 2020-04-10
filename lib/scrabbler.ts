const makeScrabbleText = (input: string): string => {
  const regex = /[a-zA-Z]/gm
  const replaced: string[] = []
  let result = input
  let m

  while ((m = regex.exec(input)) !== null) {
    if (m.index === regex.lastIndex) {
      regex.lastIndex++
    }

    for (const match of m) {
      const lowercaseMatch = match.toLowerCase()
      if (replaced.indexOf(lowercaseMatch) >= 0) continue

      replaced.push(lowercaseMatch)

      const emoji = `:-${lowercaseMatch}:`
      // replace uppercase first
      result = result.split(match.toUpperCase()).join(lowercaseMatch)
      // then replace lowercase with emoji
      result = result.split(lowercaseMatch).join(emoji)
    }
  }

  result = result.split(' ').join(`:-blank:`)

  return result
}

export { makeScrabbleText }
