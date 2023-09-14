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

module.exports = ".inner-toolbar {\n  position: absolute;\n  top: 10px;\n  right: 6px;\n  width: auto !important;\n  background: none !important;\n  background-color: transparent !important;\n}\n.inner-toolbar .toolbar-container {\n  width: auto !important;\n}\n.inner-toolbar .inner-buttons {\n  color: rgba(25, 102, 44, 0.6);\n  margin-right: 12px;\n  height: 48px;\n  width: 48px;\n}\n.inner-toolbar .inner-buttons ion-menu-button {\n  display: block !important;\n  margin: 0 auto !important;\n}\nion-content {\n  background: url('back2.jpg') no-repeat center center fixed;\n  background-size: cover;\n}\nion-menu-button {\n  --ion-color-primary: #b9eeb8;\n  position: absolute;\n  left: -10px;\n  top: 0px;\n}\n.psf {\n  position: fixed;\n  right: 0;\n  top: 0;\n}\n.flex {\n  display: flex;\n}\n.flex-between {\n  justify-content: space-between;\n}\n.flex-around {\n  justify-content: space-around;\n}\n.flex-center {\n  justify-content: center;\n}\n.align-bottom {\n  align-items: baseline;\n}\n#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n#container a {\n  text-decoration: none;\n}\n.wrap {\n  color: #070707;\n  padding: 20px 25px;\n  position: relative;\n}\n.wrap > .tit,\n.wrap > .tit_t {\n  text-align: center;\n}\n.wrap > .tit {\n  font-size: 32px;\n}\n.wrap > .tit_t {\n  font-size: 28px;\n  margin-bottom: 15px;\n}\n.wrap > .subtit {\n  font-size: 28px;\n  margin-bottom: 15px;\n  text-align: center;\n}\n.wrap > .subtit_t {\n  font-size: 20px;\n  margin-bottom: 15px;\n  text-align: center;\n}\n.wrap .cont {\n  border-radius: 10px;\n  border: 2px solid #25a306;\n  padding: 20px;\n  position: relative;\n}\n.wrap .cont .video {\n  width: 100%;\n  height: 600px;\n}\n.wrap .cont .play,\n.wrap .cont ion-icon {\n  font-size: 128px;\n  color: #1a6308;\n}\n.wrap .cont .play {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 99999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvbGRlci5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFx0ZXN0JTIwd2Vla1xcZW5nbGlzaGxlYXJuaW5nXFxlbmdsaXNobGVhcm5pbmdcXHNyY1xcYXBwXFxmb2xkZXJcXGZvbGRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFNQSwyQkFBQTtFQUNBLHdDQUFBO0FDSkY7QURERTtFQUNFLHNCQUFBO0FDR0o7QURHRTtFQUNFLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0RKO0FER0k7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0FDRE47QURNQTtFQUNFLDBEQUFBO0VBQ0Esc0JBQUE7QUNIRjtBRE1BO0VBQ0UsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0FDSEY7QURNQTtFQUNFLGVBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtBQ0hGO0FETUE7RUFDRSxhQUFBO0FDSEY7QURNQTtFQUNFLDhCQUFBO0FDSEY7QURNQTtFQUNFLDZCQUFBO0FDSEY7QURNQTtFQUNFLHVCQUFBO0FDSEY7QURNQTtFQUNFLHFCQUFBO0FDSEY7QURNQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQ0hGO0FETUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNIRjtBRE1BO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7QUNIRjtBRE1BO0VBQ0UscUJBQUE7QUNIRjtBRE1BO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNIRjtBREtFOztFQUVFLGtCQUFBO0FDSEo7QURNRTtFQUNFLGVBQUE7QUNKSjtBRE9FO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FDTEo7QURRRTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDTko7QURTRTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDUEo7QURVRTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNSSjtBRFVJO0VBQ0UsV0FBQTtFQUNBLGFBQUE7QUNSTjtBRFVJOztFQUVFLGdCQUFBO0VBQ0EsY0FBQTtBQ1JOO0FEVUk7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxjQUFBO0FDUk4iLCJmaWxlIjoiZm9sZGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbm5lci10b29sYmFyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxMHB4O1xyXG4gIHJpZ2h0OiA2cHg7XHJcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcclxuXHJcbiAgLnRvb2xiYXItY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuXHJcbiAgLmlubmVyLWJ1dHRvbnMge1xyXG4gICAgY29sb3I6IHJnYmEoMjUsIDEwMiwgNDQsIDAuNik7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICB3aWR0aDogNDhweDtcclxuXHJcbiAgICBpb24tbWVudS1idXR0b24ge1xyXG4gICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gICAgICBtYXJnaW46IDAgYXV0byAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvYmFjazIuanBnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG5pb24tbWVudS1idXR0b24ge1xyXG4gIC0taW9uLWNvbG9yLXByaW1hcnk6ICNiOWVlYjg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IC0xMHB4O1xyXG4gIHRvcDogMHB4O1xyXG59XHJcblxyXG4ucHNmIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiAwO1xyXG59XHJcblxyXG4uZmxleCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmZsZXgtYmV0d2VlbiB7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uZmxleC1hcm91bmQge1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG59XHJcblxyXG4uZmxleC1jZW50ZXIge1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uYWxpZ24tYm90dG9tIHtcclxuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbn1cclxuXHJcbiNjb250YWluZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB0b3A6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuXHJcbiNjb250YWluZXIgc3Ryb25nIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbn1cclxuXHJcbiNjb250YWluZXIgcCB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gIGNvbG9yOiAjOGM4YzhjO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuI2NvbnRhaW5lciBhIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi53cmFwIHtcclxuICBjb2xvcjogIzA3MDcwNztcclxuICBwYWRkaW5nOiAyMHB4IDI1cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICA+IC50aXQsXHJcbiAgPiAudGl0X3Qge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgPiAudGl0IHtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICB9XHJcblxyXG4gID4gLnRpdF90IHtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgfVxyXG5cclxuICA+IC5zdWJ0aXQge1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gID4gLnN1YnRpdF90IHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuY29udCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzI1YTMwNjtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgLnZpZGVvIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogNjAwcHg7XHJcbiAgICB9XHJcbiAgICAucGxheSxcclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgZm9udC1zaXplOiAxMjhweDtcclxuICAgICAgY29sb3I6ICMxYTYzMDg7XHJcbiAgICB9XHJcbiAgICAucGxheSB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiA1MCU7XHJcbiAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgIHotaW5kZXg6IDk5OTk5O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIuaW5uZXItdG9vbGJhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICByaWdodDogNnB4O1xuICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG4uaW5uZXItdG9vbGJhciAudG9vbGJhci1jb250YWluZXIge1xuICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xufVxuLmlubmVyLXRvb2xiYXIgLmlubmVyLWJ1dHRvbnMge1xuICBjb2xvcjogcmdiYSgyNSwgMTAyLCA0NCwgMC42KTtcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHdpZHRoOiA0OHB4O1xufVxuLmlubmVyLXRvb2xiYXIgLmlubmVyLWJ1dHRvbnMgaW9uLW1lbnUtYnV0dG9uIHtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2JhY2syLmpwZykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbmlvbi1tZW51LWJ1dHRvbiB7XG4gIC0taW9uLWNvbG9yLXByaW1hcnk6ICNiOWVlYjg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTEwcHg7XG4gIHRvcDogMHB4O1xufVxuXG4ucHNmIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xufVxuXG4uZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5mbGV4LWJldHdlZW4ge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5mbGV4LWFyb3VuZCB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG4uZmxleC1jZW50ZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmFsaWduLWJvdHRvbSB7XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbn1cblxuI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuI2NvbnRhaW5lciBzdHJvbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG4jY29udGFpbmVyIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBjb2xvcjogIzhjOGM4YztcbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi53cmFwIHtcbiAgY29sb3I6ICMwNzA3MDc7XG4gIHBhZGRpbmc6IDIwcHggMjVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLndyYXAgPiAudGl0LFxuLndyYXAgPiAudGl0X3Qge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ud3JhcCA+IC50aXQge1xuICBmb250LXNpemU6IDMycHg7XG59XG4ud3JhcCA+IC50aXRfdCB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi53cmFwID4gLnN1YnRpdCB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLndyYXAgPiAuc3VidGl0X3Qge1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi53cmFwIC5jb250IHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyOiAycHggc29saWQgIzI1YTMwNjtcbiAgcGFkZGluZzogMjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLndyYXAgLmNvbnQgLnZpZGVvIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjAwcHg7XG59XG4ud3JhcCAuY29udCAucGxheSxcbi53cmFwIC5jb250IGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAxMjhweDtcbiAgY29sb3I6ICMxYTYzMDg7XG59XG4ud3JhcCAuY29udCAucGxheSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHotaW5kZXg6IDk5OTk5O1xufSJdfQ== */";

/***/ }),

/***/ 84394:
/*!****************************************************!*\
  !*** ./src/app/folder/folder.page.html?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n  <ion-toolbar class=\"inner-toolbar\">\r\n    <ion-title></ion-title>\r\n    <ion-buttons class=\"inner-buttons\" slot=\"end\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n  <div class=\"wrap\">\r\n    <div class=\"tit\">学英语</div>\r\n    <div class=\"tit_t\">English Learning</div>\r\n    <div class=\"cont\">\r\n      <div class=\"subtit\">活学活用，学以致用</div>\r\n      <div class=\"subtit_t\">Live and apply what you have learned</div>\r\n    </div>\r\n    <div class=\"cont\">\r\n      <ion-icon *ngIf=\"!isPlaying\" class=\"play\" name=\"play-circle-outline\" (click)=\"playVideo()\"></ion-icon>\r\n      <video id=\"video\" controls class=\"video\" poster=\"../../assets/farewell.jpg\">\r\n        <source  src=\"../../assets/video/video.mp3\" id=\"videoSourceO\"\r\n                type=\"video/mp4\">\r\n      \r\n        您的浏览器不支持 HTML5 video 标签。\r\n      </video>\r\n    </div>\r\n  </div>\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_folder_folder_module_ts.js.map