"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_word-info_word-info_module_ts"],{

/***/ 72875:
/*!*******************************!*\
  !*** ./src/app/utils/file.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "baseName": () => (/* binding */ baseName),
/* harmony export */   "toStdNameTag": () => (/* binding */ toStdNameTag)
/* harmony export */ });
const baseName = (f) => {
    if (!f) {
        return '';
    }
    const l1 = f.lastIndexOf('/');
    const l2 = f.lastIndexOf('\\');
    if (l1 >= 0) {
        f = f.substring(l1 + 1);
    }
    if (l2 >= 0) {
        f = f.substring(l2 + 1);
    }
    const e = f.lastIndexOf('.');
    if (e >= 0) {
        f = f.substring(0, e);
    }
    return f;
};
const toStdNameTag = (f) => {
    f = (f !== null && f !== void 0 ? f : '').replace(/[`’]+/gi, '');
    const fname = f.replace(/[^a-zA-Z0-9]+/gi, ' ').trim();
    return fname.replace(/\s+/gi, '_').toLowerCase();
};


/***/ }),

/***/ 94423:
/*!*******************************************************!*\
  !*** ./src/app/word-info/word-info-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WordInfoPageRoutingModule": () => (/* binding */ WordInfoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _word_info_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./word-info.page */ 24054);




const routes = [
    {
        path: '',
        component: _word_info_page__WEBPACK_IMPORTED_MODULE_0__.WordInfoPage
    }
];
let WordInfoPageRoutingModule = class WordInfoPageRoutingModule {
};
WordInfoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], WordInfoPageRoutingModule);



/***/ }),

/***/ 81482:
/*!***********************************************!*\
  !*** ./src/app/word-info/word-info.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WordInfoPageModule": () => (/* binding */ WordInfoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _word_info_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./word-info-routing.module */ 94423);
/* harmony import */ var _word_info_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./word-info.page */ 24054);







let WordInfoPageModule = class WordInfoPageModule {
};
WordInfoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _word_info_routing_module__WEBPACK_IMPORTED_MODULE_0__.WordInfoPageRoutingModule
        ],
        declarations: [_word_info_page__WEBPACK_IMPORTED_MODULE_1__.WordInfoPage]
    })
], WordInfoPageModule);



/***/ }),

/***/ 24054:
/*!*********************************************!*\
  !*** ./src/app/word-info/word-info.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WordInfoPage": () => (/* binding */ WordInfoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _word_info_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./word-info.page.html?ngResource */ 10482);
/* harmony import */ var _word_info_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./word-info.page.scss?ngResource */ 24367);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _utils_player_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/player/player */ 63111);
/* harmony import */ var _firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @firebase/storage */ 8376);
/* harmony import */ var src_config_firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/config/firebase */ 71669);
/* harmony import */ var _utils_file__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/file */ 72875);
/* harmony import */ var js_audio_recorder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! js-audio-recorder */ 92042);
/* harmony import */ var js_audio_recorder__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(js_audio_recorder__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _utils_transform_transform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/transform/transform */ 72027);
/* harmony import */ var _app_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app.page */ 75162);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _app_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../app.store */ 94827);
/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @firebase/firestore */ 17448);
/* harmony import */ var _app_util__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../app.util */ 72826);
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../app.config */ 49670);


















let recorder = null;
let playTimer = null;
let oCanvas = null;
let ctx = null;
let drawRecordId = null;
let pCanvas = null;
let pCtx = null;
let drawPlayId = null;
let WordInfoPage = class WordInfoPage extends _app_page__WEBPACK_IMPORTED_MODULE_8__.PageBase {
    constructor(activeRoute, appStore, navCtrl, route, loadingCtrl, sanitizer) {
        super(appStore, navCtrl, route);
        this.activeRoute = activeRoute;
        this.appStore = appStore;
        this.navCtrl = navCtrl;
        this.route = route;
        this.loadingCtrl = loadingCtrl;
        this.sanitizer = sanitizer;
        this.itemFileName = '';
        this.isManfang = false;
        this.isPlay = true;
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
        this.audioList = [];
        this.inFavoriteStatus = false;
        this.stopDrawPlay = () => {
            drawPlayId && cancelAnimationFrame(drawPlayId);
            drawPlayId = null;
        };
    }
    ngOnInit() {
        this.item = this.activeRoute.snapshot.params;
        if (!this.item) {
            return;
        }
        const content = this.item.Literal
            ? this.item.Literal
            : this.item.Translation;
        this.itemFileName = (0,_utils_file__WEBPACK_IMPORTED_MODULE_5__.toStdNameTag)(content);
        console.log(this.item);
        console.log(this.itemFileName);
        this.loadData();
        // this.componentDidMount();
        this.getList();
    }
    json(v) {
        return JSON.stringify(v, null, ' ');
    }
    setState(v) { }
    changeSampleRate(e, params) {
        this.setState({
            sampleRate: params.value,
        });
    }
    changeSampleBit(e, params) {
        this.setState({
            sampleBit: params.value,
        });
    }
    changeNumChannel(e, params) {
        this.setState({
            numChannel: params.value,
        });
    }
    changeCompile(e, { checked }) {
        this.setState({
            compiling: checked,
        });
    }
    modifyOption() {
        if (recorder) {
            const config = this.collectData();
            recorder.setOption(config);
            recorder = null;
        }
    }
    collectData() {
        return {
            sampleBits: this.state.sampleBit,
            sampleRate: this.state.sampleRate,
            numChannels: this.state.numChannel,
            compiling: this.state.compiling, // 是否开启边录音边转化（后期改用web worker）
        };
    }
    loadData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.item) {
                return;
            }
            this.inFavoriteStatus = yield this.inFavorite();
            if (this.item.FileUrl) {
                this.itemUrl = this.sanitize(this.item.FileUrl);
                return;
            }
            const storage = (0,_firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getStorage)(src_config_firebase__WEBPACK_IMPORTED_MODULE_4__.firebaseApp, 'gs://mandaringathering-d91d4.appspot.com/');
            const listRef = (0,_firebase_storage__WEBPACK_IMPORTED_MODULE_3__.ref)(storage, 'audio_data');
            const res = yield (0,_firebase_storage__WEBPACK_IMPORTED_MODULE_3__.listAll)(listRef);
            res.prefixes.forEach((folderRef) => {
                console.log('dir: ', folderRef);
            });
            let item = null;
            res.items.forEach((itemRef) => {
                // console.log('file: ', itemRef);
                let name = (0,_utils_file__WEBPACK_IMPORTED_MODULE_5__.baseName)(itemRef.name);
                name = (0,_utils_file__WEBPACK_IMPORTED_MODULE_5__.toStdNameTag)(name);
                if (name == this.itemFileName) {
                    item = itemRef;
                }
            });
            if (!item) {
                return;
            }
            const url = yield (0,_firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getDownloadURL)(item);
            this.itemUrl = url;
            console.log('url', this.itemUrl);
        });
    }
    sanitize(url) {
        return this.sanitizer.bypassSecurityTrustUrl(url);
    }
    manfang() {
        this.isManfang = !this.isManfang;
        if (this.isManfang) {
            this.player.playbackRate = 0.5;
        }
        else {
            this.player.playbackRate = 1;
        }
        console.log(111);
        console.log(this.player.playbackRate);
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
                    let a = (0,_utils_transform_transform__WEBPACK_IMPORTED_MODULE_7__.encodeWAV)(dataView, config.sampleRate, config.sampleRate, config.numChannels, config.sampleBits);
                    let blob = new Blob([a], { type: 'audio/wav' });
                    blob.arrayBuffer().then((arraybuffer) => {
                        _utils_player_player__WEBPACK_IMPORTED_MODULE_2__["default"].play(arraybuffer);
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
    // stop
    pauseRecord() {
        if (recorder) {
            recorder.pause();
            console.log('暂停录音');
            drawRecordId && cancelAnimationFrame(drawRecordId);
            drawRecordId = null;
        }
    }
    //stop recording
    endRecord() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            recorder && recorder.stop();
            drawRecordId && cancelAnimationFrame(drawRecordId);
            drawRecordId = null;
            this.state.isRecording = false;
            console.log('end recording');
            yield this.saveRecord();
            console.log('保存完成');
            this.clearPlay();
        });
    }
    playRecord() {
        recorder && recorder.play();
        drawRecordId && cancelAnimationFrame(drawRecordId);
        drawRecordId = null;
        // recorder && this.drawPlay();
        // setInterval(() => {
        //     recorder.getPlayTime()
        // }, 500)
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
    componentDidMount() {
        oCanvas = document.getElementById('canvas');
        ctx = oCanvas.getContext('2d');
        pCanvas = document.getElementById('playChart');
        pCtx = pCanvas.getContext('2d');
    }
    getList() {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.item) {
                return;
            }
            this.loadingWin = yield this.loadingCtrl.create({
                message: 'data loading ...',
                showBackdrop: true,
                duration: 120000,
            });
            this.loadingWin.present();
            const db = (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.getFirestore)(src_config_firebase__WEBPACK_IMPORTED_MODULE_4__.firebaseApp);
            const colRef = (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.collection)(db, 'audioList');
            // Create a query against the collection.
            const wordId = '' + _app_config__WEBPACK_IMPORTED_MODULE_12__.AppConfig.getUid() + '@@' + ((_a = this.item.id) !== null && _a !== void 0 ? _a : '-1');
            console.log('WordId == ', wordId);
            const q = (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.query)(colRef, (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.where)('WordId', '==', wordId));
            const querySnapshot = yield (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.getDocs)(q);
            const arr = [];
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => `, _app_util__WEBPACK_IMPORTED_MODULE_11__.AppUtil.xstrMid(JSON.stringify(doc.data()), 80, 40));
                const ditem = doc.data();
                if (!ditem.id) {
                    ditem.id = doc.id + 1;
                }
                if (ditem.FileUrl) {
                    ditem.FileUrl = this.sanitize(ditem.FileUrl);
                }
                arr.unshift(ditem);
            });
            this.audioList = arr;
            this.loadingWin.dismiss();
        });
    }
    saveRecord() {
        return new Promise((rel, rej) => {
            const wavBlob = recorder.getWAVBlob();
            const a = new FileReader();
            a.onload = (e) => (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
                if (e.target.result) {
                    const str = e.target.result.toString();
                    yield this.doSaveRecord(str);
                    console.log(str.length, _app_util__WEBPACK_IMPORTED_MODULE_11__.AppUtil.xstrMid(str, 15, 10));
                }
                rel(true);
            });
            a.readAsDataURL(wavBlob);
        });
    }
    doSaveRecord(fileUrl) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create();
            const db = (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.getFirestore)(src_config_firebase__WEBPACK_IMPORTED_MODULE_4__.firebaseApp);
            const querySnapshot = yield (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.getDocs)((0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.collection)(db, 'audioList'));
            let id = 0;
            let ids = [];
            let wordIdPrex = _app_config__WEBPACK_IMPORTED_MODULE_12__.AppConfig.getUid() + '@@';
            querySnapshot.forEach((doc) => {
                var _a, _b;
                let did = Number(doc.id);
                let wordId = (_b = (_a = doc.data()) === null || _a === void 0 ? void 0 : _a.WordId) !== null && _b !== void 0 ? _b : '';
                if (wordId.indexOf(wordIdPrex) === 0) {
                    ids.push(did);
                }
                id = Math.max(id, isNaN(did) ? 0 : did);
            });
            // remove items
            ids.sort((a, b) => a - b);
            const remainAmount = 2; // only keep item amount // ids.length - 1;
            while (ids.length > remainAmount) {
                const eid = ids.shift();
                console.log('eid', eid);
                yield (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.deleteDoc)((0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.doc)(db, 'audioList', '' + eid));
            }
            id++;
            console.log(id, id);
            (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.setDoc)((0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.doc)(db, 'audioList', '' + id), {
                id: '' + id,
                WordId: wordIdPrex + this.item.id,
                FileUrl: fileUrl,
            }).then(() => {
                loading.dismiss();
                this.getList();
            }, (error) => {
                loading.dismiss().then(() => {
                    console.error(error);
                });
            });
            yield loading.present();
        });
    }
    ccc() {
        let a = 0;
        this.player = document.getElementById('audio_player');
        let b = document.getElementById('bgc');
        this.isPlay = !this.player.paused;
        function ab(ev) {
            this.isPlay = this.player.paused;
            b.style.width = 0 + 'px';
            ev.stopPropagation();
        }
        function aa(e) {
            a = (this.player.currentTime / this.player.duration) * 100;
            b.style.width = a + '%';
            e.stopPropagation();
        }
        this.player.addEventListener('ended', ab.bind(this), false);
        this.player.addEventListener('timeupdate', aa.bind(this), false);
        if (this.player.paused) {
            this.player.play();
        }
        else {
            this.player.pause();
        }
    }
    listPlay(id) {
        let a = 0;
        let player = document.getElementById(id);
        let prograss = document.getElementById(id + 'pro');
        function ab(ev) {
            prograss.style.width = 0 + 'px';
            ev.stopPropagation();
        }
        function aa(e) {
            a = (player.currentTime / player.duration) * 100;
            prograss.style.width = a + '%';
            e.stopPropagation();
        }
        player.addEventListener('ended', ab.bind(this), false);
        player.addEventListener('timeupdate', aa.bind(this), false);
        if (player.paused) {
            player.play();
        }
        else {
            player.pause();
        }
    }
    inFavorite() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.item) {
                return false;
            }
            const uid = '' + _app_config__WEBPACK_IMPORTED_MODULE_12__.AppConfig.getUid();
            const db = (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.getFirestore)(src_config_firebase__WEBPACK_IMPORTED_MODULE_4__.firebaseApp);
            const dataDoc = yield (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.getDoc)((0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.doc)(db, 'myFavorites', uid));
            let ditem = dataDoc.data();
            if (!ditem) {
                ditem = {};
            }
            const dataItems = ditem['items'] ? ditem['items'] : {};
            let arr = dataItems[this.item.Topic]
                ? dataItems[this.item.Topic]
                : [];
            return arr.includes(this.item.id);
        });
    }
    onFavoriteAdd(del = false) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.item) {
                return;
            }
            this.loadingWin = yield this.loadingCtrl.create({
                message: 'save data ...',
                showBackdrop: true,
                duration: 120000,
            });
            this.loadingWin.present();
            const uid = '' + _app_config__WEBPACK_IMPORTED_MODULE_12__.AppConfig.getUid();
            const db = (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.getFirestore)(src_config_firebase__WEBPACK_IMPORTED_MODULE_4__.firebaseApp);
            const dataDoc = yield (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.getDoc)((0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.doc)(db, 'myFavorites', uid));
            let ditem = dataDoc.data();
            if (!ditem) {
                ditem = {};
            }
            const dataItems = ditem['items'] ? ditem['items'] : {};
            let arr = dataItems[this.item.Topic]
                ? dataItems[this.item.Topic]
                : [];
            if (del) {
                arr = arr.filter((v) => v != this.item.id);
            }
            else {
                if (!arr.includes(this.item.id)) {
                    arr.push(this.item.id);
                }
            }
            dataItems[this.item.Topic] = arr;
            (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.setDoc)((0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.doc)(db, 'myFavorites', uid), {
                uid: uid,
                items: dataItems,
            });
            this.inFavoriteStatus = !del;
            this.loadingWin.dismiss();
        });
    }
};
WordInfoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute },
    { type: _app_store__WEBPACK_IMPORTED_MODULE_9__.AppStore },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.LoadingController },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.DomSanitizer }
];
WordInfoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_17__.Component)({
        selector: 'app-word-info',
        template: _word_info_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_word_info_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], WordInfoPage);



