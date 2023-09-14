"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_conversation_conversation_module_ts"],{

/***/ 54805:
/*!*************************************************************!*\
  !*** ./src/app/conversation/conversation-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConversationPageRoutingModule": () => (/* binding */ ConversationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _conversation_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conversation.page */ 1467);




const routes = [
    {
        path: '',
        component: _conversation_page__WEBPACK_IMPORTED_MODULE_0__.ConversationPage
    }
];
let ConversationPageRoutingModule = class ConversationPageRoutingModule {
};
ConversationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ConversationPageRoutingModule);



/***/ }),

/***/ 8574:
/*!*****************************************************!*\
  !*** ./src/app/conversation/conversation.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConversationPageModule": () => (/* binding */ ConversationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _conversation_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conversation-routing.module */ 54805);
/* harmony import */ var _conversation_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./conversation.page */ 1467);







let ConversationPageModule = class ConversationPageModule {
};
ConversationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _conversation_routing_module__WEBPACK_IMPORTED_MODULE_0__.ConversationPageRoutingModule
        ],
        declarations: [_conversation_page__WEBPACK_IMPORTED_MODULE_1__.ConversationPage]
    })
], ConversationPageModule);



/***/ }),

/***/ 1467:
/*!***************************************************!*\
  !*** ./src/app/conversation/conversation.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConversationPage": () => (/* binding */ ConversationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _conversation_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conversation.page.html?ngResource */ 61434);
/* harmony import */ var _conversation_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./conversation.page.scss?ngResource */ 37117);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.page */ 75162);
/* harmony import */ var _app_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.store */ 94827);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/storage */ 19058);
/* harmony import */ var _firebase_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @firebase/storage */ 8376);











let ConversationPage = class ConversationPage extends _app_page__WEBPACK_IMPORTED_MODULE_2__.PageBase {
    constructor(appStore, navCtrl, route, toastController, loadingController, router) {
        super(appStore, navCtrl, route);
        this.appStore = appStore;
        this.navCtrl = navCtrl;
        this.route = route;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.router = router;
        this.conversations = [];
        this.conversationsSource = [];
    }
    ngOnInit() {
        this.fetchConversations();
    }
    fetchConversations() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            // Create a reference to the file we want to download
            const storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.getStorage)();
            // Get the download URL
            const listRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.ref)(storage, 'conversations');
            // Find all the prefixes and items.
            (0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.listAll)(listRef)
                .then((res) => {
                this.conversations = this.conversationsSource = res.prefixes.map(item => ({ title: item.name, remembered: localStorage.getItem(`conversation${item.name}`) }));
            }).catch((error) => {
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
            const fielFloderName = fileName.slice(0, fileName.lastIndexOf('.'));
            const storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.getStorage)();
            const storageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.ref)(storage, 'conversations/' + fielFloderName + '/' + fileName);
            // 'file' comes from the Blob or File API
            (0,_firebase_storage__WEBPACK_IMPORTED_MODULE_5__.uploadBytes)(storageRef, file).then((snapshot) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                yield this.hideLoading();
                const toast = yield this.toastController.create({
                    message: 'Upload success',
                    duration: 1500,
                    position: 'middle'
                });
                yield toast.present();
                this.fetchConversations();
            }));
        });
    }
    onInputChange(e) {
        const { value } = e.detail || {};
        this.conversations = this.conversationsSource.filter((conversation) => conversation.title.indexOf(value) != -1);
    }
    onCheckboxChange(conversation, e) {
        const { title } = conversation;
        const { detail: { checked } } = e;
        if (checked) {
            localStorage.setItem(`conversation${title}`, '1');
        }
        else {
            localStorage.removeItem(`conversation${title}`);
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
ConversationPage.ctorParameters = () => [
    { type: _app_store__WEBPACK_IMPORTED_MODULE_3__.AppStore },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router }
];
ConversationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-conversation',
        template: _conversation_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_conversation_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ConversationPage);



/***/ }),

