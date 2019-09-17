(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "./src/app/home.component.ts");
/* harmony import */ var _employees_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./employees.component */ "./src/app/employees.component.ts");
/* harmony import */ var _positions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./positions.component */ "./src/app/positions.component.ts");
/* harmony import */ var _page_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-not-found.component */ "./src/app/page-not-found.component.ts");
/* harmony import */ var _employee_employee_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./employee/employee.component */ "./src/app/employee/employee.component.ts");
/* harmony import */ var _position_position_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./position/position.component */ "./src/app/position/position.component.ts");









var routes = [
    { path: 'home', component: _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'employees', component: _employees_component__WEBPACK_IMPORTED_MODULE_4__["EmployeesComponent"] },
    { path: 'employee/:_id', component: _employee_employee_component__WEBPACK_IMPORTED_MODULE_7__["EmployeeComponent"] },
    { path: 'position/:_id', component: _position_position_component__WEBPACK_IMPORTED_MODULE_8__["PositionComponent"] },
    { path: 'positions', component: _positions_component__WEBPACK_IMPORTED_MODULE_5__["PositionsComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: _page_not_found_component__WEBPACK_IMPORTED_MODULE_6__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<header id=\"header\">\n   <app-nav></app-nav>\n  <nav class=\"navbar navbar-inverse\" role=\"banner\">\n    <div class=\"container\">\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\"> <span class=\"sr-only\">Toggle navigation</span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> </button>\n        <a class=\"navbar-brand\" routerLink=\"/home\"><i class=\"fa fa-rocket\"></i> Olga Rudina</a></div>\n      <div class=\"collapse navbar-collapse navbar-right\">\n        <ul class=\"nav navbar-nav\">\n          <li routerLinkActive=\"active\"><a routerLink=\"/home\">Home</a></li>\n           <li routerLinkActive=\"active\"><a routerLink=\"/employees\">Employees</a></li>\n           <li routerLinkActive=\"active\"><a routerLink=\"/positions\">Positions</a></li>\n        </ul>\n      </div>\n    </div>\n    <!--/.container--> \n  </nav>\n  <!--/nav--> \n  \n</header>\n<!--/header-->\n\n<div class=\"color-border\"> </div>\n<app-content></app-content>\n<app-footer></app-footer>\n<div class=\"color-border\"> </div>\n<footer id=\"footer\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-6\">Copyright &copy; 2019 Olga Rudina (WEB422). Design by <a href=\"http://www.templategarden.com\" rel=\"nofollow\">TemplateGarden</a></div>\n      <div class=\"col-sm-6\">\n        <div class=\"follow-us\"> <a class=\"fa fa-facebook social-icon\" href=\"#\"></a> <a class=\"fa fa-twitter social-icon\" href=\"#\"></a> <a class=\"fa fa-linkedin social-icon\" href=\"#\"></a> <a class=\"fa fa-google-plus social-icon\" href=\"#\"></a> </div>\n      </div>\n    </div>\n  </div>\n</footer>\n<!--/#footer--> \n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/*********************************************************************************
* WEB422 – Assignment 05
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of this
* assignment has been copied manually or electronically from any other source (including web sites) or
* distributed to other students.
*
* Name: Olga Rudina Student ID: 039949136 Date: 01-Apr-19
*
********************************************************************************/


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'my-angular-app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer.component */ "./src/app/footer.component.ts");
/* harmony import */ var _nav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nav.component */ "./src/app/nav.component.ts");
/* harmony import */ var _content_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./content.component */ "./src/app/content.component.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home.component */ "./src/app/home.component.ts");
/* harmony import */ var _employees_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./employees.component */ "./src/app/employees.component.ts");
/* harmony import */ var _positions_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./positions.component */ "./src/app/positions.component.ts");
/* harmony import */ var _page_not_found_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./page-not-found.component */ "./src/app/page-not-found.component.ts");
/* harmony import */ var _employee_employee_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./employee/employee.component */ "./src/app/employee/employee.component.ts");
/* harmony import */ var _position_position_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./position/position.component */ "./src/app/position/position.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _nav_component__WEBPACK_IMPORTED_MODULE_7__["NavComponent"],
                _content_component__WEBPACK_IMPORTED_MODULE_8__["ContentComponent"],
                _home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _employees_component__WEBPACK_IMPORTED_MODULE_10__["EmployeesComponent"],
                _positions_component__WEBPACK_IMPORTED_MODULE_11__["PositionsComponent"],
                _page_not_found_component__WEBPACK_IMPORTED_MODULE_12__["PageNotFoundComponent"],
                _employee_employee_component__WEBPACK_IMPORTED_MODULE_13__["EmployeeComponent"],
                _position_position_component__WEBPACK_IMPORTED_MODULE_14__["PositionComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/content.component.css":
/*!***************************************!*\
  !*** ./src/app/content.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/content.component.html":
/*!****************************************!*\
  !*** ./src/app/content.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/content.component.ts":
/*!**************************************!*\
  !*** ./src/app/content.component.ts ***!
  \**************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContentComponent = /** @class */ (function () {
    function ContentComponent() {
    }
    ContentComponent.prototype.ngOnInit = function () {
    };
    ContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-content',
            template: __webpack_require__(/*! ./content.component.html */ "./src/app/content.component.html"),
            styles: [__webpack_require__(/*! ./content.component.css */ "./src/app/content.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "./src/app/data/employee.service.ts":
/*!******************************************!*\
  !*** ./src/app/data/employee.service.ts ***!
  \******************************************/
/*! exports provided: EmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return EmployeeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var EmployeeService = /** @class */ (function () {
    function EmployeeService(http) {
        this.http = http;
    }
    EmployeeService.prototype.getEmployees = function () {
        return this.http.get("https://stormy-plains-71044.herokuapp.com/employees");
    };
    EmployeeService.prototype.saveEmployee = function (employee) {
        return this.http.put("https://stormy-plains-71044.herokuapp.com/employee/" + employee._id, employee);
    };
    EmployeeService.prototype.getEmployee = function (id) {
        return this.http.get("https://stormy-plains-71044.herokuapp.com/employee-raw/" + id);
    };
    EmployeeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], EmployeeService);
    return EmployeeService;
}());



/***/ }),

/***/ "./src/app/data/position.service.ts":
/*!******************************************!*\
  !*** ./src/app/data/position.service.ts ***!
  \******************************************/
/*! exports provided: PositionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionService", function() { return PositionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var PositionService = /** @class */ (function () {
    function PositionService(http) {
        this.http = http;
    }
    PositionService.prototype.getPositions = function () {
        return this.http.get("https://stormy-plains-71044.herokuapp.com/positions");
    };
    PositionService.prototype.savePosition = function (position) {
        return this.http.put("https://stormy-plains-71044.herokuapp.com/position/" + position._id, position);
    };
    PositionService.prototype.getPosition = function (id) {
        return this.http.get("https://stormy-plains-71044.herokuapp.com/position/" + id);
    };
    PositionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PositionService);
    return PositionService;
}());



