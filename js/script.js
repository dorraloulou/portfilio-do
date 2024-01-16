function afficherResultat() {

  var responses = {
    q1: document.querySelector('input[name="q1"]:checked').value,
    q2: document.querySelector('input[name="q2"]:checked').value,
    q3: document.querySelector('input[name="q3"]:checked').value,
    q4: document.querySelector('input[name="q4"]:checked').value,
    q5: document.querySelector('input[name="q5"]:checked').value,
    q6: document.querySelector('input[name="q6"]:checked').value,
    q7: document.querySelector('input[name="q7"]:checked').value,
    q8: document.querySelector('input[name="q8"]:checked').value,
    q9: document.querySelector('input[name="q9"]:checked').value,
    q10: document.querySelector('input[name="q10"]:checked').value,
  };


  var correctAnswers = 0;


  var correctResponses = {
    q1: 'c',
    q2: 'c',
    q3: 'c',
    q4: 'b',
    q5: 'c',
    q6: 'a',
    q7: 'c',
    q8: 'a',
    q9: 'a',
    q10: 'a',
  };

  for (var question in responses) {

    if (responses[question] === correctResponses[question]) {
      correctAnswers++;
    }
  }


  alert('Nombre de réponses correctes : ' + correctAnswers + ' sur 10');
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); 
    afficherResultat();
  });
});
