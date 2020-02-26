const express                   = require("express");
const app                       = express();
const PORT                      = process.env.PORT || 3000;
const axios                     = require("axios");

app.use(express.static(__dirname + '/views'));

let url = "https://opentdb.com/api.php?amount=1";
axios.get(url)
.then(function(res){
//   console.log(res.data.results[0].category);
  console.log(res.data.results[0].difficulty);
  console.log(res.data.results[0].question);
  console.log(res.data.results[0].correct_answer);
  console.log(res.data.results[0].incorrect_answers);
  
})
.catch((err) => {
    console.log("Error", err);
});

app.listen(PORT, () => {
    console.log("Listening on port: " + PORT);
  });