"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_folder_folder_module_ts"],{

/***/ 59771:
/*!*************************************************!*\
  !*** ./src/app/folder/folder-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FolderPageRoutingModule": () => (/* binding */ FolderPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _folder_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./folder.page */ 48470);




const routes = [
    {
        path: '',
        component: _folder_page__WEBPACK_IMPORTED_MODULE_0__.FolderPage
    }
];
let FolderPageRoutingModule = class FolderPageRoutingModule {
};
FolderPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FolderPageRoutingModule);



/***/ }),

/***/ 3412:
/*!*****************************************!*\
  !*** ./src/app/folder/folder.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FolderPageModule": () => (/* binding */ FolderPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _folder_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./folder-routing.module */ 59771);
/* harmony import */ var _folder_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./folder.page */ 48470);







let FolderPageModule = class FolderPageModule {
};
FolderPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _folder_routing_module__WEBPACK_IMPORTED_MODULE_0__.FolderPageRoutingModule
        ],
        declarations: [_folder_page__WEBPACK_IMPORTED_MODULE_1__.FolderPage]
    })
], FolderPageModule);



/***/ }),

/***/ 48470:
/*!***************************************!*\
  !*** ./src/app/folder/folder.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FolderPage": () => (/* binding */ FolderPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _folder_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./folder.page.html?ngResource */ 84394);
/* harmony import */ var _folder_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./folder.page.scss?ngResource */ 46518);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _app_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.page */ 75162);
/* harmony import */ var _app_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.store */ 94827);








let FolderPage = class FolderPage extends _app_page__WEBPACK_IMPORTED_MODULE_2__.PageBase {
    constructor(activatedRoute, appStore, navCtrl, route) {
        super(appStore, navCtrl, route);
        this.activatedRoute = activatedRoute;
        this.appStore = appStore;
        this.navCtrl = navCtrl;
        this.route = route;
        this.isPlaying = false;
    }
    ngOnInit() {
        this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    }
    playVideo() {
        this.isPlaying = true;
        document.getElementById('video').play();
    }
};
FolderPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _app_store__WEBPACK_IMPORTED_MODULE_3__.AppStore },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute }
];
FolderPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-folder',
        template: _folder_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_folder_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FolderPage);



/***/ }),

