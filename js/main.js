var words, timer, speed, index;

$("#stop-reading").hide();

function stop(){
    intro = "Copy something bellow and I will make you read it faster.";
    $("#word-container center").html(intro);
    clearInterval(timer);
    toggle();
}

function toggle(){
    $("#start-reading").toggle(200);
    $("#stop-reading").toggle(200);
    $("#text-to-read").toggle(200);
}

$("#start-reading").click(function(){
    toggle();
    wpm = $("#wpm").val();
    speed = 60*1000/wpm;
    index = 0;
    words = $("#text-to-read").val().replace(/,/g," ").replace(/\./g," ").split(" ");
    timer = setInterval(function(){
        if (index >= words.length) {
            stop();
        } else {
            word = words[index];
            if (word === "" || word === " ") word = "&nbsp;";
            $("#word-container center").html(word);
            index++;
        }
    }, speed);

});

$("#stop-reading").click(function(){
    stop();
});