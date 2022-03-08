function getDayInfo(out) {
  let days =["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
  
  let dateData =  inputDate.value;
  console.log(dateData);
    
  let nowDate = new Date(dateData);
  
  let weekDay = (days[nowDate.getDay()]);

  currentDate = new Date(dateData);
  let firstJan = new Date(currentDate.getFullYear(),0,1);
  let numberDay = Math.floor((currentDate - firstJan) / (24 * 60 * 60 * 1000));
  let result = Math.ceil(( (currentDate.getDay() + 1 + numberDay) / 7));

  let month =["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
  let infoMonth = (month[nowDate.getMonth()]);

  let year = (nowDate.getFullYear());

  alert(weekDay + ', ' + infoMonth + ', ' + result + ' неделя ' + year + ' года');
}