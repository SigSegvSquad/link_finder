const days = ['#Sunday', '#Monday', '#Tuesday', '#Wednesday', '#Thursday', '#Friday', '#Saturday'];
let day = days[new Date().getDay()];
location.href = day;