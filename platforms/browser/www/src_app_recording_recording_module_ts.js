"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_recording_recording_module_ts"],{

/***/ 79661:
/*!*******************************************************!*\
  !*** ./src/app/recording/recording-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecordingPageRoutingModule": () => (/* binding */ RecordingPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _recording_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recording.page */ 58045);




const routes = [
    {
        path: '',
        component: _recording_page__WEBPACK_IMPORTED_MODULE_0__.RecordingPage
    }
];
let RecordingPageRoutingModule = class RecordingPageRoutingModule {
};
RecordingPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RecordingPageRoutingModule);



/***/ }),

/***/ 40967:
/*!***********************************************!*\
  !*** ./src/app/recording/recording.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecordingPageModule": () => (/* binding */ RecordingPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _recording_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recording-routing.module */ 79661);
/* harmony import */ var _recording_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recording.page */ 58045);
/* harmony import */ var _awesome_cordova_plugins_speech_recognition_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/speech-recognition/ngx */ 45799);








let RecordingPageModule = class RecordingPageModule {
};
RecordingPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _recording_routing_module__WEBPACK_IMPORTED_MODULE_0__.RecordingPageRoutingModule
        ],
        declarations: [_recording_page__WEBPACK_IMPORTED_MODULE_1__.RecordingPage],
        providers: [
            _awesome_cordova_plugins_speech_recognition_ngx__WEBPACK_IMPORTED_MODULE_2__.SpeechRecognition
        ]
    })
], RecordingPageModule);



/***/ }),

/***/ 58045:
/*!*********************************************!*\
  !*** ./src/app/recording/recording.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecordingPage": () => (/* binding */ RecordingPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _recording_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recording.page.html?ngResource */ 21138);
/* harmony import */ var _recording_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recording.page.scss?ngResource */ 43900);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.page */ 75162);
/* harmony import */ var _app_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.store */ 94827);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _utils_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/string */ 12499);
/* harmony import */ var _firebase_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @firebase/storage */ 8376);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _awesome_cordova_plugins_speech_recognition_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @awesome-cordova-plugins/speech-recognition/ngx */ 45799);