/***/ }),

/***/ 24367:
/*!**********************************************************!*\
  !*** ./src/app/word-info/word-info.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "ion-header {\n  display: flex;\n  padding: 10px 0;\n  background-color: #021c40;\n}\nion-header ion-back-button {\n  color: #fff;\n}\nion-header .search {\n  margin-left: 15px;\n}\nion-header .search input {\n  border-radius: 5px;\n  border: none;\n  height: 32px;\n  padding: 0 15px;\n  line-height: 32px;\n}\nion-header .btn {\n  color: #fff;\n  line-height: 32px;\n  margin-left: 15px;\n}\nion-content {\n  --background: rgb(5, 29, 65);\n  --background-size: cover;\n}\n.icons {\n  background-color: #222;\n  justify-content: space-around;\n}\n.icons > div {\n  width: 40px;\n  height: 40px;\n}\n.icons > div svg {\n  display: block;\n  margin: 7.5px auto;\n}\n.icons > div.active {\n  background-color: #fa5322;\n}\n.info {\n  height: 300px;\n  width: 100%;\n  position: relative;\n  background-color: #d2dae7;\n}\n.info .zh,\n.info .en {\n  font-weight: 600;\n  font-size: 22px;\n  padding: 0 16px;\n}\n.info .zh {\n  padding: 1em 5vw;\n  background-color: #b7c5d8;\n}\n.info .en {\n  font-weight: 400;\n  padding: 1em 5vw;\n  font-size: 1.5em;\n  position: relative;\n}\n.info .en span {\n  position: relative;\n  display: inline-block;\n  z-index: 1;\n}\n.info .en span.bgc {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 0;\n  height: 100%;\n  background-color: rgba(255, 255, 255, 0.8);\n  z-index: -1;\n}\n.info .icon {\n  justify-content: space-between;\n}\n.info .icon .i {\n  background-color: #fff;\n  padding: 5px;\n  border-radius: 50px;\n}\n.info .icon .i img {\n  width: 20px;\n  height: 20px;\n  display: block;\n}\n.info .icon .i svg {\n  display: block;\n}\n.info .icon .i.active {\n  background-color: #f00;\n}\n.info .icon > div:not(.i) {\n  width: 30%;\n  justify-content: space-around;\n}\n.info > .icon.flex {\n  position: absolute;\n  bottom: 20px;\n  right: 0;\n  left: 0;\n}\n.lr > div {\n  width: 50%;\n}\n#tit {\n  font-size: 16px;\n  margin: 15px;\n  color: #eee;\n}\n.audioList {\n  color: #fff;\n  padding-left: 16px;\n}\n.audioList > div {\n  margin-bottom: 15px;\n}\n.audioList .btn {\n  background-color: #496eab;\n  display: inline-block;\n  padding: 5px 15px;\n  border-radius: 3px;\n}\n.audioList .prograss {\n  background-color: #4f6280;\n  height: 3px;\n  margin: 0 15px;\n  max-width: 120px;\n  border-radius: 5px;\n  position: relative;\n}\n.audioList .prograss span {\n  position: absolute;\n  border-radius: 5px;\n  height: 100%;\n  left: 0;\n  top: 0;\n  background-color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmQtaW5mby5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFx0ZXN0JTIwd2Vla1xcZW5nbGlzaGxlYXJuaW5nXFxlbmdsaXNobGVhcm5pbmdcXHNyY1xcYXBwXFx3b3JkLWluZm9cXHdvcmQtaW5mby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FDQ0Y7QURBRTtFQUNFLFdBQUE7QUNFSjtBREFFO0VBQ0UsaUJBQUE7QUNFSjtBRERJO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0dOO0FEQUU7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ0VKO0FERUE7RUFDRSw0QkFBQTtFQUNBLHdCQUFBO0FDQ0Y7QURFQTtFQUNFLHNCQUFBO0VBQ0EsNkJBQUE7QUNDRjtBRENFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNDSjtBRENJO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FDQ047QURHRTtFQUNFLHlCQUFBO0FDREo7QURLQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQ0ZGO0FER0U7O0VBRUUsZ0JBQUE7RUFDQSxlQUFBO0VBRUEsZUFBQTtBQ0ZKO0FESUU7RUFDRSxnQkFBQTtFQUNBLHlCQUFBO0FDRko7QURJRTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDRko7QURHSTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0FDRE47QURHSTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLDBDQUFBO0VBQ0EsV0FBQTtBQ0ROO0FESUU7RUFDRSw4QkFBQTtBQ0ZKO0FESUk7RUFDRSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0ZOO0FER007RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNEUjtBREdNO0VBQ0UsY0FBQTtBQ0RSO0FESUk7RUFDRSxzQkFBQTtBQ0ZOO0FES0k7RUFDRSxVQUFBO0VBQ0EsNkJBQUE7QUNITjtBRE9FO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7QUNMSjtBRFVFO0VBQ0UsVUFBQTtBQ1BKO0FEV0E7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNSRjtBRFVBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FDUEY7QURRRTtFQUNFLG1CQUFBO0FDTko7QURRRTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDTko7QURRRTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNOSjtBRE9JO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFFQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLHNCQUFBO0FDTk4iLCJmaWxlIjoid29yZC1pbmZvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZzogMTBweCAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMjFjNDA7XHJcbiAgaW9uLWJhY2stYnV0dG9uIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuICAuc2VhcmNoIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgaW5wdXQge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAuYnRuIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICB9XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6IHJnYig1LCAyOSwgNjUpO1xyXG4gIC0tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLmljb25zIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG5cclxuICA+IGRpdiB7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuXHJcbiAgICBzdmcge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgbWFyZ2luOiA3LjVweCBhdXRvO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgPiBkaXYuYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTAsIDgzLCAzNCk7XHJcbiAgfVxyXG59XHJcblxyXG4uaW5mbyB7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QyZGFlNztcclxuICAuemgsXHJcbiAgLmVuIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgfVxyXG4gIC56aCB7XHJcbiAgICBwYWRkaW5nOiAxZW0gNXZ3O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2I3YzVkODtcclxuICB9XHJcbiAgLmVuIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBwYWRkaW5nOiAxZW0gNXZ3O1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHNwYW4ge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgei1pbmRleDogMTtcclxuICAgIH1cclxuICAgIHNwYW4uYmdjIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHdpZHRoOiAwO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxuICAgICAgei1pbmRleDogLTE7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5pY29uIHtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICAuaSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxuICAgICAgc3ZnIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmkuYWN0aXZlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YwMDtcclxuICAgIH1cclxuXHJcbiAgICA+IGRpdjpub3QoLmkpIHtcclxuICAgICAgd2lkdGg6IDMwJTtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICA+IC5pY29uLmZsZXgge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAyMHB4O1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gIH1cclxufVxyXG5cclxuLmxyIHtcclxuICA+IGRpdiB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gIH1cclxufVxyXG5cclxuI3RpdCB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIG1hcmdpbjogMTVweDtcclxuICBjb2xvcjogI2VlZTtcclxufVxyXG4uYXVkaW9MaXN0IHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgPiBkaXYge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICB9XHJcbiAgLmJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk2ZWFiO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogNXB4IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgfVxyXG4gIC5wcm9ncmFzcyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGY2MjgwO1xyXG4gICAgaGVpZ2h0OiAzcHg7XHJcbiAgICBtYXJnaW46IDAgMTVweDtcclxuICAgIG1heC13aWR0aDogMTIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBzcGFuIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgLy8gd2lkdGg6IDEwMCU7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW9uLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyMWM0MDtcbn1cbmlvbi1oZWFkZXIgaW9uLWJhY2stYnV0dG9uIHtcbiAgY29sb3I6ICNmZmY7XG59XG5pb24taGVhZGVyIC5zZWFyY2gge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cbmlvbi1oZWFkZXIgLnNlYXJjaCBpbnB1dCB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiBub25lO1xuICBoZWlnaHQ6IDMycHg7XG4gIHBhZGRpbmc6IDAgMTVweDtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG59XG5pb24taGVhZGVyIC5idG4ge1xuICBjb2xvcjogI2ZmZjtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDUsIDI5LCA2NSk7XG4gIC0tYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmljb25zIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG4uaWNvbnMgPiBkaXYge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuLmljb25zID4gZGl2IHN2ZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDcuNXB4IGF1dG87XG59XG4uaWNvbnMgPiBkaXYuYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhNTMyMjtcbn1cblxuLmluZm8ge1xuICBoZWlnaHQ6IDMwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDJkYWU3O1xufVxuLmluZm8gLnpoLFxuLmluZm8gLmVuIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBwYWRkaW5nOiAwIDE2cHg7XG59XG4uaW5mbyAuemgge1xuICBwYWRkaW5nOiAxZW0gNXZ3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjdjNWQ4O1xufVxuLmluZm8gLmVuIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgcGFkZGluZzogMWVtIDV2dztcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmluZm8gLmVuIHNwYW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgei1pbmRleDogMTtcbn1cbi5pbmZvIC5lbiBzcGFuLmJnYyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gIHotaW5kZXg6IC0xO1xufVxuLmluZm8gLmljb24ge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uaW5mbyAuaWNvbiAuaSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbn1cbi5pbmZvIC5pY29uIC5pIGltZyB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmluZm8gLmljb24gLmkgc3ZnIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uaW5mbyAuaWNvbiAuaS5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjAwO1xufVxuLmluZm8gLmljb24gPiBkaXY6bm90KC5pKSB7XG4gIHdpZHRoOiAzMCU7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuLmluZm8gPiAuaWNvbi5mbGV4IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDIwcHg7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xufVxuXG4ubHIgPiBkaXYge1xuICB3aWR0aDogNTAlO1xufVxuXG4jdGl0IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW46IDE1cHg7XG4gIGNvbG9yOiAjZWVlO1xufVxuXG4uYXVkaW9MaXN0IHtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbn1cbi5hdWRpb0xpc3QgPiBkaXYge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLmF1ZGlvTGlzdCAuYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ5NmVhYjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiA1cHggMTVweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuLmF1ZGlvTGlzdCAucHJvZ3Jhc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGY2MjgwO1xuICBoZWlnaHQ6IDNweDtcbiAgbWFyZ2luOiAwIDE1cHg7XG4gIG1heC13aWR0aDogMTIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmF1ZGlvTGlzdCAucHJvZ3Jhc3Mgc3BhbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn0iXX0= */";

