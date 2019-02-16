let tabCase = document.getElementsByClassName('tab-case');
let tabs=[];
for(let i = 0; i < tabCase.length; i++){
    // /* getElementsTagNameを使う*/
    // findDiv1 = hoge[i].getElementsByTagName('div');
    // /* childrenを使って要素の番号を指定する*/
    // findDiv2 = hoge[i].children[1];

    // tabCase[i].getElementsByClassName('div').disabled=true;
}


document.getElementById("a").onclick = function() {
    console.log(tabCase[0].children);
    tabCase[0].children[0].style.left='100%';
    tabCase[0].children[1].style.left='0';
    // tabCase[0].getElementsByClassName('tag')[0].disabled=true;
    // document.getElementsByClassName('tag')[0].style.color="white";
};