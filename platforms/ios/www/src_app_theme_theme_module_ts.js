"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_theme_theme_module_ts"],{

/***/ 63098:
/*!***********************************************!*\
  !*** ./src/app/theme/theme-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemePageRoutingModule": () => (/* binding */ ThemePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _theme_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme.page */ 23394);




const routes = [
    {
        path: '',
        component: _theme_page__WEBPACK_IMPORTED_MODULE_0__.ThemePage
    }
];
let ThemePageRoutingModule = class ThemePageRoutingModule {
};
ThemePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ThemePageRoutingModule);



/***/ }),

/***/ 85056:
/*!***************************************!*\
  !*** ./src/app/theme/theme.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemePageModule": () => (/* binding */ ThemePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _theme_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme-routing.module */ 63098);
/* harmony import */ var _theme_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme.page */ 23394);







let ThemePageModule = class ThemePageModule {
};
ThemePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _theme_routing_module__WEBPACK_IMPORTED_MODULE_0__.ThemePageRoutingModule
        ],
        declarations: [_theme_page__WEBPACK_IMPORTED_MODULE_1__.ThemePage]
    })
], ThemePageModule);



/***/ }),

/***/ 23394:
/*!*************************************!*\
  !*** ./src/app/theme/theme.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemePage": () => (/* binding */ ThemePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _theme_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme.page.html?ngResource */ 8733);
/* harmony import */ var _theme_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme.page.scss?ngResource */ 58668);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @firebase/firestore */ 17448);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_config_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/config/firebase */ 71669);
/* harmony import */ var _app_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.page */ 75162);
/* harmony import */ var _app_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app.store */ 94827);










