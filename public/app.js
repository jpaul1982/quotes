$(document).ready(onReady);

function onReady() {
  console.log("jQuery in tha house!");
  $("#btn").on("click", askQuestions);
}
let axiosbtn = document.querySelector("#axios");
let url = "https://opentdb.com/api.php?amount=1";

function shuffle(array) {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

let askQuestions = () => {
  axios
    .get(url)
    .then(res => {
      $("#question").html(res.data.results[0].question);

      let rightAnswer = res.data.results[0].correct_answer;
      let answers = [rightAnswer];
      let wrongAnswers = res.data.results[0].incorrect_answers;
      wrongAnswers.forEach(wrong => {
        answers.push(wrong);
      });
      let newAnswers =[];
      $.each(answers, (i, answer) => {
          newAnswers.push("<li class='answer'>" + answer + " "+ "</li>")
      });
      shuffle(newAnswers);
      ($("#answers").html(newAnswers.join("")));
      console.log(shuffle(newAnswers));
      console.log(rightAnswer);
    
    })
    .catch(err => {
      console.log("Error", err);
    });
};
