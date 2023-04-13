const salaryInput = document.getElementById('salary');
const salaryOutput = document.querySelector('.salary-output');
salaryInput.addEventListener('input', function() {
  salaryOutput.value = salaryInput.value;
});