/***/ }),

/***/ "./src/app/employee/employee.component.css":
/*!*************************************************!*\
  !*** ./src/app/employee/employee.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center{ margin-top:40px; }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWUvZW1wbG95ZWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxTQUFTLGVBQWUsRUFBRSIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlL2VtcGxveWVlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyeyBtYXJnaW4tdG9wOjQwcHg7IH1cclxuIl19 */"

/***/ }),

/***/ "./src/app/employee/employee.component.html":
/*!**************************************************!*\
  !*** ./src/app/employee/employee.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"center\" *ngIf=\"employee\" >\n    <h2>Employee: {{employee.FirstName}}&nbsp;{{employee.LastName}}</h2>\n    <p class=\"lead\">Employee Info</p>\n  </div>\n  <div class=\"container\" *ngIf=\"employee\">\n  <div class=\"row\">\n  <div class=\"col-md-12\">\n    <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"form-group\" [ngClass]=\"{'form-group has-error': FirstName.errors}\">\n            <label for=\"FirstName\" class=\"control-label\">First Name:</label>\n            <input class=\"form-control\" id=\"FirstName\" type=\"text\"  name=\"FirstName\" [(ngModel)]=\"employee.FirstName\" #FirstName=\"ngModel\" required autofocus/>\n            <span class=\"help-block\" *ngIf=\"FirstName.errors && FirstName.errors.required\">First Name is Required</span>\n          </div>   \n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"form-group\" [ngClass]=\"{'form-group has-error': LastName.errors}\">\n            <label for=\"LastName\" class=\"control-label\">Last Name:</label>\n            <input class=\"form-control\" id=\"LastName\" type=\"text\" name=\"LastName\" [(ngModel)]=\"employee.LastName\" #LastName=\"ngModel\" required/>\n            <span class=\"help-block\" *ngIf=\"LastName.errors && LastName.errors.required\">Last Name is Required</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label for=\"Position\" class=\"control-label\">Position:</label>\n              <select class=\"form-control\" id=\"Position\"\n              [(ngModel)]=\"employee.Position\" name=\"Position\">\n        <option *ngFor=\"let position of positions\"\n                [value]=\"position._id\"\n                [attr.selected]=\"employee.Position\"\n        >{{position.PositionName}}\n        </option>\n      </select>\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"form-group\" [ngClass]=\"{'form-group has-error': SalaryBonus.errors}\">\n            <label for=\"SalaryBonus\" class=\"control-label\">Salary Bonus</label>\n            <div class=\"input-group\">\n              <span class=\"input-group-addon\">$</span>\n              <input class=\"form-control\" id=\"SalaryBonus\" type=\"number\" name=\"SalaryBonus\" [(ngModel)]=\"employee.SalaryBonus\" #SalaryBonus=\"ngModel\" required/>\n              <span class=\"help-block\" *ngIf=\"SalaryBonus.errors && SalaryBonus.errors.required\">Salary bonus is Required</span>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-3\">\n          <div class=\"form-group\" [ngClass]=\"{'form-group has-error': AddressStreet.errors}\">\n            <label for=\"AddressStreet\" class=\"control-label\">Address (Street):</label>\n            <input class=\"form-control\" id=\"AddressStreet\" type=\"text\" name=\"AddressStreet\" [(ngModel)]=\"employee.AddressStreet\" #AddressStreet=\"ngModel\" required/>\n            <span class=\"help-block\" *ngIf=\"AddressStreet.errors && AddressStreet.errors.required\">Address street is Required</span>\n          </div>\n        </div>\n        <div class=\"col-md-3\">\n          <div class=\"form-group\" [ngClass]=\"{'form-group has-error': AddressCity.errors}\">\n            <label for=\"AddressCity\">Address (City):</label>\n            <input class=\"form-control\" id=\"AddressCity\" type=\"text\" name=\"AddressCity\" [(ngModel)]=\"employee.AddressCity\" #AddressCity=\"ngModel\" required/>\n            <span class=\"help-block\" *ngIf=\"AddressCity.errors && AddressCity.errors.required\">Address city is Required</span>\n          </div>\n        </div>\n        <div class=\"col-md-3\">\n          <div class=\"form-group\" [ngClass]=\"{'form-group has-error': AddressState.errors}\">\n            <label for=\"AddressState\" class=\"control-label\">Address (State):</label>\n            <input class=\"form-control\" id=\"AddressState\" type=\"text\" name=\"AddressState\" [(ngModel)]=\"employee.AddressState\" #AddressState=\"ngModel\" required/>\n            <span class=\"help-block\" *ngIf=\"AddressState.errors && AddressState.errors.required\">Address state is Required</span>\n          </div>\n        </div>\n        <div class=\"col-md-3\">\n          <div class=\"form-group\" [ngClass]=\"{'form-group has-error': AddressZip.errors}\">\n            <label for=\"AddressZip\" class=\"control-label\">Address (Zip Code):</label>\n            <input class=\"form-control\" id=\"AddressZip\" type=\"text\" name=\"AddressZip\" [(ngModel)]=\"employee.AddressZip\" #AddressZip=\"ngModel\" required/>\n            <span class=\"help-block\" *ngIf=\"AddressZip.errors && AddressZip.errors.required\">Address zip is Required</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-3\">\n          <div class=\"form-group\" [ngClass]=\"{'form-group has-error': PhoneNum.errors}\">\n            <label for=\"PhoneNum\" class=\"control-label\">Phone Number:</label>\n            <input class=\"form-control\" #PhoneNum='ngModel' id=\"PhoneNum\" type=\"text\"\n            [(ngModel)]=\"employee.PhoneNum\" #PhoneNum=\"ngModel\" required name=\"PhoneNum\"\n            pattern=\"\\+?[ ]*[1-9]?[ ]*\\-?[ ]*\\(?[ ]*[1-9][ ]*(\\d[ ]*){2}\\)?[ ]*\\-?[ ]*(\\d[ ]*){3}-[ ]*(\\d[ ]*){4}\"/>\n            <span class=\"help-block\" *ngIf=\"PhoneNum.errors && PhoneNum.errors.required\">Phone Number is Required</span>\n          </div>\n        </div>\n        <div class=\"col-md-3\">\n          <div class=\"form-group\" [ngClass]=\"{'form-group has-error': Extension.errors}\">\n            <label for=\"Extension\" class=\"control-label\">Extension:</label>\n            <input class=\"form-control\" id=\"Extension\" type=\"number\" name=\"Extension\" [(ngModel)]=\"employee.Extension\" #Extension=\"ngModel\" required/>\n            <span class=\"help-block\" *ngIf=\"Extension.errors && Extension.errors.required\">Extension is Required</span>\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <label for=\"HireDate\" class=\"control-label\">Hire Date:</label>\n            <input class=\"form-control\" id=\"HireDate\" name=\"HireDate\" type=\"text\" value=\"HireDate\" [value]=\"employee.HireDate | date\" readonly >\n          </div>\n        </div>\n      </div>\n      <hr />\n      <a routerLink=\"/employees\" class=\"btn btn-warning pull-left\">Return to Employee List</a>\n      <input type=\"submit\" class=\"btn btn-primary pull-right\" value=\"Update Employee\" [disabled]=\"!f.valid\" />\n      <br />\n      <br />\n    </form>\n  </div>\n  </div>\n  <br />\n  <div class=\"alert alert-success\" *ngIf=\"successMessage\" >\n    <strong>Success!</strong> First Name Last Name's information was successfully saved.\n  </div>\n  <div class=\"alert alert-danger\" *ngIf=\"failMessage\" >\n    <strong>Error!</strong> First Name Last Name's information could not be saved.\n  </div>\n  </div>\n  <br /><br />"

/***/ }),

