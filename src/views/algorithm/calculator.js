// // 实现一个支持四则运算的计算器
// // 如：calc('(3+2)*4') 得 20
// // 如：calc('((3 + 2 * 3)-1) * 2') 得 20
// function tokenizer (str) {
//   let strLength = str.length
//   let charIndex = 0 // 当前扫描指针指向的位置
//   let tokens = []
//   let operaterArr = ['+', '-', '*', '/']
//   let operandReg = /[0-9]/i
//   let currentLetter
//   while (charIndex < strLength) {
//     currentLetter = str[charIndex]
//     // 括号
//     if (currentLetter === '(' || currentLetter === ')') {
//       tokens.push({
//         type: 'bracket',
//         value: currentLetter
//       })
//       charIndex++
//       continue
//     }

//     // 操作符
//     if (operaterArr.includes(currentLetter)) {
//       tokens.push({
//         type: 'operater',
//         value: currentLetter
//       })
//       charIndex++
//       continue
//     }

//     // 操作数
//     if (operandReg.test(currentLetter)) {
//       let operandChar = ''
//       while (operandReg.test(currentLetter)) {
//         operandChar += currentLetter
//         charIndex++
//         currentLetter = str[charIndex]
//       }
//       tokens.push({
//         type: 'num',
//         value: operandChar
//       })
//       continue
//     }
//   }
//   return tokens
// }

// /*
// {
//   operate: '*',
//   num: [
//     {
//       operate: '+',
//       num: [3, 2]
//     },
//     4
//   ]
// }
// **/
// function parse (tokens) {
//   let operateTree = {}
//   let status = 0  // 匹配状态，0：找左操作数中，1：找操作符，2：找右操作符
//   let bracketFind = false
//   let left  // 左操作数
//   let right // 右操作数
//   let operate // 操作符
//   tokens.forEach(token => {
//     if(token.type === 'bracket') {
//       if(token.value === '(') {

//       } else if(token.value === ')') {

//       }
//     }
//     if(token.type === 'num') {

//     }
//     if(token.type === 'operater') {

//     }
//   })
//   return operateTree
// }

// function operate (operateTree) {
//   let {operate, [left, right]} = operateTree
//   if(typeof left === 'object') {
//     left = operate(left)
//   }
//   if(typeof right === 'object') {
//     right = operate(right)
//   }
//   switch (operater) {
//     case '+': return left + right
//     case '-': return left - right
//     case '*': return left * right
//     case '/': return left / right
//   }
// }

// function calc (str) {
//   let tokens = tokenizer(str)
//   let operateTree = parse(tokens)
//   return operate(operateTree)
// }

// console.log(calc('(3+2)*4'))
