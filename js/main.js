let tabCase = document.getElementsByClassName('tab-case');
let tabs=tabCase[0].children;

let tabLocate=['0','-400%','-300%','-200%','-100%'];
//
// document.getElementById("left").onclick = function() {
//     console.log(tabCase[0].children[3].style.left);
//     tabCase[0].children[0].style.left='100%';
//     tabCase[0].children[1].style.left='0';
//     tabLocate.push(tabLocate.shift());
//
//     console.log(tabLocate);
// };

function left() {
    tabLocate.unshift(tabLocate.pop());
    for (let i = 0; i < tabLocate.length; i++) {
        tabs[i].style.left=tabLocate[i];
    }
    window.scrollTo(0,0);
}
function right() {
    tabLocate.push(tabLocate.shift());
    for (let i = 0; i < tabLocate.length; i++) {
        tabs[i].style.left=tabLocate[i];
    }
    window.scrollTo(0,0);
}