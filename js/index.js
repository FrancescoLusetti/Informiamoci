let data;
let index = 0;

$(document).ready(function(){
    loadJSON();
    $("#next").click(()=>{
        goForward()
    });
    $("#load").click(()=>{
        loadJSON()
    });
    $("#previous").click(()=>{
        goBack()
    });
    $("#start").click(()=>{
        startTimer()
    });
    $("#stop").click(()=>{
        stopTimer()
    });
    $("#reset").click(()=>{
        resetTimer()
    });
});

function loadJSON(){
    $.getJSON("question.json",function(json){
        data = json;
    }).done(()=>{
        writeQuestion();
    }).fail((jqxhr, textStatus, error)=>{
        let err = textStatus + ", " + error;
        console.log( "Request Failed: " + err );
    });
}

function writeQuestion(){
    $("#title").html(data[index].title);
    $("#question").html(data[index].question);
}

function goBack(){
    if(index<=0) index = data.length-1;
    else index--;
    writeQuestion();
}

function goForward() {
    if(index>=data.length-1) index = 0;
    else index++;
    writeQuestion();
}

let duration = 60 * 2;
let timer = duration, minutes, seconds;
let elapsed = false;
let x = null;

function startTimer() {
    if(x==null){
        x=setInterval( ()=>{
            if (timer >0 && !elapsed) {
                timer--;
            }
            else
            {
                elapsed=true;
                timer++;
                $("#time").addClass("text-danger");
            }

            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            $("#time").text(minutes + ":" + seconds);
        }, 1000);
    }
}

function stopTimer() {
    if(x!=null)clearInterval(x);
    x=null;
}

function resetTimer() {
    elapsed = false;
    timer = duration;
    if(x!=null)clearInterval(x);
    x=null;

    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    $("#time").removeClass("text-danger").text(minutes + ":" + seconds);
}
