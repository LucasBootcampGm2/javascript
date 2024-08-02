// Desarrollar una función que reciba el nombre de un alumno, las notas de sus materias, y la nota de aprobación (4/6/7) e imprima:

function student(name, howManySubjects, passingGrade) {
  let grades = [];
  for (i = 0; i < howManySubjects; i++) {
    let grade = prompt("Enter the grade");
    grades[i] = grade;
  }
  let haveATenOrNot = grades.includes('10');
  let scrappingOrNot = grades.includes(passingGrade.toString());
  let countPassingGrade = grades.filter(function (grade) {
    return grade >= passingGrade;
  });
  let countNotPassingGrade = grades.filter(function (grade) {
    return grade < passingGrade;
  });
  console.log(name);
  console.log(`La cantidad de materias ${howManySubjects}`);
  console.log(`cantidad aprobadas ${countPassingGrade.length}`);
  console.log(`notas de las  aprobadas${countPassingGrade}`);
  console.log(`cant desaprobadas ${countNotPassingGrade.length}`);
  console.log(`notas de las desaproadas${countNotPassingGrade}`);

  if (countPassingGrade.length === grades.length) {
    console.log("The student have passed all");
  } else {
    console.log("the student have not passed all");
  }
  console.log(`have not ${haveATenOrNot}`);

  if (haveATenOrNot === true) {
    console.log("He had a ten in one or more");
  } else {
    console.log("He had not a ten");
  }

  if (scrappingOrNot === true) {
    console.log("He passed scrapping in one or more");
  }
  {
    console.log("He didnt pass scrapping");
  }
}

student("Lucas", 3, 4);
// Nombre del usuario
// Cantidad de materias cursadas
// Cantidad de materias aprobadas
// Las notas de las materias aprobadas
// Cantidad de materias reprobadas
// Las notas de las materias reprobadas
// Si el alumno pasó de año (aprobó todas las materias)
// Indicar si el alumno tuvo algún 10
// Indicar si el alumno aprobó alguna materia raspando (con la nota mínima de aprobación)