/***/ 37117:
/*!****************************************************************!*\
  !*** ./src/app/conversation/conversation.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "ion-header ion-toolbar {\n  --background: linear-gradient(to bottom, $primary-color, darken($primary-color, 10%));\n  --color: #2c2626;\n  --ion-toolbar-ios-border-color: transparent;\n  --ion-toolbar-md-border-color: transparent;\n  transition: background-color 0.3s ease;\n}\nion-header ion-toolbar ion-title {\n  font-size: 18px;\n  font-weight: bold;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\nion-content {\n  background: linear-gradient(to bottom, #007bff, #3395ff);\n  box-shadow: 0 6px 10px rgba(0, 123, 255, 0.1);\n}\nion-content ion-searchbar {\n  --color: $primary-color;\n  --placeholder-color: lighten($primary-color, 30%);\n}\nion-content ion-searchbar ion-icon {\n  color: #007bff;\n}\nion-content ion-list ion-item {\n  transition: background-color 0.3s ease;\n}\nion-content ion-list ion-item ion-label {\n  color: #007bff;\n  font-size: 15px;\n  font-weight: bold;\n}\nion-content ion-list ion-item:hover {\n  background-color: #4da3ff;\n}\nion-content ion-list ion-item:hover ion-label {\n  color: #6c757d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnZlcnNhdGlvbi5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFx0ZXN0JTIwd2Vla1xcZW5nbGlzaGxlYXJuaW5nXFxlbmdsaXNobGVhcm5pbmdcXHNyY1xcYXBwXFxjb252ZXJzYXRpb25cXGNvbnZlcnNhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUU7RUFDRSxxRkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkNBQUE7RUFDQSwwQ0FBQTtFQUVBLHNDQUFBO0FDSko7QURNSTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUNKTjtBRFdBO0VBNkJFLHdEQUFBO0VBQ0EsNkNBQUE7QUNwQ0Y7QURPRTtFQUNFLHVCQUFBO0VBQ0EsaURBQUE7QUNMSjtBRE9JO0VBQ0UsY0E3QlU7QUN3QmhCO0FEVUk7RUFPRSxzQ0FBQTtBQ2ROO0FEUU07RUFDRSxjQXBDUTtFQXFDUixlQUFBO0VBQ0EsaUJBQUE7QUNOUjtBRFdNO0VBQ0UseUJBQUE7QUNUUjtBRFVRO0VBQ0UsY0E3Q1E7QUNxQ2xCIiwiZmlsZSI6ImNvbnZlcnNhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcHJpbWFyeS1jb2xvcjogIzAwN2JmZjtcclxuJHNlY29uZGFyeS1jb2xvcjogIzZjNzU3ZDtcclxuXHJcbmlvbi1oZWFkZXIge1xyXG4gIGlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgJHByaW1hcnktY29sb3IsIGRhcmtlbigkcHJpbWFyeS1jb2xvciwgMTAlKSk7XHJcbiAgICAtLWNvbG9yOiAjMmMyNjI2O1xyXG4gICAgLS1pb24tdG9vbGJhci1pb3MtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIC0taW9uLXRvb2xiYXItbWQtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcclxuXHJcbiAgICBpb24tdGl0bGUge1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG5cclxuICAgIFxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gIGlvbi1zZWFyY2hiYXIge1xyXG4gICAgLS1jb2xvcjogJHByaW1hcnktY29sb3I7XHJcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiBsaWdodGVuKCRwcmltYXJ5LWNvbG9yLCAzMCUpO1xyXG5cclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW9uLWxpc3Qge1xyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigkcHJpbWFyeS1jb2xvciwgMTUlKTtcclxuICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAkcHJpbWFyeS1jb2xvciwgbGlnaHRlbigkcHJpbWFyeS1jb2xvciwgMTAlKSk7XHJcbiAgYm94LXNoYWRvdzogMCA2cHggMTBweCByZ2JhKDAsIDEyMywgMjU1LCAwLjEpO1xyXG59XHJcbiIsImlvbi1oZWFkZXIgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICRwcmltYXJ5LWNvbG9yLCBkYXJrZW4oJHByaW1hcnktY29sb3IsIDEwJSkpO1xuICAtLWNvbG9yOiAjMmMyNjI2O1xuICAtLWlvbi10b29sYmFyLWlvcy1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAtLWlvbi10b29sYmFyLW1kLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuXG5pb24tY29udGVudCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMwMDdiZmYsICMzMzk1ZmYpO1xuICBib3gtc2hhZG93OiAwIDZweCAxMHB4IHJnYmEoMCwgMTIzLCAyNTUsIDAuMSk7XG59XG5pb24tY29udGVudCBpb24tc2VhcmNoYmFyIHtcbiAgLS1jb2xvcjogJHByaW1hcnktY29sb3I7XG4gIC0tcGxhY2Vob2xkZXItY29sb3I6IGxpZ2h0ZW4oJHByaW1hcnktY29sb3IsIDMwJSk7XG59XG5pb24tY29udGVudCBpb24tc2VhcmNoYmFyIGlvbi1pY29uIHtcbiAgY29sb3I6ICMwMDdiZmY7XG59XG5pb24tY29udGVudCBpb24tbGlzdCBpb24taXRlbSB7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xufVxuaW9uLWNvbnRlbnQgaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgY29sb3I6ICMwMDdiZmY7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5pb24tY29udGVudCBpb24tbGlzdCBpb24taXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0ZGEzZmY7XG59XG5pb24tY29udGVudCBpb24tbGlzdCBpb24taXRlbTpob3ZlciBpb24tbGFiZWwge1xuICBjb2xvcjogIzZjNzU3ZDtcbn0iXX0= */";

/***/ }),

/***/ 61434:
/*!****************************************************************!*\
  !*** ./src/app/conversation/conversation.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-back-button default-href=\"#\" (click)=\"onBack()\" slot=\"start\"></ion-back-button>\r\n    <ion-title>Conversation Training </ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button> <!--upload button-->\r\n        <label>\r\n          <input\r\n            style=\"position: absolute; opacity: 0\"\r\n            type=\"file\"\r\n            name=\"file\"\r\n            id=\"addFile\"\r\n            accept=\".mp3, .txt\"\r\n            (change)=\"addFileChange($event)\"\r\n          />\r\n          <ion-icon slot=\"icon-only\" name=\"add-outline\"></ion-icon>\r\n        </label>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-searchbar\r\n    animated=\"true\"\r\n    placeholder=\"搜索/Search\"\r\n    show-clear-button=\"always\"\r\n    clear-icon=\"trash-bin\"\r\n    (ionChange)=\"onInputChange($event)\"\r\n  ></ion-searchbar>\r\n\r\n  <ion-list [inset]=\"true\">\r\n    <ion-item\r\n      *ngFor=\"let conversation of conversations; let index=index;\"\r\n      detail=\"true\"\r\n      detail-icon=\"caret-forward-outline\"\r\n      button\r\n      [routerLink]=\"['/recording', conversation.title]\"\r\n    >\r\n      <ion-label>{{conversation.title}}</ion-label>\r\n      <ion-checkbox slot=\"end\" [checked]=\"conversation.remembered\" (click)=\"onCheckBoxClick($event)\" (ionChange)=\"onCheckboxChange(conversation,$event)\"></ion-checkbox>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_conversation_conversation_module_ts.js.map