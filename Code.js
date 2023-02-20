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
     
     //begin of the countdown
     setTimeout(function(){
        countdownElem.innerHTML = currTime;
        currTime = currTime - 5;
    }, timeout);
    timeout = timeout + timeoutIncrement;

    setTimeout(function(){
        countdownElem.innerHTML = currTime;
        currTime = currTime - 5;
    }, timeout);
    timeout = timeout + timeoutIncrement;

    setTimeout(function(){
        countdownElem.innerHTML = currTime;
        currTime = currTime - 5;
    }, timeout);
    timeout = timeout + timeoutIncrement;

    setTimeout(function(){
        countdownElem.innerHTML = currTime;
        currTime = currTime - 5;
    }, timeout);
    timeout = timeout + timeoutIncrement;

    setTimeout(function(){
        countdownElem.innerHTML = currTime;
        currTime = currTime - 5;
    }, timeout);
    timeout = timeout + timeoutIncrement;

    setTimeout(function(){
        countdownElem.innerHTML = currTime;
        currTime = currTime - 5;
    }, timeout);
    timeout = timeout + timeoutIncrement;

    setTimeout(function(){
        countdownElem.innerHTML = currTime;
        currTime = currTime - 5;
    }, timeout);
    timeout = timeout + timeoutIncrement;

    setTimeout(function(){
        countdownElem.innerHTML = currTime;
        currTime = currTime - 5;
    }, timeout);
    timeout = timeout + timeoutIncrement;

    setTimeout(function(){
        countdownElem.innerHTML = currTime;
        currTime = currTime - 5;
    }, timeout);
    timeout = timeout + timeoutIncrement;

    setTimeout(function(){
        countdownElem.innerHTML = currTime;
        currTime = currTime - 5;
    }, timeout);
    timeout = timeout + timeoutIncrement;

    //This is last time we need to call setTimeout, currTime is now 0
    setTimeout(function(){
        alert("Takeoff!");
        countdownElem.innerHTML = "Launch successful!";
    }, timeout);
}