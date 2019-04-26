let tabCase = document.getElementsByClassName('tab-case');
let tabs=tabCase[0].children;
let radios = document.getElementsByName('radio');
// let tabLocate=['0','-400%','-300%','-200%','-100%'];
// let tabLocate=['0','-100%','-100%','100%','100%'];

//本当なら左右にスライドさせたかったが高さがtab内の高さがばらばらだとスライドバーが高さの差だけおかしくなる
//見えない要素を左側におくと高さが可変状態？になる
//右下はhiddenでもシークバーで無理やり伸ばされるけど左上の見えない要素はシークバーで延ばされないっぽい
let tabLocate=['0','-100%','-100%','-100%','-100%'];


function right() {
    // tabs[0].style.zIndex--;
    tabLocate.unshift(tabLocate.pop());
    // tabs[0].style.zIndex--;
    for (let i = 0; i < tabLocate.length; i++) {
        tabs[i].style.left=tabLocate[i];
    }
    window.scrollTo(0,0);
    updateFooter()
}
function left() {
    // tabs[0].style.zIndex--;
    tabLocate.push(tabLocate.shift());
    // tabs[0].style.zIndex--;
    for (let i = 0; i < tabLocate.length; i++) {
        tabs[i].style.left=tabLocate[i];
    }
    window.scrollTo(0,0);
    updateFooter();
}
function updateFooter() {
    let loc=tabLocate.indexOf('0');
    radios[loc].checked=true;
}

let radioCase=document.getElementById('radioCase');
function tabSelect(radioValue) {
    for (let i = 0; i < radioCase.children.length; i++) {
        if (tabLocate[radioValue]==='0'){
            break;
        } else {
            right();
        }
    }
}

document.onkeydown = keyInfo =>{//ここの原理がよくわからない。=>イベントハンドラ-onkeydown-キー入力をキャッチできる。onclickとかの仲間
    switch (keyInfo.key) {
        case "ArrowRight":
            right();
            break;
        case "ArrowLeft":
            left();
            break
    }
};



// var xhr = new XMLHttpRequest();
// var url = 'http://localhost:3000/';
//
// const handler = () => {
//     // コンソールに出力
//     console.log(xhr.responseText)
// };
//
// const getRequest = () => {
//     xhr.open('GET', url);
//     xhr.onloadend = handler;
//     xhr.send()
// };
//
// document.addEventListener('DOMContentLoaded', () => {
//     getRequest()
// });


function requestAjax(endpoint, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if (this.readyState==4 && this.status==200) {
            callback(this.response);
        }
    };
    xhr.responseType = 'json';
    xhr.open('GET' ,endpoint,true);
    xhr.send();
}

let testData;
function doRequest(){
    // var xhr = new XMLHttpRequest();
    //
    // xhr.onreadystatechange = function() {
    //     if (xhr.readyState === 4) {
    //         if (xhr.status === 200) {
    //             console.log(xhr);
    //             // console.log(xhr.response);
    //         } else {
    //             console.log("status = " + xhr.status);
    //         }
    //     }
    // };
    //
    // xhr.open("GET", "http://localhost:3000");
    // xhr.responseType = "json";
    // xhr.send();

    const request = new XMLHttpRequest();
    // request.open("GET", `http://localhost:3000/get-all`);
    request.open("GET", `https://node-db-kuhblume.herokuapp.com/get-all`);
    request.addEventListener("load", (event) => {
        console.log(event.target.status); // => 200
        console.log(event.target.responseText); // => "body"
        console.log(event.target); // => "{...}"
        testData=event.target.responseText;
    });
    request.send();
}

