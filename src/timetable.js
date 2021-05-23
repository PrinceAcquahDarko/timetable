"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerateTimetable = void 0;
var GenerateTimetable = /** @class */ (function () {
    function GenerateTimetable(classes, courses) {
        this.classes = classes;
        this.courses = courses;
        this.provisionalTimetable = [];
        this.days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    }
    GenerateTimetable.prototype.generateHour = function () {
        return this.courses.filter(function (i) { return i.creditHours !== 0; }).length;
    };
    GenerateTimetable.prototype.generateClass = function () {
        var _this = this;
        while (this.generateHour()) {
            this.courses.forEach(function (courses) {
                _this.classes.forEach(function (ele) {
                    if (ele.size > courses.numberOfStds && courses.creditHours) {
                        var taken = _this.courses.filter(function (i) { return i.taken === true; }).length;
                        if (taken === _this.courses.length) {
                            ele.day = _this.generateDay(ele.day, _this.courses);
                        }
                        else {
                            if (!courses.taken) {
                                if (ele.startTime <= 9) {
                                    var startTime = _this.checkdayAndRoom(ele);
                                    if (startTime) {
                                        ele.startTime = startTime.endTime;
                                    }
                                    else {
                                        ele.startTime = ele.endTime;
                                    }
                                    if (!_this.checkForDuplicateTeach(ele.startTime, courses, ele) && !_this.checkForDuplicateStd(ele, courses) && !_this.checkSameDay(ele, courses)) {
                                        var hour = _this.generateTimePeriods(courses.creditHours, courses);
                                        courses.taken = true;
                                        ele.endTime = ele.startTime + hour;
                                        var objs = _this.generateItimes(ele, courses);
                                        _this.provisionalTimetable.push(objs);
                                    }
                                }
                                else {
                                    ele.day = _this.generateDay(ele.day, _this.courses);
                                    ele.startTime = 0;
                                    ele.endTime = 7;
                                }
                            }
                            else {
                            }
                        }
                    }
                });
            });
        }
    };
    GenerateTimetable.prototype.generateItimes = function (items, element) {
        var obj = {
            size: items.size,
            classroom: items.classroom,
            startTime: items.startTime,
            endTime: items.endTime,
            courseName: element.course,
            numOfstds: element.numberOfStds,
            day: items.day,
            tutor: element.Tutor,
            students: element.students
        };
        return obj;
    };
    GenerateTimetable.prototype.checkdayAndRoom = function (clas) {
        var allclass = this.provisionalTimetable.filter(function (i) { return i.day === clas.day && i.classroom === clas.classroom; });
        return allclass[allclass.length - 1];
    };
    GenerateTimetable.prototype.checkForDuplicateTeach = function (startTime, cour, ele) {
        return this.provisionalTimetable.filter(function (i) { return startTime >= i.startTime && startTime < i.endTime && i.day === ele.day && i.tutor === cour.Tutor; })[0];
    };
    GenerateTimetable.prototype.checkForDuplicateStd = function (cla, cour) {
        var b = false;
        var fistFilter = this.provisionalTimetable.filter(function (i) { return cla.startTime >= i.startTime && cla.startTime < i.endTime && i.day === cla.day; });
        if (fistFilter) {
            fistFilter.forEach(function (i) {
                b = cour.students.some(function (item) { return i.students.includes(item); });
                return b;
            });
        }
        return b;
    };
    GenerateTimetable.prototype.generateDay = function (day, courses) {
        var currentday = this.days.indexOf(day);
        var nextday = currentday + 1;
        courses.forEach(function (course) {
            course.taken = false;
        });
        return this.days[nextday];
    };
    GenerateTimetable.prototype.checkSameDay = function (ele, cours) {
        return this.provisionalTimetable.filter(function (x) { return x.day === ele.day && x.courseName === cours.course; })[0];
    };
    GenerateTimetable.prototype.generateTimePeriods = function (hour, courses) {
        var hours = 0;
        if (hour === 1) {
            courses.creditHours = courses.creditHours - 1;
            hours = 1;
        }
        if (hour === 2) {
            courses.creditHours = courses.creditHours - 2;
            hours = 2;
        }
        if (hour > 2) {
            var arr = [1, 2];
            var num = arr[Math.floor(Math.random() * arr.length)];
            courses.creditHours = courses.creditHours - num;
            hours = num;
        }
        return hours;
    };
    return GenerateTimetable;
}());
exports.GenerateTimetable = GenerateTimetable;
