let axiosbtn = document.querySelector("#axios");
let url = "https://opentdb.com/api.php?amount=1";
axiosbtn.addEventListener("click", () => {
    axios.get(url)
    .then((res) => {
        document.querySelector("#question").innerHTML = res.data.results[0].question;;
    //   console.log(res.data.results[0].category);
      console.log(res.data.results[0].difficulty);
      console.log(res.data.results[0].question);
      console.log(res.data.results[0].correct_answer);
      console.log(res.data.results[0].incorrect_answers);
   
      
      
    })
    .catch((err) => {
        console.log("Error", err);
    });
})
