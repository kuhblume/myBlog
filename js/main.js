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
    xhr.open('GET',endpoint,true);
    xhr.send();
}

function doRequest(){
    requestAjax("http://localhost:3000/", function(response){
        console.log(response);
    });
}


