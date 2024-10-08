// 2-get_students_by_loc.js
export default function hasValuesFromArray(set, array) {
  return array.every((value) => set.has(value));
}