/***/ "./src/app/employee/employee.component.ts":
/*!************************************************!*\
  !*** ./src/app/employee/employee.component.ts ***!
  \************************************************/
/*! exports provided: EmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeComponent", function() { return EmployeeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_employee_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/employee.service */ "./src/app/data/employee.service.ts");
/* harmony import */ var _data_position_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/position.service */ "./src/app/data/position.service.ts");





var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent(route, es, ps) {
        this.route = route;
        this.es = es;
        this.ps = ps;
        this.successMessage = false;
        this.failMessage = false;
    }
    EmployeeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.paramSubScription = this.route.params.subscribe(function (params) {
            _this.employeeSubscription = _this.es.getEmployee(params['_id']).subscribe(function (data) {
                _this.employee = data[0];
                _this.getPositionsSub = _this.ps.getPositions().subscribe(function (data) {
                    _this.positions = data;
                });
            });
        });
    };
    EmployeeComponent.prototype.onSubmit = function (f) {
        var _this = this;
        this.saveEmployeeSubscription = this.es.saveEmployee(this.employee).subscribe(function () {
            _this.successMessage = true;
            setTimeout(function () {
                _this.successMessage = false;
            }, 2500);
        });
    };
    EmployeeComponent.prototype.ngOnDestroy = function () {
        if (this.paramSubScription)
            this.paramSubScription.unsubscribe();
        if (this.employeeSubscription)
            this.employeeSubscription.unsubscribe();
        if (this.getPositionsSub)
            this.getPositionsSub.unsubscribe();
        if (this.saveEmployeeSubscription)
            this.saveEmployeeSubscription.unsubscribe();
    };
    EmployeeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employee',
            template: __webpack_require__(/*! ./employee.component.html */ "./src/app/employee/employee.component.html"),
            styles: [__webpack_require__(/*! ./employee.component.css */ "./src/app/employee/employee.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _data_employee_service__WEBPACK_IMPORTED_MODULE_3__["EmployeeService"],
            _data_position_service__WEBPACK_IMPORTED_MODULE_4__["PositionService"]])
    ], EmployeeComponent);
    return EmployeeComponent;
}());



