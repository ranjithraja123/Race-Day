let earlyornot = true;
let runnerage = 19;
let raceNumber = Math.floor(Math.random() * 1000);
if (runnerage >= 18 && earlyornot==true) {
    console.log("Race Number " +raceNumber+ " will race at 9:30 am" );
}

else if(runnerage >= 18 && earlyornot == false) {
    console.log("Race Number " + raceNumber + " Non- Registered early adults Race at 11:00 am");
}

else {
    console.log(raceNumber + "Race at 12:30 pm")
}