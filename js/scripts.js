var units = {0: "zero", 1: "one", 2: "two", 3: "three", 4: "four", 5: "five", 6: "six",
    7: "seven", 8: "eight", 9: "nine", 10: "ten", 11: "eleven", 12: "twelve", 13: "thirteen",
    14: "fourteen", 15: "fifteen", 16: "sixteen", 17: "seventeen", 18: "eighteen", 19: "nineteen"};
var tens = {1: "ten", 2: "twenty", 3: "thirty", 4: "forty", 5: "fifty", 6: "sixty",
    7: "seventy", 8: "eighty", 9: "ninety"};
var theword = "";

function pronounce(num) {

    if (num < 0){
        theword += "Minus ";
        pronounce(-num);
    }
    else if(num > 1000000000000){
        theword += "Lots"
    }
    else if(num == 1000000000000){
        theword += "One trillion"
    }
    else if (num >= 1000000000){
        pronounce(Math.floor(num/1000000000));
        theword += " billion";

        if (num % 1000000000){
            theword += " ";
            pronounce(num % 1000000000);
        }
    }
    else if (num >= 1000000){
        pronounce(Math.floor(num/1000000));
        theword += " million";

        if (num % 1000000){
            theword += " ";
            pronounce(num % 1000000);
        }
    }
    else if (num >= 1000){
        pronounce(Math.floor(num/1000));
        theword += " thousand";

        if (num % 1000){      
          theword += " ";
          pronounce(num % 1000)
        }
    }
    else if (num >= 100){
        pronounce(Math.floor(num/100));
        theword += " hundred";

        if (num % 100){
            theword += " and ";
            pronounce(num % 100);
        }
    }
    else if (num >= 20){

        theword += tens[Math.floor(num/10)];

        if (num % 10){
            theword += " ";
            pronounce(num % 10);
        }
    }
    else {
        theword += units[num];
    }
    return theword;
}

//function capitalize (n) {
    //return n[0].toUpperCase() + n.slice(1).toLowerCase();
//}


jQuery(document).ready(function(){
    $("#result").hide();
    $("#input-form").submit(function(e) {
        var mynum = ($("input#number").val());
        theword = "";
        $("#res").text(pronounce(mynum);
        $("#result").show();

        e.preventDefault()
    })




});