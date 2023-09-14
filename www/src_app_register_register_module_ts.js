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

module.exports = ".inner-toolbar {\n  position: absolute;\n  top: 12px;\n  left: 0;\n  width: auto !important;\n  --background: none !important;\n  --background-color: transparent !important;\n}\n.inner-toolbar .toolbar-container {\n  width: auto !important;\n}\n.inner-toolbar .inner-buttons {\n  color: rgba(255, 255, 255, 0.6);\n  padding: 0 14px 0 6px;\n  margin-left: 12px;\n  border-radius: 100px;\n}\nion-content {\n  --background: url('bg.jpg');\n  --background-size: cover;\n}\n.form {\n  margin: 100px auto;\n  background-color: #fff;\n  border-radius: 5px;\n  padding: 15px;\n  width: 80%;\n}\n.form .tit {\n  margin-top: 10px;\n  font-size: 18px;\n  color: #333;\n  margin-bottom: 20px;\n  text-align: center;\n}\n.form .name, .form .psd {\n  margin-bottom: 15px;\n}\n.form .label {\n  width: 80px;\n  font-size: 14px;\n}\n.form input {\n  font-size: 12px;\n  padding-left: 10px;\n  border-radius: 3px;\n  border: 1px solid #ccc;\n  height: 32px;\n  line-height: 32px;\n}\n.form .btn {\n  width: 100%;\n  text-align: center;\n  border-radius: 50px;\n  color: #fff;\n  font-size: 14px;\n  line-height: 40px;\n  margin-bottom: 30px;\n  margin-top: 30px;\n  background-image: linear-gradient(45deg, rgba(255, 69, 22, 0.925), #ff9900);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHRlc3QlMjB3ZWVrXFxlbmdsaXNobGVhcm5pbmdcXGVuZ2xpc2hsZWFybmluZ1xcc3JjXFxhcHBcXHJlZ2lzdGVyXFxyZWdpc3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0Esc0JBQUE7RUFNQSw2QkFBQTtFQUNBLDBDQUFBO0FDSkY7QURERTtFQUNFLHNCQUFBO0FDR0o7QURHRTtFQUNFLCtCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDREo7QURLQTtFQUNJLDJCQUFBO0VBQ0Esd0JBQUE7QUNGSjtBREtFO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7QUNGSjtBREdJO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNETjtBREdJO0VBQ0UsbUJBQUE7QUNETjtBREdJO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUNETjtBREdJO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0ROO0FER0k7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkVBQUE7QUNETiIsImZpbGUiOiJyZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5uZXItdG9vbGJhciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTJweDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XHJcblxyXG4gIC50b29sYmFyLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLS1iYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG5cclxuICAuaW5uZXItYnV0dG9ucyB7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xyXG4gICAgcGFkZGluZzogMCAxNHB4IDAgNnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICB9XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9iZy5qcGcpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIH1cclxuICBcclxuICAuZm9ybSB7XHJcbiAgICBtYXJnaW46IDEwMHB4IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICAudGl0e1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAubmFtZSwucHNke1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgLmxhYmVse1xyXG4gICAgICB3aWR0aDogODBweDtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG4gICAgaW5wdXR7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICAgIGhlaWdodDogMzJweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgICB9XHJcbiAgICAuYnRuIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiYSgyNTUsIDY5LCAyMiwgMC45MjUpLCAjZmY5OTAwKTtcclxuICAgIH1cclxuICB9XHJcbiAgIiwiLmlubmVyLXRvb2xiYXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTJweDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cbi5pbm5lci10b29sYmFyIC50b29sYmFyLWNvbnRhaW5lciB7XG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG59XG4uaW5uZXItdG9vbGJhciAuaW5uZXItYnV0dG9ucyB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG4gIHBhZGRpbmc6IDAgMTRweCAwIDZweDtcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9iZy5qcGcpO1xuICAtLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5mb3JtIHtcbiAgbWFyZ2luOiAxMDBweCBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIHdpZHRoOiA4MCU7XG59XG4uZm9ybSAudGl0IHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogIzMzMztcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmZvcm0gLm5hbWUsIC5mb3JtIC5wc2Qge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLmZvcm0gLmxhYmVsIHtcbiAgd2lkdGg6IDgwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5mb3JtIGlucHV0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgaGVpZ2h0OiAzMnB4O1xuICBsaW5lLWhlaWdodDogMzJweDtcbn1cbi5mb3JtIC5idG4ge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDI1NSwgNjksIDIyLCAwLjkyNSksICNmZjk5MDApO1xufSJdfQ== */";

/***/ }),

/***/ 84754:
/*!********************************************************!*\
  !*** ./src/app/register/register.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "\r\n<ion-content>\r\n  <ion-toolbar class=\"inner-toolbar\">\r\n    <ion-buttons class=\"inner-buttons\" slot=\"start\">\r\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title></ion-title>\r\n  </ion-toolbar>\r\n  \r\n  <div class=\"form\">\r\n    <div class=\"tit\">\r\n      Register\r\n    </div>\r\n    <div class=\"name flex\">\r\n      <div class=\"label \">Phone Number:</div>\r\n      <div class=\"\"><input [(ngModel)]=\"form.account\" type=\"text\"></div>\r\n    </div>\r\n    <!-- <div class=\"psd flex\">\r\n      <div class=\"label \">Password:</div>\r\n      <div class=\"\"><input type=\"password\" [(ngModel)]=\"form.password\"></div>\r\n    </div>\r\n    <div class=\"psd flex\">\r\n      <div class=\"label \">Password:</div>\r\n      <div class=\"\"><input type=\"password\" [(ngModel)]=\"form.rePassword\"></div>\r\n    </div> -->\r\n    <div class=\"btn\" (click)=\"onSubmit()\">\r\n      Register\r\n    </div>\r\n  </div>\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_register_register_module_ts.js.map