let RecordingPage = class RecordingPage extends _app_page__WEBPACK_IMPORTED_MODULE_2__.PageBase {
    constructor(activatedRoute, appStore, navCtrl, route, toastController, loadingController, cdf, location, speechRecognition) {
        super(appStore, navCtrl, route);
        this.activatedRoute = activatedRoute;
        this.appStore = appStore;
        this.navCtrl = navCtrl;
        this.route = route;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.cdf = cdf;
        this.location = location;
        this.speechRecognition = speechRecognition;
        this.conversation = {};
        this.isPlaying = false;
        this.isRecording = false;
        this.recordScore = null;
        this.recognition = new window.webkitSpeechRecognition();
        this.recognitionResult = "";
        this.compare = debounce(this.compare, 3000);
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: `语音识别huanjingjiange`,
                duration: 1500,
                position: "middle",
            });
            yield toast.present();
            setTimeout(() => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                const toast = yield this.toastController.create({
                    message: `8s`,
                    duration: 1500,
                    position: "middle",
                });
                yield toast.present();
                this.speechRecognition
                    .isRecognitionAvailable()
                    .then((available) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                    const toast = yield this.toastController.create({
                        message: `语音识别${available}`,
                        duration: 1500,
                        position: "middle",
                    });
                    yield toast.present();
                }));
            }), 8000);
            const title = this.activatedRoute.snapshot.paramMap.get("title");
            const name = this.activatedRoute.snapshot.paramMap.get("name");
            if (title) {
                this.fetchConversationDetail();
            }
            else {
                this.fetchSentenceDetail();
            }
            this.recognition.continuous = true;
            this.recognition.onend = () => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                const str = this.recognitionResult;
                this.recognitionResult = "";
                yield this.showLoading();
                yield this.compare(str);
            });
            this.recognition.onresult = (event) => {
                for (var i = event.resultIndex; i < event.results.length; ++i) {
                    if (event.results[i].isFinal) {
                        this.recognitionResult += event.results[i][0].transcript;
                    }
                }
            };
        });
    }
    fetchConversationDetail() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const storage = (0,_firebase_storage__WEBPACK_IMPORTED_MODULE_5__.getStorage)();
            const mp3Ref = (0,_firebase_storage__WEBPACK_IMPORTED_MODULE_5__.ref)(storage, "conversations/" +
                this.activatedRoute.snapshot.paramMap.get("title") +
                "/" +
                this.activatedRoute.snapshot.paramMap.get("title") +
                ".mp3");
            const wordRef = (0,_firebase_storage__WEBPACK_IMPORTED_MODULE_5__.ref)(storage, "conversations/" +
                this.activatedRoute.snapshot.paramMap.get("title") +
                "/" +
                this.activatedRoute.snapshot.paramMap.get("title") +
                ".txt");
            try {
                const [mp3Url, wordsUrl] = yield Promise.all([
                    (0,_firebase_storage__WEBPACK_IMPORTED_MODULE_5__.getDownloadURL)(mp3Ref),
                    (0,_firebase_storage__WEBPACK_IMPORTED_MODULE_5__.getDownloadURL)(wordRef),
                ]);
                const xhr = new XMLHttpRequest();
                xhr.responseType = "blob";
                xhr.onload = (event) => {
                    const blob = xhr.response;
                    var reader = new FileReader();
                    reader.readAsText(blob, "utf-8");
                    reader.onload = () => {
                        this.conversation = {
                            path: mp3Url,
                            title: this.activatedRoute.snapshot.paramMap.get("title"),
                            text: reader.result.split("\n"),
                        };
                    };
                };
                xhr.open("GET", wordsUrl.toString());
                xhr.send();
            }
            catch (error) {
                const toast = yield this.toastController.create({
                    message: "加载失败，请重试!",
                    duration: 1500,
                    position: "middle",
                });
                yield toast.present();
            }
        });
    }
    fetchSentenceDetail() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const storage = (0,_firebase_storage__WEBPACK_IMPORTED_MODULE_5__.getStorage)();
            const wordRef = (0,_firebase_storage__WEBPACK_IMPORTED_MODULE_5__.ref)(storage, "sentence/" + this.activatedRoute.snapshot.paramMap.get("name"));
            try {
                const wordsUrl = yield (0,_firebase_storage__WEBPACK_IMPORTED_MODULE_5__.getDownloadURL)(wordRef);
                const xhr = new XMLHttpRequest();
                xhr.responseType = "blob";
                xhr.onload = (event) => {
                    const blob = xhr.response;
                    var reader = new FileReader();
                    reader.readAsText(blob, "utf-8");
                    reader.onload = () => {
                        this.conversation = {
                            title: this.activatedRoute.snapshot.paramMap.get("name"),
                            text: reader.result.split("\n"),
                        };
                    };
                };
                xhr.open("GET", wordsUrl.toString());
                xhr.send();
            }
            catch (error) {
                const toast = yield this.toastController.create({
                    message: "加载失败，请重试!",
                    duration: 1500,
                    position: "middle",
                });
                yield toast.present();
            }
        });
    }
    showLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: "Calculating...",
            });
            yield loading.present();
        });
    }
    hideLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            yield this.loadingController.dismiss();
        });
    }
    play() {
        this.isPlaying = !this.isPlaying;
        const audio = document.getElementById("audio");
        if (this.isPlaying) {
            audio.pause();
        }
        else {
            audio.play();
        }
    }
    record() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.isRecording = !this.isRecording;
            if (this.isRecording) {
                this.recognition.start();
            }
            else {
                this.recognition.stop();
            }
        });
    }
    compare(text) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const compareResult = (0,_utils_string__WEBPACK_IMPORTED_MODULE_4__.similar)(text, this.conversation.text.filter((cur, index) => index % 2).join(""), null);
            yield this.hideLoading();
            const _num = Number(compareResult * 100).toFixed(0);
            const toast = yield this.toastController.create({
                message: "The score is :" + _num + " Keep Going!",
                duration: 5000,
                position: "middle",
            });
            yield toast.present();
            this.recordScore = _num;
            this.cdf.markForCheck(); // 进行标注
            this.cdf.detectChanges(); // 要多加一行这个 执行一次变化检测
        });
    }
    onBack() {
        this.location.back();
    }
};
RecordingPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: _app_store__WEBPACK_IMPORTED_MODULE_3__.AppStore },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.LoadingController },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_11__.Location },
    { type: _awesome_cordova_plugins_speech_recognition_ngx__WEBPACK_IMPORTED_MODULE_6__.SpeechRecognition }
];
RecordingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: "app-recording",
        template: _recording_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_recording_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RecordingPage);

const debounce = function (fn, wait) {
    // 自由变量，debounce执行完成被释放，time也不会被释放
    let time;
    // 返回一个闭包，接受参数
    return function (...args) {
        // 保存闭包被调用时的this
        const this_ = this;
        // 清除上一次的定时器
        if (time) {
            clearTimeout(time);
        }
        // 不再是直接执行fn，在内部传递参数
        time = setTimeout(function () {
            // 通过apply修改fn的this
            fn.apply(this_, args);
        }, wait);
    };
};


/***/ }),

/***/ 12499:
/*!*********************************!*\
  !*** ./src/app/utils/string.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "similar": () => (/* binding */ similar)
/* harmony export */ });
function similar(s, t, f) {
    if (!s || !t) {
        return 0;
    }
    var l = s.length > t.length ? s.length : t.length;
    var n = s.length;
    var m = t.length;
    var d = [];
    f = f || 3;
    var min = function (a, b, c) {
        return a < b ? (a < c ? a : c) : (b < c ? b : c);
    };
    var i, j, si, tj, cost;
    if (n === 0)
        return m;
    if (m === 0)
        return n;
    for (i = 0; i <= n; i++) {
        d[i] = [];
        d[i][0] = i;
    }
    for (j = 0; j <= m; j++) {
        d[0][j] = j;
    }
    for (i = 1; i <= n; i++) {
        si = s.charAt(i - 1);
        for (j = 1; j <= m; j++) {
            tj = t.charAt(j - 1);
            if (si === tj) {
                cost = 0;
            }
            else {
                cost = 1;
            }
            d[i][j] = min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
        }
    }
    let res = (1 - d[n][m] / l);
    return res.toFixed(f);
}


