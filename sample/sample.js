var text = '以下は、JavaScriptで「こんにちは」とコンソールに表示するプログラム例です。```console.log("こんにちは");```コンソールに表示される文字は、ダブルクオーテーションで囲む必要があります。また、JavaScriptではプログラムの最後にセミコロンを付けるのが一般的です。```<html>("こんにちは");</html>```'

// こんにちは、生徒さん。
// 以下は、JSを使って「こんにちは」と表示するプログラムの例です：
// ```js
// console.log("こんにちは");
// ```
// ブラウザの場合、HTMLファイルに以下のようにscriptタグを書き加えることで「こんにちは」というメッセージを表示できます：

// ```html
// <!DOCTYPE html>
// <html>
//   <head>
//     <meta charset="UTF-8">
//     <title>Hello World</title>
//   </head>
//   <body>
//     <p id="greeting"></p>
//     <script>
//       document.getElementById("greeting").innerHTML = "こんにちは";
//     </script>
//   </body>
// </html>
// ```

// このように、JSを使えばブラウザ上で動的なコンテンツを表示することができます。'
splitCode(text)
function splitCode(text) {
            var splitText = text.split('```');
            var splitCodeText = '';
    for (var i = 0; i < splitText.length;i++) {
                if (i % 2 == 0) {
                    splitCodeText += splitText[i]
                }
    }
    console.log(splitCodeText)
            return splitCodeText
        }

function cutCode(str) {
    // splitにて、回答結果のみ切り取り
var result = str.split('```');
 
// 結果を表示
    console.log(result.length)
    console.log('result')
    console.log(result);  // ["特異な科目", "英語"]と表示される
    console.log('result[1]')
    console.log(result[1]);  // "英語"と表示される
    console.log(typeof(result[1]))
    console.log('result[0]')
    console.log(result[0]); 
    console.log('result[2]')
    console.log(result[2]); 
    console.log('result[3]')
    console.log(result[3]);
console.log(typeof(result[3]))    
}

function createUuid() {
    
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(a) {
      let r = (new Date().getTime() + Math.random() * 16)%16 | 0, v = a == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
   });

}

console.log(createUuid());

// エスケープ処理
var gptResponse = 'コードです。 ```javascript console.log("hello"); ``` このコードを'
// const userEscapedString = userQuestion
//                 .replace(/"/g, '\\"')
//                 .replace(/'/g, "\\'")
//                 .replace(/`/g, '\\`')
//                 .replace(/\n/g, "\\n")
//                 .replace(/\r/g, "\\r")
//                 .replace(/\t/g, "\\t");
            const gptEscapedString = gptResponse
                .replace(/"/g, '\\"')
                .replace(/'/g, "\\'")
                .replace(/`/g, '\\`')
                .replace(/\n/g, "\\n")
                .replace(/\r/g, "\\r")
                .replace(/\t/g, "\\t");
console.log(gptEscapedString)
const codeBlock = document.createElement('pre');
codeBlock.textContent = `// JavaScriptコードの例
function sayHello() {
    console.log('Hello');
}
sayHello();`;

document.body.appendChild(codeBlock);

function output(text, person) {

            const field = document.getElementById('field');
            field.scroll(0, field.scrollHeight - field.clientHeight);

            const ul = document.getElementById('chat-ul');
            const li = document.createElement('li');

            const div = document.createElement('div');
    
            div.textContent = text;

            if (person === 'me') {
                div.classList.add('chat-right');
                li.classList.add('right');
                ul.appendChild(li);
                li.appendChild(div);
            } else if (person === 'other') {
                // chatBtn.disabled = true;
                // chatBtn.disabled = false;
                li.classList.add('left');
                div.classList.add('chat-left');
                ul.appendChild(li);
                li.appendChild(div);
            }
        }






const ul = document.getElementById('list');
const li = document.createElement('pre');
var text = `// JavaScriptコードの例
        function sayHello() {
            console.log('Hello');
        }
        sayHello();`

const code = document.createElement('code');
console.log(text)
code.textContent = text;

    code.classList.add('language-javascript', 'chat-right');
    li.classList.add('right');
    ul.appendChild(li);
    li.appendChild(code);

    // function displayCode(code) {
    //   const pre = document.createElement('pre');
    //   const codeElement = document.createElement('code');
    //   codeElement.textContent = code;
    //   pre.appendChild(codeElement);
    //   document.body.appendChild(pre);
    // }

    // const code = `
    // function helloWorld() {
    //   console.log('Hello, World!');
    // }

    // helloWorld();
    // `;

    // displayCode(code);

    // const btn = document.getElementById('button'); // button要素取得
    // const txt = document.getElementById('text').textContent; // テキスト取得

    // btn.addEventListener('click', () => { // ボタンをクリックしたら
    //   navigator.clipboard.writeText(txt); // ★ テキストをクリップボードに書き込み（＝コピー）

    //   btn.innerHTML = 'OK!'; // ボタンの文字変更
    //   setTimeout(() => (btn.innerHTML = 'COPY!'), 1000); // ボタンの文字を戻す
    // });