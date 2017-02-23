$("#calculate").click(function (event) {
    event.preventDefault();
});
function exercise1() {
    //get all
    var number1 = parseInt($("#number1").val());      
    var number2 = parseInt($("#number2").val());
    var number3 = parseInt($("#number3").val());
    var number4 = parseInt($("#number4").val());
    var number5 = parseInt($("#number5").val());
    var numers = [];
    //do calculations for all
    var sum = number1 + number2 + number3 + number4 + number5;
    var product = number1 * number2 * number3 * number4 * number5;
    var least = Math.min(number1, number2, number3, number4, number5);
    var greatest = Math.max(number1, number2, number3, number4, number5);
    var mean = (number1 + number2 + number3 + number4 + number5) / 5;    
    //output for all        
    $("#product").append(product);
    $("#least").append(least);
    $("#greatest").append(greatest);
    $("#mean").append(mean);
    $("#sum").append(sum);
}

//Event listener for exercise 1
$("#exercise1").click(exercise1);
       
function exercise2() {
    var x = $('#fnumber').val();
    for (i = x - 1; i > 0; i--) {
        x = x * i;
    }
    $('#factorial').append(x);
}
$("#exercise2").click(exercise2);
function exercise4() {
    var input1 = $('#input1').val();
    var input2 = $('#input2').val();
    for (i = 1; i <= 100; i++) {
        if (i % $('#input1').val() === 0 && i % $('#input2').val() === 0) {
            $('#output').append("<p>FizzBuzz</p>");
        }
        else if (i % $('#input1').val() === 0) {
            $('#output').append("<p>Fizz</p>");
        }
        else if (i % $('#input2').val() === 0) {
            $('#output').append("<p>Buzz</p>");
        }
        else {
            $('#output').append('<p>' + i + '</p>');
        }
    }
}

$("#FizzBuzz").click(exercise4);

// exercise 3
function isPalindrome() {
    var word = $('#input').val();
    var wordR = word.split('').reverse().join('');

    if (word === wordR) {
        $('#Result').append("<p>'" + word + "' is a palindrome!</p>");
    }

    else {
        $('#Result').append("<p>'" + word + "' is not a palindrome!</p>");
    }
}

$("#isPalindrome").click(isPalindrome);