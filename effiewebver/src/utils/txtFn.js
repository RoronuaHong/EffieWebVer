// 字符串加密
const toCode = str => {  // 加密字符串

  // 定义密钥，36个字母和数字
  let key = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let len = key.length;  // 获取密钥的长度
  let a = key.split("");  // 把密钥字符串转换为字符数组
  let s = "", b, b1, b2, b3;  // 定义临时变量

  for (let i = 0; i <str.length; i ++) {  // 遍历字符串
      b = str.charCodeAt(i);  // 逐个提取每个字符，并获取Unicode编码值

      b1 = b % len;  // 求Unicode编码值得余数

      b = (b - b1) / len;  // 求最大倍数

      b2 = b % len;  // 求最大倍数的于是

      b = (b - b2) / len;  // 求最大倍数

      b3 = b % len;  // 求最大倍数的余数

      s += a[b3] + a[b2] + a[b1];  // 根据余数值映射到密钥中对应下标位置的字符
  }

  return s;  // 返回这些映射的字符
}


// 字符串解密
const fromCode = str => {

  // 定义密钥，36个字母和数字
  let key = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let len = key.length;  // 获取密钥的长度
  let b, b1, b2, b3, d = 0, s;  // 定义临时变量

  s = new Array(Math.floor(str.length / 3));  // 计算加密字符串包含的字符数，并定义数组
  b = s.length;  // 获取数组的长度

  for(let i = 0; i < b; i ++) {  // 以数组的长度循环次数，遍历加密字符串
      b1 = key.indexOf(str.charAt(d));  // 截取周期内第一个字符串，计算在密钥中的下标值

      d++;
      b2 = key.indexOf(str.charAt(d));  // 截取周期内第二个字符串，计算在密钥中的下标值

      d++;
      b3 = key.indexOf(str.charAt(d));  // 截取周期内第三个字符串，计算在密钥中的下标值

      d++;
      s[i] = b1 * len * len + b2 * len + b3  // 利用下标值，反推被加密字符的Unicode编码值
  }

  b = eval("String.fromCharCode(" + s.join(',') + ")");  // 用fromCharCode()算出字符串

  // 返回被解密的字符串
  return b;  
}


// /**加密 */
// function toCode(Text) {
//   let output = '',
//       alterText = new Array(),
//       varCost = new Array(),
//       TextSize = Text.length;

//   for(let i = 0; i < TextSize; i++) {
//     let idea = Math.round(Math.random() * 111) + 77;
//     alterText[i] = Text.charCodeAt(i) + idea;
//     varCost[i] = idea;
//   }

//   for(let i = 0; i < TextSize; i++) {
//     output += String.fromCharCode(alterText[i], varCost[i]);
//   }
//   //text1.value = output;
//   return output;
// }


// /**解密 */
// function fromCode(Text) {
//   let output = '', alterText1 = new Array(), varCost1 = new Array(), TextSize = Text.length;

//   for(let i = 0; i < TextSize; i++) {
//     alterText1[i] = Text.charCodeAt(i);
//     varCost1[i] = Text.charCodeAt(i + 1);
//   }

//   for(let i = 0; i < TextSize; i = i + 2) {
//     output += String.fromCharCode(alterText1[i] - varCost1[i]);
//   }

//   //text1.value = output;
//   return output;
// }


const downloadJsonOrTxt = (filename, text) => {
  let pom = document.createElement('a')
  let txt = toCode(text)

  pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(txt))

  pom.setAttribute('download', filename)

  if(document.createEvent) {
      let event = document.createEvent('MouseEvents')

      event.initEvent('click', true, true)
      pom.dispatchEvent(event)
  } else {
      pom.click()
  }
}


const loadJsonOrTxt = () => {
  return new Promise((resolve, reject) => {
    let fileList = document.getElementById('file').files
    let nameStr = ''

    for(let i = 0; i < fileList.length; i++) {
      nameStr += `${i === 0 ? '' : ', '}${fileList[i].name}`

      let reader = new FileReader()

      reader.readAsText(fileList[i], "UTF-8")

      reader.onload = e => {
        let content = e.target.result

        document.getElementById('file').value = ''

        resolve(fromCode(content))
      }
    }
  })
}


export {
  toCode,
  fromCode,
  loadJsonOrTxt,
  downloadJsonOrTxt
}
