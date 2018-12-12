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

/***/ "./src/app/admin.service.ts":
/*!**********************************!*\
  !*** ./src/app/admin.service.ts ***!
  \**********************************/
/*! exports provided: AdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminService", function() { return AdminService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminService = /** @class */ (function () {
    function AdminService(http, router) {
        this.http = http;
        this.router = router;
    }
    AdminService.prototype.getUsersCount = function () {
        return this.http.get('http://localhost:3000/api/admin/count/user');
    };
    AdminService.prototype.getTeamsCount = function () {
        return 0;
    };
    AdminService.prototype.getLeaderboard = function () {
        return this.http.get('http://localhost:3000/api/admin/leaderboard');
    };
    AdminService.prototype.deleteAllUsers = function () {
        return this.http.get('http://localhost:3000/api/admin/users/delete-all');
    };
    AdminService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AdminService);
    return AdminService;
}());



/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logout-button {\r\n  position: fixed;\r\n  top: 5px;\r\n  right: 20px;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 18px;\r\n  cursor: pointer;\r\n  z-index: 5;\r\n}\r\n\r\n.login-card {\r\n  top: 30px;\r\n  margin: 10px auto;\r\n  padding: 20px;\r\n  width: 80%;\r\n  max-width: 400px;\r\n  text-align: center;\r\n}\r\n\r\n.example-fill-remaining-space {\r\n  flex: 1 1 auto;\r\n}\r\n\r\n.container {\r\n  display: block;\r\n}\r\n\r\n.card {\r\n  border: 0.5px solid #bbbbbb;\r\n  margin: 10px;\r\n  padding: 0 0 10px 0;\r\n  width: 80%;\r\n  max-width: 300px;\r\n  float: left;\r\n}\r\n"

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-card\" *ngIf=\"!loggedIn\">\n\n  <mat-card>\n    <mat-card-title>Admin Login</mat-card-title>\n    <br>\n    <mat-form-field>\n      <mat-label>Username</mat-label>\n      <input matInput type=\"text\" [(ngModel)]=\"username\" />\n    </mat-form-field>\n\n    <br>\n\n    <mat-form-field>\n      <mat-label>Password</mat-label>\n      <input matInput type=\"text\" [(ngModel)]=\"password\" />\n    </mat-form-field>\n\n    <br>\n\n    <button mat-raised-button color=\"primary\" (click)=\"onLogin()\" >Login</button>\n  </mat-card>\n\n</div>\n\n<div *ngIf=\"loggedIn\" class=\"container\">\n\n    <mat-toolbar color=\"primary\">\n      <span>Kingsroad Admin</span>\n\n      <!-- This fills the remaining space of the current row -->\n      <span class=\"example-fill-remaining-space\"></span>\n\n      <span class=\"small-screen\">\n        <button mat-button (click)=\"onLogout()\">Logout</button>\n      </span>\n    </mat-toolbar>\n\n  <div>\n    Total number of registerd users: {{usersCount}}\n    <button mat-button (click)=\"deleteAllUsers()\">Delete All Users</button>\n  </div>\n\n  <mat-card class=\"card .mat-elevation-z0\">\n    <app-leaderboard></app-leaderboard>\n  </mat-card>\n\n  <mat-card class=\"card .mat-elevation-z0\">\n    <app-trade></app-trade>\n  </mat-card>\n\n  <mat-card class=\"card .mat-elevation-z0\">\n    <app-control-panel></app-control-panel>\n  </mat-card>\n</div>\n\n"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../admin.service */ "./src/app/admin.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminComponent = /** @class */ (function () {
    function AdminComponent(adminService) {
        this.adminService = adminService;
        this.loggedIn = false;
    }
    AdminComponent.prototype.ngOnInit = function () {
        if (sessionStorage.getItem('adminLoggedIn') === 'true') {
            this.loggedIn = true;
        }
        this.updateUsersCount();
    };
    AdminComponent.prototype.onLogin = function () {
        if (this.username === 'admin' && this.password === 'admin') {
            this.loggedIn = true;
            sessionStorage.setItem('adminLoggedIn', 'true');
        }
        else {
            alert('Invalid Username or password');
        }
    };
    AdminComponent.prototype.onLogout = function () {
        this.loggedIn = false;
        sessionStorage.setItem('adminLoggedIn', 'false');
    };
    AdminComponent.prototype.updateUsersCount = function () {
        var _this = this;
        this.adminService.getUsersCount().subscribe(function (response) {
            if (response.status === 200) {
                _this.usersCount = response.count;
            }
        });
    };
    AdminComponent.prototype.deleteAllUsers = function () {
        var _this = this;
        this.adminService.deleteAllUsers().subscribe(function (response) {
            if (response.status === 201) {
                _this.updateUsersCount();
            }
        });
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"]])
    ], AdminComponent);
    return AdminComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _team_create_team_create_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./team-create/team-create.component */ "./src/app/team-create/team-create.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"] },
    { path: 'create-team', component: _team_create_team_create_component__WEBPACK_IMPORTED_MODULE_6__["TeamCreateComponent"] },
    { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_7__["AdminComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'kingsroad';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _team_create_team_create_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./team-create/team-create.component */ "./src/app/team-create/team-create.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./leaderboard/leaderboard.component */ "./src/app/leaderboard/leaderboard.component.ts");
/* harmony import */ var _trade_trade_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./trade/trade.component */ "./src/app/trade/trade.component.ts");
/* harmony import */ var _control_panel_control_panel_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./control-panel/control-panel.component */ "./src/app/control-panel/control-panel.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"],
                _team_create_team_create_component__WEBPACK_IMPORTED_MODULE_12__["TeamCreateComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_13__["AdminComponent"],
                _leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_14__["LeaderboardComponent"],
                _trade_trade_component__WEBPACK_IMPORTED_MODULE_15__["TradeComponent"],
                _control_panel_control_panel_component__WEBPACK_IMPORTED_MODULE_16__["ControlPanelComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatListModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/control-panel/control-panel.component.css":
/*!***********************************************************!*\
  !*** ./src/app/control-panel/control-panel.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n  background-color: #3f51b5;\r\n  height: 300px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/control-panel/control-panel.component.html":
/*!************************************************************!*\
  !*** ./src/app/control-panel/control-panel.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <button mat-raised-button >Advance Scene</button>\n</div>\n"

/***/ }),