/***/ }),

/***/ "./src/app/employees.component.css":
/*!*****************************************!*\
  !*** ./src/app/employees.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center{ margin-top:40px; }\r\n.table-responsive{margin-bottom:60px;}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsU0FBUyxlQUFlLEVBQUU7QUFDMUIsa0JBQWtCLGtCQUFrQixDQUFDIiwiZmlsZSI6InNyYy9hcHAvZW1wbG95ZWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyeyBtYXJnaW4tdG9wOjQwcHg7IH1cclxuLnRhYmxlLXJlc3BvbnNpdmV7bWFyZ2luLWJvdHRvbTo2MHB4O30iXX0= */"

/***/ }),

/***/ "./src/app/employees.component.html":
/*!******************************************!*\
  !*** ./src/app/employees.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"center\">\n    <h2>Employees</h2>\n    <p class=\"lead\">List of employees.</p>\n</div>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n\n        <input class=\"form-control\" id=\"EmployeeSearch\" name=\"EmployeeSearch\" type=\"text\" placeholder=\"Search Employees by Full Name or Position\" (keyup)=\"onEmployeeSearchKeyUP($event)\" /><br />\n   \n        \n<div class=\"table-responsive\">\n  <table class=\"table table-condensed table-hover\">\n    <thead>\n      <tr>\n        <th>Full Name</th>\n        <th>Address</th>\n        <th>Phone Number</th>\n        <th>Hire Date</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let employee of filteredEmployees\" (click)=\"routeEmployee(employee._id)\">\n        <td>{{employee.FirstName}} {{employee.LastName}}</td>\n        <td>{{employee.AddressStreet}}. {{employee.AddressState}}, {{employee.AddressCity}}. {{employee.AddressZip}}</td>\n        <td>{{employee.PhoneNum}} ext: {{employee.Extension}}</td>\n        <td>{{employee.HireDate | date:'longDate'}}</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/employees.component.ts":
/*!****************************************!*\
  !*** ./src/app/employees.component.ts ***!
  \****************************************/
