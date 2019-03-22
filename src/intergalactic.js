
export function calculateAge(birthDate) {
  let now = new Date();
  let currentYear = now.getFullYear();
  let birthYear = birthDate.getFullYear();
  let age = currentYear - birthYear;
  if (now < new Date(birthDate.setFullYear(currentYear))) {
    age = age - 1;
  }
  return age;
}
