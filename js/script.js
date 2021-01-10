let count = 0;

function incPercent() {
    if (count > 100) {count -= 100};
    console.log("Стало "+count+"%");
    $(".progress-bar").width(count+'%');
    $('.progress-bar').text(count+'%');
}

function addOnePercent() {
    console.log("Нажали на кнопку +1%");
    count += 1;
    incPercent();
}

function addThreePercent() {
    console.log("Нажали на кнопку +3%");
    count += 3;
    incPercent();
}

function addSevenPercent() {
    console.log("Нажали на кнопку +7%");
    count += 7;
    incPercent();
}

function init() { 
    $(".js-1per").click(addOnePercent);
    $(".js-3per").click(addThreePercent);
    $(".js-7per").click(addSevenPercent);
    console.log("Скрипт подгрузился");
    }

$(document).ready(init); 