/*! exports provided: EmployeesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesComponent", function() { return EmployeesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/employee.service */ "./src/app/data/employee.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var EmployeesComponent = /** @class */ (function () {
    function EmployeesComponent(employeeService, router) {
        this.employeeService = employeeService;
        this.router = router;
        this.loadingError = false;
    }
    EmployeesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getEmployeesSub = this.employeeService.getEmployees().subscribe(function (data) {
            _this.employees = data;
            _this.filteredEmployees = data;
        }, function () {
            _this.loadingError = true;
        });
    };
    EmployeesComponent.prototype.ngOnDestroy = function () {
        if (this.getEmployeesSub) {
            this.getEmployeesSub.unsubscribe();
        }
    };
    EmployeesComponent.prototype.routeEmployee = function (id) {
        this.router.navigate(['/employee', id]);
    };
    EmployeesComponent.prototype.onEmployeeSearchKeyUP = function (event) {
        var substring = event.target.value.toLowerCase();
        this.filteredEmployees = this.employees.filter(function (e) { return ((e.FirstName.toLowerCase().indexOf(substring) !== -1) || (e.LastName.toLowerCase().indexOf(substring) !== -1) || (e.Position.PositionName.toLocaleLowerCase().indexOf(substring) !== -1)); });
    };
    EmployeesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employees',
            template: __webpack_require__(/*! ./employees.component.html */ "./src/app/employees.component.html"),
            styles: [__webpack_require__(/*! ./employees.component.css */ "./src/app/employees.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], EmployeesComponent);
    return EmployeesComponent;
}());



/***/ }),

/***/ "./src/app/footer.component.css":
/*!**************************************!*\
  !*** ./src/app/footer.component.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/footer.component.html":
/*!***************************************!*\
  !*** ./src/app/footer.component.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer.component.ts":
/*!*************************************!*\
  !*** ./src/app/footer.component.ts ***!
  \*************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/home.component.css":
/*!************************************!*\
  !*** ./src/app/home.component.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section {\r\n    padding: 70px 0;\r\n   }\r\n   .no-margin {\r\n    margin: 0;\r\n    padding: 0;\r\n   } \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtHQUNoQjtHQUNBO0lBQ0MsU0FBUztJQUNULFVBQVU7R0FDWCIsImZpbGUiOiJzcmMvYXBwL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb24ge1xyXG4gICAgcGFkZGluZzogNzBweCAwO1xyXG4gICB9XHJcbiAgIC5uby1tYXJnaW4ge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgfSAiXX0= */"

