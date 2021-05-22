"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Templates = void 0;
var Templates = /** @class */ (function () {
    function Templates() {
        this.blockName = '';
        this.courseName = '';
        this.courses = [];
        this.blocks = [];
        this.course = {
            course: '',
            numberOfStds: 0,
            creditHours: 0,
            taken: false,
            Tutor: '',
            students: []
        };
        this.block = {
            classroom: '',
            size: 0,
            startTime: 0,
            endTime: 7,
            day: 'Monday'
        };
        this.errorMsg = '';
        this.errorMsg2 = '';
        this.displayMsg = '';
    }
    Templates.prototype.getCourseName = function () {
        this.courseNameValue = document.getElementById('CourseName');
        if (this.courseNameValue.value) {
            this.course.course = this.courseNameValue.value;
        }
        else {
            this.errorMsg = "course name cannot be blank";
        }
    };
    Templates.prototype.getNoOfStds = function () {
        this.NoOfStdsValue = document.querySelector('#NoOfStds');
        if (this.NoOfStdsValue && +this.NoOfStdsValue.value > 0) {
            this.course.numberOfStds = +this.NoOfStdsValue.value;
        }
        else {
            this.errorMsg = 'Number of stds must not be empty and should be greater than zero';
        }
    };
    Templates.prototype.gethours = function () {
        this.creditHourValue = document.querySelector('#hours');
        if (this.creditHourValue && +this.creditHourValue.value > 0) {
            this.course.creditHours = +this.creditHourValue.value;
        }
        else {
            this.errorMsg = 'credit hours must not be empty and should be greater than zero';
        }
    };
    Templates.prototype.gettutor = function () {
        this.tutorValue = document.querySelector('#tutor');
        if (this.tutorValue) {
            this.course.Tutor = this.tutorValue.value;
        }
        else {
            this.errorMsg = 'Tutor cannot be empty';
        }
    };
    Templates.prototype.getstds = function () {
        this.stdsValue = document.querySelector('#stds');
        if (this.stdsValue) {
            this.course.students.push(this.stdsValue.value);
        }
        else {
            this.errorMsg = 'stds cannot be empty';
        }
    };
    Templates.prototype.getCourse = function () {
        this.courses.push(this.course);
        this.courseName = this.course.course;
        this.resetCourse();
    };
    Templates.prototype.resetCourse = function () {
        this.course = {
            course: '',
            numberOfStds: 0,
            creditHours: 0,
            taken: false,
            Tutor: '',
            students: []
        };
        this.stdsValue.value = '';
        this.tutorValue.value = '';
        this.NoOfStdsValue.value = '';
        this.creditHourValue.value = '';
        this.courseNameValue.value = '';
    };
    //for block
    Templates.prototype.getBlockName = function () {
        this.blockNameValue = document.querySelector('#NameOfClass');
        if (this.blockNameValue.value) {
            this.block.classroom = this.blockNameValue.value;
        }
        else {
            this.errorMsg2 = "block name cannot be empty";
        }
    };
    Templates.prototype.getBlockCapacity = function () {
        this.blockCapacityValue = document.querySelector('#capacity');
        if (this.blockCapacityValue.value && this.blockCapacityValue.value > 0) {
            this.block.size = +this.blockCapacityValue.value;
        }
        else {
            this.errorMsg2 = 'capacity must not be empty and should be greater than zero';
        }
    };
    Templates.prototype.getBlock = function () {
        this.blocks.push(this.block);
        this.blockName = this.block.classroom;
        this.resetBlock();
    };
    Templates.prototype.resetBlock = function () {
        this.block = {
            classroom: '',
            size: 0,
            startTime: 0,
            endTime: 7,
            day: 'Monday'
        };
        this.blockNameValue.value = '';
        this.blockCapacityValue.value = '';
    };
    Templates.prototype.checkLength = function () {
        return !!this.blocks.length && !!this.courses.length;
    };
    Templates.prototype.checkLimit = function () {
        for (var _i = 0, _a = this.courses; _i < _a.length; _i++) {
            var i = _a[_i];
            for (var _b = 0, _c = this.blocks; _b < _c.length; _b++) {
                var j = _c[_b];
                if (i.numberOfStds > j.size) {
                    this.displayMsg = "<h3 style=\"text-align:center\">there's no block that can contain " + i.numberOfStds + " stds of " + i.course + "</h3>";
                    break;
                }
            }
        }
    };
    return Templates;
}());
exports.Templates = Templates;
