// 1-get_list_student_ids.js
export default function getStudentsByLocation(students, city) {
  return students.filter((student) => student.location === city);
}