/***/ }),

/***/ "./src/app/home.component.html":
/*!*************************************!*\
  !*** ./src/app/home.component.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"main-slider\" class=\"no-margin\">\n    <div class=\"carousel slide\">\n      <ol class=\"carousel-indicators\">\n        <li data-target=\"#main-slider\" data-slide-to=\"0\" class=\"active\"></li>\n        <li data-target=\"#main-slider\" data-slide-to=\"1\"></li>\n        <li data-target=\"#main-slider\" data-slide-to=\"2\"></li>\n      </ol>\n      <div class=\"carousel-inner\">\n        <div class=\"item active\" style=\"background-image: url(/assets/images/slider/bg1.jpg)\">\n          <div class=\"container\">\n            <div class=\"row slide-margin\">\n              <div class=\"col-sm-12\">\n                <div class=\"carousel-content\">\n                  <h1>Welcome to <span class=\"logo\"><i class=\"fa fa-play-circle\"></i> API Demo </span></h1>\n                  <h2>Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt laoreet</h2>\n                   </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!--/.item-->\n        \n        <div class=\"item\" style=\"background-image: url(/assets/images/slider/bg2.jpg)\">\n          <div class=\"container\">\n            <div class=\"row slide-margin\">\n              <div class=\"col-sm-12\">\n                <div class=\"carousel-content\">\n                  <h1>Typi non habent claritatem insitam</h1>\n                  <h2>Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt laoreet</h2>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!--/.item-->\n        \n        <div class=\"item\" style=\"background-image: url(/assets/images/slider/bg3.jpg)\">\n          <div class=\"container\">\n            <div class=\"row slide-margin\">\n              <div class=\"col-sm-12\">\n                <div class=\"carousel-content\">\n                  <h1>Mirum est notare quam littera gothica</h1>\n                  <h2>Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt laoreet</h2>\n                  </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!--/.item--> \n      </div>\n      <!--/.carousel-inner--> \n    </div>\n    <!--/.carousel--> \n    <a class=\"prev hidden-xs\" href=\"#main-slider\" data-slide=\"prev\"> <i class=\"fa fa-chevron-left\"></i> </a> <a class=\"next hidden-xs\" href=\"#main-slider\" data-slide=\"next\"> <i class=\"fa fa-chevron-right\"></i> </a> </section>\n  <!--/#main-slider-->\n  <div class=\"color-border\"> </div>\n  <section id=\"feature\" >\n    <div class=\"container\">\n      <div class=\"center\">\n        <h2>Featured Services</h2>\n        <p class=\"lead\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non odio sed eros tristique bibendum. Nunc quis semper sem.<br>\n          Morbi libero elit elementum quis faucibus ac, condimentum quis nibh.</p>\n      </div>\n      <div class=\"row\">\n        <div class=\"features\">\n          <div class=\"col-md-6 col-sm-6\">\n            <div class=\"feature-wrap\"> <i class=\"fa fa-desktop\"></i>\n              <h2>Employees</h2>\n              <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non odio sed eros tristique.</h3>\n            </div>\n          </div>\n          <!--/.col-md-4-->\n          \n          <div class=\"col-md-6 col-sm-6\">\n            <div class=\"feature-wrap\"> <i class=\"fa fa-cogs\"></i>\n              <h2>Positions</h2>\n              <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non odio sed eros tristique.</h3>\n            </div>\n          </div>\n          <!--/.col-md-4-->\n        </div>\n        <!--/.services--> \n      </div>\n      <!--/.row--> \n    </div>\n    <!--/.container--> \n  </section>\n  <!--/#feature-->"

/***/ }),

