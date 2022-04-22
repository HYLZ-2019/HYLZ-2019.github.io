var clicked_cnt = 0;

window.addEventListener("load", function(){
    var clickbox = document.getElementById("clickbox");
    clickbox.addEventListener("click", boxOnClick);
});

function updateStats(box, clicked_cnt){
    box.innerText = clicked_cnt;
}

function randomPosition(box){
    let r1 = Math.random() * 95;
    let r2 = Math.random() * 95;
    box.style.top = r1 + "%";
    box.style.left = r2 + "%";
}

function boxOnClick(){
    console.log("hello");
    clicked_cnt += 1;
    updateStats(clickbox, clicked_cnt);
    randomPosition(clickbox);
}