/***/ 46518:
/*!****************************************************!*\
  !*** ./src/app/folder/folder.page.scss?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = ".inner-toolbar {\n  position: absolute;\n  top: 10px;\n  right: 6px;\n  width: auto !important;\n  background: none !important;\n  background-color: transparent !important;\n}\n.inner-toolbar .toolbar-container {\n  width: auto !important;\n}\n.inner-toolbar .inner-buttons {\n  color: rgba(25, 102, 44, 0.6);\n  margin-right: 12px;\n  height: 48px;\n  width: 48px;\n}\n.inner-toolbar .inner-buttons ion-menu-button {\n  display: block !important;\n  margin: 0 auto !important;\n}\nion-content {\n  background: url('back2.jpg') no-repeat center center fixed;\n  background-size: cover;\n}\nion-menu-button {\n  --ion-color-primary: #b9eeb8;\n  position: absolute;\n  left: -10px;\n  top: 0px;\n}\n.psf {\n  position: fixed;\n  right: 0;\n  top: 0;\n}\n.flex {\n  display: flex;\n}\n.flex-between {\n  justify-content: space-between;\n}\n.flex-around {\n  justify-content: space-around;\n}\n.flex-center {\n  justify-content: center;\n}\n.align-bottom {\n  align-items: baseline;\n}\n#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n#container a {\n  text-decoration: none;\n}\n.wrap {\n  color: #070707;\n  padding: 20px 25px;\n  position: relative;\n}\n.wrap > .tit,\n.wrap > .tit_t {\n  text-align: center;\n}\n.wrap > .tit {\n  font-size: 32px;\n}\n.wrap > .tit_t {\n  font-size: 28px;\n  margin-bottom: 15px;\n}\n.wrap > .subtit {\n  font-size: 28px;\n  margin-bottom: 15px;\n  text-align: center;\n}\n.wrap > .subtit_t {\n  font-size: 20px;\n  margin-bottom: 15px;\n  text-align: center;\n}\n.wrap .cont {\n  border-radius: 10px;\n  border: 2px solid #25a306;\n  padding: 20px;\n  position: relative;\n}\n.wrap .cont .video {\n  width: 100%;\n  height: 600px;\n}\n.wrap .cont .play,\n.wrap .cont ion-icon {\n  font-size: 128px;\n  color: #1a6308;\n}\n.wrap .cont .play {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 99999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvbGRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFNQSwyQkFBQTtFQUNBLHdDQUFBO0FBSkY7QUFERTtFQUNFLHNCQUFBO0FBR0o7QUFHRTtFQUNFLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQURKO0FBR0k7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0FBRE47QUFNQTtFQUNFLDBEQUFBO0VBQ0Esc0JBQUE7QUFIRjtBQU1BO0VBQ0UsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0FBSEY7QUFNQTtFQUNFLGVBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtBQUhGO0FBTUE7RUFDRSxhQUFBO0FBSEY7QUFNQTtFQUNFLDhCQUFBO0FBSEY7QUFNQTtFQUNFLDZCQUFBO0FBSEY7QUFNQTtFQUNFLHVCQUFBO0FBSEY7QUFNQTtFQUNFLHFCQUFBO0FBSEY7QUFNQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQUhGO0FBTUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFIRjtBQU1BO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7QUFIRjtBQU1BO0VBQ0UscUJBQUE7QUFIRjtBQU1BO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFIRjtBQUtFOztFQUVFLGtCQUFBO0FBSEo7QUFNRTtFQUNFLGVBQUE7QUFKSjtBQU9FO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FBTEo7QUFRRTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBTko7QUFTRTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBUEo7QUFVRTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFSSjtBQVVJO0VBQ0UsV0FBQTtFQUNBLGFBQUE7QUFSTjtBQVVJOztFQUVFLGdCQUFBO0VBQ0EsY0FBQTtBQVJOO0FBVUk7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxjQUFBO0FBUk4iLCJmaWxlIjoiZm9sZGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbm5lci10b29sYmFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIHJpZ2h0OiA2cHg7XG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG5cbiAgLnRvb2xiYXItY29udGFpbmVyIHtcbiAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xuICB9XG5cbiAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuXG4gIC5pbm5lci1idXR0b25zIHtcbiAgICBjb2xvcjogcmdiYSgyNSwgMTAyLCA0NCwgMC42KTtcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gICAgaGVpZ2h0OiA0OHB4O1xuICAgIHdpZHRoOiA0OHB4O1xuXG4gICAgaW9uLW1lbnUtYnV0dG9uIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gICAgICBtYXJnaW46IDAgYXV0byAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxufVxuXG5pb24tY29udGVudCB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvYmFjazIuanBnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuaW9uLW1lbnUtYnV0dG9uIHtcbiAgLS1pb24tY29sb3ItcHJpbWFyeTogI2I5ZWViODtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAtMTBweDtcbiAgdG9wOiAwcHg7XG59XG5cbi5wc2Yge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG59XG5cbi5mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmZsZXgtYmV0d2VlbiB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmZsZXgtYXJvdW5kIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbi5mbGV4LWNlbnRlciB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uYWxpZ24tYm90dG9tIHtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xufVxuXG4jY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGNvbG9yOiAjOGM4YzhjO1xuICBtYXJnaW46IDA7XG59XG5cbiNjb250YWluZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLndyYXAge1xuICBjb2xvcjogIzA3MDcwNztcbiAgcGFkZGluZzogMjBweCAyNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgPiAudGl0LFxuICA+IC50aXRfdCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgPiAudGl0IHtcbiAgICBmb250LXNpemU6IDMycHg7XG4gIH1cblxuICA+IC50aXRfdCB7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIH1cblxuICA+IC5zdWJ0aXQge1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gID4gLnN1YnRpdF90IHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAuY29udCB7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMjVhMzA2O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgLnZpZGVvIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiA2MDBweDtcbiAgICB9XG4gICAgLnBsYXksXG4gICAgaW9uLWljb24ge1xuICAgICAgZm9udC1zaXplOiAxMjhweDtcbiAgICAgIGNvbG9yOiAjMWE2MzA4O1xuICAgIH1cbiAgICAucGxheSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDUwJTtcbiAgICAgIGxlZnQ6IDUwJTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgei1pbmRleDogOTk5OTk7XG4gICAgfVxuICB9XG59XG4iXX0= */";

/***/ }),

/***/ 84394:
/*!****************************************************!*\
  !*** ./src/app/folder/folder.page.html?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <ion-toolbar class=\"inner-toolbar\">\n    <ion-title></ion-title>\n    <ion-buttons class=\"inner-buttons\" slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <div class=\"wrap\">\n    <div class=\"tit\">学英语</div>\n    <div class=\"tit_t\">English Learning</div>\n    <div class=\"cont\">\n      <div class=\"subtit\">活学活用，学以致用</div>\n      <div class=\"subtit_t\">Live and apply what you have learned</div>\n    </div>\n    <div class=\"cont\">\n      <ion-icon *ngIf=\"!isPlaying\" class=\"play\" name=\"play-circle-outline\" (click)=\"playVideo()\"></ion-icon>\n      <video id=\"video\" controls class=\"video\" poster=\"../../assets/farewell.jpg\">\n        <source  src=\"../../assets/video/video.mp3\" id=\"videoSourceO\"\n                type=\"video/mp4\">\n      \n        您的浏览器不支持 HTML5 video 标签。\n      </video>\n    </div>\n  </div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_folder_folder_module_ts.js.map