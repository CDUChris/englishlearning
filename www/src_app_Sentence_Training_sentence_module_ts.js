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

module.exports = "ion-header ion-toolbar {\n  --background: linear-gradient(to bottom, $primary-color, darken($primary-color, 10%));\n  --color: #2b0dd3;\n  --ion-toolbar-ios-border-color: transparent;\n  --ion-toolbar-md-border-color: transparent;\n  transition: background-color 0.3s ease;\n}\nion-header ion-toolbar ion-title {\n  font-size: 18px;\n  font-weight: bold;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\nion-content {\n  background: linear-gradient(to bottom, #007bff, #3395ff);\n  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.1);\n}\nion-content ion-searchbar {\n  --color: $primary-color;\n  --placeholder-color: lighten($primary-color, 30%);\n}\nion-content ion-searchbar ion-icon {\n  color: #007bff;\n}\nion-content ion-list ion-item {\n  transition: background-color 0.3s ease;\n}\nion-content ion-list ion-item ion-label {\n  color: #007bff;\n  font-size: 18px;\n  font-weight: bold;\n}\nion-content ion-list ion-item:hover {\n  background-color: #4da3ff;\n}\nion-content ion-list ion-item:hover ion-label {\n  color: #6c757d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFxTZW50ZW5jZSUyMFRyYWluaW5nXFxzZW50ZW5jZS5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFx0ZXN0JTIwd2Vla1xcZW5nbGlzaGxlYXJuaW5nXFxlbmdsaXNobGVhcm5pbmdcXHNyY1xcYXBwXFxTZW50ZW5jZSUyMFRyYWluaW5nXFxzZW50ZW5jZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUU7RUFDRSxxRkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkNBQUE7RUFDQSwwQ0FBQTtFQUVBLHNDQUFBO0FDSko7QURNSTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUNKTjtBRFNBO0VBNkJFLHdEQUFBO0VBQ0EseUNBQUE7QUNsQ0Y7QURLRTtFQUNFLHVCQUFBO0VBQ0EsaURBQUE7QUNISjtBREtJO0VBQ0UsY0EzQlU7QUN3QmhCO0FEUUk7RUFPRSxzQ0FBQTtBQ1pOO0FETU07RUFDRSxjQWxDUTtFQW1DUixlQUFBO0VBQ0EsaUJBQUE7QUNKUjtBRFNNO0VBQ0UseUJBQUE7QUNQUjtBRFFRO0VBQ0UsY0EzQ1E7QUNxQ2xCIiwiZmlsZSI6InNlbnRlbmNlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRwcmltYXJ5LWNvbG9yOiAjMDA3YmZmO1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjNmM3NTdkO1xyXG5cclxuaW9uLWhlYWRlciB7XHJcbiAgaW9uLXRvb2xiYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAkcHJpbWFyeS1jb2xvciwgZGFya2VuKCRwcmltYXJ5LWNvbG9yLCAxMCUpKTtcclxuICAgIC0tY29sb3I6ICMyYjBkZDM7XHJcbiAgICAtLWlvbi10b29sYmFyLWlvcy1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1pb24tdG9vbGJhci1tZC1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgXHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcclxuXHJcbiAgICBpb24tdGl0bGUge1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gIGlvbi1zZWFyY2hiYXIge1xyXG4gICAgLS1jb2xvcjogJHByaW1hcnktY29sb3I7XHJcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiBsaWdodGVuKCRwcmltYXJ5LWNvbG9yLCAzMCUpO1xyXG5cclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW9uLWxpc3Qge1xyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigkcHJpbWFyeS1jb2xvciwgMTUlKTtcclxuICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAkcHJpbWFyeS1jb2xvciwgbGlnaHRlbigkcHJpbWFyeS1jb2xvciwgMTAlKSk7XHJcbiAgYm94LXNoYWRvdzogMCA2cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuIiwiaW9uLWhlYWRlciBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgJHByaW1hcnktY29sb3IsIGRhcmtlbigkcHJpbWFyeS1jb2xvciwgMTAlKSk7XG4gIC0tY29sb3I6ICMyYjBkZDM7XG4gIC0taW9uLXRvb2xiYXItaW9zLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC0taW9uLXRvb2xiYXItbWQtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzAwN2JmZiwgIzMzOTVmZik7XG4gIGJveC1zaGFkb3c6IDAgNnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuaW9uLWNvbnRlbnQgaW9uLXNlYXJjaGJhciB7XG4gIC0tY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiBsaWdodGVuKCRwcmltYXJ5LWNvbG9yLCAzMCUpO1xufVxuaW9uLWNvbnRlbnQgaW9uLXNlYXJjaGJhciBpb24taWNvbiB7XG4gIGNvbG9yOiAjMDA3YmZmO1xufVxuaW9uLWNvbnRlbnQgaW9uLWxpc3QgaW9uLWl0ZW0ge1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcbn1cbmlvbi1jb250ZW50IGlvbi1saXN0IGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIGNvbG9yOiAjMDA3YmZmO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuaW9uLWNvbnRlbnQgaW9uLWxpc3QgaW9uLWl0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGRhM2ZmO1xufVxuaW9uLWNvbnRlbnQgaW9uLWxpc3QgaW9uLWl0ZW06aG92ZXIgaW9uLWxhYmVsIHtcbiAgY29sb3I6ICM2Yzc1N2Q7XG59Il19 */";

/***/ }),

/***/ 92550:
/*!*****************************************************************!*\
  !*** ./src/app/Sentence Training/sentence.page.html?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Sentence Training </ion-title>\r\n    <ion-back-button default-href=\"#\" (click)=\"onBack()\"slot=\"start\"></ion-back-button>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button> <!--upload button-->\r\n        <label>\r\n          <input style=\"position: absolute; opacity: 0\" type=\"file\" name=\"file\" id=\"addFile\" accept=\".txt\"\r\n            (change)=\"addFileChange($event)\" />\r\n          <ion-icon slot=\"icon-only\" name=\"add-outline\"></ion-icon>\r\n        </label>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-searchbar animated=\"true\" placeholder=\"搜索/Search\" show-clear-button=\"always\" clear-icon=\"trash-bin\"\r\n    (ionChange)=\"onInputChange($event)\"></ion-searchbar>\r\n\r\n  <ion-list [inset]=\"true\">\r\n    <ion-item *ngFor=\"let sentence of sentences; let index=index;\" detail=\"true\" detail-icon=\"caret-forward-outline\"\r\n      button [routerLink]=\"['/recordingSentence', sentence.name]\">\r\n      <ion-badge slot=\"start\">{{sentence.index}}</ion-badge>\r\n      <ion-label>{{sentence.title}}</ion-label>\r\n      <ion-checkbox slot=\"end\" [checked]=\"sentence.remembered\" (click)=\"onCheckBoxClick($event)\" (ionChange)=\"onCheckboxChange(sentence,$event)\"></ion-checkbox>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_Sentence_Training_sentence_module_ts.js.map