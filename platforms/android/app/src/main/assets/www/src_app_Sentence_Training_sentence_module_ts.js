"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_Sentence_Training_sentence_module_ts"],{

/***/ 10907:
/*!**************************************************************!*\
  !*** ./src/app/Sentence Training/sentence-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SentencePageRoutingModule": () => (/* binding */ SentencePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _sentence_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sentence.page */ 29106);




const routes = [
    {
        path: '',
        component: _sentence_page__WEBPACK_IMPORTED_MODULE_0__.SentencePage
    }
];
let SentencePageRoutingModule = class SentencePageRoutingModule {
};
SentencePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SentencePageRoutingModule);



/***/ }),

/***/ 99510:
/*!******************************************************!*\
  !*** ./src/app/Sentence Training/sentence.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SentencePageModule": () => (/* binding */ SentencePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _sentence_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sentence-routing.module */ 10907);
/* harmony import */ var _sentence_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sentence.page */ 29106);







let SentencePageModule = class SentencePageModule {
};
SentencePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _sentence_routing_module__WEBPACK_IMPORTED_MODULE_0__.SentencePageRoutingModule
        ],
        declarations: [_sentence_page__WEBPACK_IMPORTED_MODULE_1__.SentencePage]
    })
], SentencePageModule);



/***/ }),

/***/ 29106:
/*!****************************************************!*\
  !*** ./src/app/Sentence Training/sentence.page.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SentencePage": () => (/* binding */ SentencePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _sentence_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sentence.page.html?ngResource */ 92550);
/* harmony import */ var _sentence_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sentence.page.scss?ngResource */ 86666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.page */ 75162);
/* harmony import */ var _app_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.store */ 94827);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/storage */ 19058);
/* harmony import */ var _firebase_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @firebase/storage */ 8376);











let SentencePage = class SentencePage extends _app_page__WEBPACK_IMPORTED_MODULE_2__.PageBase {
    constructor(appStore, navCtrl, route, toastController, router, loadingController) {
        super(appStore, navCtrl, route);
        this.appStore = appStore;
        this.navCtrl = navCtrl;
        this.route = route;
        this.toastController = toastController;
        this.router = router;
        this.loadingController = loadingController;
        this.sentences = [];
        this.sentenceSource = [];
    }
    ngOnInit() {
        this.fetchSentences();
    }
    fetchSentences() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            // Create a reference to the file we want to download
            const storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.getStorage)();
            // Get the download URL
            const listRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.ref)(storage, 'sentence');
            // Find all the prefixes and items.
            (0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.listAll)(listRef)
                .then((res) => {
                this.sentences = this.sentenceSource = res.items.map(item => {
                    const name = item.name;
                    // 正则匹配， ([0-9]+)匹配编号，\u4E00-\u9FA5匹配中文，
                    // /([0-9]+).([a-zA-Z,]+).txt/ english
                    const match = /([0-9]+).([a-zA-Z\s]+).txt/.exec(name) || {};
                    const index = match[1];
                    const title = match[2];
                    return { index, title, name, remembered: localStorage.getItem(`sentence${title}`) };
                }).sort((a, b) => a.index - b.index);
            }).catch((error) => {
                console.error("Error fetching sentences:", error);
                // Uh-oh, an error occurred!
            });
        });
    }
    showLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: '上传中...',
            });
            yield loading.present();
        });
    }
    hideLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            yield this.loadingController.dismiss();
        });
    }
    addFileChange(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.showLoading();
            const file = event.target.files[0];
            const fileName = file.name;
            const storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.getStorage)();
            const storageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.ref)(storage, 'sentences/' + fileName);
            // 'file' comes from the Blob or File API
            (0,_firebase_storage__WEBPACK_IMPORTED_MODULE_5__.uploadBytes)(storageRef, file).then((snapshot) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                yield this.hideLoading();
                const toast = yield this.toastController.create({
                    message: 'Upload success',
                    duration: 1500,
                    position: 'middle'
                });
                yield toast.present();
                this.fetchSentences();
            }));
        });
    }
    onInputChange(e) {
        const { value } = e.detail || {};
        this.sentences = this.sentenceSource.filter((sentence) => sentence.title.indexOf(value) != -1);
    }
    onCheckboxChange(sentence, e) {
        const { title } = sentence;
        const { detail: { checked } } = e;
        if (checked) {
            localStorage.setItem(`sentence${title}`, '1');
        }
        else {
            localStorage.removeItem(`sentence${title}`);
        }
    }
    onCheckBoxClick(e) {
        e.stopPropagation();
    }
    onBack() {
        // this.location.back()
        this.router.navigate(['folder/Inbox']);
    }
};
SentencePage.ctorParameters = () => [
    { type: _app_store__WEBPACK_IMPORTED_MODULE_3__.AppStore },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController }
];
SentencePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-sentence',
        template: _sentence_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_sentence_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SentencePage);



/***/ }),

