const form = document.querySelector("form");
const input = document.getElementById("gradeInput");
const output = document.getElementById("gradeOutput");

const grades = [
  { min: 100, max: 100, grade: "1" },
  { min: 98, max: 99.5, grade: "1,1" },
  { min: 96, max: 97.5, grade: "1,2" },
  { min: 94, max: 95.5, grade: "1,3" },
  { min: 92, max: 93.5, grade: "1,4" },
  { min: 91, max: 91.5, grade: "1,5" },
  { min: 90, max: 90.5, grade: "1,6" },
  { min: 89, max: 89.5, grade: "1,7" },
  { min: 88, max: 88.5, grade: "1,8" },
  { min: 87, max: 87.5, grade: "1,9" },
  { min: 85, max: 86.5, grade: "2" },
  { min: 84, max: 84.5, grade: "2,1" },
  { min: 83, max: 83.5, grade: "2,2" },
  { min: 82, max: 82.5, grade: "2,3" },
  { min: 81, max: 81.5, grade: "2,4" },
  { min: 79, max: 80.5, grade: "2,5" },
  { min: 78, max: 78.5, grade: "2,6" },
  { min: 77, max: 77.5, grade: "2,7" },
  { min: 75, max: 76.5, grade: "2,8" },
  { min: 74, max: 74.5, grade: "2,9" },
  { min: 72, max: 73.5, grade: "3" },
  { min: 71, max: 71.5, grade: "3,1" },
  { min: 70, max: 70.5, grade: "3,2" },
  { min: 68, max: 69.5, grade: "3,3" },
  { min: 67, max: 67.5, grade: "3,4" },
  { min: 65, max: 66.5, grade: "3,5" },
  { min: 63, max: 64.5, grade: "3,6" },
  { min: 62, max: 62.5, grade: "3,7" },
  { min: 60, max: 61.5, grade: "3,8" },
  { min: 58, max: 59.5, grade: "3,9" },
  { min: 56, max: 57.5, grade: "4" },
  { min: 55, max: 55.5, grade: "4,1" },
  { min: 53, max: 54.5, grade: "4,2" },
  { min: 51, max: 52.5, grade: "4,3" },
  { min: 50, max: 50.5, grade: "4,4" },
  { min: 48, max: 49.5, grade: "4,5" },
  { min: 46, max: 47.5, grade: "4,6" },
  { min: 44, max: 45.5, grade: "4,7" },
  { min: 42, max: 43.5, grade: "4,8" },
  { min: 40, max: 41.5, grade: "4,9" },
  { min: 38, max: 39.5, grade: "5" },
  { min: 36, max: 37.5, grade: "5,1" },
  { min: 34, max: 35.5, grade: "5,2" },
  { min: 32, max: 33.5, grade: "5,3" },
  { min: 30, max: 31.5, grade: "5,4" },
  { min: 25, max: 29.5, grade: "5,5" },
  { min: 20, max: 24.5, grade: "5,6" },
  { min: 15, max: 19.5, grade: "5,7" },
  { min: 10, max: 14.5, grade: "5,8" },
  { min: 5, max: 9.5, grade: "5,9" },
  { min: 0, max: 4.5, grade: "6" }
];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const points = parseFloat(input.value.replace(",", "."));

  if (isNaN(points)) {
    output.textContent = "Bitte gültige Punkte eingeben!";
    return;
  }

  const result = grades.find(
    g => points >= g.min && points <= g.max
  );

  output.textContent = result
    ? `Deine Note: ${result.grade}`
    : "Keine gültige Note gefunden";
});

// if (userIP == dataBaseIP) {
//     geoLocation = setInterval;
// } else banSerial;

// getElementById("geoLocation");
// const noIDEA = youWonderingWhatthisLastFewLinesOfCodeDoes,DontYa;
// const needLine = 10;