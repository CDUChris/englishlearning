"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_theme-create_create_module_ts"],{

/***/ 59411:
/*!*******************************************************!*\
  !*** ./src/app/theme-create/create-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemeCreatePageRoutingModule": () => (/* binding */ ThemeCreatePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _create_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.page */ 38240);




const routes = [
    {
        path: '',
        component: _create_page__WEBPACK_IMPORTED_MODULE_0__.ThemeCreatePage
    }
];
let ThemeCreatePageRoutingModule = class ThemeCreatePageRoutingModule {
};
ThemeCreatePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ThemeCreatePageRoutingModule);



/***/ }),

/***/ 626:
/*!***********************************************!*\
  !*** ./src/app/theme-create/create.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemeCreatePageModule": () => (/* binding */ ThemeCreatePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _create_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-routing.module */ 59411);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _create_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.page */ 38240);







let ThemeCreatePageModule = class ThemeCreatePageModule {
};
ThemeCreatePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _create_routing_module__WEBPACK_IMPORTED_MODULE_0__.ThemeCreatePageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        ],
        declarations: [_create_page__WEBPACK_IMPORTED_MODULE_1__.ThemeCreatePage]
    })
], ThemeCreatePageModule);



/***/ }),

/***/ 38240:
/*!*********************************************!*\
  !*** ./src/app/theme-create/create.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemeCreatePage": () => (/* binding */ ThemeCreatePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _create_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.page.html?ngResource */ 93634);
/* harmony import */ var _create_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.page.scss?ngResource */ 60622);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_config_firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/config/firebase */ 71669);
/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @firebase/firestore */ 17448);
/* harmony import */ var _app_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.page */ 75162);
/* harmony import */ var _app_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app.store */ 94827);











//Tab 2 to add new word to database
let ThemeCreatePage = class ThemeCreatePage extends _app_page__WEBPACK_IMPORTED_MODULE_4__.PageBase {
    constructor(loadingCtrl, alertCtrl, formBuilder, appStore, navCtrl, route) {
        super(appStore, navCtrl, route);
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.appStore = appStore;
        this.navCtrl = navCtrl;
        this.route = route;
        this.createWordForm = formBuilder.group({
            topic: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            translate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
        });
    }
    ngOnInit() {
    }
    createTheme() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create();
            /// {"Topic":"运动会","Translate":"sports competition"}
            const topic = this.createWordForm.value.topic;
            const translate = this.createWordForm.value.translate;
            const db = (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getFirestore)(src_config_firebase__WEBPACK_IMPORTED_MODULE_2__.firebaseApp);
            const querySnapshot = yield (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDocs)((0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(db, 'DropDownList'));
            let id = 0;
            querySnapshot.forEach((doc) => {
                let did = Number(doc.id);
                id = Math.max(id, isNaN(did) ? 0 : did);
            });
            id++;
            console.log(id, id);
            (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.setDoc)((0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(db, 'DropDownList', '' + id), {
                id: '' + id,
                uid: this.$sess.uid,
                Topic: topic,
                Translate: translate,
            }).then(() => {
                loading.dismiss().then(() => {
                    this.navCtrl.pop();
                });
            }, (error) => {
                loading.dismiss().then(() => {
                    console.error(error);
                });
            });
            return yield loading.present();
        });
    }
};
ThemeCreatePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: _app_store__WEBPACK_IMPORTED_MODULE_5__.AppStore },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute }
];
ThemeCreatePage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-create',
        template: _create_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_create_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ThemeCreatePage);



/***/ }),

/***/ 60622:
/*!**********************************************************!*\
  !*** ./src/app/theme-create/create.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 93634:
/*!**********************************************************!*\
  !*** ./src/app/theme-create/create.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons class=\"inner-buttons\" slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Create New Topic</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <form [formGroup]=\"createWordForm\" (submit)=\"createTheme()\">\n    <ion-item>\n      <ion-label stacked>Mandarin</ion-label>\n      <ion-input formControlName=\"topic\" type=\"text\" placeholder=\"Input topic\"> </ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>Topic</ion-label>\n      <ion-input formControlName=\"translate\" type=\"text\" placeholder=\"Input topic translate?\">\n      </ion-input>\n    </ion-item>\n\n\n    <ion-button expand=\"block\" type=\"submit\" [disabled]=\"!createWordForm.valid\"> Add Topic</ion-button>\n  </form>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_theme-create_create_module_ts.js.map