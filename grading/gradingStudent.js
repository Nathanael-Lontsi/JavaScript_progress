// Example 1

function gradingStudents(grades) {
  let arr = [];
  for (let i in grades) {
    let nextMultiple = Math.ceil(grades[i] / 5) * 5;
    if (nextMultiple - grades[i] < 3 && grades[i] >= 38) {
      arr.push(nextMultiple);
    } else {
      arr.push(grades[i]);
    }
  }
  console.log(arr);
}
gradingStudents([84, 29, 56]);

// Example 2

function studentsGrading(grades) {
  let array = [];
  for (let i in grades) {
    let newMultiple = Math.ceil(grades[i] / 5) * 5;
    if (newMultiple - grades[i] < 3 && grades[i] >= 38) {
      array.push(newMultiple);
    } else {
      array.push(grades[i]);
    }
  }
  console.log(array);
}
studentsGrading([73, 67, 38, 33]);