/***/ }),

/***/ 96881:
/*!******************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/awesome-cordova-plugin.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AwesomeCordovaNativePlugin": () => (/* binding */ AwesomeCordovaNativePlugin)
/* harmony export */ });
/* harmony import */ var _decorators_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./decorators/common */ 92580);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ 33627);


var AwesomeCordovaNativePlugin = /** @class */ (function () {
    function AwesomeCordovaNativePlugin() {
    }
    /**
     * Returns a boolean that indicates whether the plugin is installed
     *
     * @returns {boolean}
     */
    AwesomeCordovaNativePlugin.installed = function () {
        var isAvailable = (0,_decorators_common__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(this.pluginRef) === true;
        return isAvailable;
    };
    /**
     * Returns the original plugin object
     */
    AwesomeCordovaNativePlugin.getPlugin = function () {
        if (typeof window !== 'undefined') {
            return (0,_util__WEBPACK_IMPORTED_MODULE_1__.get)(window, this.pluginRef);
        }
        return null;
    };
    /**
     * Returns the plugin's name
     */
    AwesomeCordovaNativePlugin.getPluginName = function () {
        var pluginName = this.pluginName;
        return pluginName;
    };
    /**
     * Returns the plugin's reference
     */
    AwesomeCordovaNativePlugin.getPluginRef = function () {
        var pluginRef = this.pluginRef;
        return pluginRef;
    };
    /**
     * Returns the plugin's install name
     */
    AwesomeCordovaNativePlugin.getPluginInstallName = function () {
        var plugin = this.plugin;
        return plugin;
    };
    /**
     * Returns the plugin's supported platforms
     */
    AwesomeCordovaNativePlugin.getSupportedPlatforms = function () {
        var platform = this.platforms;
        return platform;
    };
    AwesomeCordovaNativePlugin.pluginName = '';
    AwesomeCordovaNativePlugin.pluginRef = '';
    AwesomeCordovaNativePlugin.plugin = '';
    AwesomeCordovaNativePlugin.repo = '';
    AwesomeCordovaNativePlugin.platforms = [];
    AwesomeCordovaNativePlugin.install = '';
    return AwesomeCordovaNativePlugin;
}());



/***/ }),

/***/ 15712:
/*!*****************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/bootstrap.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkReady": () => (/* binding */ checkReady)
/* harmony export */ });
/**
 *
 */
function checkReady() {
    if (typeof process === 'undefined') {
        var win_1 = typeof window !== 'undefined' ? window : {};
        var DEVICE_READY_TIMEOUT_1 = 5000;
        // To help developers using cordova, we listen for the device ready event and
        // log an error if it didn't fire in a reasonable amount of time. Generally,
        // when this happens, developers should remove and reinstall plugins, since
        // an inconsistent plugin is often the culprit.
        var before_1 = Date.now();
        var didFireReady_1 = false;
        win_1.document.addEventListener('deviceready', function () {
            console.log("Ionic Native: deviceready event fired after " + (Date.now() - before_1) + " ms");
            didFireReady_1 = true;
        });
        setTimeout(function () {
            if (!didFireReady_1 && win_1.cordova) {
                console.warn("Ionic Native: deviceready did not fire within " + DEVICE_READY_TIMEOUT_1 + "ms. This can happen when plugins are in an inconsistent state. Try removing plugins from plugins/ and reinstalling them.");
            }
        }, DEVICE_READY_TIMEOUT_1);
    }
}


/***/ }),

/***/ 92580:
/*!*************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/decorators/common.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ERR_CORDOVA_NOT_AVAILABLE": () => (/* binding */ ERR_CORDOVA_NOT_AVAILABLE),
/* harmony export */   "ERR_PLUGIN_NOT_INSTALLED": () => (/* binding */ ERR_PLUGIN_NOT_INSTALLED),
/* harmony export */   "getPromise": () => (/* binding */ getPromise),
/* harmony export */   "wrapPromise": () => (/* binding */ wrapPromise),
/* harmony export */   "checkAvailability": () => (/* binding */ checkAvailability),
/* harmony export */   "instanceAvailability": () => (/* binding */ instanceAvailability),
/* harmony export */   "setIndex": () => (/* binding */ setIndex),
/* harmony export */   "callCordovaPlugin": () => (/* binding */ callCordovaPlugin),
/* harmony export */   "callInstance": () => (/* binding */ callInstance),
/* harmony export */   "getPlugin": () => (/* binding */ getPlugin),
/* harmony export */   "get": () => (/* binding */ get),
/* harmony export */   "pluginWarn": () => (/* binding */ pluginWarn),
/* harmony export */   "cordovaWarn": () => (/* binding */ cordovaWarn),
/* harmony export */   "wrap": () => (/* binding */ wrap),
/* harmony export */   "wrapInstance": () => (/* binding */ wrapInstance)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 12378);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 36312);

