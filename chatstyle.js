// let chatCount = 0;
function output(val, person) {

    const field = document.getElementById('field');
    field.scroll(0, field.scrollHeight - field.clientHeight);

    const ul = document.getElementById('chat-ul');
    const li = document.createElement('li');

    const div = document.createElement('div');
    div.textContent = val;

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


const chatBtn = document.getElementById('chat-button');

function chatbtn() {
    const chatinput = document.getElementById('chat-input');
    const inputText = chatinput.value
    // 自分の質問を入れる
    output(inputText, 'me');
    // テキストボックスを空にする
    chatinput.value = '';

    reply(inputText)

    // switch(chatCount) {
    //     case 2:
    //         output('Hi, ' + inputText.value + ' !', 'other');
    //         setTimeout( ()=> {
    //             output(chat[2], 'other');
    //         }, 2000);
    //         break;

    //     case 4:
    //         output(chat[3][Math.floor(Math.random() * chat[3].length)], 'other');
    //         break;

    //     default:
    //         output(inputText.value, 'other');
    //         break;
    // }
}
const API_KEY = 'APIキー';
const URL = "https://api.openai.com/v1/chat/completions";
 
let messages = [{
    role: "system",
    content: "あなたは学校の先生です。"
}]
async function reply(text) {
    // let text = document.getElementById("request_text").value;
    
    messages.push({
        "role": "user",
        "content": text
    })
    try {
        const response = await axios.post(
            URL, {
                model: "gpt-3.5-turbo",
                messages: messages,
                max_tokens: 500,
            }, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${API_KEY}`,
                },
            }
        );
        var chatgpt_response = response.data.choices[0].message.content;
        console.log(response)
        console.log("response.data");
        console.log(response.data);
        dataToDatabase(response.data)

        messages.push({
            "role": "assistant",
            "content": chatgpt_response
        })
        console.log("messages")
        console.log(messages)
        // $("#response_text").val(chatgpt_response);
        output(chatgpt_response, 'other');
    } catch (error) {
        console.log(error);
    }
}

function dataToDatabase(data) {
    // 質問時間を取得する
    let unixtime = data.created
    // unixタイム(1687398129)から「2023/6/22 10:42:09」の形に変換
    let created_at = unixToDate(unixtime)
}

function unixToDate(unixtime) {
    // Dateがミリ秒なので1000倍が必要
    let dateTime = new Date(unixtime * 1000);
    console.log(dateTime.toLocaleString());
    let jpTime = dateTime.toLocaleString()
    return jpTime
}