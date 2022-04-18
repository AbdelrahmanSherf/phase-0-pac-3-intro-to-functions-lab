function shout(input) {
   return input.toUpperCase();
}

function whisper(input) {
   return input.toLowerCase();
}

function logShout(input) {
   return console.log(input.toUpperCase());
}

function logWhisper(input) {
   return console.log(input.toLowerCase());
}

function sayHiToHeadphonedRoommate(input) {
   if(input == input.toLowerCase()) {
      return "I can't hear you!";
   } else if (input == input.toUpperCase()) {
      return "YES INDEED!";
   } else if (input === "Let's have dinner together!") {
      return "I would love to!";
   }
}