var ERR_CORDOVA_NOT_AVAILABLE = { error: 'cordova_not_available' };
var ERR_PLUGIN_NOT_INSTALLED = { error: 'plugin_not_installed' };
/**
 * @param callback
 */
function getPromise(callback) {
    var tryNativePromise = function () {
        if (Promise) {
            return new Promise(function (resolve, reject) {
                callback(resolve, reject);
            });
        }
        else {
            console.error('No Promise support or polyfill found. To enable Ionic Native support, please add the es6-promise polyfill before this script, or run with a library like Angular or on a recent browser.');
        }
    };
    if (typeof window !== 'undefined' && window.angular) {
        var doc = window.document;
        var injector = window.angular.element(doc.querySelector('[ng-app]') || doc.body).injector();
        if (injector) {
            var $q = injector.get('$q');
            return $q(function (resolve, reject) {
                callback(resolve, reject);
            });
        }
        console.warn("Angular 1 was detected but $q couldn't be retrieved. This is usually when the app is not bootstrapped on the html or body tag. Falling back to native promises which won't trigger an automatic digest when promises resolve.");
    }
    return tryNativePromise();
}
/**
 * @param pluginObj
 * @param methodName
 * @param args
 * @param opts
 */
function wrapPromise(pluginObj, methodName, args, opts) {
    if (opts === void 0) { opts = {}; }
    var pluginResult, rej;
    var p = getPromise(function (resolve, reject) {
        if (opts.destruct) {
            pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts, function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return resolve(args);
            }, function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return reject(args);
            });
        }
        else {
            pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts, resolve, reject);
        }
        rej = reject;
    });
    // Angular throws an error on unhandled rejection, but in this case we have already printed
    // a warning that Cordova is undefined or the plugin is uninstalled, so there is no reason
    // to error
    if (pluginResult && pluginResult.error) {
        p.catch(function () { });
        typeof rej === 'function' && rej(pluginResult.error);
    }
    return p;
}
/**
 * @param pluginObj
 * @param methodName
 * @param args
 * @param opts
 */
function wrapOtherPromise(pluginObj, methodName, args, opts) {
    if (opts === void 0) { opts = {}; }
    return getPromise(function (resolve, reject) {
        var pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts);
        if (pluginResult) {
            if (pluginResult.error) {
                reject(pluginResult.error);
            }
            else if (pluginResult.then) {
                pluginResult.then(resolve).catch(reject);
            }
        }
        else {
            reject({ error: 'unexpected_error' });
        }
    });
}
/**
 * @param pluginObj
 * @param methodName
 * @param args
 * @param opts
 */
function wrapObservable(pluginObj, methodName, args, opts) {
    if (opts === void 0) { opts = {}; }
    return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable(function (observer) {
        var pluginResult;
        if (opts.destruct) {
            pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts, function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return observer.next(args);
            }, function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return observer.error(args);
            });
        }
        else {
            pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts, observer.next.bind(observer), observer.error.bind(observer));
        }
        if (pluginResult && pluginResult.error) {
            observer.error(pluginResult.error);
            observer.complete();
        }
        return function () {
            try {
                if (opts.clearFunction) {
                    if (opts.clearWithArgs) {
                        return callCordovaPlugin(pluginObj, opts.clearFunction, args, opts, observer.next.bind(observer), observer.error.bind(observer));
                    }
                    return callCordovaPlugin(pluginObj, opts.clearFunction, []);
                }
            }
            catch (e) {
                console.warn('Unable to clear the previous observable watch for', pluginObj.constructor.getPluginName(), methodName);
                console.warn(e);
            }
        };
    });
}
/**
 * Wrap the event with an observable
 *
 * @private
 * @param event event name
 * @param element The element to attach the event listener to
 * @returns {Observable}
 */
function wrapEventObservable(event, element) {
    element =
        typeof window !== 'undefined' && element
            ? get(window, element)
            : element || (typeof window !== 'undefined' ? window : {});
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.fromEvent)(element, event);
}
/**
 * @param plugin
 * @param methodName
 * @param pluginName
 */
function checkAvailability(plugin, methodName, pluginName) {
    var pluginRef, pluginPackage;
    if (typeof plugin === 'string') {
        pluginRef = plugin;
    }
    else {
        pluginRef = plugin.constructor.getPluginRef();
        pluginName = plugin.constructor.getPluginName();
        pluginPackage = plugin.constructor.getPluginInstallName();
    }
    var pluginInstance = getPlugin(pluginRef);
    if (!pluginInstance || (!!methodName && typeof pluginInstance[methodName] === 'undefined')) {
        if (typeof window === 'undefined' || !window.cordova) {
            cordovaWarn(pluginName, methodName);
            return ERR_CORDOVA_NOT_AVAILABLE;
        }
        pluginWarn(pluginName, pluginPackage, methodName);
        return ERR_PLUGIN_NOT_INSTALLED;
    }
    return true;
}
/**
 * Checks if _objectInstance exists and has the method/property
 *
 * @param pluginObj
 * @param methodName
 * @private
 */
