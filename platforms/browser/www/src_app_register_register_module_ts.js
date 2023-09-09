"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_register_register_module_ts"],{

/***/ 81880:
/*!*****************************************************!*\
  !*** ./src/app/register/register-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageRoutingModule": () => (/* binding */ RegisterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.page */ 98135);




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_0__.RegisterPage
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ 18723:
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageModule": () => (/* binding */ RegisterPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-routing.module */ 81880);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page */ 98135);







let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _register_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisterPageRoutingModule
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_1__.RegisterPage]
    })
], RegisterPageModule);



/***/ }),

/***/ 98135:
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPage": () => (/* binding */ RegisterPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _register_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.page.html?ngResource */ 84754);
/* harmony import */ var _register_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page.scss?ngResource */ 36219);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _app_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.page */ 75162);
/* harmony import */ var _app_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.store */ 94827);








let RegisterPage = class RegisterPage extends _app_page__WEBPACK_IMPORTED_MODULE_2__.PageBase {
    constructor(appStore, navCtrl, route) {
        super(appStore, navCtrl, route);
        this.appStore = appStore;
        this.navCtrl = navCtrl;
        this.route = route;
        this.form = {
            name: '',
            account: '',
            password: 'xxxxxx',
            rePassword: 'xxxxxx',
        };
        // agree = false;
        this.ccc = '';
    }
    ngOnInit() { }
    onSubmit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            //fixme
            yield this.toast('Register success');
            this.hrefReplace('/login');
        });
    }
};
RegisterPage.ctorParameters = () => [
    { type: _app_store__WEBPACK_IMPORTED_MODULE_3__.AppStore },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute }
];
RegisterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-register',
        template: _register_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_register_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RegisterPage);



/***/ }),

/***/ 36219:
/*!********************************************************!*\
  !*** ./src/app/register/register.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = ".inner-toolbar {\n  position: absolute;\n  top: 12px;\n  left: 0;\n  width: auto !important;\n  --background: none !important;\n  --background-color: transparent !important;\n}\n.inner-toolbar .toolbar-container {\n  width: auto !important;\n}\n.inner-toolbar .inner-buttons {\n  color: rgba(255, 255, 255, 0.6);\n  padding: 0 14px 0 6px;\n  margin-left: 12px;\n  border-radius: 100px;\n}\nion-content {\n  --background: url('bg.jpg');\n  --background-size: cover;\n}\n.form {\n  margin: 100px auto;\n  background-color: #fff;\n  border-radius: 5px;\n  padding: 15px;\n  width: 80%;\n}\n.form .tit {\n  margin-top: 10px;\n  font-size: 18px;\n  color: #333;\n  margin-bottom: 20px;\n  text-align: center;\n}\n.form .name, .form .psd {\n  margin-bottom: 15px;\n}\n.form .label {\n  width: 80px;\n  font-size: 14px;\n}\n.form input {\n  font-size: 12px;\n  padding-left: 10px;\n  border-radius: 3px;\n  border: 1px solid #ccc;\n  height: 32px;\n  line-height: 32px;\n}\n.form .btn {\n  width: 100%;\n  text-align: center;\n  border-radius: 50px;\n  color: #fff;\n  font-size: 14px;\n  line-height: 40px;\n  margin-bottom: 30px;\n  margin-top: 30px;\n  background-image: linear-gradient(45deg, rgba(255, 69, 22, 0.925), #ff9900);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxzQkFBQTtFQU1BLDZCQUFBO0VBQ0EsMENBQUE7QUFKRjtBQURFO0VBQ0Usc0JBQUE7QUFHSjtBQUdFO0VBQ0UsK0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFESjtBQUtBO0VBQ0ksMkJBQUE7RUFDQSx3QkFBQTtBQUZKO0FBS0U7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtBQUZKO0FBR0k7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUROO0FBR0k7RUFDRSxtQkFBQTtBQUROO0FBR0k7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQUROO0FBR0k7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBRE47QUFHSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyRUFBQTtBQUROIiwiZmlsZSI6InJlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbm5lci10b29sYmFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEycHg7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG5cbiAgLnRvb2xiYXItY29udGFpbmVyIHtcbiAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xuICB9XG5cbiAgLS1iYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcblxuICAuaW5uZXItYnV0dG9ucyB7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbiAgICBwYWRkaW5nOiAwIDE0cHggMCA2cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEycHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIH1cbn1cblxuaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9iZy5qcGcpO1xuICAgIC0tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgfVxuICBcbiAgLmZvcm0ge1xuICAgIG1hcmdpbjogMTAwcHggYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIHdpZHRoOiA4MCU7XG4gICAgLnRpdHtcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBjb2xvcjogIzMzMztcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIC5uYW1lLC5wc2R7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIH1cbiAgICAubGFiZWx7XG4gICAgICB3aWR0aDogODBweDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gICAgaW5wdXR7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XG4gICAgfVxuICAgIC5idG4ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDI1NSwgNjksIDIyLCAwLjkyNSksICNmZjk5MDApO1xuICAgIH1cbiAgfVxuICAiXX0= */";

/***/ }),

/***/ 84754:
/*!********************************************************!*\
  !*** ./src/app/register/register.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "\n<ion-content>\n  <ion-toolbar class=\"inner-toolbar\">\n    <ion-buttons class=\"inner-buttons\" slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title></ion-title>\n  </ion-toolbar>\n  \n  <div class=\"form\">\n    <div class=\"tit\">\n      Register\n    </div>\n    <div class=\"name flex\">\n      <div class=\"label \">Phone Number:</div>\n      <div class=\"\"><input [(ngModel)]=\"form.account\" type=\"text\"></div>\n    </div>\n    <!-- <div class=\"psd flex\">\n      <div class=\"label \">Password:</div>\n      <div class=\"\"><input type=\"password\" [(ngModel)]=\"form.password\"></div>\n    </div>\n    <div class=\"psd flex\">\n      <div class=\"label \">Password:</div>\n      <div class=\"\"><input type=\"password\" [(ngModel)]=\"form.rePassword\"></div>\n    </div> -->\n    <div class=\"btn\" (click)=\"onSubmit()\">\n      Register\n    </div>\n  </div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_register_register_module_ts.js.map