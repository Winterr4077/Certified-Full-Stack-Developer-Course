function getAverage(scores) {
  let sum = 0;

  for (let i = 0; i < scores.length; i++ ) {
  sum += scores[i];
}

let average = sum / scores.length;

return average
}


function getGrade(score){
  if (score === 100){
    return "A+";
  } else if (score <= 99 && score >= 90){
    return "A";
  } else if (score <= 89 && score >= 80){
    return "B";
  } else if (score <= 79 && score >= 70){
    return "C";
  } else if (score <= 69 && score >= 60){
    return "D";
  } else if (score <= 59 && score >= 0){
    return "F";
  }
}

function hasPassingGrade(score){
  if (score <= 59){
    return false;
  } else {
    return true;
  }
}

function studentMsg(array, score){
  let classAverage = getAverage(array);
  let grade = getGrade(score);

  if (hasPassingGrade(score) === true){
    return "Class average: " + classAverage + "." + " Your grade: " + grade + "." + " You passed the course."
  } else if (hasPassingGrade(score) === false){
    return "Class average: " + classAverage + "." + " Your grade: " + grade + "." + " You failed the course."
  } else {
    return "Error occured."
  }
}
