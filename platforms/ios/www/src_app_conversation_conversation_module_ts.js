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

module.exports = "ion-header ion-toolbar {\n  --background: linear-gradient(to bottom, $primary-color, darken($primary-color, 10%));\n  --color: #2c2626;\n  --ion-toolbar-ios-border-color: transparent;\n  --ion-toolbar-md-border-color: transparent;\n  transition: background-color 0.3s ease;\n}\nion-header ion-toolbar ion-title {\n  font-size: 18px;\n  font-weight: bold;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\nion-content {\n  background: linear-gradient(to bottom, #007bff, #3395ff);\n  box-shadow: 0 6px 10px rgba(0, 123, 255, 0.1);\n}\nion-content ion-searchbar {\n  --color: $primary-color;\n  --placeholder-color: lighten($primary-color, 30%);\n}\nion-content ion-searchbar ion-icon {\n  color: #007bff;\n}\nion-content ion-list ion-item {\n  transition: background-color 0.3s ease;\n}\nion-content ion-list ion-item ion-label {\n  color: #007bff;\n  font-size: 15px;\n  font-weight: bold;\n}\nion-content ion-list ion-item:hover {\n  background-color: #4da3ff;\n}\nion-content ion-list ion-item:hover ion-label {\n  color: #6c757d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnZlcnNhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUU7RUFDRSxxRkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkNBQUE7RUFDQSwwQ0FBQTtFQUVBLHNDQUFBO0FBSko7QUFNSTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFKTjtBQVdBO0VBNkJFLHdEQUFBO0VBQ0EsNkNBQUE7QUFwQ0Y7QUFPRTtFQUNFLHVCQUFBO0VBQ0EsaURBQUE7QUFMSjtBQU9JO0VBQ0UsY0E3QlU7QUF3QmhCO0FBVUk7RUFPRSxzQ0FBQTtBQWROO0FBUU07RUFDRSxjQXBDUTtFQXFDUixlQUFBO0VBQ0EsaUJBQUE7QUFOUjtBQVdNO0VBQ0UseUJBQUE7QUFUUjtBQVVRO0VBQ0UsY0E3Q1E7QUFxQ2xCIiwiZmlsZSI6ImNvbnZlcnNhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcHJpbWFyeS1jb2xvcjogIzAwN2JmZjtcbiRzZWNvbmRhcnktY29sb3I6ICM2Yzc1N2Q7XG5cbmlvbi1oZWFkZXIge1xuICBpb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAkcHJpbWFyeS1jb2xvciwgZGFya2VuKCRwcmltYXJ5LWNvbG9yLCAxMCUpKTtcbiAgICAtLWNvbG9yOiAjMmMyNjI2O1xuICAgIC0taW9uLXRvb2xiYXItaW9zLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgLS1pb24tdG9vbGJhci1tZC1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XG5cbiAgICBpb24tdGl0bGUge1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcblxuICAgIFxuICAgIH1cbiAgfVxufVxuXG5pb24tY29udGVudCB7XG4gIGlvbi1zZWFyY2hiYXIge1xuICAgIC0tY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6IGxpZ2h0ZW4oJHByaW1hcnktY29sb3IsIDMwJSk7XG5cbiAgICBpb24taWNvbiB7XG4gICAgICBjb2xvcjogJHByaW1hcnktY29sb3I7XG4gICAgfVxuICB9XG5cbiAgaW9uLWxpc3Qge1xuICAgIGlvbi1pdGVtIHtcbiAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIH1cblxuICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCRwcmltYXJ5LWNvbG9yLCAxNSUpO1xuICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgJHByaW1hcnktY29sb3IsIGxpZ2h0ZW4oJHByaW1hcnktY29sb3IsIDEwJSkpO1xuICBib3gtc2hhZG93OiAwIDZweCAxMHB4IHJnYmEoMCwgMTIzLCAyNTUsIDAuMSk7XG59XG4iXX0= */";

/***/ }),

/***/ 61434:
/*!****************************************************************!*\
  !*** ./src/app/conversation/conversation.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-back-button default-href=\"#\" (click)=\"onBack()\" slot=\"start\"></ion-back-button>\n    <ion-title>Conversation Training </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button> <!--upload button-->\n        <label>\n          <input\n            style=\"position: absolute; opacity: 0\"\n            type=\"file\"\n            name=\"file\"\n            id=\"addFile\"\n            accept=\".mp3, .txt\"\n            (change)=\"addFileChange($event)\"\n          />\n          <ion-icon slot=\"icon-only\" name=\"add-outline\"></ion-icon>\n        </label>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-searchbar\n    animated=\"true\"\n    placeholder=\"搜索/Search\"\n    show-clear-button=\"always\"\n    clear-icon=\"trash-bin\"\n    (ionChange)=\"onInputChange($event)\"\n  ></ion-searchbar>\n\n  <ion-list [inset]=\"true\">\n    <ion-item\n      *ngFor=\"let conversation of conversations; let index=index;\"\n      detail=\"true\"\n      detail-icon=\"caret-forward-outline\"\n      button\n      [routerLink]=\"['/recording', conversation.title]\"\n    >\n      <ion-label>{{conversation.title}}</ion-label>\n      <ion-checkbox slot=\"end\" [checked]=\"conversation.remembered\" (click)=\"onCheckBoxClick($event)\" (ionChange)=\"onCheckboxChange(conversation,$event)\"></ion-checkbox>\n    </ion-item>\n  </ion-list>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_conversation_conversation_module_ts.js.map