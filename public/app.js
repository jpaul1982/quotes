let axiosbtn = document.querySelector("#axios");
let url = "https://opentdb.com/api.php?amount=1";

function shuffle(array) {
  var currentIndex = array.length,
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

axiosbtn.addEventListener("click", () => {
  axios
    .get(url)
    .then(res => {
      document.querySelector("#question").innerHTML =
        res.data.results[0].question;
      let rightAnswer = res.data.results[0].correct_answer;
      let answers = [rightAnswer];
      let wrongAnswers = res.data.results[0].incorrect_answers;
      wrongAnswers.forEach(wrong => {
        answers.push(wrong);
      });
      console.log(shuffle(answers));
      console.log(rightAnswer);
      answers.forEach((answer) => {
          document.createElement("Li").appendChild(document.createTextNode(answer));
          document.getElementById("answers").appendChild(document.createTextNode(answer));
          

      })
    })
    .catch(err => {
      console.log("Error", err);
    });
});


