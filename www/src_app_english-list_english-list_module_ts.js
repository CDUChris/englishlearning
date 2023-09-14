"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_english-list_english-list_module_ts"],{

/***/ 61680:
/*!*************************************************************!*\
  !*** ./src/app/english-list/english-list-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnglishListPageRoutingModule": () => (/* binding */ EnglishListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _english_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./english-list.page */ 20715);




const routes = [
    {
        path: '',
        component: _english_list_page__WEBPACK_IMPORTED_MODULE_0__.EnglishListPage
    }
];
let EnglishListPageRoutingModule = class EnglishListPageRoutingModule {
};
EnglishListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EnglishListPageRoutingModule);



/***/ }),

/***/ 38492:
/*!*****************************************************!*\
  !*** ./src/app/english-list/english-list.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnglishListPageModule": () => (/* binding */ EnglishListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _english_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./english-list-routing.module */ 61680);
/* harmony import */ var _english_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./english-list.page */ 20715);







let EnglishListPageModule = class EnglishListPageModule {
};
EnglishListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _english_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.EnglishListPageRoutingModule
        ],
        declarations: [_english_list_page__WEBPACK_IMPORTED_MODULE_1__.EnglishListPage]
    })
], EnglishListPageModule);



/***/ }),

/***/ 20715:
/*!***************************************************!*\
  !*** ./src/app/english-list/english-list.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnglishListPage": () => (/* binding */ EnglishListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _english_list_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./english-list.page.html?ngResource */ 73138);
/* harmony import */ var _english_list_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./english-list.page.scss?ngResource */ 70208);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @firebase/firestore */ 17448);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_config_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/config/firebase */ 71669);
/* harmony import */ var _app_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.page */ 75162);
/* harmony import */ var _app_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app.store */ 94827);










let EnglishListPage = class EnglishListPage extends _app_page__WEBPACK_IMPORTED_MODULE_4__.PageBase {
    constructor(router, appStore, navCtrl, route, activeRoute, loadingCtrl) {
        super(appStore, navCtrl, route);
        this.router = router;
        this.appStore = appStore;
        this.navCtrl = navCtrl;
        this.route = route;
        this.activeRoute = activeRoute;
        this.loadingCtrl = loadingCtrl;
        this.wordList = [];
        this.favorite = false;
        this.drapdownList = [];
    }
    ngOnInit() {
        var _a;
        this.item = this.activeRoute.snapshot.params;
        this.favorite = !!this.item['favorite'];
        this.fvArr = ((_a = this.item['fvStr']) !== null && _a !== void 0 ? _a : '-1').split(',');
        console.log(this.item);
    }
    ionViewWillEnter() {
        this.getData();
    }
    getData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.item) {
                return;
            }
            this.loadingWin = yield this.loadingCtrl.create({
                message: 'data loading ...',
                showBackdrop: true,
                duration: 120000,
            });
            this.loadingWin.present();
            const db = (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(src_config_firebase__WEBPACK_IMPORTED_MODULE_3__.firebaseApp);
            const docsRef = (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(db, 'wordList');
            // Create a query against the collection.
            let wh = (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.where)('Topic', '==', this.item.Topic);
            if (this.favorite) {
                let arr = this.fvArr;
                if (!arr) {
                    arr = ['-1'];
                }
                wh = (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.where)('id', 'in', arr);
            }
            console.log('wh', wh);
            const q = (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.query)(docsRef, wh);
            const querySnapshot = yield (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getDocs)(q);
            const arr = [];
            const docFunc = _firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc;
            querySnapshot.forEach((doc) => {
                // console.log(`${doc.id} => `, JSON.stringify(doc.data()));
                const ditem = doc.data();
                if (!ditem.id) {
                    ditem.id = doc.id + 1;
                }
                arr.push(ditem);
            });
            this.wordList = arr;
            this.loadingWin.dismiss();
        });
    }
    openWordInfo(v) {
        this.navCtrl.navigateForward([
            '/word-info',
            Object.assign(Object.assign({}, v), { favorite: this.favorite ? 1 : '' }),
        ]);
    }
    openAddWord() {
        console.log(this.item, '++++++++++++++');
        this.router.navigate(['/word-create', this.item]);
    }
    deleteItem(item) {
        this.confirm('Confirm delete the item ?', () => {
            console.log('deleteItem', item);
            const db = (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(src_config_firebase__WEBPACK_IMPORTED_MODULE_3__.firebaseApp);
            const docRef = (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)(db, 'wordList', item.id);
            (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.deleteDoc)(docRef).then(() => {
                this.toast('Delete success');
                this.getData();
            }, (err) => {
                this.toast('Delete faile: ' + err.toString());
            });
        });
    }
};
EnglishListPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _app_store__WEBPACK_IMPORTED_MODULE_5__.AppStore },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController }
];
EnglishListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-english-list',
        template: _english_list_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_english_list_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EnglishListPage);



