
//开服时间2020.1.28

var hour = 0;
var minute = 0;
var second = 0;

var today = new Date();//定义日期对象
//var yyyy = parseInt(today.getFullYear());//通过日期对象的getFullYear()方法返回年    
//var MM = parseInt(today.getMonth() + 1);//通过日期对象的getMonth()方法返回月
//var dd = parseInt(today.getDate());//通过日期对象的getDate()方法返回日 
var hh = parseInt(today.getHours());//通过日期对象的getHours方法返回小时   
var mm = parseInt(today.getMinutes());//通过日期对象的getMinutes方法返回分钟   
var ss = parseInt(today.getSeconds());//通过日期对象的getSeconds方法返回秒   
// 如果分钟或小时的值小于10，则在其值前加0，比如如果时间是下午3点20分9秒的话，则显示15：20：09

var sum_day = parseInt((new Date().getTime() - new Date("2020-1-28").getTime()) / 86400000);
var sum_hour = 0;
var sum_minute = 0;
var sum_second = 0;


//计算时分秒
sum_hour = hh - hour
if (sum_hour < 0) {
    sum_hour = hour - hh
    sum_day--
}
sum_minute = mm - minute
if (sum_minute < 0) {
    sum_minute = minute - mm
    sum_minute--
}
sum_second = ss - second
if (sum_second < 0) {
    sum_second = second - ss
    sum_second--
}

function startTime() {
    sum_second++
    if (sum_second >= 60) {
        sum_minute++
        sum_second = 0
    }
    if (sum_minute >= 60) {
        sum_hour++
        sum_minute = 0
    }
    if (sum_hour >= 24) {
        sum_day++
        sum_hour = 0
    }

    var anniversary = 0;
    anniversary = Math.round(sum_day / 365)
    //计算周年

    //输出
    document.getElementById('nowDate_day').innerHTML = sum_day;
    document.getElementById('nowDate_hour').innerHTML = sum_hour;
    document.getElementById('nowDate_minute').innerHTML = sum_minute;
    document.getElementById('nowDate_second').innerHTML = sum_second;
    document.getElementById('anniversary').innerHTML = anniversary;

    setTimeout('startTime()', 1000);//每一秒中重新加/载startTime()方法
}