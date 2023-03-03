//arr is for array
var arrInterval = new Array()

//empty function; code will be added later
function startButtonClick(){
    //doesn't let user clict the start button while countdown is running
    document.getElementById("btnStart").disabled =true;
    document.getElementById("btnStop").disabled =false;
    var countdownElem = document.getElementById("countdown");
    runTimer(countdownElem);
}

//empty function; code will be added later
function stopButtonClick(){
    document.getElementById("btnStart").disabled =false;
    document.getElementById("btnStop").disabled =true;
    for (counter = 0; counter < 11; counter++){
        clearTimeout(arrInterval[counter]);
    }
}

//this function will ask for a first name, last name and badge number
//the names need to be less than 20 characters and the badge number needs to be 3 charactors or less
function getUserInput(){
    var fullName = "";
    var badgeNumber = 0;
    do{
        var firstName = prompt("Please enter first name (under 10 characters): ");
        var lastName = prompt("Please enter last name (under 10 characters): ");

        fullName = firstName +" " + lastName;

        if (fullName.length > 20){
            alert("Please enter a shorter name. Length was: " + fullName.length)
        }
    }
    while(fullName.length > 20);

    do{
        badgeNumber = prompt("Please enter your badge number (3 digits max): ");
        
        if (badgeNumber > 999){
            alert("Please enter a badge number with 3 digits or fewer");
        }
    }
    while(badgeNumber > 999);

    return fullName + " " + badgeNumber;

}

//this is our new countdown function
function runTimer( countdownElem){
     //traks the current countdown time
     var currTime = 50;

     //tracks the current timeout
     var timeout = 0;

     //this value will not change and creates the 5 seond delay
     var timeoutIncrement = 1000;
     
    for(var counter = 0;counter < 11; counter ++){
        //begin of the countdown
        arrInterval[counter] = setTimeout(function(){
            if(currTime == 0){
                alert("Takeoff!");
                countdownElem.innerHTML = "Launch successful!";
            }
            else if (currTime < 25){
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