function instanceAvailability(pluginObj, methodName) {
    return pluginObj._objectInstance && (!methodName || typeof pluginObj._objectInstance[methodName] !== 'undefined');
}
/**
 * @param args
 * @param opts
 * @param resolve
 * @param reject
 */
function setIndex(args, opts, resolve, reject) {
    if (opts === void 0) { opts = {}; }
    // ignore resolve and reject in case sync
    if (opts.sync) {
        return args;
    }
    // If the plugin method expects myMethod(success, err, options)
    if (opts.callbackOrder === 'reverse') {
        // Get those arguments in the order [resolve, reject, ...restOfArgs]
        args.unshift(reject);
        args.unshift(resolve);
    }
    else if (opts.callbackStyle === 'node') {
        args.push(function (err, result) {
            if (err) {
                reject(err);
            }
            else {
                resolve(result);
            }
        });
    }
    else if (opts.callbackStyle === 'object' && opts.successName && opts.errorName) {
        var obj = {};
        obj[opts.successName] = resolve;
        obj[opts.errorName] = reject;
        args.push(obj);
    }
    else if (typeof opts.successIndex !== 'undefined' || typeof opts.errorIndex !== 'undefined') {
        var setSuccessIndex = function () {
            // If we've specified a success/error index
            if (opts.successIndex > args.length) {
                args[opts.successIndex] = resolve;
            }
            else {
                args.splice(opts.successIndex, 0, resolve);
            }
        };
        var setErrorIndex = function () {
            // We don't want that the reject cb gets spliced into the position of an optional argument that has not been
            // defined and thus causing non expected behavior.
            if (opts.errorIndex > args.length) {
                args[opts.errorIndex] = reject; // insert the reject fn at the correct specific index
            }
            else {
                args.splice(opts.errorIndex, 0, reject); // otherwise just splice it into the array
            }
        };
        if (opts.successIndex > opts.errorIndex) {
            setErrorIndex();
            setSuccessIndex();
        }
        else {
            setSuccessIndex();
            setErrorIndex();
        }
    }
    else {
        // Otherwise, let's tack them on to the end of the argument list
        // which is 90% of cases
        args.push(resolve);
        args.push(reject);
    }
    return args;
}
/**
 * @param pluginObj
 * @param methodName
 * @param args
 * @param opts
 * @param resolve
 * @param reject
 */
function callCordovaPlugin(pluginObj, methodName, args, opts, resolve, reject) {
    if (opts === void 0) { opts = {}; }
    // Try to figure out where the success/error callbacks need to be bound
    // to our promise resolve/reject handlers.
    args = setIndex(args, opts, resolve, reject);
    var availabilityCheck = checkAvailability(pluginObj, methodName);
    if (availabilityCheck === true) {
        var pluginInstance = getPlugin(pluginObj.constructor.getPluginRef());
        // eslint-disable-next-line prefer-spread
        return pluginInstance[methodName].apply(pluginInstance, args);
    }
    else {
        return availabilityCheck;
    }
}
/**
 * @param pluginObj
 * @param methodName
 * @param args
 * @param opts
 * @param resolve
 * @param reject
 */
function callInstance(pluginObj, methodName, args, opts, resolve, reject) {
    if (opts === void 0) { opts = {}; }
    args = setIndex(args, opts, resolve, reject);
    if (instanceAvailability(pluginObj, methodName)) {
        // eslint-disable-next-line prefer-spread
        return pluginObj._objectInstance[methodName].apply(pluginObj._objectInstance, args);
    }
}
/**
 * @param pluginRef
 */
function getPlugin(pluginRef) {
    if (typeof window !== 'undefined') {
        return get(window, pluginRef);
    }
    return null;
}
/**
 * @param element
 * @param path
 */
function get(element, path) {
    var paths = path.split('.');
    var obj = element;
    for (var i = 0; i < paths.length; i++) {
        if (!obj) {
            return null;
        }
        obj = obj[paths[i]];
    }
    return obj;
}
/**
 * @param pluginName
 * @param plugin
 * @param method
 */
function pluginWarn(pluginName, plugin, method) {
    if (method) {
        console.warn('Native: tried calling ' + pluginName + '.' + method + ', but the ' + pluginName + ' plugin is not installed.');
    }
    else {
        console.warn("Native: tried accessing the " + pluginName + " plugin but it's not installed.");
    }
    if (plugin) {
        console.warn("Install the " + pluginName + " plugin: 'ionic cordova plugin add " + plugin + "'");
    }
}
/**
 * @private
 * @param pluginName
 * @param method
 */
function cordovaWarn(pluginName, method) {
    if (typeof process === 'undefined') {
        if (method) {
            console.warn('Native: tried calling ' +
                pluginName +
                '.' +
                method +
                ', but Cordova is not available. Make sure to include cordova.js or run in a device/simulator');
        }
        else {
            console.warn('Native: tried accessing the ' +
                pluginName +
                ' plugin but Cordova is not available. Make sure to include cordova.js or run in a device/simulator');
        }
    }
}
/**
 * @param pluginObj
 * @param methodName
 * @param opts
 * @private
 */