let ThemePage = class ThemePage extends _app_page__WEBPACK_IMPORTED_MODULE_4__.PageBase {
    constructor(router, loadingCtrl, appStore, navCtrl, activeRoute, route) {
        super(appStore, navCtrl, route);
        this.router = router;
        this.loadingCtrl = loadingCtrl;
        this.appStore = appStore;
        this.navCtrl = navCtrl;
        this.activeRoute = activeRoute;
        this.route = route;
        this.drapdownList = [];
        this.favorite = false;
    }
    ngOnInit() {
        this.favorite = !!this.activeRoute.snapshot.params['favorite'];
    }
    ionViewWillEnter() {
        this.getData();
    }
    getData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            console.log('=============');
            this.loadingWin = yield this.loadingCtrl.create({
                message: 'data loading ...',
                showBackdrop: true,
                duration: 120000,
            });
            this.loadingWin.present();
            const db = (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(src_config_firebase__WEBPACK_IMPORTED_MODULE_3__.firebaseApp);
            console.log('---------', db);
            const docRef = (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(db, 'DropDownList');
            let qr = docRef;
            if (this.favorite && this.$isLogin) {
                yield this.getFavorite();
                console.log('this.myFavoriteSett', this.myFavoriteSett);
                let arr = this.myFavoriteSett ? Object.keys(this.myFavoriteSett) : [];
                if (!arr || arr.length < 1) {
                    arr = ['-1'];
                }
                qr = (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.query)(docRef, (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.where)('Topic', 'in', arr));
            }
            const querySnapshot = yield (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getDocs)(qr);
            const arr = [];
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data()}`, JSON.stringify(doc.data()));
                const ditem = doc.data();
                if (!ditem.id) {
                    ditem.id = doc.id + 1;
                }
                arr.push(ditem);
            });
            this.drapdownList = arr;
            this.loadingWin.dismiss();
            /*
            const docRef = doc(db, 'wordList', '0');
            const docSnap = await getDoc(docRef);
        
            if (docSnap.exists()) {
              console.log('Document data:', docSnap.data());
            } else {
              // doc.data() will be undefined in this case
              console.log('No such document!');
            }
          */
        });
    }
    openWordList(v) {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            let fv = [];
            if (this.favorite && this.$isLogin) {
                fv = yield this.getFavorite();
            }
            console.log(fv);
            const arr = fv ? (_a = fv[v.Topic]) !== null && _a !== void 0 ? _a : [] : [];
            const fvStr = arr.join(',');
            this.navCtrl.navigateForward([
                '/english-list',
                Object.assign(Object.assign({}, v), { fvStr: fvStr, favorite: this.favorite ? 1 : '' }),
            ]);
        });
    }
    deleteItem(item) {
        this.confirm('Confirm delete the item ?', () => {
            console.log('deleteItem', item);
            const db = (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(src_config_firebase__WEBPACK_IMPORTED_MODULE_3__.firebaseApp);
            const docRef = (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)(db, 'DropDownList', item.id);
            (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.deleteDoc)(docRef).then(() => {
                this.toast('Delete success');
                this.getData();
            }, (err) => {
                this.toast('Delete faile: ' + err.toString());
            });
        });
    }
    getFavorite() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (this.myFavoriteSett) {
                return this.myFavoriteSett;
            }
            try {
                const db = (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(src_config_firebase__WEBPACK_IMPORTED_MODULE_3__.firebaseApp);
                const dataDoc = yield (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getDoc)((0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)(db, 'myFavorites', this.$sess.uid));
                if (!dataDoc) {
                    return;
                }
                let ditem = dataDoc.data();
                console.log('++', this.$sess.uid, JSON.stringify(ditem));
                this.myFavoriteSett = ditem ? this.copy(ditem['items']) : {};
            }
            catch (e) {
                console.log(e);
            }
        });
    }
};
ThemePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController },
    { type: _app_store__WEBPACK_IMPORTED_MODULE_5__.AppStore },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute }
];
ThemePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-theme',
        template: _theme_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_theme_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ThemePage);



/***/ }),

/***/ 58668:
/*!**************************************************!*\
  !*** ./src/app/theme/theme.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = ".topic-items {\n  padding: 10px;\n}\n\n.topic-item {\n  background-color: #fff;\n  display: inline-block;\n  white-space: nowrap;\n  box-shadow: 1px 1px 4px 0 #a0a0a0;\n  border-radius: 50px;\n  padding: 3px 8px 3px 22px;\n  margin: 8px 8px;\n}\n\n.topic-item:hover {\n  background-color: #046604;\n  color: #fff;\n}\n\n.ms-4 {\n  margin-left: 20px;\n}\n\n.me-2 {\n  margin-right: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRoZW1lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlDQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUVBLGVBQUE7QUFBRjs7QUFHQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtBQUFGOztBQUdBO0VBQ0UsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0FBQUYiLCJmaWxlIjoidGhlbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvcGljLWl0ZW1zIHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLnRvcGljLWl0ZW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggNHB4IDAgI2EwYTBhMDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgcGFkZGluZzogM3B4IDhweCAzcHggMjJweDtcblxuICBtYXJnaW46IDhweCA4cHg7XG59XG5cbi50b3BpYy1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQsIDEwMiwgNCk7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ubXMtNCB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4ubWUtMiB7XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbn1cbiJdfQ== */";

/***/ }),

/***/ 8733:
/*!**************************************************!*\
  !*** ./src/app/theme/theme.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons class=\"inner-buttons\" slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title *ngIf=\"favorite\">My favorite</ion-title>\n    <ion-title *ngIf=\"!favorite\">Start learn</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button routerLink=\"/theme-create\">\n        <ion-icon name=\"add-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"$isLogin\" class=\"topic-items\">\n    <ng-container *ngIf=\"drapdownList && drapdownList.length > 0\">\n      <div ngClass=\"topic-item flex\" *ngFor=\"let item of drapdownList\">\n        <span (click)=\"openWordList(item)\">\n          <ion-icon name=\"bookmarks-outline\" class=\"me-2\"></ion-icon>\n          <span>{{item.Translate}}</span>\n        </span>\n        <span class=\"ms-4\" (click)=\"deleteItem(item)\"\n          ><ion-icon name=\"close-circle-outline\"></ion-icon\n        ></span></div\n    ></ng-container>\n  </div>\n  <div *ngIf=\"!$isLogin\" class=\"no-result\">\n    You need <a routerLink=\"/login\">sign in</a>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_theme_theme_module_ts.js.map