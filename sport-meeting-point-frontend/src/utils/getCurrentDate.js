export default function getCurrentDate  (separator='-'){
  var currentDate = new Date()
  var day = currentDate.getDate()
  var month = currentDate.getMonth() + 1
  var year = currentDate.getFullYear()

  return year + separator + month + separator + day;
}