var wrap = function (pluginObj, methodName, opts) {
    if (opts === void 0) { opts = {}; }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (opts.sync) {
            // Sync doesn't wrap the plugin with a promise or observable, it returns the result as-is
            return callCordovaPlugin(pluginObj, methodName, args, opts);
        }
        else if (opts.observable) {
            return wrapObservable(pluginObj, methodName, args, opts);
        }
        else if (opts.eventObservable && opts.event) {
            return wrapEventObservable(opts.event, opts.element);
        }
        else if (opts.otherPromise) {
            return wrapOtherPromise(pluginObj, methodName, args, opts);
        }
        else {
            return wrapPromise(pluginObj, methodName, args, opts);
        }
    };
};
/**
 * @param pluginObj
 * @param methodName
 * @param opts
 * @private
 */
function wrapInstance(pluginObj, methodName, opts) {
    if (opts === void 0) { opts = {}; }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (opts.sync) {
            return callInstance(pluginObj, methodName, args, opts);
        }
        else if (opts.observable) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable(function (observer) {
                var pluginResult;
                if (opts.destruct) {
                    pluginResult = callInstance(pluginObj, methodName, args, opts, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return observer.next(args);
                    }, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return observer.error(args);
                    });
                }
                else {
                    pluginResult = callInstance(pluginObj, methodName, args, opts, observer.next.bind(observer), observer.error.bind(observer));
                }
                if (pluginResult && pluginResult.error) {
                    observer.error(pluginResult.error);
                }
                return function () {
                    try {
                        if (opts.clearWithArgs) {
                            return callInstance(pluginObj, opts.clearFunction, args, opts, observer.next.bind(observer), observer.error.bind(observer));
                        }
                        return callInstance(pluginObj, opts.clearFunction, []);
                    }
                    catch (e) {
                        console.warn('Unable to clear the previous observable watch for', pluginObj.constructor.getPluginName(), methodName);
                        console.warn(e);
                    }
                };
            });
        }
        else if (opts.otherPromise) {
            return getPromise(function (resolve, reject) {
                var result;
                if (opts.destruct) {
                    result = callInstance(pluginObj, methodName, args, opts, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return resolve(args);
                    }, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return reject(args);
                    });
                }
                else {
                    result = callInstance(pluginObj, methodName, args, opts, resolve, reject);
                }
                if (result && result.then) {
                    result.then(resolve, reject);
                }
                else {
                    reject();
                }
            });
        }
        else {
            var pluginResult_1, rej_1;
            var p = getPromise(function (resolve, reject) {
                if (opts.destruct) {
                    pluginResult_1 = callInstance(pluginObj, methodName, args, opts, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return resolve(args);
                    }, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return reject(args);
                    });
                }
                else {
                    pluginResult_1 = callInstance(pluginObj, methodName, args, opts, resolve, reject);
                }
                rej_1 = reject;
            });
            // Angular throws an error on unhandled rejection, but in this case we have already printed
            // a warning that Cordova is undefined or the plugin is uninstalled, so there is no reason
            // to error
            if (pluginResult_1 && pluginResult_1.error) {
                p.catch(function () { });
                typeof rej_1 === 'function' && rej_1(pluginResult_1.error);
            }
            return p;
        }
    };
}


/***/ }),

/***/ 94479:
/*!********************************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/decorators/cordova-function-override.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cordovaFunctionOverride": () => (/* binding */ cordovaFunctionOverride)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 12378);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ 92580);


/**
 * @param pluginObj
 * @param methodName
 */
function overrideFunction(pluginObj, methodName) {
    return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(function (observer) {
        var availabilityCheck = (0,_common__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(pluginObj, methodName);
        if (availabilityCheck === true) {
            var pluginInstance_1 = (0,_common__WEBPACK_IMPORTED_MODULE_0__.getPlugin)(pluginObj.constructor.getPluginRef());
            pluginInstance_1[methodName] = observer.next.bind(observer);
            return function () { return (pluginInstance_1[methodName] = function () { }); };
        }
        else {
            observer.error(availabilityCheck);
            observer.complete();
        }
    });
}
/**
 * @param pluginObj
 * @param methodName
 * @param args
 */
function cordovaFunctionOverride(pluginObj, methodName, args) {
    if (args === void 0) { args = []; }
    return overrideFunction(pluginObj, methodName);
}


/***/ }),

/***/ 65621:
/*!***********************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/decorators/cordova-instance.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cordovaInstance": () => (/* binding */ cordovaInstance)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ 92580);

/**
 * @param pluginObj
 * @param methodName
 * @param config
 * @param args
 */
function cordovaInstance(pluginObj, methodName, config, args) {
    args = Array.from(args);
    return (0,_common__WEBPACK_IMPORTED_MODULE_0__.wrapInstance)(pluginObj, methodName, config).apply(this, args);
}


/***/ }),

/***/ 58223:
/*!***********************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/decorators/cordova-property.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cordovaPropertyGet": () => (/* binding */ cordovaPropertyGet),
/* harmony export */   "cordovaPropertySet": () => (/* binding */ cordovaPropertySet)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ 92580);

/**
 * @param pluginObj
 * @param key
 */