/***/ }),

/***/ 70208:
/*!****************************************************************!*\
  !*** ./src/app/english-list/english-list.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = ".main {\n  margin: 0 15px;\n  color: #333;\n}\n.main .listItem {\n  padding: 5px 0;\n  border-bottom: 1px solid #ccc;\n}\n.main .listItem .zh {\n  font-size: 16px;\n}\n.main .listItem .en {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuZ2xpc2gtbGlzdC5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFx0ZXN0JTIwd2Vla1xcZW5nbGlzaGxlYXJuaW5nXFxlbmdsaXNobGVhcm5pbmdcXHNyY1xcYXBwXFxlbmdsaXNoLWxpc3RcXGVuZ2xpc2gtbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0UsV0FBQTtBQ0NKO0FEQUU7RUFDSSxjQUFBO0VBQ0EsNkJBQUE7QUNFTjtBRERJO0VBQ0UsZUFBQTtBQ0dOO0FEQUk7RUFDRSxlQUFBO0FDRU4iLCJmaWxlIjoiZW5nbGlzaC1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluIHtcclxuICBtYXJnaW46IDAgMTVweDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gIC5saXN0SXRlbSB7XHJcbiAgICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcclxuICAgIC56aCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxuXHJcbiAgICAuZW4ge1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4iLCIubWFpbiB7XG4gIG1hcmdpbjogMCAxNXB4O1xuICBjb2xvcjogIzMzMztcbn1cbi5tYWluIC5saXN0SXRlbSB7XG4gIHBhZGRpbmc6IDVweCAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbn1cbi5tYWluIC5saXN0SXRlbSAuemgge1xuICBmb250LXNpemU6IDE2cHg7XG59XG4ubWFpbiAubGlzdEl0ZW0gLmVuIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufSJdfQ== */";

/***/ }),

/***/ 73138:
/*!****************************************************************!*\
  !*** ./src/app/english-list/english-list.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons class=\"inner-buttons\" slot=\"start\">\r\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title *ngIf=\"favorite\">My favorite</ion-title>\r\n    <ng-container *ngIf=\"!favorite\">\r\n      <ion-title *ngIf=\"item\">{{item.Topic}} - {{item.Translate}}</ion-title>\r\n      <ion-title *ngIf=\"!item\">Word list</ion-title>\r\n    </ng-container>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"openAddWord()\">\r\n        <ion-icon name=\"add-outline\"></ion-icon>\r\n      </ion-button>\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"main\">\r\n    <div class=\"list\">\r\n      <div class=\"listItem flex\" *ngFor=\"let item of wordList;\">\r\n        <div class=\"flex-1\" (click)=\"openWordInfo(item)\">\r\n          <div class=\"zh\">{{item.Mandarin}}</div>\r\n          <div class=\"en\">\r\n            {{item.Translation ? item.Translation : item.Literal}}\r\n          </div>\r\n        </div>\r\n        <div class=\"p-2\" *ngIf=\"item.uid == $sess.uid\">\r\n          <ion-button (click)=\"deleteItem(item)\">\r\n            <ion-icon name=\"trash-outline\"></ion-icon>\r\n          </ion-button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_english-list_english-list_module_ts.js.map