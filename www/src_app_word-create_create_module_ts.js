"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_word-create_create_module_ts"],{

/***/ 44929:
/*!******************************************************!*\
  !*** ./src/app/word-create/create-routing.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WordCreatePageRoutingModule": () => (/* binding */ WordCreatePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _create_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.page */ 69207);




const routes = [
    {
        path: '',
        component: _create_page__WEBPACK_IMPORTED_MODULE_0__.WordCreatePage
    }
];
let WordCreatePageRoutingModule = class WordCreatePageRoutingModule {
};
WordCreatePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], WordCreatePageRoutingModule);



/***/ }),

/***/ 99355:
/*!**********************************************!*\
  !*** ./src/app/word-create/create.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WordCreatePageModule": () => (/* binding */ WordCreatePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _create_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-routing.module */ 44929);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _create_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.page */ 69207);







let WordCreatePageModule = class WordCreatePageModule {
};
WordCreatePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _create_routing_module__WEBPACK_IMPORTED_MODULE_0__.WordCreatePageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        ],
        declarations: [_create_page__WEBPACK_IMPORTED_MODULE_1__.WordCreatePage]
    })
], WordCreatePageModule);



/***/ }),

/***/ 69207:
/*!********************************************!*\
  !*** ./src/app/word-create/create.page.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WordCreatePage": () => (/* binding */ WordCreatePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _create_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.page.html?ngResource */ 61587);
/* harmony import */ var _create_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.page.scss?ngResource */ 46517);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_config_firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/config/firebase */ 71669);
/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @firebase/firestore */ 17448);
/* harmony import */ var _app_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.page */ 75162);
/* harmony import */ var _app_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app.store */ 94827);
/* harmony import */ var js_audio_recorder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! js-audio-recorder */ 92042);
/* harmony import */ var js_audio_recorder__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(js_audio_recorder__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_player_player__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/player/player */ 63111);
/* harmony import */ var _utils_transform_transform__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/transform/transform */ 72027);














let recorder = null;
let playTimer = null;
let drawPlayId = null;
let drawRecordId = null;
//Tab 2 to add new word to database
let WordCreatePage = class WordCreatePage extends _app_page__WEBPACK_IMPORTED_MODULE_4__.PageBase {
    constructor(activeRoute, loadingCtrl, alertCtrl, formBuilder, navCtrl, appStore, route) {
        super(appStore, navCtrl, route);
        this.activeRoute = activeRoute;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.appStore = appStore;
        this.route = route;
        this.topic = '';
        this.state = {
            sampleBit: 16,
            sampleRate: 16000,
            numChannel: 1,
            compiling: false,
            isRecording: false,
            duration: 0,
            fileSize: 0,
            vol: 0,
        };
        this.recordStatusStr = 'none';
        this.fileUrlData = '';
        this.stopDrawPlay = () => {
            drawPlayId && cancelAnimationFrame(drawPlayId);
            drawPlayId = null;
        };
        this.createWordForm = formBuilder.group({
            translation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
            mandarin: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
            literal: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
        });
    }
    ngOnInit() {
        this.item = this.activeRoute.snapshot.params;
        this.topic = this.item ? this.item.Topic : '';
    }
    createWord() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create();
            const translation = this.createWordForm.value.translation;
            const mandarin = this.createWordForm.value.mandarin;
            const literal = this.createWordForm.value.literal;
            const db = (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getFirestore)(src_config_firebase__WEBPACK_IMPORTED_MODULE_2__.firebaseApp);
            const querySnapshot = yield (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDocs)((0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(db, 'wordList'));
            let id = 0;
            querySnapshot.forEach((doc) => {
                let did = Number(doc.id);
                id = Math.max(id, isNaN(did) ? 0 : did);
            });
            id++;
            console.log(id, id);
            (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.setDoc)((0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(db, 'wordList', '' + id), {
                id: '' + id,
                uid: this.$sess.uid,
                Topic: this.topic,
                Translation: translation,
                Mandarin: mandarin,
                Literal: literal,
                FileUrl: this.fileUrlData,
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
    // 录音开启
    startRecord() {
        this.clearPlay();
        const config = this.collectData();
        if (!recorder) {
            recorder = new (js_audio_recorder__WEBPACK_IMPORTED_MODULE_6___default())(config);
            recorder.onprocess = function (duration) {
                // this.setState({
                //     duration: duration.toFixed(5),
                // });
                // 推荐使用 onprogress
            };
            recorder.onprogress = (params) => {
                // console.log(recorder.duration);
                // console.log(recorder.fileSize);
                this.setState({
                    duration: params.duration.toFixed(5),
                    fileSize: params.fileSize,
                    vol: params.vol.toFixed(2),
                });
                // 此处控制数据的收集频率
                if (config.compiling) {
                    console.log('音频总数据：', params.data);
                }
            };
            recorder.onplay = () => { };
            recorder.onpauseplay = () => { };
            recorder.onresumeplay = () => { };
            recorder.onstopplay = () => { };
            recorder.onplayend = () => {
                this.stopDrawPlay();
            };
            config.compiling &&
                (playTimer = setInterval(() => {
                    if (!recorder) {
                        return;
                    }
                    let newData = recorder.getNextData();
                    if (!newData.length) {
                        return;
                    }
                    let byteLength = newData[0].byteLength;
                    let buffer = new ArrayBuffer(newData.length * byteLength);
                    let dataView = new DataView(buffer);
                    // 数据合并
                    for (let i = 0, iLen = newData.length; i < iLen; ++i) {
                        for (let j = 0, jLen = newData[i].byteLength; j < jLen; ++j) {
                            dataView.setInt8(i * byteLength + j, newData[i].getInt8(j));
                        }
                    }
                    let a = (0,_utils_transform_transform__WEBPACK_IMPORTED_MODULE_8__.encodeWAV)(dataView, config.sampleRate, config.sampleRate, config.numChannels, config.sampleBits);
                    let blob = new Blob([a], { type: 'audio/wav' });
                    blob.arrayBuffer().then((arraybuffer) => {
                        _utils_player_player__WEBPACK_IMPORTED_MODULE_7__["default"].play(arraybuffer);
                    });
                }, 3000));
        }
        else {
            recorder.stop();
        }
        this.state.isRecording = true;
        recorder.start().then(() => {
            console.log('开始录音');
        }, (error) => {
            console.log(`异常了,${error.name}:${error.message}`);
        });
    }
    clearPlay() {
        if (playTimer) {
            clearInterval(playTimer);
            playTimer = null;
        }
        if (drawRecordId) {
            cancelAnimationFrame(drawRecordId);
            drawRecordId = null;
        }
        this.stopDrawPlay();
    }
    setState(v) { }
    collectData() {
        return {
            sampleBits: this.state.sampleBit,
            sampleRate: this.state.sampleRate,
            numChannels: this.state.numChannel,
            compiling: this.state.compiling, // 是否开启边录音边转化（后期改用web worker）
        };
    }
    //录音停止
    endRecord() {
        recorder && recorder.stop();
        console.log('结束录音');
        drawRecordId && cancelAnimationFrame(drawRecordId);
        drawRecordId = null;
        this.clearPlay();
        this.state.isRecording = false;
        this.saveRecord();
    }
    recordStartOrStop() {
        if (this.state.isRecording) {
            this.endRecord();
        }
        else {
            this.startRecord();
        }
    }
    saveRecord() {
        const wavBlob = recorder.getWAVBlob();
        const a = new FileReader();
        a.onload = (e) => {
            if (e.target.result) {
                this.recordStatusStr = 'Completed';
                this.fileUrlData = e.target.result.toString();
            }
        };
        a.readAsDataURL(wavBlob);
    }
};
WordCreatePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.AlertController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.NavController },
    { type: _app_store__WEBPACK_IMPORTED_MODULE_5__.AppStore },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute }
];
WordCreatePage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-create',
        template: _create_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_create_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], WordCreatePage);



