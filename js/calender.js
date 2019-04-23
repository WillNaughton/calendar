var daysOfTheWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

var monthsOfTheYear = ['January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August', 'September',
    'October', 'November', 'December'];

var daysOfTheMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var currentDate = new Date();
var currentMonth = currentDate.getMonth();
var monthName;
var month;
var year;
console.log(currentDate);
console.log(currentMonth);
var modDate = new Date();

//calendar constructor
function Calendar(month, year) {
    this.month = (isNaN(month) || month == null) ? currentDate.getMonth() : month;
    this.year = (isNaN(year) || year == null) ? currentDate.getFullYear() : year;
    this.html = ' ';
}

Calendar.prototype.generateHTML = function () {
    var firstDay = new Date(this.year, this.month, 1);
    var startingDay = firstDay.getDay();
    var monthLength = daysOfTheMonth[this.month];

    // this is to calculate leap year
    if (this.month == 1) {
        if ((this.year % 4 == 0 && this.year % 100 != 0) || this.year % 400 == 0) {
            monthLength = 29;
        }
    }

    

    monthName = monthsOfTheYear[this.month];
    var html = '<table class="calendar table">';
    html += '<tr><th colspan="7">';
    html += monthName + "&nbsp" + this.year;
    html += '</th></tr>';
    html += '<tr class="header">';

    for (var i = 0; i <= 6; i++) {
        html += '<td class="header-day">';
        html += daysOfTheWeek[i];
        html += '</td>';
    }
    html += '</tr><tr>';

    var day = 1;
    // this is for weeks
    for (var i = 0; i < 9; i++) {
        // this is for weekdays
        for (var j = 0; j <= 6; j++) {
            html += '<td class="calendar-day">';
            if (day <= monthLength && (i > 0 || j >= startingDay)) {
                html += day;
                day++;
            }
            html += '</td>';
        }
        // stop making rows if we've run out of days
        if (day > monthLength) {
            break;
        } else {
            html += '</tr><tr>';
        }
    }

    html += '</tr></table>';

    this.html = html;
}

Calendar.prototype.getHTML = function() {
    return this.html;
}
var cal = new Calendar();

//call the calendar function
cal.generateHTML(modDate);
document.getElementById('cal').innerHTML = cal.getHTML();

