const quizData = [
    {
        question: "Čo je účelom testovania softvéru?",
        a: "Dokázať, že aplikácia je bez chýb",
        b: "Nájsť chyby a zlepšiť kvalitu softvéru",
        c: "Písať kód rýchlejšie",
        correct: "b"
      },
      {
        question: "Čo znamená pojem 'bug'?",
        a: "Vylepšenie funkcie",
        b: "Chyba alebo nežiaduce správanie v aplikácii",
        c: "Plán testovania",
        correct: "b"
      },
      {
        question: "Ktorý typ testovania overuje jednotlivé časti kódu samostatne?",
        a: "Integračné testovanie",
        b: "Systémové testovanie",
        c: "Jednotkové (unit) testovanie",
        correct: "c"
      }
  ];
  
  const quiz = document.getElementById("quiz");
  const submitBtn = document.getElementById("submit");
  const resultDiv = document.getElementById("result");
  
  function loadQuiz() {
    quiz.innerHTML = "";
    quizData.forEach((q, index) => {
      const questionDiv = document.createElement("div");
      questionDiv.classList.add("question");
      questionDiv.innerHTML = `
        <p>${index + 1}. ${q.question}</p>
        <div class="answers">
          <label><input type="radio" name="question${index}" value="a"> ${q.a}</label>
          <label><input type="radio" name="question${index}" value="b"> ${q.b}</label>
          <label><input type="radio" name="question${index}" value="c"> ${q.c}</label>
        </div>
      `;
      quiz.appendChild(questionDiv);
    });
  }
  
  submitBtn.addEventListener("click", () => {
    let score = 0;
    quizData.forEach((q, index) => {
      const selected = document.querySelector(`input[name=question${index}]:checked`);
      if (selected) {
        if (selected.value === q.correct) {
          score++;
          selected.parentElement.classList.add("correct");
        } else {
          selected.parentElement.classList.add("incorrect");
        }
      }
    });
    resultDiv.textContent = `Tvoje skóre: ${score} z ${quizData.length}`;
  });
  
  loadQuiz();