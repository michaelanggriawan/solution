// function to remove id in the array
function removeId(answers) {
  for (let i in answers) {
    let result = answers[i].split(" ").slice(0, 3).join(" ");

    answers[i] = result;
  }
  return answers;
}

function solution(records) {
  // var to store the answer
  let answer = [];

  for (let record of records) {
    if (record.includes("Enter" || "enter")) {
      let getName = record.split(" ")[2];
      let getId = record.split(" ")[1];
      answer.push(`${getName} came in ${getId}`);
    }

    if (record.includes("Leave" || "leave")) {
      let getName = record.split(" ")[2];
      let getId = record.split(" ")[1];
      answer.push(`${getName} has left ${getId}`);
    }

    // to updateName
    if (record.includes("Change" || "change")) {
      let getName = record.split(" ")[2];
      let getId = record.split(" ")[1];

      for (let i in answer) {
        let answerId = answer[i].split(" ")[3];
        let answerMessage = answer[i].split(" ").slice(1, 3);
        if (answerId === getId) {
          answer[i] =
            getName + " " + answerMessage.toString().replace(",", " ");
        }
      }
    }
  }

  return removeId(answer);
}

let record = [
  "Enter uid1234 Muzi",
  "Enter uid4567 Prodo",
  "Leave uid1234", // since this is unknown name the result will be undefined
  "Enter uid1234 Prodo",
  "Change uid4567 Ryan",
];

console.log(solution(record));
