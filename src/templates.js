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
    }
    Templates.prototype.getCourseName = function () {
        var value = document.getElementById('CourseName');
        this.course.course = value.value;
        value.value = '';
    };
    Templates.prototype.getNoOfStds = function () {
        var value = document.querySelector('#NoOfStds');
        this.course.numberOfStds = +value.value;
        value.value = '';
    };
    Templates.prototype.gethours = function () {
        var value = document.querySelector('#hours');
        this.course.creditHours = +value.value;
        value.value = '';
    };
    Templates.prototype.gettutor = function () {
        var value = document.querySelector('#tutor');
        this.course.Tutor = value.value;
        value.value = '';
    };
    Templates.prototype.getstds = function () {
        var value = document.querySelector('#stds');
        this.course.students.push(value.value);
        value.value = '';
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
    };
    //for block
    Templates.prototype.getBlockName = function () {
        var value = document.querySelector('#NameOfClass');
        this.block.classroom = value.value;
        value.value = '';
    };
    Templates.prototype.getBlockCapacity = function () {
        var value = document.querySelector('#capacity');
        this.block.size = +value.value;
        value.value = '';
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
    };
    Templates.prototype.checkLength = function () {
        return !!this.blocks.length && !!this.courses.length;
    };
    return Templates;
}());
exports.Templates = Templates;