/***/ "./src/app/control-panel/control-panel.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/control-panel/control-panel.component.ts ***!
  \**********************************************************/
/*! exports provided: ControlPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlPanelComponent", function() { return ControlPanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ControlPanelComponent = /** @class */ (function () {
    function ControlPanelComponent() {
    }
    ControlPanelComponent.prototype.ngOnInit = function () {
    };
    ControlPanelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-control-panel',
            template: __webpack_require__(/*! ./control-panel.component.html */ "./src/app/control-panel/control-panel.component.html"),
            styles: [__webpack_require__(/*! ./control-panel.component.css */ "./src/app/control-panel/control-panel.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ControlPanelComponent);
    return ControlPanelComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-fill-remaining-space {\r\n  flex: 1 1 auto;\r\n}\r\n\r\n.container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.invest-board {\r\n  margin: 15px auto;\r\n  background-color: rgb(233, 233, 233);\r\n  border-radius: 0px;\r\n}\r\n\r\ninput[type=\"number\"] {\r\n  max-width: 200px;\r\n  width: 80%;\r\n  height:20px;\r\n}\r\n\r\n.small-screen {\r\n  display: none;\r\n}\r\n\r\n.wide-screen {\r\n  display: flex;\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n  .small-screen {\r\n    display: flex;\r\n  }\r\n  .wide-screen {\r\n    display: none;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <span>Kingsroad</span>\n\n  <!-- This fills the remaining space of the current row -->\n  <span class=\"example-fill-remaining-space\"></span>\n\n  <span class=\"small-screen\">\n    <button mat-button [matMenuTriggerFor]=\"menu\">Menu</button>\n    <mat-menu #menu=\"matMenu\">\n      <button mat-menu-item (click)=\"logout()\">Logout</button>\n    </mat-menu>\n  </span>\n  <span class=\"wide-screen\">\n    <button mat-button (click)=\"logout()\">Logout</button>\n  </span>\n</mat-toolbar>\n\n<div class=\"container\">\n  <mat-card class=\"invest-board .mat-elevation-z0\">\n    <mat-card-title>\n      Round: {{round_number}}\n    </mat-card-title>\n    <mat-card-content>\n      <p class=\"points\">Available Points: {{points}}</p>\n\n      <mat-form-field appearance=\"outline\">\n        <mat-label>Food</mat-label>\n        <input matInput type=\"number\" min=\"0\" />\n      </mat-form-field>\n\n      <br>\n\n      <mat-form-field appearance=\"outline\">\n        <mat-label>Milirary</mat-label>\n        <input matInput type=\"number\" min=\"0\" />\n      </mat-form-field>\n\n      <br>\n\n      <mat-form-field appearance=\"outline\">\n        <mat-label>Research</mat-label>\n        <input matInput type=\"number\" min=\"0\" />\n      </mat-form-field>\n\n      <br>\n\n      <mat-card-actions>\n        <button mat-raised-button color=\"primary\">Invest</button>\n        <button mat-raised-button >Clear</button>\n      </mat-card-actions>\n\n    </mat-card-content>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(router) {
        this.router = router;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.username = sessionStorage.getItem('username');
    };
    DashboardComponent.prototype.logout = function () {
        sessionStorage.clear();
        this.router.navigate(['']);
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-spinner {\r\n  margin: auto;\r\n  top: 45vw;\r\n}\r\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-spinner [diameter]=\"40\"></mat-spinner>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(router) {
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
        if (sessionStorage.getItem('currentUser') === 'null' ||
            sessionStorage.getItem('currentUser') === null) {
            this.router.navigate(['login']);
        }
        else if (sessionStorage.getItem('teamid') === 'null' ||
            sessionStorage.getItem('currentUser') === null) {
            this.router.navigate(['create-team']);
        }
        else {
            this.router.navigate(['dashboard']);
        }
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/leaderboard/leaderboard.component.css":
/*!*******************************************************!*\
  !*** ./src/app/leaderboard/leaderboard.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fill {\r\n  flex: 1 1 auto;\r\n}\r\n\r\n\r\n.teamname {\r\n  font-weight: 200;\r\n  font-size: 16px;\r\n  margin-left: 10px;\r\n}\r\n\r\n\r\n.teamdetails {\r\n  font-size: 12px;\r\n  margin-left: 10px;\r\n}\r\n\r\n\r\nmat-list {\r\n  overflow: auto;\r\n  height: 400px;\r\n  margin: 2px;\r\n}\r\n\r\n\r\nmat-toolbar {\r\n  border-radius: 10px 10px 0px 0px;\r\n}\r\n\r\n\r\nbutton {\r\n  border-radius: 20px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/leaderboard/leaderboard.component.html":
/*!********************************************************!*\
  !*** ./src/app/leaderboard/leaderboard.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar  class=\"header\">\n  <span>Leaderboard</span>\n  <span class=\"fill\"></span>\n  <span><button mat-stroked-button (click)=\"refreshLeaderboard()\">Refresh</button></span>\n</mat-toolbar>\n\n\n<div class=\"container\">\n  <mat-list>\n    <mat-list-item *ngFor=\"let team of teams; let i = index\">\n      {{i+1}}) <div class=\"teamname\"> {{team.teamname}} </div>\n      <div class=\"teamdetails\">\n       {{team.gold}}\n      </div>\n    </mat-list-item>\n  </mat-list>\n</div>\n"

/***/ }),

/***/ "./src/app/leaderboard/leaderboard.component.ts":
/*!******************************************************!*\
  !*** ./src/app/leaderboard/leaderboard.component.ts ***!
  \******************************************************/
/*! exports provided: LeaderboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaderboardComponent", function() { return LeaderboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../admin.service */ "./src/app/admin.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LeaderboardComponent = /** @class */ (function () {
    function LeaderboardComponent(adminService) {
        this.adminService = adminService;
        this.teams = [];
    }
    LeaderboardComponent.prototype.ngOnInit = function () {
        this.refreshLeaderboard();
    };
    LeaderboardComponent.prototype.refreshLeaderboard = function () {
        var _this = this;
        this.adminService.getLeaderboard().subscribe(function (response) {
            console.log(response);
            _this.teams = response.leaderboard;
        });
    };
    LeaderboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-leaderboard',
            template: __webpack_require__(/*! ./leaderboard.component.html */ "./src/app/leaderboard/leaderboard.component.html"),
            styles: [__webpack_require__(/*! ./leaderboard.component.css */ "./src/app/leaderboard/leaderboard.component.css")]
        }),
        __metadata("design:paramtypes", [_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"]])
    ], LeaderboardComponent);
    return LeaderboardComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background {\r\n  width: 100vw;\r\n  height: 100vh;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 0;\r\n  background-color: rgb(248, 248, 248);\r\n}\r\n\r\n.login-container {\r\n  top: 10vw;\r\n  z-index: 1;\r\n  margin: auto;\r\n  padding: 35px;\r\n  width: 70%;\r\n  max-width: 400px;\r\n}\r\n\r\nmat-card-title {\r\n  text-align: center;\r\n}\r\n\r\nform, mat-form-field {\r\n  width: 100%;\r\n}\r\n\r\nbutton {\r\n  margin: 10px;\r\n}\r\n\r\n.title {\r\n  text-align: center;\r\n  font-family: serif;\r\n}\r\n\r\n.error-message {\r\n  font-size: 16px;\r\n  color: red;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"background\">\n</div>\n<mat-card class=\"login-container\">\n  <mat-card-title>Login</mat-card-title>\n  <br>\n  <mat-card-content>\n\n  <form #form=\"ngForm\">\n    <mat-form-field appearance=\"outline\">\n      <mat-label>Username</mat-label>\n      <input\n        type=\"text\"\n        matInput\n        name=\"username\"\n        autocomplete=\"off\"\n        [(ngModel)]=\"username\">\n    </mat-form-field>\n\n    <br><br>\n\n    <mat-form-field appearance=\"outline\">\n      <mat-label>Password</mat-label>\n      <input\n        matInput\n        type=\"password\"\n        name=\"password\"\n        [(ngModel)]=\"password\">\n    </mat-form-field>\n\n    <br><br>\n\n    <div class=\"error-message\" *ngIf=\"showError\">\n      {{errorText}}\n    </div>\n\n    <button\n      mat-raised-button\n      color=\"primary\"\n      type=\"button\"\n      (click)=\"onLogin()\">Login</button>\n    <button\n      mat-stroked-button\n      routerLink=\"/register\"\n      type=\"button\">Register</button>\n  </form>\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.showError = false;
        this.errorText = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        this.userService.loginUser(this.username, this.password)
            .subscribe(function (resData) {
            console.log(resData);
            if (resData.status === 200) {
                _this.showError = false;
                sessionStorage.setItem('currentUser', resData.user);
                sessionStorage.setItem('username', resData.username);
                sessionStorage.setItem('teamid', resData.teamid);
                if (resData.teamid == null) {
                    _this.router.navigate(['create-team']);
                }
                else {
                    _this.router.navigate(['dashboard']);
                }
            }
            else {
                _this.showError = true;
                _this.errorText = 'Username or Password is invalid';
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background {\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgb(248, 248, 248);\r\n  position: fixed;\r\n}\r\n\r\n.login-container {\r\n  top: 5vw;\r\n  margin: auto;\r\n  padding: 25px;\r\n  width: 80%;\r\n  max-width: 500px;\r\n}\r\n\r\nmat-card-title {\r\n  text-align: center;\r\n}\r\n\r\nform, mat-form-field {\r\n  width: 100%;\r\n}\r\n\r\nbutton {\r\n  margin: 10px;\r\n}\r\n\r\n.title {\r\n  text-align: center;\r\n  font-family: serif;\r\n}\r\n\r\n.error-message {\r\n  font-size: 16px;\r\n  color: red;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"background\"></div>\n<mat-card class=\"login-container\">\n  <mat-card-title>Register</mat-card-title>\n  <br>\n  <mat-card-content>\n\n  <form #form=\"ngForm\">\n    <mat-form-field appearance=\"outline\">\n    <mat-label>Username</mat-label>\n    <input\n      matInput\n      type=\"text\"\n      name=\"username\"\n      [(ngModel)]=\"username\">\n    </mat-form-field>\n\n    <br>\n    <mat-form-field appearance=\"outline\">\n    <mat-label>Email</mat-label>\n    <input\n      matInput\n      type=\"email\"\n      name=\"email\"\n      [(ngModel)]=\"email\">\n    </mat-form-field>\n\n    <br>\n    <mat-form-field appearance=\"outline\">\n      <mat-label>Password</mat-label>\n      <input\n        matInput\n        type=\"password\"\n        name=\"password\"\n        [(ngModel)]=\"password\">\n    </mat-form-field>\n\n    <div class=\"error-message\" *ngIf=\"showError\">\n      {{errorText}}\n    </div>\n\n    <button\n      mat-raised-button\n      color=\"primary\"\n      (click)=\"onRegister()\"\n      type=\"submit\">Register</button>\n    <button\n      mat-button\n      routerLink = \"\"\n      type=\"button\">Login</button>\n  </form>\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.showError = false;
        this.errorText = '';
    }
    RegisterComponent.prototype.ngOnInit = function () {
        sessionStorage.removeItem('currentUser');
    };
    RegisterComponent.prototype.onRegister = function () {
        var _this = this;
        this.userService.registerUser(this.username, this.email, this.password)
            .subscribe(function (resData) {
            if (resData.status === 200) {
                _this.showError = false;
                sessionStorage.setItem('currentUser', resData.user_id);
                sessionStorage.setItem('username', resData.username);
                _this.router.navigate(['create-team']);
            }
            else {
                _this.showError = true;
                _this.errorText = 'Username already exists';
            }
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/team-create/team-create.component.css":
/*!*******************************************************!*\
  !*** ./src/app/team-create/team-create.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n  margin: auto;\r\n  margin-top: 20px;\r\n  max-width: 500px;\r\n  width: 80%;\r\n}\r\n\r\nh1 {\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 20px;\r\n  font-weight: 200;\r\n  margin-bottom: 40px;\r\n}\r\n\r\nh2 {\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 16px;\r\n  font-weight: 200;\r\n}\r\n\r\nh3 {\r\n  font-size: 16px;\r\n  font-weight: 300;\r\n  color: #272727\r\n}\r\n\r\nbutton {\r\n  margin: 10px;\r\n  padding: 5px 25px 5px 25px;\r\n  border-radius: 25px;\r\n}\r\n\r\n.info-text {\r\n  font-size: 16px;\r\n  font-weight: 200;\r\n  color: #3d3d3d;\r\n}\r\n\r\n.error-message {\r\n  color: white;\r\n  background-color: #d41111;\r\n  border-radius: 15px;\r\n  padding: 12px;\r\n  font-size: 18px;\r\n  max-width: 80%;\r\n  box-shadow: 1px 1px 5px 0px #868484;\r\n}\r\n\r\n.logout-button {\r\n  position: fixed;\r\n  top: 5px;\r\n  right: 20px;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 18px;\r\n  cursor: pointer;\r\n  z-index: 5;\r\n}\r\n"

/***/ }),

/***/ "./src/app/team-create/team-create.component.html":
/*!********************************************************!*\
  !*** ./src/app/team-create/team-create.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"logout-button\" (click)=\"onLogout()\">\n  Logout\n</div>\n\n<mat-card class=\"container .mat-elevation-z0\">\n\n  <h1>Welcome {{username}}</h1>\n\n <div *ngIf=\"!createTeamMode\">\n    <h2>You are not part of any team yet</h2>\n\n    <button mat-stroked-button\n      type=\"button\" (click)=\"createTeamMode = true\">Create New Team</button>\n\n  </div>\n\n  <div *ngIf=\"createTeamMode\">\n    <mat-form-field appearance=\"outline\">\n        <mat-label>Team Name</mat-label>\n        <input matInput type=\"text\" [(ngModel)]=\"teamname\">\n      </mat-form-field>\n\n    <h2>Enter Usernames of your team members </h2>\n    <p class=\"info-text\">\n      Note: The team members should have already registerd.\n      If not, please ask them to register first and then proceed.\n    </p>\n\n    <p>Team Member 1: {{username}}</p>\n\n    <br>\n\n    <mat-form-field appearance=\"outline\">\n      <mat-label>Team Member 2</mat-label>\n      <input matInput type=\"text\" [(ngModel)]=\"username2\">\n    </mat-form-field>\n\n    <br>\n\n    <mat-form-field appearance=\"outline\">\n      <mat-label>Team Member 3</mat-label>\n      <input matInput type=\"text\" [(ngModel)]=\"username3\">\n    </mat-form-field>\n\n    <br>\n\n    <mat-form-field appearance=\"outline\">\n      <mat-label>Team Member 4</mat-label>\n      <input matInput type=\"text\" [(ngModel)]=\"username4\">\n    </mat-form-field>\n\n    <br>\n\n    <div class=\"error-message\" *ngIf=\"showError\">\n      {{errorText}}\n    </div>\n\n    <button mat-stroked-button\n      color=\"primary\"\n      type=\"button\"\n      (click)=\"onCreateTeam()\">Create</button>\n\n  </div>\n\n</mat-card>\n"

/***/ }),

/***/ "./src/app/team-create/team-create.component.ts":
/*!******************************************************!*\
  !*** ./src/app/team-create/team-create.component.ts ***!
  \******************************************************/
/*! exports provided: TeamCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamCreateComponent", function() { return TeamCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TeamCreateComponent = /** @class */ (function () {
    function TeamCreateComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.createTeamMode = false;
        this.showError = false;
        this.errorText = '';
    }
    TeamCreateComponent.prototype.ngOnInit = function () {
        this.username = sessionStorage.getItem('username');
    };
    TeamCreateComponent.prototype.onCreateTeam = function () {
        var _this = this;
        this.userService.createTeam(this.teamname, this.username, this.username2, this.username3, this.username4).subscribe(function (resData) {
            console.log(resData);
            if (resData.status === 200) {
                _this.showError = false;
            }
            else {
                _this.showError = true;
                _this.errorText = resData.message;
            }
        });
    };
    TeamCreateComponent.prototype.onLogout = function () {
        sessionStorage.removeItem('currentUser');
        sessionStorage.removeItem('teamid');
        sessionStorage.removeItem('username');
        this.router.navigate(['']);
    };
    TeamCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-team-create',
            template: __webpack_require__(/*! ./team-create.component.html */ "./src/app/team-create/team-create.component.html"),
            styles: [__webpack_require__(/*! ./team-create.component.css */ "./src/app/team-create/team-create.component.css")]
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], TeamCreateComponent);
    return TeamCreateComponent;
}());



/***/ }),

