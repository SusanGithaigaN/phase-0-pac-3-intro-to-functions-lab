function shout(string) {
    return string.toUpperCase();
} 

function whisper(string){
    return string.toLowerCase();
}

function logShout(string){
    console.log(string.toUpperCase());  
}logShout('hello');

function logWhisper(string){
    console.log(string.toLowerCase());
} logWhisper('HELLO');

function sayHiToHeadphonedRoommate(string){
    const cantHear = "I can\'t hear you!";
    const canHear = "YES INDEED!";
    const request = "I would love to!";
    if (string.toLowerCase(string) === string){
        return cantHear;
    }
    else if (string.toUpperCase(string) === string){
        return canHear;
    }
    else if ("Let\'s have dinner together!" === string){
        return request;
    }
}