/***/ "./src/app/home.component.ts":
/*!***********************************!*\
  !*** ./src/app/home.component.ts ***!
  \***********************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/nav.component.css":
/*!***********************************!*\
  !*** ./src/app/nav.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/nav.component.html":
/*!************************************!*\
  !*** ./src/app/nav.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/nav.component.ts":
/*!**********************************!*\
  !*** ./src/app/nav.component.ts ***!
  \**********************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found.component.css":
/*!**********************************************!*\
  !*** ./src/app/page-not-found.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/page-not-found.component.html":
/*!***********************************************!*\
  !*** ./src/app/page-not-found.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"><div class=\"row\">\n  <div class=\"colmd-12\">\n\t<div id=\"notfound\">\n\t\t<div class=\"notfound\">\n\t\t\t<div class=\"notfound-404\">\n\t\t\t\t<h1>4<span></span>4</h1>\n\t\t\t</div>\n\t\t\t<h2>Oops! Page Not Be Found</h2>\n\t\t\t<p>Sorry but the page you are looking for does not exist, have been removed. name changed or is temporarily unavailable</p>\n\t\t\t<a href=\"#\">Back to homepage</a>\n\t\t</div>\n\t</div>\n</div></div></div>\n\n\n"

/***/ }),

/***/ "./src/app/page-not-found.component.ts":
/*!*********************************************!*\
  !*** ./src/app/page-not-found.component.ts ***!
  \*********************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/position/position.component.css":
/*!*************************************************!*\
  !*** ./src/app/position/position.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center{ margin-top:40px; }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zaXRpb24vcG9zaXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxTQUFTLGVBQWUsRUFBRSIsImZpbGUiOiJzcmMvYXBwL3Bvc2l0aW9uL3Bvc2l0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyeyBtYXJnaW4tdG9wOjQwcHg7IH1cclxuIl19 */"

/***/ }),

/***/ "./src/app/position/position.component.html":
/*!**************************************************!*\
  !*** ./src/app/position/position.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"center\" *ngIf=\"position\" >\n    <h2>Position: {{position.PositionName}}</h2>\n    <p class=\"lead\">Position Description</p>\n  </div>\n  <div class=\"container\" *ngIf=\"position\" >\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <form #f=\"ngForm\" (ngSubmit)='onSubmit(f)'>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"form-group\" [ngClass]=\"{'form-group has-error': PositionName.errors}\">\n                <label for=\"PositionName\">Position Name:</label>\n                <input class=\"form-control\" id=\"PositionName\" type=\"text\" name=\"PositionName\" [(ngModel)]=\"position.PositionName\" #PositionName=\"ngModel\" required/>\n                <span class=\"help-block\" *ngIf=\"PositionName.errors && PositionName.errors.required\">Position name is Required</span>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"form-group\" [ngClass]=\"{'form-group has-error': PositionDescription.errors}\">\n                <label for=\"PositionDescription\">Description:</label>\n                <textarea class=\"form-control\" id=\"PositionDescription\" rows=\"5\" name=\"PositionDescription\" [(ngModel)]=\"position.PositionDescription\" #PositionDescription=\"ngModel\" required></textarea>\n                <span class=\"help-block\" *ngIf=\"PositionDescription.errors && PositionDescription.errors.required\">Position description is Required</span>\n              </div>\n            </div>\n          </div>\n          <hr />\n          <a routerLink=\"/positions\" class=\"btn btn-warning pull-left\">Return to Position List</a>\n          <input type=\"submit\" class=\"btn btn-primary pull-right\" value=\"Update Position\" [disabled]=\"!f.valid\"/>\n          <br />\n          <br />\n        </form>\n      </div>\n    </div>\n  <br />\n  <div class=\"alert alert-success\" *ngIf=\"successMessage\">\n    <strong>Success!</strong> Position: \"Position Name\" was successfully saved.\n  </div>\n  <div class=\"alert alert-danger\" *ngIf=\"falseMessage\">\n    <strong>Error!</strong> Position: \"Position Name\" could not be saved.\n  </div>\n  </div>\n  <br /><br />"

/***/ }),

/***/ "./src/app/position/position.component.ts":
/*!************************************************!*\
  !*** ./src/app/position/position.component.ts ***!
  \************************************************/
