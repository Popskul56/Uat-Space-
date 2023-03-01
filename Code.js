//empty function; code will be added later
function startButtonClick(){}

//empty function; code will be added later
function startButtonClick(){}

//this is our new countdown function
function runTimer( countdownElem){
     //traks the current countdown time
     var currTime = 50;

     //tracks the current timeout
     var timeout = 0;

     //this value will not change and creates the 5 seond delay
     var timeoutIncrement = 5000;
     
    for(var counter = 0;counter < 10; counter++){
        //begin of the countdown
        setTimeout(function(){
            if(currTime == 0){
                alert("Takeoff!");
                countdownElem.innerHTML = "Launch successful!";
            }
            else if (curTime <25){
                countdownElem.innerHTML = "Warning Less than 1/2 way to launch, time left = " + currTime;
            }
            else{
                countdownElem.innerHTML = currTime;
            }

            currTime = currTime - 5;
        }, timeout);
        timeout = timeout + timeoutIncrement;
    }
}