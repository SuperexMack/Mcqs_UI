const database = [

  {

    Question: "Q1 ) what do girls like the most in boys?",
    a: "Their outfit",
    b: "Their Money",
    c: "Thier Look",
    d: "Their Behaviour",
    ans: "ans3"

  },


  {

    Question: " Q2) what you boys like in girls?",
    a: "Their body",
    b: "Their cuteness",
    c: "Thier Look",
    d: "Their Behaviour",
    ans: "ans4"


  },

  {

    Question: " Q3) what will you do when a girl with low standard then you will propose you?",
    a: "I will accept",
    b: "I will decline",
    c: "I will Abuse her",
    d: "I will make fun of her and her feelings",
    ans: "ans2"


  },


  {

    Question: " Q4) What will you do if an unknown girl will try to be physical with you",
    a: "I will call the police",
    b: "I will abuse her",
    c: "I never give a reply to these type of girls",
    d: "I too will be physical with her",
    ans: "ans3"


  },


]

let question = document.querySelector(".question")
let option1 = document.querySelector("#option1")
let option2 = document.querySelector("#option2")
let option3 = document.querySelector("#option3")
let option4 = document.querySelector("#option4")
let submit = document.querySelector(".btn")
let boxo = document.querySelector("#hello")

let questioncount = 0;
let score = 0

function loadquestion() {

  const questionlist = database[questioncount]
  question.innerHTML = questionlist.Question
  option1.innerHTML = questionlist.a
  option2.innerHTML = questionlist.b
  option3.innerHTML = questionlist.c
  option4.innerHTML = questionlist.d


}

loadquestion()

let answers = document.querySelectorAll(".answer");
let array = Array.from(answers);


function getCheckedans() {

  let omg

  array.forEach((element) => {
    if (element.checked) {
      omg = element.id;

    }
  });

  return omg

}


submit.addEventListener("click", () => {

  const optionoftheans = getCheckedans()
  console.log(optionoftheans)

  if (optionoftheans === database[questioncount].ans) {

    score = score + 1
    console.log(score)


  }

  questioncount++



  if (questioncount < database.length) {

    loadquestion()


  }

  else {

    boxo.innerHTML = `

<h2>your score is ${score}/${database.length}</h2>
<button class="btno" onclick="location.reload()"> Attempt Again </button> 

`

    boxo.classList.remove("lastDecidingbox")




  }



});









