/*! exports provided: PositionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionComponent", function() { return PositionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_position_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/position.service */ "./src/app/data/position.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var PositionComponent = /** @class */ (function () {
    function PositionComponent(p, r) {
        this.p = p;
        this.r = r;
        this.successMessage = false;
        this.failMessage = false;
    }
    PositionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.paramSubScription = this.r.params.subscribe(function (param) {
            _this.positionSubscription = _this.p.getPosition(param['_id']).subscribe(function (data) {
                _this.position = data[0];
            });
        });
    };
    PositionComponent.prototype.onSubmit = function () {
        var _this = this;
        this.savePositionsSubcription = this.p.savePosition(this.position)
            .subscribe(function () {
            _this.successMessage = true;
            setTimeout(function () {
                _this.successMessage = false;
            }, 2500);
        }, function () {
            _this.failMessage = true;
            setTimeout(function () {
                _this.failMessage = false;
            }, 2500);
        });
    };
    PositionComponent.prototype.ngOnDestroy = function () {
        if (this.paramSubScription) {
            this.paramSubScription.unsubscribe();
        }
        if (this.positionSubscription) {
            this.positionSubscription.unsubscribe();
        }
        if (this.savePositionsSubcription) {
            this.savePositionsSubcription.unsubscribe();
        }
    };
    PositionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-position',
            template: __webpack_require__(/*! ./position.component.html */ "./src/app/position/position.component.html"),
            styles: [__webpack_require__(/*! ./position.component.css */ "./src/app/position/position.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_position_service__WEBPACK_IMPORTED_MODULE_2__["PositionService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], PositionComponent);
    return PositionComponent;
}());



/***/ }),

/***/ "./src/app/positions.component.css":
/*!*****************************************!*\
  !*** ./src/app/positions.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center{ margin-top:40px; }\r\n.table-responsive{margin-bottom:60px;}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zaXRpb25zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsU0FBUyxlQUFlLEVBQUU7QUFDMUIsa0JBQWtCLGtCQUFrQixDQUFDIiwiZmlsZSI6InNyYy9hcHAvcG9zaXRpb25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyeyBtYXJnaW4tdG9wOjQwcHg7IH1cclxuLnRhYmxlLXJlc3BvbnNpdmV7bWFyZ2luLWJvdHRvbTo2MHB4O30iXX0= */"

/***/ }),

/***/ "./src/app/positions.component.html":
/*!******************************************!*\
  !*** ./src/app/positions.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"center\">\n    <h2>Positions</h2>\n    <p class=\"lead\">List of positions.</p>\n</div>\n\n<div class=\"container\">\n<div class=\"row\">\n\t<div class=\"col-md-12\">\n    <div class=\"table-responsive\">\n      <table class=\"table table-condensed table-hover\">\n        <thead>\n          <tr>\n            <th>Position Title</th>\n            <th>Description</th>\n            <th>Salary</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let position of positions\" (click)=\"routePosition(position._id)\">\n            <td>{{position.PositionName}}</td>\n            <td>{{position.PositionDescription}}</td>\n            <td>${{position.PositionBaseSalary | number:'.2'}}</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n</div>  \n</div>  \n</div>\n"

/***/ }),

/***/ "./src/app/positions.component.ts":
/*!****************************************!*\
  !*** ./src/app/positions.component.ts ***!
  \****************************************/
/*! exports provided: PositionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionsComponent", function() { return PositionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_position_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/position.service */ "./src/app/data/position.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var PositionsComponent = /** @class */ (function () {
    function PositionsComponent(ps, route) {
        this.ps = ps;
        this.route = route;
        this.positions = [];
        this.loadingError = false;
    }
    PositionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getPositionsSub = this.ps.getPositions().subscribe(function (data) {
            _this.positions = data;
        }, function (error) {
            _this.loadingError = true;
        });
    };
    PositionsComponent.prototype.routePosition = function (id) {
        this.route.navigate(["/position", id]);
    };
    PositionsComponent.prototype.ngOnDestroy = function () {
        if (this.getPositionsSub) {
            this.getPositionsSub.unsubscribe();
        }
    };
    PositionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-positions',
            template: __webpack_require__(/*! ./positions.component.html */ "./src/app/positions.component.html"),
            styles: [__webpack_require__(/*! ./positions.component.css */ "./src/app/positions.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_position_service__WEBPACK_IMPORTED_MODULE_2__["PositionService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], PositionsComponent);
    return PositionsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Alice\Documents\College\WEB\web422\Assignment6\my-angular-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map