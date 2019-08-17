
var answeredRight = 0;
var answeredWrong = 0;
var missed = 0;
var timeLeft = 60;
var intervalId;
var userGuess;
var triviaQs =
    [
        {
            question: "What is the worlds largest freshwater lake",
            answer: ["Lake Victoria", "Lake Taganyika", "Lake Superior", "Lake Malawi"],
            right: 2,
        },
        {
            question: "What is the worlds larget island?",
            answer: ["New Guinea", "Borneo", "Madagascar", "Greenland"],
            right: 3,
        },
        {
            question: "Who is the actress that won the most Oscars as of 2019?",
            answer: ["Meryl Streep", "Bette Davis", "Katharine Hepburn", "Ingrid Bergman"],
            right: 2,
        },
        {
            question: "What is the color worn by the winners of each stage of the Tour De France?",
            answer: ["White", "Yellow", "Green", "Polka Dot"],
            right: 1,
        },
        {
            question: "Who was the famous Russian dancer who changed the face of modern ballet?",
            answer: ["Rudolf Nureyev", "Mikhail Baryshnikov", "Galina Ulanova", "Maya Plisetskaya"],
            right: 0,
        },
        {
            question: "What is the Shakespear play featuring Shylock?",
            answer: ["The Tempest", "The Merchant of Venice", "All's Well That Ends Well", "The Merry Wives of Windsor"],
            right: 1,
        },
        {
            question: "In the show Dad's Army what's Captain Mainwaring's first name?",
            answer: ["Grant", "Gavin", "George", "Gunner"],
            right: 2,
        },
        {
            question: "Fried tarantulas, eggs boiled just before they're ready to hatch, live octopus and puffin hearts eaten raw and still warm are all traditional foods",
            answer: ["True", "False"],
            right: 0,
        },
        {
            question: "What is the most common type of star found in our galaxy?",
            answer: ["Brown Dwarf", "White Dwarf", "Red Dwarf", "Black Dwarf"],
            right: 2,
        },
        {
            question: "A 'yawl' is a type of what?",
            answer: ["Clothing", "Fish", "Building", "Boat"],
            right: 3,
        },
    ];


$(".btn btn-primary btn-lg").on("click", function () {

    function startGame() {

        intervalId = setInterval(decrement, 1000);

        $("#intro").hide();
    }
    function decrement() {

        timeLeft--;

        $("#timer").text(timeLeft);

        if (timeLeft === 0) {

            endGame();
            stop();
        }
    }

    function stop() {

        clearInterval(intervalId);
    }

    function endGame() {
        for (var i = 0; i < triviaQs.length; i++) {
            rightAnswer = triviaQs[i].right;
            userGuess = $("input[id = radio" + i + "]:checked + lable").text();
            if (userGuess === rightAnswer) {
                answeredRight++;
            } else if (userGuess === "") {
                missed++;
            } else if (userGuess !== rightAnswer) {
                answeredWrong++;
            }
        }
    }
    function showQs() {
        var asks = $("#triviaQsBox")
        for (var i = 0; i < triviaQs.length; i++) {

            asks.appened("<div id = 'qs'>" + triviaQs[i].question + "</div>")

            var answer1 = triviaQs[i].answer[0];
            var answer2 = triviaQs[i].answer[1];
            var answer3 = triviaQs[i].answer[2];
            var answer4 = triviaQs[i].answer[3];

            asks.appened('<div class="form-check form-check-inline"><input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"><label class="form-check-label" for="inlineRadio1">' + answer1 + '</label></div>')
            asks.appened('<div class="form-check form-check-inline"><input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option2"><label class="form-check-label" for="inlineRadio1">' + answer2 + '</label></div>')
            asks.appened('<div class="form-check form-check-inline"><input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option3"><label class="form-check-label" for="inlineRadio1">' + answer3 + '</label></div>')
            asks.appened('<div class="form-check form-check-inline"><input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option4"><label class="form-check-label" for="inlineRadio1">' + answer4 + '</label></div>')
        }
    }
    startGame();
    showQs();
})