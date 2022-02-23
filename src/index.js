module.exports = function check(str, bracketsConfig) {
  const openBrackets = ['(', '{', '[', '1', '3', '5']
  const bracketsPair = {
    [')']: '(',
    ['}']: '{',
    [']']: '[',
    ['2']: '1',
    ['4']: '3',
    ['6']: '5'
  }

  const stack = []

  for(let i = 0; i < str.length; i++) {
    let current = str[i]

    if(openBrackets.includes(current) || (current === '7' || current === '8' || current === '|') && !stack.includes(current)) {
      stack.push(current)
    } else {
      if (stack.length === 0) return false

      let top = stack[stack.length - 1]

      if(bracketsPair[current] === top || (current === '7' && top === '7' || current === '8' && top === '8' || current === '|' && top === '|')) {
        stack.pop()
      } else {
        return  false
      }
    }
  }

  return stack.length === 0
}