/***/ }),

/***/ 46517:
/*!*********************************************************!*\
  !*** ./src/app/word-create/create.page.scss?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = ".topic {\n  padding: 20px 10px 0px 10px;\n}\n.topic .topic-lavel {\n  padding: 2px 20px;\n}\n.topic .topic-value {\n  margin-left: 20px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFx0ZXN0JTIwd2Vla1xcZW5nbGlzaGxlYXJuaW5nXFxlbmdsaXNobGVhcm5pbmdcXHNyY1xcYXBwXFx3b3JkLWNyZWF0ZVxcY3JlYXRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJCQUFBO0FDQ0o7QURDSTtFQUNJLGlCQUFBO0FDQ1I7QURFSTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7QUNBUiIsImZpbGUiOiJjcmVhdGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvcGljIHtcclxuICAgIHBhZGRpbmc6IDIwcHggMTBweCAwcHggMTBweDtcclxuXHJcbiAgICAudG9waWMtbGF2ZWwge1xyXG4gICAgICAgIHBhZGRpbmc6IDJweCAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC50b3BpYy12YWx1ZSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbn0iLCIudG9waWMge1xuICBwYWRkaW5nOiAyMHB4IDEwcHggMHB4IDEwcHg7XG59XG4udG9waWMgLnRvcGljLWxhdmVsIHtcbiAgcGFkZGluZzogMnB4IDIwcHg7XG59XG4udG9waWMgLnRvcGljLXZhbHVlIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */";

/***/ }),

/***/ 61587:
/*!*********************************************************!*\
  !*** ./src/app/word-create/create.page.html?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons class=\"inner-buttons\" slot=\"start\">\r\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Create Word</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <form [formGroup]=\"createWordForm\" (submit)=\"createWord()\">\r\n    <div class=\"topic flex\">\r\n      <div topic-label>Topic</div>\r\n      <div class=\"flex-1 topic-value\">{{topic}}</div>\r\n    </div>\r\n    <ion-item>\r\n      <ion-label stacked>Translation</ion-label>\r\n      <ion-input\r\n        formControlName=\"translation\"\r\n        type=\"text\"\r\n        placeholder=\"How is this phrase written in correct English?\"\r\n      >\r\n      </ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label stacked>Mandarin</ion-label>\r\n      <ion-input formControlName=\"mandarin\" type=\"text\" placeholder=\"What's this phrase in Mandarin?\">\r\n      </ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label stacked>Literal</ion-label>\r\n      <ion-input\r\n        formControlName=\"literal\"\r\n        type=\"text\"\r\n        placeholder=\"How is this phrase written literaly in English?\"\r\n      >\r\n      </ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label>Voice Data</ion-label>\r\n      <span>\r\n        <ion-button expand=\"block\" (click)=\"recordStartOrStop()\">{{state.isRecording ? 'Recording' : 'Start record'}}</ion-button>\r\n      </span>\r\n      <span>{{recordStatusStr}}</span>\r\n    </ion-item>\r\n\r\n    <ion-button expand=\"block\" type=\"submit\" [disabled]=\"!createWordForm.valid\">\r\n      Add Word\r\n    </ion-button>\r\n  </form>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_word-create_create_module_ts.js.map