function doReq() {
    // requestAjax("http://localhost:3000/test", function(response){
    //     console.log(response);
    //     alert(response);
    // });

    //動いたpost
    // let xhr = new XMLHttpRequest();
    // xhr.onreadystatechange = function () {
    //     if (xhr.readyState === 4){//通信が完了したか
    //         if (xhr.status === 200){//通信が成功したか
    //             console.log(xhr.responseText);
    //         } else{//xhr.statusが200以外=>通信に失敗した場合
    //
    //         }
    //     } else{//xhr.readyStateが4以外=>通信中
    //
    //     }
    // };
    // xhr.open('GET','http://localhost:3000',true);
    // xhr.send(null);

//     var data = { foo: 'abc', bar: 100 }; // POSTメソッドで送信するデータ
//
//
//     var xmlHttpRequest = new XMLHttpRequest();
//     xmlHttpRequest.onreadystatechange = function()
//     {
//         var READYSTATE_COMPLETED = 4;
//         var HTTP_STATUS_OK = 200;
//
//         if( this.readyState == READYSTATE_COMPLETED
//             && this.status == HTTP_STATUS_OK )
//         {
//             // レスポンスの表示
//             console.log( this.responseText );
//         }
//     };
//
//     xmlHttpRequest.open( 'POST', 'http://localhost:3000/test' );
//
// // サーバに対して解析方法を指定する
//     xmlHttpRequest.setRequestHeader( 'Content-Type', 'application/x-www-form-urlencoded' );
//
// // データをリクエスト ボディに含めて送信する
//     xmlHttpRequest.send( data );


    let XHR = new XMLHttpRequest();
    // openメソッドにPOSTを指定して送信先のURLを指定
    XHR.open("POST", 'http://localhost:3000/add', true);

    // XHR.onreadystatechange = function() {
    //     if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
    //         // 送信に成功した時の処理
    //         console.log(this.statusText);
    //     }
    // };
    //
    // // サーバの応答をonreadystatechangeイベントで検出して正常終了したらデータを取得する
    // XHR.onreadystatechange = function(){
    //     if(XHR.readyState == 4 && XHR.status == 200){
    //         // POST送信した結果を表示する
    //         console.log(XHR.responseText);
    //     }
    // };

    // sendメソッドにデータを渡して送信
    // XHR.send('postFromHtml=iiii&test1=iaia'); // POSTメソッドで送信するデータ);
    XHR.send('title=タイトル&date=1945-08-15&body=endDay&tag=1&is_shown=1'); // POSTメソッドで送信するデータ);

    // // サーバの応答をonreadystatechangeイベントで検出して正常終了したらデータを取得する
    // XHR.onreadystatechange = function(){
    //     if(XHR.readyState == 4 && XHR.status == 200){
    //         // POST送信した結果を表示する
    //         console.log(XHR.responseText);
    //     }
    // };

    XHR.addEventListener("load", (event) => {
        console.log(event.target.status); // => 200
        console.log(event.target.responseText); // => "body"
        console.log(event.target); // => "{...}"
    });
}

// let title = document.forms.post.title.value;
//綺麗なhtmlから綺麗にjs取得できたよねうれしい


//日付取得
let date = new Date();
let time = {
    fullYear:date.getFullYear(),
    month:("0"+(date.getMonth()+1)).slice(-2),
    date:("0"+date.getDate()).slice(-2),
};
document.forms.post.date.value=time.fullYear+'-'+time.month+'-'+time.date;


function send() {
    let request = {
        title:document.forms.post.title.value,
        date:document.forms.post.date.value,
        body:document.forms.post.body.value,
        tag:document.forms.post.tag.value,
        is_shown:document.forms.post.is_shown.value,
    };
    console.log(request);

    let XHR = new XMLHttpRequest();
    // XHR.open("POST", 'http://localhost:3000/add', true);
    XHR.open("POST", 'https://node-db-kuhblume.herokuapp.com/add', true);
    XHR.send(`title=${request.title}&date=${request.date}&body=${request.body}&tag=${request.tag}&is_shown=${request.is_shown}`);
    //応答確認なしのpost
}


let out = document.getElementById('output');
function showData() {
    let json = JSON.parse(testData);
    let part ='';
    // console.log(json[0]);
    json.forEach(post=>{
        part+=`<ul><li>${post.id}</li><li>${post.title}</li><li>${post.date}</li><li>${post.body}</li><li>${post.tag}</li></ul>`;
    });
    out.innerHTML=part;
}


function runEval() {
    let eval_body = document.forms.eval.eval.value;
    try {
        eval(eval_body);
        console.log('run : '+eval_body);
    }catch (e) {
        console.log('%cEval Error =>\n','background-color: #FFCCCC;',e);
    }
}