function cordovaPropertyGet(pluginObj, key) {
    if ((0,_common__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(pluginObj, key) === true) {
        return (0,_common__WEBPACK_IMPORTED_MODULE_0__.getPlugin)(pluginObj.constructor.getPluginRef())[key];
    }
    return null;
}
/**
 * @param pluginObj
 * @param key
 * @param value
 */
function cordovaPropertySet(pluginObj, key, value) {
    if ((0,_common__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(pluginObj, key) === true) {
        (0,_common__WEBPACK_IMPORTED_MODULE_0__.getPlugin)(pluginObj.constructor.getPluginRef())[key] = value;
    }
}


/***/ }),

/***/ 72413:
/*!**************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/decorators/cordova.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cordova": () => (/* binding */ cordova)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ 92580);

/**
 * @param pluginObj
 * @param methodName
 * @param config
 * @param args
 */
function cordova(pluginObj, methodName, config, args) {
    return (0,_common__WEBPACK_IMPORTED_MODULE_0__.wrap)(pluginObj, methodName, config).apply(this, args);
}


/***/ }),

/***/ 29641:
/*!************************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/decorators/instance-property.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "instancePropertyGet": () => (/* binding */ instancePropertyGet),
/* harmony export */   "instancePropertySet": () => (/* binding */ instancePropertySet)
/* harmony export */ });
/**
 * @param pluginObj
 * @param key
 */
function instancePropertyGet(pluginObj, key) {
    if (pluginObj._objectInstance && pluginObj._objectInstance[key]) {
        return pluginObj._objectInstance[key];
    }
    return null;
}
/**
 * @param pluginObj
 * @param key
 * @param value
 */
function instancePropertySet(pluginObj, key, value) {
    if (pluginObj._objectInstance) {
        pluginObj._objectInstance[key] = value;
    }
}


/***/ }),

/***/ 64230:
/*!*****************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/decorators/interfaces.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 49471:
/*!*************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AwesomeCordovaNativePlugin": () => (/* reexport safe */ _awesome_cordova_plugin__WEBPACK_IMPORTED_MODULE_1__.AwesomeCordovaNativePlugin),
/* harmony export */   "checkAvailability": () => (/* reexport safe */ _decorators_common__WEBPACK_IMPORTED_MODULE_2__.checkAvailability),
/* harmony export */   "instanceAvailability": () => (/* reexport safe */ _decorators_common__WEBPACK_IMPORTED_MODULE_2__.instanceAvailability),
/* harmony export */   "wrap": () => (/* reexport safe */ _decorators_common__WEBPACK_IMPORTED_MODULE_2__.wrap),
/* harmony export */   "getPromise": () => (/* reexport safe */ _decorators_common__WEBPACK_IMPORTED_MODULE_2__.getPromise),
/* harmony export */   "cordova": () => (/* reexport safe */ _decorators_cordova__WEBPACK_IMPORTED_MODULE_3__.cordova),
/* harmony export */   "cordovaFunctionOverride": () => (/* reexport safe */ _decorators_cordova_function_override__WEBPACK_IMPORTED_MODULE_4__.cordovaFunctionOverride),
/* harmony export */   "cordovaInstance": () => (/* reexport safe */ _decorators_cordova_instance__WEBPACK_IMPORTED_MODULE_5__.cordovaInstance),
/* harmony export */   "cordovaPropertyGet": () => (/* reexport safe */ _decorators_cordova_property__WEBPACK_IMPORTED_MODULE_6__.cordovaPropertyGet),
/* harmony export */   "cordovaPropertySet": () => (/* reexport safe */ _decorators_cordova_property__WEBPACK_IMPORTED_MODULE_6__.cordovaPropertySet),
/* harmony export */   "instancePropertyGet": () => (/* reexport safe */ _decorators_instance_property__WEBPACK_IMPORTED_MODULE_7__.instancePropertyGet),
/* harmony export */   "instancePropertySet": () => (/* reexport safe */ _decorators_instance_property__WEBPACK_IMPORTED_MODULE_7__.instancePropertySet)
/* harmony export */ });
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bootstrap */ 15712);
/* harmony import */ var _awesome_cordova_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./awesome-cordova-plugin */ 96881);
/* harmony import */ var _decorators_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./decorators/common */ 92580);
/* harmony import */ var _decorators_cordova__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./decorators/cordova */ 72413);
/* harmony import */ var _decorators_cordova_function_override__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./decorators/cordova-function-override */ 94479);
/* harmony import */ var _decorators_cordova_instance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./decorators/cordova-instance */ 65621);
/* harmony import */ var _decorators_cordova_property__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./decorators/cordova-property */ 58223);
/* harmony import */ var _decorators_instance_property__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./decorators/instance-property */ 29641);
/* harmony import */ var _decorators_interfaces__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./decorators/interfaces */ 64230);


// Decorators







(0,_bootstrap__WEBPACK_IMPORTED_MODULE_0__.checkReady)();


/***/ }),

/***/ 33627:
/*!************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/util.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "get": () => (/* binding */ get),
/* harmony export */   "getPromise": () => (/* binding */ getPromise)
/* harmony export */ });
/**
 * @param element
 * @param path
 * @private
 */
