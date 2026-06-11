console.log("WOOWON oreumi14-homework");

// 문제 1. 등급 구하기
const scores = [85, 92, 58, 74, 66, 100, 43];

function getGrade(score) {
  if (score >= 90) return "A";
  else if (score >= 80) return "B";
  else if (score >= 70) return "C";
  else if (score >= 60) return "D";
  else return "F";
}

console.log(getGrade(92));
console.log(getGrade(74));
console.log(getGrade(43));

// 문제 2. 합격 여부 구하기

function isPassed(score) {
  if (score >= 60) return true;
  else return false;
}

console.log(isPassed(85));
console.log(isPassed(43));

// 문제 3. 평균 점수 구하기

function getAverage(scores) {
  let average = 0;

  for (let i = 0; i < scores.length; i++) {
    average += scores[i];
  }
  return average / scores.length;
}

console.log(getAverage(scores));

// 문제 4. 합격 점수만 모으기

const getPassedScores = (scores) => scores.filter((score) => score >= 60);

console.log(getPassedScores(scores));

// 문제 5. 점수 설명 문자 만들기

const getScoreMessages = (scores) =>
  scores.map((score) => score + "점은 " + getGrade(score) + "등급입니다.\n");

console.log(getScoreMessages(scores));

// 문제 6. 전체 리포트 출력하기

const printScoreReport = (scores) => {
  scores.forEach((score) => {
    console.log(
      score +
        "점: " +
        getGrade(score) +
        "등급, " +
        (isPassed(score) ? "합격" : "불합격"),
    );
  });
};

printScoreReport(scores);

// 문제 7. 최종 요약 출력하기

const printSummary = (scores) => {
  console.log(
    "평균 점수: " +
      getAverage(scores) +
      "점\n" +
      "합격 점수: " +
      getPassedScores(scores) +
      "\n" +
      "점수 설명:\n" +
      getScoreMessages(scores),
  );
};

printSummary(scores);

//도전 문제. 이름과 점수 연결하기

const names = ["민수", "지은", "도윤", "서연", "하준", "유나", "지호"];

const printNameScoreReport = (names, scores) => {
  names.forEach((name, index) => {
    const score = scores[index];
    console.log(
      name +
        ": " +
        score +
        "점, " +
        getGrade(score) +
        "등급, " +
        (isPassed(score) ? "합격" : "불합격"),
    );
  });
};

printNameScoreReport(names, scores);