/***/ }),

/***/ 10482:
/*!**********************************************************!*\
  !*** ./src/app/word-info/word-info.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n  <div class=\"search\">\r\n    <input type=\"text\" placeholder=\"search\">\r\n  </div>\r\n  <div class=\"btn\">search</div>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"info\">\r\n    <div class=\"zh\">{{item ? item.Mandarin : '--'}}</div>\r\n    <div class=\"en\">\r\n      <span><span class=\"bgc\" id=\"bgc\"></span>{{item ? (item.Translation ? item.Translation : item.Literal) : '--'}}</span>\r\n    </div>\r\n    <div class=\"icon flex\">\r\n      <div class=\"flex\">\r\n        <div class=\"i\" [ngClass]=\"{'active': inFavoriteStatus}\" (click)=\"onFavoriteAdd(!!inFavoriteStatus)\">\r\n          <svg class=\"icon\" width=\"20px\" height=\"20.00px\" viewBox=\"0 0 1024 1024\" version=\"1.1\"\r\n            xmlns=\"http://www.w3.org/2000/svg\">\r\n            <path fill=\"#333333\"\r\n              d=\"M335.008 916.629333c-35.914667 22.314667-82.88 10.773333-104.693333-25.557333a77.333333 77.333333 0 0 1-8.96-57.429333l46.485333-198.24a13.141333 13.141333 0 0 0-4.021333-12.864l-152.16-132.586667c-31.605333-27.52-35.253333-75.648-8.234667-107.733333a75.68 75.68 0 0 1 51.733333-26.752L354.848 339.2c4.352-0.362667 8.245333-3.232 10.026667-7.594667l76.938666-188.170666c16.032-39.2 60.618667-57.92 99.52-41.461334a76.309333 76.309333 0 0 1 40.832 41.461334l76.938667 188.16c1.781333 4.373333 5.674667 7.253333 10.026667 7.605333l199.712 16.277333c41.877333 3.413333 72.885333 40.458667 69.568 82.517334a76.938667 76.938667 0 0 1-26.08 51.978666l-152.16 132.586667c-3.541333 3.082667-5.141333 8.074667-4.021334 12.853333l46.485334 198.24c9.621333 41.013333-15.36 82.336-56.138667 92.224a75.285333 75.285333 0 0 1-57.525333-9.237333l-170.976-106.24a11.296 11.296 0 0 0-12.010667 0l-170.986667 106.24zM551.786667 756.032l170.976 106.24c2.624 1.621333 5.717333 2.122667 8.650666 1.408 6.410667-1.557333 10.56-8.426667 8.928-15.424l-46.485333-198.24a77.141333 77.141333 0 0 1 24.277333-75.733333L870.293333 441.706667c2.485333-2.165333 4.053333-5.312 4.330667-8.746667 0.565333-7.136-4.490667-13.173333-10.976-13.696l-199.712-16.288a75.989333 75.989333 0 0 1-64.064-47.168l-76.938667-188.16a12.309333 12.309333 0 0 0-6.538666-6.741333c-5.898667-2.496-12.725333 0.373333-15.328 6.741333l-76.949334 188.16a75.989333 75.989333 0 0 1-64.064 47.168l-199.701333 16.288a11.68 11.68 0 0 0-7.978667 4.181333 13.226667 13.226667 0 0 0 1.333334 18.261334l152.16 132.586666a77.141333 77.141333 0 0 1 24.277333 75.733334l-46.485333 198.229333a13.333333 13.333333 0 0 0 1.514666 9.877333c3.488 5.792 10.581333 7.530667 16.064 4.128l170.986667-106.229333a75.296 75.296 0 0 1 79.562667 0z\" />\r\n          </svg>\r\n        </div>\r\n        <div class=\"i\" [ngClass]=\"{'active': isManfang}\">\r\n          <img (click)=\"manfang()\" src=\"../../assets/icon/icon_turtle.png\" alt=\"\">\r\n        </div>\r\n      </div>\r\n      <div class=\"i\" (click)=\"ccc()\" *ngIf=\"isPlay\">\r\n        <svg class=\"icon\" width=\"40px\" height=\"40.00px\" viewBox=\"0 0 1024 1024\" version=\"1.1\"\r\n          xmlns=\"http://www.w3.org/2000/svg\">\r\n          <path fill=\"#333333\"\r\n            d=\"M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0z m0 981.333333C253.866667 981.333333 42.666667 770.133333 42.666667 512S253.866667 42.666667 512 42.666667s469.333333 211.2 469.333333 469.333333-211.2 469.333333-469.333333 469.333333zM672 441.6l-170.666667-113.066667c-57.6-38.4-106.666667-12.8-106.666666 57.6v256c0 70.4 46.933333 96 106.666666 57.6l170.666667-113.066666c57.6-42.666667 57.6-106.666667 0-145.066667z\" />\r\n        </svg>\r\n      </div>\r\n      <div class=\"i\" (click)=\"ccc()\" *ngIf=\"!isPlay\">\r\n        <svg t=\"1662365815338\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"\r\n          p-id=\"1150\" width=\"40px\" height=\"40.00px\">\r\n          <path\r\n            d=\"M512 1021.72444445C230.48647111 1021.72444445 2.27555555 793.51352889 2.27555555 512S230.48647111 2.27555555 512 2.27555555s509.72444445 228.21091555 509.72444445 509.72444445-228.21091555 509.72444445-509.72444445 509.72444445z m0-72.81777778c241.28170667 0 436.90666667-195.62496 436.90666667-436.90666667S753.28170667 75.09333333 512 75.09333333 75.09333333 270.71829333 75.09333333 512s195.62496 436.90666667 436.90666667 436.90666667z m-145.63555555-618.87829334a36.37248 36.37248 0 1 1 72.81777777 0v363.94325334a36.37248 36.37248 0 1 1-72.81777777 0v-363.94325334z m218.45333333 0a36.37248 36.37248 0 1 1 72.81777777 0v363.94325334a36.37248 36.37248 0 1 1-72.81777777 0v-363.94325334z\"\r\n            fill=\"#333333\" p-id=\"1151\"></path>\r\n        </svg>\r\n\r\n      </div>\r\n      <div class=\"flex\">\r\n        <div class=\"i\">\r\n          <svg t=\"1649431259778\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"\r\n            p-id=\"9270\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"20\" height=\"20\">\r\n            <defs>\r\n              <style type=\"text/css\">\r\n                @font-face {\r\n                  font-family: feedback-iconfont;\r\n                  src: url(\"//at.alicdn.com/t/font_1031158_u69w8yhxdu.woff2?t=1630033759944\") format(\"woff2\"),\r\n                    url(\"//at.alicdn.com/t/font_1031158_u69w8yhxdu.woff?t=1630033759944\") format(\"woff\"),\r\n                    url(\"//at.alicdn.com/t/font_1031158_u69w8yhxdu.ttf?t=1630033759944\") format(\"truetype\");\r\n                }\r\n              </style>\r\n            </defs>\r\n            <path\r\n              d=\"M266.24 512a40.96 40.96 0 1 1 40.96 40.96 40.96 40.96 0 0 1-40.96-40.96z m204.8 0a40.96 40.96 0 1 1 40.96 40.96 40.96 40.96 0 0 1-40.96-40.96z m204.8 0a40.96 40.96 0 1 1 40.96 40.96 40.96 40.96 0 0 1-40.96-40.96z m307.2 184.32a40.96 40.96 0 0 1-40.96-40.96V286.72a122.88 122.88 0 0 0-122.88-122.88H204.8a122.88 122.88 0 0 0-122.88 122.88v450.56a122.88 122.88 0 0 0 122.88 122.88h737.28a40.96 40.96 0 0 1 0 81.92H204.8A204.8 204.8 0 0 1 0 737.28V286.72A204.8 204.8 0 0 1 204.8 81.92h614.4a204.8 204.8 0 0 1 204.8 204.8v368.64a40.96 40.96 0 0 1-40.96 40.96z\"\r\n              p-id=\"9271\"></path>\r\n          </svg>\r\n        </div>\r\n        <div class=\"i\" *ngIf=\"!state.isRecording\" (click)=\"startRecord()\">\r\n          <svg class=\"icon\" width=\"20px\" height=\"20.00px\" viewBox=\"0 0 1024 1024\" version=\"1.1\"\r\n            xmlns=\"http://www.w3.org/2000/svg\">\r\n            <path fill=\"#333333\"\r\n              d=\"M544 830.4V960h-64v-129.6c-161.6-16-288-152.8-288-318.4h64c0 140.8 115.2 256 256 256s256-115.2 256-256h64c0 165.6-126.4 302.4-288 318.4zM512 640c70.4 0 128-57.6 128-128V192c0-70.4-57.6-128-128-128s-128 57.6-128 128v320c0 70.4 57.6 128 128 128z\" />\r\n          </svg>\r\n        </div>\r\n        <div class=\"i\" *ngIf=\"state.isRecording\" (click)=\"endRecord()\">\r\n          <svg t=\"1660899847939\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"\r\n            p-id=\"970\" width=\"20px\" height=\"20.00px\">\r\n            <path\r\n              d=\"M149.973333 89.6L934.4 874.112a42.666667 42.666667 0 0 1 3.541333 56.32l-3.584 4.010667a42.666667 42.666667 0 0 1-60.330666 0l-173.226667-173.269334A381.482667 381.482667 0 0 1 554.666667 808.32V938.666667a42.666667 42.666667 0 0 1-85.333334 0v-130.346667a384.213333 384.213333 0 0 1-328.746666-283.989333 243.925333 243.925333 0 0 1-2.56-10.666667 42.24 42.24 0 0 1 35.157333-50.688c23.04-3.413333 44.629333 11.946667 49.066667 34.773333 0.768 4.266667 1.578667 7.68 2.304 10.282667a298.752 298.752 0 0 0 412.885333 189.738667l-66.176-66.133334A213.333333 213.333333 0 0 1 298.666667 426.666667V358.997333L89.6 149.973333A42.666667 42.666667 0 0 1 150.016 89.6z m235.434667 356.138667a128.085333 128.085333 0 0 0 107.52 107.52z m385.792 136.106666c4.138667-12.032 6.698667-19.029333 7.722667-21.034666 8.832-17.536 16-36.096 21.248-55.381334 0.469333-1.706667 0.853333-3.712 1.152-6.016a43.946667 43.946667 0 0 1 43.605333-38.101333h7.210667a36.565333 36.565333 0 0 1 35.797333 44.032 381.866667 381.866667 0 0 1-41.6 110.336 41.386667 41.386667 0 0 1-75.093333-33.834667zM640 426.666667V256a128 128 0 0 0-234.026667-71.850667 40.234667 40.234667 0 0 1-69.802666-39.552c7.808-16.810667 13.312-26.922667 16.426666-30.421333A213.333333 213.333333 0 0 1 725.333333 256v170.666667a42.24 42.24 0 0 1-82.858666 11.477333A57.472 57.472 0 0 1 640 426.666667z\"\r\n              fill=\"#515151\" p-id=\"971\"></path>\r\n          </svg>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <audio id=\"audio_player\" [src]=\"itemUrl\"></audio>\r\n  <div id=\"tit\">\r\n    My history voice：\r\n  </div>\r\n  <div class=\"audioList\">\r\n    <div class=\"\" *ngFor=\"let item of audioList; let i = index\">\r\n      <audio [id]=\"'a' + item.id\" [src]=\"item.FileUrl\"></audio>\r\n\r\n      Voice {{i+1}}:\r\n      <div class=\"flex\">\r\n        <div class=\"prograss flex-1\">\r\n          <span [id]=\"'a'+item.id+'pro'\"></span>\r\n        </div>\r\n        <div class=\"btn\" (click)=\"listPlay('a' + item.id)\">\r\n          Play\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n  <div>\r\n  </div>\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_word-info_word-info_module_ts.js.map