/***/ "./src/app/trade/trade.component.css":
/*!*******************************************!*\
  !*** ./src/app/trade/trade.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n  margin: 10px;\r\n}\r\n\r\n\r\nmat-toolbar {\r\n  border-radius: 10px 10px 0px 0px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/trade/trade.component.html":
/*!********************************************!*\
  !*** ./src/app/trade/trade.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"header\">\n    <span>Trade</span>\n    <span class=\"fill\"></span>\n</mat-toolbar>\n\n<div class=\"container\">\n  <mat-form-field appearance=\"outline\">\n    <mat-label>From Teamname</mat-label>\n    <input matInput type=\"text\" [(ngModel)]=\"from\"/>\n  </mat-form-field>\n\n  <br>\n\n  <mat-form-field appearance=\"outline\">\n    <mat-label>To Teamname</mat-label>\n    <input matInput type=\"text\" [(ngModel)]=\"to\"/>\n  </mat-form-field>\n\n  <br>\n\n  <mat-form-field appearance=\"outline\">\n    <mat-label>Food</mat-label>\n    <input matInput type=\"number\" min=\"0\" [(ngModel)]=\"food\"/>\n  </mat-form-field>\n\n  <mat-form-field appearance=\"outline\">\n    <mat-label>Military</mat-label>\n    <input matInput type=\"number\" min=\"0\" [(ngModel)]=\"military\"/>\n  </mat-form-field>\n\n  <br>\n\n  <button mat-raised-button color=\"primary\">Trade</button>\n</div>\n"

/***/ }),