function get(element, path) {
    var paths = path.split('.');
    var obj = element;
    for (var i = 0; i < paths.length; i++) {
        if (!obj) {
            return null;
        }
        obj = obj[paths[i]];
    }
    return obj;
}
/**
 * @param callback
 * @private
 */
function getPromise(callback) {
    if (callback === void 0) { callback = function () { }; }
    var tryNativePromise = function () {
        if (typeof Promise === 'function' || (typeof window !== 'undefined' && window.Promise)) {
            return new Promise(function (resolve, reject) {
                callback(resolve, reject);
            });
        }
        else {
            console.error('No Promise support or polyfill found. To enable Ionic Native support, please add the es6-promise polyfill before this script, or run with a library like Angular or on a recent browser.');
        }
    };
    return tryNativePromise();
}


/***/ }),

/***/ 45799:
/*!*******************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/speech-recognition/ngx/index.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpeechRecognition": () => (/* binding */ SpeechRecognition)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @awesome-cordova-plugins/core */ 49471);






var SpeechRecognition =
/** @class */
function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(SpeechRecognition, _super);

  function SpeechRecognition() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  SpeechRecognition.prototype.isRecognitionAvailable = function () {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "isRecognitionAvailable", {}, arguments);
  };

  SpeechRecognition.prototype.startListening = function (options) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "startListening", {
      "callbackOrder": "reverse",
      "observable": true
    }, arguments);
  };

  SpeechRecognition.prototype.stopListening = function () {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "stopListening", {}, arguments);
  };

  SpeechRecognition.prototype.getSupportedLanguages = function () {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "getSupportedLanguages", {}, arguments);
  };

  SpeechRecognition.prototype.hasPermission = function () {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "hasPermission", {}, arguments);
  };

  SpeechRecognition.prototype.requestPermission = function () {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "requestPermission", {}, arguments);
  };

  SpeechRecognition.ɵfac = /* @__PURE__ */function () {
    let ɵSpeechRecognition_BaseFactory;
    return function SpeechRecognition_Factory(t) {
      return (ɵSpeechRecognition_BaseFactory || (ɵSpeechRecognition_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](SpeechRecognition)))(t || SpeechRecognition);
    };
  }();

  SpeechRecognition.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: SpeechRecognition,
    factory: SpeechRecognition.ɵfac
  });
  SpeechRecognition.pluginName = "SpeechRecognition";
  SpeechRecognition.plugin = "cordova-plugin-speechrecognition";
  SpeechRecognition.pluginRef = "plugins.speechRecognition";
  SpeechRecognition.repo = "https://github.com/pbakondy/cordova-plugin-speechrecognition";
  SpeechRecognition.platforms = ["Android", "iOS"];
  SpeechRecognition = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([], SpeechRecognition);
  return SpeechRecognition;
}(_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.AwesomeCordovaNativePlugin);



(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](SpeechRecognition, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable
  }], null, {
    isRecognitionAvailable: [],
    startListening: [],
    stopListening: [],
    getSupportedLanguages: [],
    hasPermission: [],
    requestPermission: []
  });
})();

/***/ }),

/***/ 43900:
/*!**********************************************************!*\
  !*** ./src/app/recording/recording.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = ".btns {\n  top: 50%;\n  right: 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY29yZGluZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0FBQ0oiLCJmaWxlIjoicmVjb3JkaW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG5ze1xuICAgIHRvcDogNTAlO1xuICAgIHJpZ2h0OiAyMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuIl19 */";

/***/ }),

/***/ 21138:
/*!**********************************************************!*\
  !*** ./src/app/recording/recording.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button default-href=\"#\" (click)=\"onBack()\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{conversation.title}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-card *ngIf=\"conversation.path\">\n    <ion-card-header>\n      <ion-card-title>Progress</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <audio\n        controls\n        style=\"width: 100%\"\n        id=\"audio\"\n        loop\n        [src]=\"conversation.path\"\n      >\n        您的浏览器不支持 audio 元素。\n      </audio>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>字幕/Text</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <p *ngFor=\"let textItem of conversation.text\">{{textItem}}</p>\n    </ion-card-content>\n  </ion-card>\n  <div slot=\"fixed\" class=\"btns\">\n    <ion-button class=\"fixed-play\" (click)=\"play()\" *ngIf=\"conversation.path\">\n      <ion-icon slot=\"start\" name=\"play-circle-outline\"></ion-icon>\n      Play/Stop\n    </ion-button>\n    <ion-button slot=\"fixed\" class=\"fixed-mic\" (click)=\"record()\">\n      <ion-icon slot=\"start\" name=\"mic-circle-outline\"></ion-icon>\n      {{isRecording?\"recording\":\"record\"}}\n    </ion-button>\n    <ion-button slot=\"fixed\" class=\"fixed-score\" *ngIf=\"recordScore != null\">\n      <ion-icon slot=\"start\" name=\"trophy-outline\"></ion-icon>\n      Last record :{{recordScore}}分\n    </ion-button>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_recording_recording_module_ts.js.map