/***/ 86666:
/*!*****************************************************************!*\
  !*** ./src/app/Sentence Training/sentence.page.scss?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = "ion-header ion-toolbar {\n  --background: linear-gradient(to bottom, $primary-color, darken($primary-color, 10%));\n  --color: #2b0dd3;\n  --ion-toolbar-ios-border-color: transparent;\n  --ion-toolbar-md-border-color: transparent;\n  transition: background-color 0.3s ease;\n}\nion-header ion-toolbar ion-title {\n  font-size: 18px;\n  font-weight: bold;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\nion-content {\n  background: linear-gradient(to bottom, #007bff, #3395ff);\n  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.1);\n}\nion-content ion-searchbar {\n  --color: $primary-color;\n  --placeholder-color: lighten($primary-color, 30%);\n}\nion-content ion-searchbar ion-icon {\n  color: #007bff;\n}\nion-content ion-list ion-item {\n  transition: background-color 0.3s ease;\n}\nion-content ion-list ion-item ion-label {\n  color: #007bff;\n  font-size: 18px;\n  font-weight: bold;\n}\nion-content ion-list ion-item:hover {\n  background-color: #4da3ff;\n}\nion-content ion-list ion-item:hover ion-label {\n  color: #6c757d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFxTZW50ZW5jZSUyMFRyYWluaW5nXFxzZW50ZW5jZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUU7RUFDRSxxRkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkNBQUE7RUFDQSwwQ0FBQTtFQUVBLHNDQUFBO0FBSko7QUFNSTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFKTjtBQVNBO0VBNkJFLHdEQUFBO0VBQ0EseUNBQUE7QUFsQ0Y7QUFLRTtFQUNFLHVCQUFBO0VBQ0EsaURBQUE7QUFISjtBQUtJO0VBQ0UsY0EzQlU7QUF3QmhCO0FBUUk7RUFPRSxzQ0FBQTtBQVpOO0FBTU07RUFDRSxjQWxDUTtFQW1DUixlQUFBO0VBQ0EsaUJBQUE7QUFKUjtBQVNNO0VBQ0UseUJBQUE7QUFQUjtBQVFRO0VBQ0UsY0EzQ1E7QUFxQ2xCIiwiZmlsZSI6InNlbnRlbmNlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRwcmltYXJ5LWNvbG9yOiAjMDA3YmZmO1xuJHNlY29uZGFyeS1jb2xvcjogIzZjNzU3ZDtcblxuaW9uLWhlYWRlciB7XG4gIGlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICRwcmltYXJ5LWNvbG9yLCBkYXJrZW4oJHByaW1hcnktY29sb3IsIDEwJSkpO1xuICAgIC0tY29sb3I6ICMyYjBkZDM7XG4gICAgLS1pb24tdG9vbGJhci1pb3MtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAtLWlvbi10b29sYmFyLW1kLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XG5cbiAgICBpb24tdGl0bGUge1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICB9XG4gIH1cbn1cblxuaW9uLWNvbnRlbnQge1xuICBpb24tc2VhcmNoYmFyIHtcbiAgICAtLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiBsaWdodGVuKCRwcmltYXJ5LWNvbG9yLCAzMCUpO1xuXG4gICAgaW9uLWljb24ge1xuICAgICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICAgIH1cbiAgfVxuXG4gIGlvbi1saXN0IHtcbiAgICBpb24taXRlbSB7XG4gICAgICBpb24tbGFiZWwge1xuICAgICAgICBjb2xvcjogJHByaW1hcnktY29sb3I7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICB9XG5cbiAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigkcHJpbWFyeS1jb2xvciwgMTUlKTtcbiAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICRwcmltYXJ5LWNvbG9yLCBsaWdodGVuKCRwcmltYXJ5LWNvbG9yLCAxMCUpKTtcbiAgYm94LXNoYWRvdzogMCA2cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG4iXX0= */";

/***/ }),

/***/ 92550:
/*!*****************************************************************!*\
  !*** ./src/app/Sentence Training/sentence.page.html?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Sentence Training </ion-title>\n    <ion-back-button default-href=\"#\" (click)=\"onBack()\"slot=\"start\"></ion-back-button>\n    <ion-buttons slot=\"end\">\n      <ion-button> <!--upload button-->\n        <label>\n          <input style=\"position: absolute; opacity: 0\" type=\"file\" name=\"file\" id=\"addFile\" accept=\".txt\"\n            (change)=\"addFileChange($event)\" />\n          <ion-icon slot=\"icon-only\" name=\"add-outline\"></ion-icon>\n        </label>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-searchbar animated=\"true\" placeholder=\"搜索/Search\" show-clear-button=\"always\" clear-icon=\"trash-bin\"\n    (ionChange)=\"onInputChange($event)\"></ion-searchbar>\n\n  <ion-list [inset]=\"true\">\n    <ion-item *ngFor=\"let sentence of sentences; let index=index;\" detail=\"true\" detail-icon=\"caret-forward-outline\"\n      button [routerLink]=\"['/recordingSentence', sentence.name]\">\n      <ion-badge slot=\"start\">{{sentence.index}}</ion-badge>\n      <ion-label>{{sentence.title}}</ion-label>\n      <ion-checkbox slot=\"end\" [checked]=\"sentence.remembered\" (click)=\"onCheckBoxClick($event)\" (ionChange)=\"onCheckboxChange(sentence,$event)\"></ion-checkbox>\n    </ion-item>\n  </ion-list>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_Sentence_Training_sentence_module_ts.js.map