/***/ "./src/app/trade/trade.component.ts":
/*!******************************************!*\
  !*** ./src/app/trade/trade.component.ts ***!
  \******************************************/
/*! exports provided: TradeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradeComponent", function() { return TradeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TradeComponent = /** @class */ (function () {
    function TradeComponent() {
    }
    TradeComponent.prototype.ngOnInit = function () {
    };
    TradeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-trade',
            template: __webpack_require__(/*! ./trade.component.html */ "./src/app/trade/trade.component.html"),
            styles: [__webpack_require__(/*! ./trade.component.css */ "./src/app/trade/trade.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TradeComponent);
    return TradeComponent;
}());



/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(http, router) {
        this.http = http;
        this.router = router;
    }
    UserService.prototype.registerUser = function (username, email, password) {
        var userData = {
            username: username,
            email: email,
            password: password
        };
        return this.http.post('http://localhost:3000/api/register', userData);
    };
    UserService.prototype.loginUser = function (_username, _password) {
        var userData = {
            username: _username,
            password: _password
        };
        return this.http.post('http://localhost:3000/api/login', userData);
    };
    UserService.prototype.createTeam = function (teamname, username1, username2, username3, username4) {
        return this.http.post('http://localhost:3000/api/register/team', {
            teamname: teamname,
            username1: username1,
            username2: username2,
            username3: username3,
            username4: username4
        });
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UserService);
    return UserService;
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

module.exports = __webpack_require__(/*! C:\Users\Bavish\Desktop\Kingsroad-MI\kingsroad\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map