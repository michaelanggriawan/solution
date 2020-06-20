// function to check duplicate in the string
function hasDup(letters) {
  let val = [];
  for (let letter of letters) {
    if (typeof letter === "object") {
      // if type of array convert to string
      // so that can check duplicate string
      if (!val.includes(letter.join(" "))) val.push(letter.join(" "));
    } else {
      if (!val.includes(letter)) val.push(letter);
    }
  }
  return val.length === letters.length;
}

function solution(relation) {
  let studentNumber = [],
    name = [],
    major = [],
    grade = [];
  let doubleRowOne = [],
    doubleRowTwo = [];

  let answer = 0;

  // single field row
  for (let i in relation) {
    let j = 0;
    while (j < relation[i].length) {
      if (j === 0 && studentNumber) studentNumber.push(relation[i][j]);

      if (j === 1) name.push(relation[i][j]);

      if (j === 2) major.push(relation[i][j]);

      if (j === 3) grade.push(relation[i][j]);

      j += 1;
    }
  }

  if (hasDup(name)) answer += 1;
  if (hasDup(studentNumber)) answer += 1;
  if (hasDup(grade)) answer += 1;
  if (hasDup(major)) answer += 1;

  // double field row
  for (let i = 0; i < relation.length; ++i) {
    doubleRowOne.push(relation[i].slice(1, 3));
    doubleRowTwo.push(relation[i].slice(2, 4));
  }

  if (hasDup(doubleRowOne)) answer += 1;
  if (hasDup(doubleRowTwo)) answer += 1;

  return answer;
}

let relation = [
  [100, "ryan", "music", 2],
  [200, "apeach", "math", 2],
  [300, "tube", "computer", 3],
  [400, "con", "computer", 4],
  [500, "muzi", "music", 3],
  [600, "apeach", "music", 2],
];

console.log(solution(relation));
