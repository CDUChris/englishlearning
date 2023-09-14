(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _app_check__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.check */ 23874);




const routes = [
    {
        path: '',
        redirectTo: 'folder/Inbox',
        // redirectTo: 'read',
        pathMatch: 'full',
    },
    {
        path: 'folder/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_folder_folder_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./folder/folder.module */ 3412)).then((m) => m.FolderPageModule),
        canActivate: [_app_check__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
    },
    {
        path: 'english-list',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_firebase_firestore_dist_index_esm2017_js"), __webpack_require__.e("src_app_english-list_english-list_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./english-list/english-list.module */ 38492)).then((m) => m.EnglishListPageModule),
    },
    {
        path: 'word-info',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_firebase_firestore_dist_index_esm2017_js"), __webpack_require__.e("default-node_modules_firebase_storage_dist_index_esm2017_js"), __webpack_require__.e("default-src_app_utils_player_player_ts-src_app_utils_transform_transform_ts-node_modules_js-a-e3dd52"), __webpack_require__.e("src_app_word-info_word-info_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./word-info/word-info.module */ 81482)).then((m) => m.WordInfoPageModule),
    },
    {
        path: 'word-create',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_firebase_firestore_dist_index_esm2017_js"), __webpack_require__.e("default-src_app_utils_player_player_ts-src_app_utils_transform_transform_ts-node_modules_js-a-e3dd52"), __webpack_require__.e("src_app_word-create_create_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./word-create/create.module */ 99355)).then((m) => m.WordCreatePageModule),
    },
    {
        path: 'theme',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_firebase_firestore_dist_index_esm2017_js"), __webpack_require__.e("src_app_theme_theme_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./theme/theme.module */ 85056)).then((m) => m.ThemePageModule),
    },
    {
        path: 'theme-create',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_firebase_firestore_dist_index_esm2017_js"), __webpack_require__.e("src_app_theme-create_create_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./theme-create/create.module */ 626)).then((m) => m.ThemeCreatePageModule),
    },
    {
        path: 'read',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_utils_player_player_ts-src_app_utils_transform_transform_ts-node_modules_js-a-e3dd52"), __webpack_require__.e("src_app_read_read_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./read/read.module */ 64049)).then((m) => m.ReadPageModule),
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./login/login.module */ 80107)).then((m) => m.LoginPageModule),
    },
    {
        path: 'register',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_register_register_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./register/register.module */ 18723)).then((m) => m.RegisterPageModule),
    },
    {
        path: 'conversation',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_firebase_storage_dist_index_esm2017_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_conversation_conversation_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./conversation/conversation.module */ 8574)).then(m => m.ConversationPageModule)
    },
    {
        path: 'sentence',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_firebase_storage_dist_index_esm2017_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_Sentence_Training_sentence_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./Sentence Training/sentence.module */ 99510)).then(m => m.SentencePageModule)
    },
    {
        path: 'recording/:title',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_firebase_storage_dist_index_esm2017_js"), __webpack_require__.e("src_app_recording_recording_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./recording/recording.module */ 40967)).then(m => m.RecordingPageModule)
    },
    {
        path: 'recordingSentence/:name',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_firebase_storage_dist_index_esm2017_js"), __webpack_require__.e("src_app_recording_recording_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./recording/recording.module */ 40967)).then(m => m.RecordingPageModule)
    },
    {
        path: 'word-list',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_word-list_word-list_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./word-list/word-list.module */ 38533)).then(m => m.WordListPageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_3__.PreloadAllModules }),
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AppRoutingModule);



/***/ }),

/***/ 23874:
/*!******************************!*\
  !*** ./src/app/app.check.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.config */ 49670);





let AuthGuard = class AuthGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(route, state) {
        let url = state.url;
        console.log('url =>', url);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(true);
        if (_app_config__WEBPACK_IMPORTED_MODULE_0__.AppConfig.isLogin()) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(true);
        }
        this.router.navigateByUrl('/login');
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(false);
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
AuthGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root',
    })
], AuthGuard);



/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 33383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 79259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _app_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.store */ 94827);
/* harmony import */ var _app_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.page */ 75162);
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.config */ 49670);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/compat/auth */ 5873);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/auth */ 61577);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/auth */ 23628);











let AppComponent = class AppComponent extends _app_page__WEBPACK_IMPORTED_MODULE_3__.PageBase {
    constructor(appStore, router, activeRoute, loadingCtrl, navCtrl, route, auth) {
        super(appStore, navCtrl, route);
        this.appStore = appStore;
        this.router = router;
        this.activeRoute = activeRoute;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.route = route;
        this.auth = auth;
        this.appLoginPages = [
            { title: 'Start Learn', url: '/theme', icon: 'flower-outline' },
            { title: 'English Words', url: '/word-list', icon: 'list-outline' },
            { title: 'Sentence Training', url: '/sentence', icon: 'star-outline' },
            { title: 'Conversation Training', url: '/conversation', icon: 'mic-outline' },
            // {
            //   title: 'My favorite',
            //   func: () => {
            //     console.log('++++++++')
            //     this.navCtrl.navigateForward(['/theme', { favorite: true }]);
            //   },
            //   icon: 'star',
            // },
        ];
        this.appNoLoginPages = [
            { title: 'Sign in', url: '/login', icon: 'log-in-outline' },
        ];
        this.drapdownList = this.appNoLoginPages;
        this.appPages = this.appNoLoginPages;
    }
    ngOnInit() {
        _app_config__WEBPACK_IMPORTED_MODULE_4__.AppConfig.setAppStore(this.appStore);
        this.getMenu();
        // init global state
        this.appStore.update((state) => ({
            sess: _app_config__WEBPACK_IMPORTED_MODULE_4__.AppConfig.$session,
            isLogin: _app_config__WEBPACK_IMPORTED_MODULE_4__.AppConfig.isLogin(),
            lang: _app_config__WEBPACK_IMPORTED_MODULE_4__.AppConfig.$lang,
            debug: _app_config__WEBPACK_IMPORTED_MODULE_4__.AppConfig.isDebug(),
        }));
    }
    ngOnDestroy() {
        _app_config__WEBPACK_IMPORTED_MODULE_4__.AppConfig.setAppStore(null);
    }
    getMenu() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () { });
    }
    //
    onStoreChanged() {
        // console.log('on store changed');
        if (this.$isLogin) {
            this.drapdownList = this.appLoginPages;
        }
        else {
            this.drapdownList = this.appNoLoginPages;
        }
    }
    onLogin() {
        const auth = (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__.getAuth)();
        const recaptchaVerifier = new _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__.RecaptchaVerifier('recaptcha-container', {
            size: 'invisible',
            callback: (response) => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                console.log('登录结果response:', response);
            },
        }, auth);
        console.log(recaptchaVerifier);
        // 0481667345
        this.auth
            .signInWithPhoneNumber('+61450431269', recaptchaVerifier)
            .then(function (confirmationResult) {
            var verificationCode = window.prompt('Please enter the verification ' +
                'code that was sent to your mobile device.');
            return confirmationResult.confirm(verificationCode);
        })
            .catch(function (error) {
            // Handle Errors here.
        });
    }
    onLogout() {
        this.auth.signOut();
        this.appStore.update((state) => ({
            sess: null,
            isLogin: false,
        }));
        _app_config__WEBPACK_IMPORTED_MODULE_4__.AppConfig.setSession(null);
        console.log(this.$sess);
        this.hrefReplace('/login');
    }
    onTestSignIn() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const user = { uid: 1234 };
            yield _app_config__WEBPACK_IMPORTED_MODULE_4__.AppConfig.setSession(user);
            yield _app_config__WEBPACK_IMPORTED_MODULE_4__.AppConfig.setSessToken({ token: '1234567' });
            this.hrefReplace('/folder/Inbox');
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _app_store__WEBPACK_IMPORTED_MODULE_2__.AppStore },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_10__.AngularFireAuth }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 49670:
/*!*******************************!*\
  !*** ./src/app/app.config.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppConfig": () => (/* binding */ AppConfig)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! localforage */ 26477);
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(localforage__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.util */ 72826);



class AppConfigBase {
    constructor() {
        /********** base var **********/
        this.$debug = true;
        this.$projectVersion = 101;
        this.$projectVersionCode = '0.1.1';
        this.$bundleId = 'com.calendar';
        this.$useMao = true;
        this.$tokenName = 'SSE';
        this.$openCDN = (() => {
            try {
                return !!GlobalOpenCDN;
            }
            catch (_) { }
            return false;
        })();
        // ------------------
        this.debugBaseUrl = '';
        this.releaseBaseUrl = '';
        this.fileBaseUrl = '';
        // private fileBaseUrl = '';
        this.debugCDNUrl = 'https://xxx.com';
        this.releaseCDNUrl = 'https://xxx.com';
        /********** base **********/
        this.$allowOutAuthParam = false;
        this.$sessKey = 'token'; // ['token'];
        this.$tokenToHeader = 'Authorization'; // 'Authorization'
        this.$sessUserID = 'uid';
        this.$lang = 'en';
        this.$gobackFuncs = [];
        this.$beforLeavePages = [];
        this.$memStates = new Map();
        this.appStore = null;
    }
    static getInstance() {
        if (AppConfigBase.$self) {
            return AppConfigBase.$self;
        }
        this.$self = new AppConfigBase();
        return this.$self;
    }
    init() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.canStorage()) {
                return;
            }
            localforage__WEBPACK_IMPORTED_MODULE_0__.config({
                name: this.$bundleId,
                storeName: this.$bundleId + '_' + this.$projectVersionCode,
            });
            const isess = yield this.get('session');
            if (isess) {
                this.$session = isess;
            }
            console.log('sess', this.$session);
            const lang = yield this.get('lang');
            if (lang) {
                this.$lang = lang;
            }
            //AppStore.commit('setSession', {
            //  sess: this.$session,
            //  isLogin: this.isLogin(),
            //});
            //AppStore.commit('setLang', this.$lang);
            //AppStore.commit('setDebugTag', this.$debug ? true : false);
            //AppStore.commit('setIsMao', this.$useMao ? true : false);
        });
    }
    /********** method **********/
    projectVersion() {
        return this.$projectVersion;
    }
    projectVersionCode() {
        return this.$projectVersionCode;
    }
    getTokenToHeader() {
        return this.$tokenToHeader;
    }
    getLang() {
        return this.$lang;
    }
    setAppStore(a) {
        this.appStore = a;
    }
    appStoreUpdate(o) {
        if (this.appStore) {
            this.appStore.update((state) => o);
        }
    }
    setLang(l) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            this.$lang = l;
            yield this.set('lang', l);
            this.appStoreUpdate({ lang: this.$lang });
            return this.$lang;
        });
    }
    isDebug() {
        return this.$debug;
    }
    getSession() {
        console.log('AppConfig.getSession');
        return this.$session;
    }
    setSession(s) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.canStorage()) {
                return;
            }
            if (s) {
                s[this.$sessUserID] = '' + s[this.$sessUserID];
            }
            const isess = yield this.set('session', s);
            this.$session = isess;
            console.log('setSession', s, this.$session);
            this.appStoreUpdate({
                sess: this.$session,
                isLogin: this.isLogin(),
            });
        });
    }
    isLogin() {
        if (!this.$session) {
            return false;
        }
        if (!this.$session[this.$sessUserID]) {
            return false;
        }
        const id = this.$session[this.$sessUserID].toString();
        if (id != '0' && id != 'null' && id != 'false' && id.length > 0) {
            return true;
        }
        return false;
    }
    getUid() {
        if (!this.$session) {
            return 0;
        }
        if (!this.$session[this.$sessUserID]) {
            return '';
        }
        return this.$session[this.$sessUserID];
    }
    // imageType: raw/org, fill, fit, resize, crop
    formatCDN(url, imageType, width, height) {
        if (!this.$openCDN) {
            return url;
        }
        const arr = url.split('?');
        // 只cdn图片
        if (arr[0].endsWith('.jpg') ||
            arr[0].endsWith('.png') ||
            arr[0].endsWith('.jpeg') ||
            arr[0].endsWith('.bmp')) {
            imageType = imageType ? imageType : 'resize';
            width = width ? Math.ceil(width / 5.0) * 5 : 500;
            height = height ? Math.ceil(height / 5.0) * 5 : null;
            const params = {
                url: url,
                width: width,
                height: height,
                type: imageType,
            };
            if (this.$debug) {
                return _app_util__WEBPACK_IMPORTED_MODULE_1__.AppUtil.updateUrl(this.debugCDNUrl + '/img', params);
            }
            return _app_util__WEBPACK_IMPORTED_MODULE_1__.AppUtil.updateUrl(this.releaseCDNUrl + '/img', params);
        }
        return url;
    }
    getBaseUrl(ignore) {
        let gurl;
        try {
            gurl = globalBaseUrl;
        }
        catch (_) { }
        if (!ignore) {
            if (this.isDebug()) {
                return gurl ? gurl : this.debugBaseUrl;
            }
            else {
                return gurl ? gurl : this.releaseBaseUrl;
            }
        }
        else {
            return this.releaseBaseUrl;
        }
    }
    getFileBaseUrl(uuid) {
        if (this.fileBaseUrl.indexOf('http') >= 0 ||
            this.fileBaseUrl.indexOf('://') >= 0) {
            return this.fileBaseUrl + uuid;
        }
        return this.getBaseUrl() + this.fileBaseUrl + uuid;
    }
    /********** 存储 *********** */
    remove(key, fn) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.canStorage()) {
                if (fn) {
                    fn(false);
                }
                return;
            }
            yield localforage__WEBPACK_IMPORTED_MODULE_0__.removeItem(key);
            if (fn) {
                fn(true);
            }
        });
    }
    canStorage() {
        return !!localforage__WEBPACK_IMPORTED_MODULE_0__;
    }
    set(key, pval) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.canStorage()) {
                return new Promise((resolve) => {
                    resolve(null);
                });
            }
            return new Promise((resolve) => {
                const now = parseInt('' + Math.floor(new Date().getTime() / 1000), 10);
                localforage__WEBPACK_IMPORTED_MODULE_0__.setItem(key, { __AUTO_TIME_TAG: now, val: pval })
                    .then((data) => {
                    if (data) {
                        resolve(data.val);
                    }
                    else {
                        resolve(null);
                    }
                })
                    .catch(() => {
                    resolve(null);
                });
            });
        });
    }
    get(key, def) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.canStorage()) {
                return Promise.resolve(def ? def : null);
            }
            return new Promise((resolve) => {
                localforage__WEBPACK_IMPORTED_MODULE_0__.getItem(key)
                    .then((data) => {
                    if (data) {
                        resolve(data.val);
                    }
                    else {
                        resolve(def ? def : null);
                    }
                })
                    .catch(() => {
                    resolve(def ? def : null);
                });
            });
        });
    }
    del(key) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.canStorage()) {
                return new Promise((resolve) => {
                    resolve(null);
                });
            }
            return new Promise((resolve) => {
                localforage__WEBPACK_IMPORTED_MODULE_0__.removeItem(key)
                    .then((data) => {
                    resolve(null);
                })
                    .catch(() => {
                    resolve(null);
                });
            });
        });
    }
    clearAll() {
        if (localforage__WEBPACK_IMPORTED_MODULE_0__) {
            localforage__WEBPACK_IMPORTED_MODULE_0__.clear();
        }
        if (this.$sessToken) {
            this.$sessToken = null;
        }
        if (this.$session) {
            this.$session = null;
        }
    }
    getWithTimeoutStrict(key, timeoutSecond, def) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.canStorage()) {
                return new Promise((resolve) => {
                    resolve({
                        isTimeout: true,
                        data: def ? def : null,
                    });
                });
            }
            return new Promise((resolve) => {
                localforage__WEBPACK_IMPORTED_MODULE_0__.getItem(key)
                    .then((data) => {
                    const now = parseInt('' + Math.floor(new Date().getTime() / 1000), 10);
                    if (!data ||
                        !data.__AUTO_TIME_TAG ||
                        data.__AUTO_TIME_TAG > now ||
                        now - data.__AUTO_TIME_TAG > timeoutSecond) {
                        resolve({
                            isTimeout: true,
                            data: def ? def : null,
                        });
                        return;
                    }
                    resolve({
                        isTimeout: false,
                        data: data.val,
                    });
                })
                    .catch(() => {
                    resolve({
                        isTimeout: true,
                        data: def ? def : null,
                    });
                });
            });
        });
    }
    getWithTimeout(key, timeoutSecond, def) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const val = yield this.getWithTimeoutStrict(key, timeoutSecond, def);
            return Promise.resolve(val.data);
        });
    }
    setSessToken(pkg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.canStorage()) {
                return;
            }
            if (!pkg) {
                yield this.del('SESS_TOKEN');
                this.$sessToken = null;
                return;
            }
            let tk = null;
            for (const k of Object.keys(pkg)) {
                if (k === this.$sessKey) {
                    tk = {
                        key: k,
                        value: pkg[k],
                    };
                }
                if (tk) {
                    break;
                }
            }
            if (!tk && pkg.data) {
                for (const k of Object.keys(pkg.data)) {
                    if (k === this.$sessKey) {
                        tk = {
                            key: k,
                            value: pkg.data[k],
                        };
                    }
                    if (tk) {
                        break;
                    }
                }
            }
            if (tk) {
                console.log('setSessToken', tk);
                yield this.set('SESS_TOKEN', tk);
                this.$sessToken = tk;
            }
        });
    }
    getSessToken() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            if (this.$allowOutAuthParam) {
                return null;
            }
            if (this.$sessToken && this.$sessToken.key === this.$sessKey) {
                return Promise.resolve(this.$sessToken);
            }
            const tk = yield this.get('SESS_TOKEN');
            if (!tk) {
                return Promise.resolve(null);
            }
            if (tk.key === this.$sessKey) {
                this.$sessToken = tk;
                return Promise.resolve(tk);
            }
            return Promise.resolve(null);
        });
    }
    gobackFuncPop() {
        const obj = this.$gobackFuncs.pop();
        if (!obj) {
            return null;
        }
        return obj.fn;
    }
    gobackFuncClear(key) {
        const items = [];
        for (const item of this.$gobackFuncs) {
            if (item.key !== key) {
                items.push(item);
            }
        }
        this.$gobackFuncs = items;
    }
    getUrl() {
        if (this.$debug) {
            return this.debugBaseUrl;
        }
        else {
            return this.releaseBaseUrl;
        }
    }
    addOnLeavePage(p) {
        this.$beforLeavePages.push(p);
    }
    clearOnLeavePage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            for (const val of this.$beforLeavePages) {
                if (val && val.viewDidLeave) {
                    const r = yield val.viewDidLeave();
                    if (!r) {
                        return false;
                    }
                }
            }
            this.$beforLeavePages = [];
            return true;
        });
    }
    setMemState(me, type, v) {
        let key = type;
        if (me && me.$route && me.$route.fullPath) {
            key += '&&' + me.$route.fullPath.split('?')[0];
        }
        this.$memStates.set(key, v);
    }
    getMemState(me, type, def) {
        let key = type;
        if (me && me.$route && me.$route.fullPath) {
            key += '&&' + me.$route.fullPath.split('?')[0];
        }
        if (this.$memStates.has(key)) {
            return this.$memStates.get(key);
        }
        return def;
    }
}
const AppConfig = AppConfigBase.getInstance();


/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_fire_compat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/compat */ 11879);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/service-worker */ 64933);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ 92340);
/* harmony import */ var src_config_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/config/firebase */ 71669);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/compat/auth */ 5873);













let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        entryComponents: [],
        imports: [
            _angular_fire_compat__WEBPACK_IMPORTED_MODULE_6__.AngularFireModule.initializeApp(src_config_firebase__WEBPACK_IMPORTED_MODULE_3__.firebaseConfig),
            _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_7__.AngularFireAuthModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_11__.ServiceWorkerModule.register('ngsw-worker.js', {
                enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production,
                // Register the ServiceWorker as soon as the application is stable
                // or after 30 seconds (whichever comes first).
                registrationStrategy: 'registerWhenStable:30000',
            }),
        ],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicRouteStrategy }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 75162:
/*!*****************************!*\
  !*** ./src/app/app.page.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageBase": () => (/* binding */ PageBase)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @datorama/akita */ 5921);
/* harmony import */ var _ionic_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/core */ 26710);
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.config */ 49670);
/* harmony import */ var _app_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.util */ 72826);





class PageBase extends _datorama_akita__WEBPACK_IMPORTED_MODULE_0__.Query {
    constructor(appStore, navCtrl, route) {
        super(appStore);
        this.appStore = appStore;
        this.navCtrl = navCtrl;
        this.route = route;
        this.$isLogin = false;
        this.params = route.snapshot.queryParamMap;
        this.select(['sess', 'isLogin']).subscribe((state) => {
            this.$sess = state.sess;
            this.$isLogin = state.isLogin;
            this.onStoreChanged();
        });
    }
    onStoreChanged() { }
    num(v) {
        // tslint:disable-next-line: radix
        return parseFloat((parseInt((parseFloat(v) * 100).toString()) / 100).toString());
    }
    // yyyy-MM-dd hh:mm:ss
    date(v, fmt) {
        return _app_util__WEBPACK_IMPORTED_MODULE_3__.AppUtil.formatDate(_app_util__WEBPACK_IMPORTED_MODULE_3__.AppUtil.newDate(v), fmt);
    }
    xstr(v, left, right) {
        return _app_util__WEBPACK_IMPORTED_MODULE_3__.AppUtil.xstrMid(v, left, right);
    }
    isWeiXin() {
        const chk = new RegExp('MicroMessenger', 'i');
        const ua = navigator.userAgent.toLowerCase();
        return chk.test(ua);
    }
    isNotWeiXin() {
        return !this.isWeiXin();
    }
    copy(obj) {
        if (!obj) {
            return obj;
        }
        if (typeof obj !== 'object') {
            return obj;
        }
        return JSON.parse(JSON.stringify(obj));
    }
    int(v) {
        if (!v) {
            return 0;
        }
        const r = parseInt(v, 10);
        return isNaN(r) ? 0 : r;
    }
    float(v) {
        if (!v) {
            return 0.0;
        }
        const r = parseFloat(v);
        return isNaN(r) ? 0 : r;
    }
    ntf(v) {
        return v.replace(/[\n]+/g, '\\n');
    }
    alert(message, header = 'Notice') {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield _ionic_core__WEBPACK_IMPORTED_MODULE_1__.alertController.create({
                header: header,
                message: message,
                buttons: ['Confirm'],
            });
            yield alert.present();
        });
    }
    confirm(message, okFn, header = 'Notice') {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield _ionic_core__WEBPACK_IMPORTED_MODULE_1__.alertController.create({
                header: header,
                message: message,
                buttons: [
                    { text: 'Cancel', role: 'cancel' },
                    { text: 'Confirm', handler: okFn },
                ],
            });
            yield alert.present();
        });
    }
    toast(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield _ionic_core__WEBPACK_IMPORTED_MODULE_1__.toastController.create({
                message,
                duration: 2000,
            });
            yield toast.present();
        });
    }
    hrefTo(url, needLogin = false, params = null) {
        _ionic_core__WEBPACK_IMPORTED_MODULE_1__.menuController.close();
        if (needLogin && !this.$isLogin) {
            this.navCtrl.navigateForward(['/login']);
            return;
        }
        this.navCtrl.navigateForward(url, { queryParams: params });
    }
    hrefReplace(url, needLogin = false, params = null) {
        _ionic_core__WEBPACK_IMPORTED_MODULE_1__.menuController.close();
        if (needLogin && !this.$isLogin) {
            this.navCtrl.navigateForward(['/login']);
            return;
        }
        this.navCtrl.navigateBack(url, { queryParams: params });
    }
    strParams(params) {
        if (params === null) {
            return null;
        }
        for (const k of Object.keys(params)) {
            params[k] = '' + params[k];
        }
        return params;
    }
    getParam(key, def) {
        if (!this.params || !this.params.get(key)) {
            return def;
        }
        return this.params.get(key);
    }
    file(path) {
        if (!path) {
            return '';
        }
        if (typeof path === 'object') {
            return path;
        }
        if (('' + path).indexOf('/') > -1) {
            return path;
        }
        return _app_config__WEBPACK_IMPORTED_MODULE_2__.AppConfig.getFileBaseUrl(path);
    }
    urlPath(url) {
        return _app_util__WEBPACK_IMPORTED_MODULE_3__.AppUtil.getUrl(url);
    }
    pg(pgn) {
        if (pgn && pgn.currentPage) {
            return pgn.currentPage;
        }
        return 1;
    }
    nextPg(pgn) {
        console.log(pgn);
        if (pgn && pgn.currentPage) {
            if (pgn.currentPage >= pgn.totalPage) {
                return -1;
            }
            else {
                return pgn.currentPage + 1;
            }
        }
        return 2;
    }
    json(v) {
        return JSON.stringify(v);
    }
    htmlContent(c) {
        const arr = c.split('\n');
        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i].trim();
        }
        return '<p>' + arr.join('</p><p>') + '</p>';
    }
}


/***/ }),

/***/ 94827:
/*!******************************!*\
  !*** ./src/app/app.store.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createInitialState": () => (/* binding */ createInitialState),
/* harmony export */   "AppStore": () => (/* binding */ AppStore)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @datorama/akita */ 5921);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



function createInitialState() {
    return {
        sess: null,
        isLogin: false,
        lang: 'en',
        debug: true,
        conversations: [
            {
                title: 'Bussiness dinner 1/晚餐 .mp3',
                path: '../../assets/mp3/conversation/英语听力 - 第四章 商务会餐 4.1.mp3',
                text: ["说话人1 00:00", "Welcome mister sun.", "说话人2 00:02", "Thank you for your entertaining me.", "说话人1 00:04", "Today I invite you to enjoy the seafood. Please make yourself at home.", "说话人2 00:09", "Excuse me, what business are you looking after in German?", "说话人1 00:12", "I am running Chinese arts and crafts.", "说话人2 00:16", "What arts and crafts are you interested in this time?", "说话人1 00:18", "I hope to import some silk from Hangzhou to Germany. Can you help me?", "说话人2 00:23", "Sure, I'll certainly help you do it."]
            },
            {
                title: 'Bussiness dinner 2/晚餐 .mp3',
                path: '../../assets/mp3/conversation/英语听力 - 第四章 商务会餐 4.2.mp3',
                text: "<p>说话人1 00:00</p><p>Here's the schedule we've prepared.</p><p>说话人2 00:02</p><p>Thank you.</p><p>说话人1 00:04</p><p>Do you mind if we talk about your schedule tomorrow?</p><p>说话人2 00:08</p><p>That will be best. I'd like to have a good rest first.</p><p>说话人1 00:11</p><p>And this is the schedule for Mrs. Watson. Eileen, from our department, will take care of her.</p><p>说话人2 00:18</p><p>Shall we discuss the schedule in the lobby? All right.</p><p>说话人1 00:23</p><p>I'll see you in the lobby tomorrow morning.</p>"
            },
            {
                title: 'Bussiness dinner 3/晚餐.mp3',
                path: '../../assets/mp3/conversation/英语听力 - 第四章 商务会餐 4.3.mp3',
                text: "<p>说话人1 00:00</p><p>Here's the schedule we've prepared.</p><p>说话人2 00:02</p><p>Thank you.</p><p>说话人1 00:04</p><p>Do you mind if we talk about your schedule tomorrow?</p><p>说话人2 00:08</p><p>That will be best. I'd like to have a good rest first.</p><p>说话人1 00:11</p><p>And this is the schedule for Mrs. Watson. Eileen, from our department, will take care of her.</p><p>说话人2 00:18</p><p>Shall we discuss the schedule in the lobby? All right.</p><p>说话人1 00:23</p><p>I'll see you in the lobby tomorrow morning.</p>"
            },
            {
                title: 'Grocery 1 商场.mp3',
                path: '../../assets/mp3/conversation/英语听力 - 第五章 陪同购物 5.1.mp3',
                text: "<p>说话人1 00:00</p><p>Here's the schedule we've prepared.</p><p>说话人2 00:02</p><p>Thank you.</p><p>说话人1 00:04</p><p>Do you mind if we talk about your schedule tomorrow?</p><p>说话人2 00:08</p><p>That will be best. I'd like to have a good rest first.</p><p>说话人1 00:11</p><p>And this is the schedule for Mrs. Watson. Eileen, from our department, will take care of her.</p><p>说话人2 00:18</p><p>Shall we discuss the schedule in the lobby? All right.</p><p>说话人1 00:23</p><p>I'll see you in the lobby tomorrow morning.</p>"
            },
            {
                title: 'Grocery 2 商场.mp3',
                path: '../../assets/mp3/conversation/英语听力 - 第五章 陪同购物 5.2.mp3',
                text: "<p>说话人1 00:00</p><p>Here's the schedule we've prepared.</p><p>说话人2 00:02</p><p>Thank you.</p><p>说话人1 00:04</p><p>Do you mind if we talk about your schedule tomorrow?</p><p>说话人2 00:08</p><p>That will be best. I'd like to have a good rest first.</p><p>说话人1 00:11</p><p>And this is the schedule for Mrs. Watson. Eileen, from our department, will take care of her.</p><p>说话人2 00:18</p><p>Shall we discuss the schedule in the lobby? All right.</p><p>说话人1 00:23</p><p>I'll see you in the lobby tomorrow morning.</p>"
            },
            {
                title: 'Sightseeing 1/观光.mp3',
                path: '../../assets/mp3/conversation/英语听力 - 第六章 待客观光 6.1.mp3',
                text: "<p>说话人1 00:00</p><p>Here's the schedule we've prepared.</p><p>说话人2 00:02</p><p>Thank you.</p><p>说话人1 00:04</p><p>Do you mind if we talk about your schedule tomorrow?</p><p>说话人2 00:08</p><p>That will be best. I'd like to have a good rest first.</p><p>说话人1 00:11</p><p>And this is the schedule for Mrs. Watson. Eileen, from our department, will take care of her.</p><p>说话人2 00:18</p><p>Shall we discuss the schedule in the lobby? All right.</p><p>说话人1 00:23</p><p>I'll see you in the lobby tomorrow morning.</p>"
            },
            {
                title: 'Sightseeing 2/观光.mp3',
                path: '../../assets/mp3/conversation/英语听力 - 第六章 待客观光 6.2.mp3',
                text: "<p>说话人1 00:00</p><p>Here's the schedule we've prepared.</p><p>说话人2 00:02</p><p>Thank you.</p><p>说话人1 00:04</p><p>Do you mind if we talk about your schedule tomorrow?</p><p>说话人2 00:08</p><p>That will be best. I'd like to have a good rest first.</p><p>说话人1 00:11</p><p>And this is the schedule for Mrs. Watson. Eileen, from our department, will take care of her.</p><p>说话人2 00:18</p><p>Shall we discuss the schedule in the lobby? All right.</p><p>说话人1 00:23</p><p>I'll see you in the lobby tomorrow morning.</p>"
            },
            {
                title: 'Accomodation 1/住宿.mp3',
                path: '../../assets/mp3/conversation/英语听力 - 第七章 旅店安排 7.1.mp3',
                text: "<p>说话人1 00:00</p><p>Here's the schedule we've prepared.</p><p>说话人2 00:02</p><p>Thank you.</p><p>说话人1 00:04</p><p>Do you mind if we talk about your schedule tomorrow?</p><p>说话人2 00:08</p><p>That will be best. I'd like to have a good rest first.</p><p>说话人1 00:11</p><p>And this is the schedule for Mrs. Watson. Eileen, from our department, will take care of her.</p><p>说话人2 00:18</p><p>Shall we discuss the schedule in the lobby? All right.</p><p>说话人1 00:23</p><p>I'll see you in the lobby tomorrow morning.</p>"
            },
            {
                title: 'Accomodation 2/住宿.mp3',
                path: '../../assets/mp3/conversation/英语听力 - 第七章 旅店安排 7.2.mp3',
                text: "<p>说话人1 00:00</p><p>Here's the schedule we've prepared.</p><p>说话人2 00:02</p><p>Thank you.</p><p>说话人1 00:04</p><p>Do you mind if we talk about your schedule tomorrow?</p><p>说话人2 00:08</p><p>That will be best. I'd like to have a good rest first.</p><p>说话人1 00:11</p><p>And this is the schedule for Mrs. Watson. Eileen, from our department, will take care of her.</p><p>说话人2 00:18</p><p>Shall we discuss the schedule in the lobby? All right.</p><p>说话人1 00:23</p><p>I'll see you in the lobby tomorrow morning.</p>"
            },
            {
                title: 'Accomodation 3/住宿.mp3',
                path: '../../assets/mp3/conversation/英语听力 - 第七章 旅店安排 7.3.mp3',
                text: "<p>说话人1 00:00</p><p>Here's the schedule we've prepared.</p><p>说话人2 00:02</p><p>Thank you.</p><p>说话人1 00:04</p><p>Do you mind if we talk about your schedule tomorrow?</p><p>说话人2 00:08</p><p>That will be best. I'd like to have a good rest first.</p><p>说话人1 00:11</p><p>And this is the schedule for Mrs. Watson. Eileen, from our department, will take care of her.</p><p>说话人2 00:18</p><p>Shall we discuss the schedule in the lobby? All right.</p><p>说话人1 00:23</p><p>I'll see you in the lobby tomorrow morning.</p>"
            },
            {
                title: 'farewell 1/送别.mp3',
                path: '../../assets/mp3/conversation/英语听力 - 第八章 送别外宾 8.1.mp3',
                text: "<p>说话人1 00:00</p><p>Here's the schedule we've prepared.</p><p>说话人2 00:02</p><p>Thank you.</p><p>说话人1 00:04</p><p>Do you mind if we talk about your schedule tomorrow?</p><p>说话人2 00:08</p><p>That will be best. I'd like to have a good rest first.</p><p>说话人1 00:11</p><p>And this is the schedule for Mrs. Watson. Eileen, from our department, will take care of her.</p><p>说话人2 00:18</p><p>Shall we discuss the schedule in the lobby? All right.</p><p>说话人1 00:23</p><p>I'll see you in the lobby tomorrow morning.</p>"
            },
            {
                title: 'Plane service 1/飞机.mp3',
                path: '../../assets/mp3/conversation/英语听力 - 第九章 在飞机上 9.2.mp3',
                text: "<p>说话人1 00:00</p><p>Here's the schedule we've prepared.</p><p>说话人2 00:02</p><p>Thank you.</p><p>说话人1 00:04</p><p>Do you mind if we talk about your schedule tomorrow?</p><p>说话人2 00:08</p><p>That will be best. I'd like to have a good rest first.</p><p>说话人1 00:11</p><p>And this is the schedule for Mrs. Watson. Eileen, from our department, will take care of her.</p><p>说话人2 00:18</p><p>Shall we discuss the schedule in the lobby? All right.</p><p>说话人1 00:23</p><p>I'll see you in the lobby tomorrow morning.</p>"
            },
            {
                title: 'Baggage check 1/行李.mp3',
                path: '../../assets/mp3/conversation/英语听力 - 第十章 行李检查 10.2.mp3',
                text: "<p>说话人1 00:00</p><p>Here's the schedule we've prepared.</p><p>说话人2 00:02</p><p>Thank you.</p><p>说话人1 00:04</p><p>Do you mind if we talk about your schedule tomorrow?</p><p>说话人2 00:08</p><p>That will be best. I'd like to have a good rest first.</p><p>说话人1 00:11</p><p>And this is the schedule for Mrs. Watson. Eileen, from our department, will take care of her.</p><p>说话人2 00:18</p><p>Shall we discuss the schedule in the lobby? All right.</p><p>说话人1 00:23</p><p>I'll see you in the lobby tomorrow morning.</p>"
            },
            {
                title: 'Currency Exchange 1/兑换.mp3',
                path: '../../assets/mp3/conversation/英语听力 - 第十一章 货币兑换 11.1.mp3',
                text: "<p>说话人1 00:00</p><p>Here's the schedule we've prepared.</p><p>说话人2 00:02</p><p>Thank you.</p><p>说话人1 00:04</p><p>Do you mind if we talk about your schedule tomorrow?</p><p>说话人2 00:08</p><p>That will be best. I'd like to have a good rest first.</p><p>说话人1 00:11</p><p>And this is the schedule for Mrs. Watson. Eileen, from our department, will take care of her.</p><p>说话人2 00:18</p><p>Shall we discuss the schedule in the lobby? All right.</p><p>说话人1 00:23</p><p>I'll see you in the lobby tomorrow morning.</p>"
            },
            {
                title: 'Currency Exchange 2/兑换.mp3',
                path: '../../assets/mp3/conversation/英语听力 - 第十一章 货币兑换 11.2.mp3',
                text: "<p>说话人1 00:00</p><p>Here's the schedule we've prepared.</p><p>说话人2 00:02</p><p>Thank you.</p><p>说话人1 00:04</p><p>Do you mind if we talk about your schedule tomorrow?</p><p>说话人2 00:08</p><p>That will be best. I'd like to have a good rest first.</p><p>说话人1 00:11</p><p>And this is the schedule for Mrs. Watson. Eileen, from our department, will take care of her.</p><p>说话人2 00:18</p><p>Shall we discuss the schedule in the lobby? All right.</p><p>说话人1 00:23</p><p>I'll see you in the lobby tomorrow morning.</p>"
            },
            {
                title: 'Public Transport 1/公交.mp3',
                path: '../../assets/mp3/conversation/英语听力 - 第十三章 交通出行 13.1.mp3',
                text: "<p>说话人1 00:00</p><p>Here's the schedule we've prepared.</p><p>说话人2 00:02</p><p>Thank you.</p><p>说话人1 00:04</p><p>Do you mind if we talk about your schedule tomorrow?</p><p>说话人2 00:08</p><p>That will be best. I'd like to have a good rest first.</p><p>说话人1 00:11</p><p>And this is the schedule for Mrs. Watson. Eileen, from our department, will take care of her.</p><p>说话人2 00:18</p><p>Shall we discuss the schedule in the lobby? All right.</p><p>说话人1 00:23</p><p>I'll see you in the lobby tomorrow morning.</p>"
            },
        ],
    };
}
let AppStore = class AppStore extends _datorama_akita__WEBPACK_IMPORTED_MODULE_0__.Store {
    constructor() {
        super(createInitialState());
    }
};
AppStore.ctorParameters = () => [];
AppStore = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root',
    }),
    (0,_datorama_akita__WEBPACK_IMPORTED_MODULE_0__.StoreConfig)({ name: 'app_state' })
], AppStore);



/***/ }),

/***/ 72826:
/*!*****************************!*\
  !*** ./src/app/app.util.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Passwordstrength": () => (/* binding */ Passwordstrength),
/* harmony export */   "AppUtil": () => (/* binding */ AppUtil)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.config */ 49670);
/* harmony import */ var jssha__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jssha */ 3494);



class Passwordstrength {
    constructor() {
        this.length = 0;
        this.spaceCharCount = 0; // space
        this.numberCharCount = 0; // number[0-9]
        this.upperCharCount = 0; // upper char
        this.lowerCharCount = 0; // lower char
        this.specialCharCount = 0; // special char
        this.notAsciiCharCount = 0; // not ascii char
    }
}
class AppUtil {
    static msg($alert, msg) {
        alert(msg);
    }
    static str(...args) {
        const strs = [];
        for (const i of Object.keys(args)) {
            strs.push(JSON.stringify(args[i]));
        }
        return strs.join('\n');
    }
    static pushJoinArr(org, key, tag = ',') {
        if (!org) {
            return key;
        }
        if (!key) {
            return org;
        }
        const arr = org.split(tag);
        const res = [];
        let have = false;
        for (const item of arr) {
            if (item.length > 0) {
                if (item !== key) {
                    res.push(item);
                }
                else {
                    have = true;
                }
            }
        }
        if (!have) {
            res.push(key);
        }
        return res.join(tag);
    }
    static removeJoinArr(org, key, tag = ',') {
        if (!org || !key) {
            return org;
        }
        const arr = org.split(tag);
        const res = [];
        for (const item of arr) {
            if (item.length > 0 && item !== key) {
                res.push(item);
            }
        }
        return res.join(tag);
    }
    static toSha256(str) {
        const shaObj = new jssha__WEBPACK_IMPORTED_MODULE_1__["default"]('SHA-256', 'TEXT');
        shaObj.update(str);
        return shaObj.getHash('HEX');
    }
    /****** 对象转数组 *******/
    static objectToArray(obj) {
        const result = [];
        if (!obj || typeof obj !== 'object') {
            return result;
        }
        let j = 0;
        for (const i of Object.keys(obj)) {
            result[j] = obj[i];
            j++;
        }
        return result;
    }
    static filterEmpty(arr) {
        const res = [];
        if (!arr) {
            return res;
        }
        for (const key of Object.keys(arr)) {
            if (arr[key]) {
                res.push(arr[key]);
            }
        }
        return res;
    }
    static sleep(ms) {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(), ms);
        });
    }
    static getImagePath(path, basePath, type, defPath, ignore) {
        if (!path || path.length === 0) {
            if (defPath) {
                return defPath;
            }
            return 'assets/imgs/default_image.png';
        }
        if (path.indexOf('http://') === 0 ||
            path.indexOf('https://') === 0 ||
            path.indexOf('assets') === 0 ||
            path.indexOf('data:image') === 0) {
            return path;
        }
        if (path.indexOf('//') === 0) {
            return 'http:' + path;
        }
        if (path.indexOf('://') === 0) {
            return 'http' + path;
        }
        if (path.indexOf('/') === 0) {
            return _app_config__WEBPACK_IMPORTED_MODULE_0__.AppConfig.getBaseUrl(ignore) + path;
        }
        if (basePath && type) {
            return (_app_config__WEBPACK_IMPORTED_MODULE_0__.AppConfig.getBaseUrl(ignore) +
                basePath +
                '?size=' +
                type +
                '&path=' +
                path);
        }
        return _app_config__WEBPACK_IMPORTED_MODULE_0__.AppConfig.getBaseUrl(ignore) + '/' + path;
    }
    static getUrl(path) {
        if (!path || path.length === 0) {
            return '';
        }
        const urlBase = _app_config__WEBPACK_IMPORTED_MODULE_0__.AppConfig.getBaseUrl();
        if (path.indexOf('http://') === 0 ||
            path.indexOf('https://') === 0 ||
            path.indexOf(urlBase) === 0) {
            return path;
        }
        return urlBase + path;
    }
    static copy(obj) {
        return JSON.parse(JSON.stringify(obj));
    }
    static deepCopy(p, cp) {
        const c = cp || {};
        for (const i of Object.keys(p)) {
            if (!p.hasOwnProperty(i)) {
                continue;
            }
            if (typeof p[i] === 'object') {
                c[i] = p[i].constructor === Array ? [] : {};
                this.deepCopy(p[i], c[i]);
            }
            else {
                c[i] = p[i];
            }
        }
        return c;
    }
    static time() {
        const tm = new Date().getTime();
        return parseInt('' + Math.floor(tm / 1000), 10);
    }
    static getTime(str) {
        const tm = this.newDate(str).getTime();
        return parseInt('' + Math.floor(tm / 1000), 10);
    }
    static makeKey(...args) {
        const str = JSON.stringify(args);
        const shaObj = new jssha__WEBPACK_IMPORTED_MODULE_1__["default"]('SHA-1', 'TEXT');
        shaObj.update(str);
        return shaObj.getHash('HEX');
    }
    static defValue(a, key, def) {
        if (!a || !a[key]) {
            return def;
        }
        return a[key];
    }
    static getPercent(a, b, def) {
        if (typeof a === 'undefined' || typeof b === 'undefined') {
            if (typeof def === 'undefined') {
                return 0;
            }
            else {
                return def;
            }
        }
        let p = parseInt('' + (a / b) * 100, 10);
        if (p < 0) {
            p = 0;
        }
        else if (p > 100) {
            p = 100;
        }
        return p;
    }
    static xstrMid(str, left, right, tag = '...') {
        if (!str || str.length < left + right) {
            return str;
        }
        return str.substr(0, left) + tag + str.substr(0 - right);
    }
    static formatMoney(s, n) {
        if (n !== 0) {
            n = n > 0 && n <= 20 ? n : 2;
            s = parseFloat((s + '').replace(/[^\d\.-]/g, '')).toFixed(n) + '';
        }
        else {
            s = parseInt(s + '', 10) + '';
        }
        const sp = s.split('.');
        const l = s.split('.')[0].split('').reverse(), r = sp.length > 1 ? '.' + sp[1] : '';
        let t = '', i = 0;
        for (; i < l.length; i++) {
            t += l[i] + ((i + 1) % 3 === 0 && i + 1 !== l.length ? ',' : '');
        }
        return t.split('').reverse().join('') + r;
    }
    static formatFixed(num, n) {
        const p = Math.pow(10, n);
        return (Math.floor(num * p) / p).toFixed(n);
    }
    static formatFloat(v, nFixed2) {
        const fx = nFixed2 ? nFixed2 : 2;
        if (!v) {
            return (0.0).toFixed(fx);
        }
        let vv = parseFloat(v);
        vv = Math.abs(vv);
        if (vv >= 10000.0) {
            if (vv >= 100000000.0) {
                if (vv >= 10000000000000.0) {
                    return 'N';
                }
                return this.formatFixed(vv / 100000000.0, fx) + '亿';
            }
            return this.formatFixed(vv / 10000.0, fx) + '万';
        }
        return this.formatFixed(vv, fx);
    }
    static formatBitSize(v, nFixed2) {
        const fx = nFixed2 ? nFixed2 : 2;
        if (!v) {
            return (0.0).toFixed(fx);
        }
        let vv = parseFloat(v);
        vv = Math.abs(vv);
        if (vv >= 1024.0) {
            if (vv >= 1048576.0) {
                if (vv >= 1073741824.0) {
                    if (vv >= 1099511627776.0) {
                        return this.formatFixed(vv / 1099511627776.0, fx) + 'TB';
                    }
                    return this.formatFixed(vv / 1073741824.0, fx) + 'GB';
                }
                return this.formatFixed(vv / 1048576.0, fx) + 'MB';
            }
            return this.formatFixed(vv / 1024.0, fx) + 'KB';
        }
        return this.formatFixed(vv, fx) + 'B';
    }
    static formatDistance(v, nFixed2) {
        const fx = nFixed2 ? 0 : 2;
        if (!v) {
            return (0.0).toFixed(fx);
        }
        let vv = parseFloat(v);
        vv = Math.abs(vv);
        if (vv >= 1000.0) {
            return this.formatFixed(vv / 1000.0, 2) + 'km';
        }
        return this.formatFixed(vv, fx);
    }
    static formatInt(v) {
        return this.formatFloat(v, true);
    }
    static formatFloatbai(v) {
        return v * 100;
    }
    static formatNumber(n) {
        n = isNaN(n) ? 0.0 : n;
        const b = parseInt(n, 10).toString();
        const len = b.length;
        if (len <= 3) {
            return b;
        }
        const r = len % 3;
        return r > 0
            ? b.slice(0, r) + ',' + b.slice(r, len).match(/\d{3}/g).join(',')
            : b.slice(r, len).match(/\d{3}/g).join(',');
    }
    static timeAgo(str) {
        if (!str) {
            return '';
        }
        const langarr = [
            '前',
            '年',
            '月',
            '周',
            '日',
            '小时',
            '分钟',
            '秒',
            '刚刚',
        ];
        const tm = typeof str === 'string' ? this.newDate(str).getTime() : str;
        const differ = new Date().getTime() / 1000 - tm / 1000;
        return AppUtil.timeAgoBySecond(differ, langarr);
    }
    static timeAgoBySecond(differ, langarr) {
        langarr = langarr || [
            '以内',
            '年',
            '月',
            '周',
            '日',
            '小时',
            '分钟',
            '秒',
            '1分钟内',
        ];
        if (isNaN(differ)) {
            return '';
        }
        if (differ < 60) {
            return langarr[8];
        }
        const differY = Math.floor(differ / 365.0 / 86400.0);
        const differM = Math.floor(differ / 30.0 / 86400.0);
        const differW = Math.floor(differ / 7.0 / 86400.0);
        const differD = Math.floor(differ / 86400.0);
        const differH = Math.floor(differ / 3600.0);
        const differMin = Math.floor(differ / 60.0);
        const differS = Math.floor(differ);
        if (differY) {
            return differY + langarr[1] + langarr[0];
        }
        else if (differM) {
            return differM + langarr[2] + langarr[0];
        }
        else if (differW) {
            return differW + langarr[3] + langarr[0];
        }
        else if (differD) {
            return differD + langarr[4] + langarr[0];
        }
        else if (differH) {
            return differH + langarr[5] + langarr[0];
        }
        else if (differMin) {
            return differMin + langarr[6] + langarr[0];
        }
        else {
            return differS + langarr[7] + langarr[0];
        }
    }
    // 0000-00-00 00:00:00
    static newDate(v) {
        // return;
        if (v instanceof Date) {
            return v;
        }
        if (!v) {
            return new Date();
        }
        v = v.replace(/\.[0-9]+/g, '');
        v = v.replace(/-/g, '/');
        return new Date(Date.parse(v));
    }
    // yyyy-MM-dd hh:mm:ss
    static formatDate(date, fmt) {
        // author: meizz
        if (!date) {
            return '';
        }
        if (!fmt) {
            return '' + date;
        }
        if (typeof date !== 'object') {
            date = this.newDate(date);
        }
        const o = {
            'M+': date.getMonth() + 1,
            'd+': date.getDate(),
            'h+': date.getHours(),
            'm+': date.getMinutes(),
            's+': date.getSeconds(),
            'q+': Math.floor((date.getMonth() + 3) / 3),
            S: date.getMilliseconds(), // 毫秒
        };
        if (/(y+)/.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
        }
        for (const k of Object.keys(o)) {
            if (new RegExp('(' + k + ')').test(fmt)) {
                fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1
                    ? o[k]
                    : ('00' + o[k]).substr(('' + o[k]).length));
            }
        }
        return fmt;
    }
    static jsonParse(data) {
        try {
            return typeof data === 'string' ? JSON.parse(data) : data;
        }
        catch (e) { }
        return {};
    }
    static unique(s, cb) {
        const arr = s
            .sort()
            .join(',,')
            .replace(/(,|^)([^,]+)(,,\2)+(,|$)/g, '$1$2$4')
            .replace(/,,+/g, ',')
            .replace(/,$/, '')
            .split(',');
        cb = cb || ((v) => v);
        for (const i of Object.keys(arr)) {
            arr[i] = cb(arr[i]);
        }
        return arr;
    }
    static pagination(pageNo, pageSize, array) {
        const offset = (pageNo - 1) * pageSize;
        return offset + pageSize >= array.length
            ? array.slice(offset, array.length)
            : array.slice(offset, offset + pageSize);
    }
    static isNumber(n, accurate) {
        if (accurate) {
            return typeof n === 'number' && isFinite(n);
        }
        else {
            return !isNaN(parseFloat(n)) && isFinite(n);
        }
    }
    static combineToBase(base, ...args) {
        if (!base || !args) {
            return base;
        }
        for (const key of Object.keys(base)) {
            for (const arg of args) {
                if (arg && arg[key]) {
                    base[key] = arg[key];
                }
            }
        }
        return base;
    }
    static arrayMerge(...args) {
        let k = 0;
        const res = [];
        for (const i of Object.keys(args)) {
            for (const j of Object.keys(args[i])) {
                if (this.isNumber(j)) {
                    res[k++] = args[i][j];
                }
                else {
                    res[j] = args[i][j];
                }
            }
        }
        return res;
    }
    static arrayRemove(arr, ...args) {
        let hv = false;
        const res = [];
        for (const i of Object.keys(arr)) {
            hv = false;
            for (const j in Object.keys(args)) {
                if (i === args[j]) {
                    hv = true;
                    break;
                }
            }
            if (!hv) {
                res.push(arr[i]);
            }
        }
        return res;
    }
    static inArray(v, arr) {
        if (typeof arr !== 'object' || typeof v === 'object' || !arr) {
            return false;
        }
        for (const i of Object.keys(arr)) {
            if ('' + arr[i] === '' + v) {
                return true;
            }
        }
        return false;
    }
    static getNextPage(arr, psz) {
        if (!arr || !psz) {
            return 1;
        }
        return Math.floor(arr.length / psz) + 1;
    }
    static combineMoreData(old, come, psz) {
        if (!come) {
            return old;
        }
        if (!old || !psz) {
            return come;
        }
        const remove = old.length - (this.getNextPage(old, psz) - 1) * psz;
        for (let i = 0; i < remove; i++) {
            old.pop();
        }
        for (const item of come) {
            old.push(item);
        }
        return old;
    }
    static parseQueryString(url, onlyParams) {
        let str = url;
        const result = {};
        if (!onlyParams) {
            const argo = url.split('?');
            if (argo.length < 2) {
                return result;
            }
            str = argo[1];
        }
        const temp = str.split('&');
        for (const item of temp) {
            const temp2 = item.split('=');
            result[temp2[0]] = decodeURIComponent(temp2[1]);
        }
        return result;
    }
    static buildQuery(params) {
        if (!params) {
            return '';
        }
        const buf = [];
        for (const key of Object.keys(params)) {
            if (!key || params[key] == null) {
                continue;
            }
            buf.push(key + '=' + encodeURIComponent(params[key]));
        }
        return buf.join('&');
    }
    // url = AppUtil.updateUrl(url, {export: 1, token: ...})
    static updateUrl(url, params) {
        if (!params) {
            return url;
        }
        const argo = url.split('?');
        if (argo.length < 2) {
            argo[1] = '';
        }
        const temp = argo[1].split('&');
        const p = {};
        for (const item of temp) {
            if (item == null) {
                continue;
            }
            const t = item.split('=');
            p[t[0]] = decodeURIComponent(t[1]);
        }
        for (const k of Object.keys(params)) {
            p[k] = params[k];
        }
        const query = this.buildQuery(p);
        if (!query) {
            return argo[0];
        }
        return argo[0] + '?' + query;
    }
    static toMinute(sec, start) {
        const s = sec - start;
        const vm = Math.floor(s / 3600);
        const vs = '' + Math.floor((s - vm * 3600) / 60);
        let r = '';
        r += ('' + vm).length === 1 ? '0' + vm : vm;
        r += ':' + (vs.length === 1 ? '0' + vs : vs);
        return r;
    }
    static getPartTime(part) {
        let sec = 0;
        for (const item of part) {
            if (!!item && typeof item !== 'function' && item.length === 3) {
                sec += item[2] - item[1];
            }
        }
        const c = Math.ceil(sec / 60);
        const lbs = [];
        let x = 0;
        let tx = '';
        for (const item of part) {
            if (!!item && typeof item !== 'function' && item.length === 3) {
                let j = item[1] + x;
                let itx = '';
                let ifirst = true;
                for (; j < item[2]; j += 10800) {
                    itx = this.toMinute(j, item[0]);
                    if (ifirst) {
                        lbs.pop();
                        ifirst = false;
                        if (tx.length > 0) {
                            itx = tx + '/' + itx;
                        }
                    }
                    lbs.push(itx);
                }
                x = j - item[2];
                if (x <= 0) {
                    itx = this.toMinute(j, item[0]);
                    lbs.push(itx);
                }
                tx = itx;
            }
        }
        return { count: c, labels: lbs };
    }
    static ge(a) {
        return typeof a === 'string'
            ? document.getElementById
                ? document.getElementById(a)
                : null
            : a;
    }
    static parseFloat(a) {
        const r = parseFloat(a);
        if (isNaN(r)) {
            return 0.0;
        }
        return r;
    }
    static parseInt(a) {
        const r = parseInt(a, 10);
        if (isNaN(r)) {
            return 0;
        }
        return r;
    }
    /**************system ********/
    static rad(d) {
        return (d * Math.PI) / 180.0; // 经纬度转换成三角函数中度分表形式。
    }
    static calcDistance(lat1, lng1, lat2, lng2) {
        const radLat1 = this.rad(lat1);
        const radLat2 = this.rad(lat2);
        const a = radLat1 - radLat2;
        const b = this.rad(lng1) - this.rad(lng2);
        let s = 2 *
            Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) +
                Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)));
        s = s * 6378.137; // EARTH_RADIUS;
        s = Math.round(s * 10000) / 10;
        return s;
    }
    static account(sess) {
        if (typeof sess.username !== 'undefined' || sess.username.length > 0) {
            return sess.username;
        }
        else if (typeof sess.umobile !== 'undefined' || sess.umobile.length > 0) {
            return sess.umobile;
        }
        else if (typeof sess.uemail !== 'undefined' || sess.uemail.length > 0) {
            return sess.uemail;
        }
        else if (typeof sess.uopenid !== 'undefined' || sess.uopenid.length > 0) {
            return sess.uopenid;
        }
        return '';
    }
    static isNum(str) {
        const newstr = str.replace(/[^0-9]/gi, '');
        return newstr;
    }
    static objectToPairArray(obj) {
        if (!obj) {
            return [];
        }
        const t = [];
        for (const i of Object.keys(obj)) {
            t.push({
                key: i,
                value: obj[i],
            });
        }
        return t;
    }
    // remove html tag  <div><p>...
    static stripTags(html) {
        const div = document.createElement('div');
        div.innerHTML = html;
        return div.textContent || div.innerText;
    }
    /**********************************
       filepathJoin($protect_split_tag, $path1, ...);
      首参数为true : 用于连接网络路径, 可保护$path1为 'http://', 'file:///abc'等路径协议的连续多斜杠
      首参数为false: 用于连接本地路径, 所有路径连续多斜杠都将被清理为单一
  
      如:
      filepath_join(true, $config['path'], 'a\\\\bc', '//dd/', '123.png');
      filepath_join(false, '//var/a', 'ab//\\c ', '123.png');
      **********************************/
    static filepathJoin(...args) {
        if (args.length < 2) {
            return '';
        }
        const protect = !!args[0];
        let path1 = '';
        let path2 = '';
        let first = true;
        let skipPos = 0;
        for (const k of Object.keys(args)) {
            if (parseInt(k, 10) === 0) {
                continue;
            }
            let part = args[k].trim();
            if (part === '') {
                first = false;
                continue;
            }
            if (protect && first) {
                let pos = part.indexOf('//');
                if (pos >= 0 && part.length > 2) {
                    // keep///, file path may be have ///
                    if (part.length > pos + 3 && part[pos + 2] === '/') {
                        pos++;
                    }
                    skipPos = pos + 2;
                    path1 = part.substr(0, skipPos);
                    part = part.substr(skipPos);
                }
                first = false;
            }
            path2 += '/' + part;
        }
        path2 = path2.replace(/[\/\\]+/g, '/');
        if (path1 === '') {
            return path2;
        }
        // path1有双斜杠时, path2首字符斜杠应该去掉
        if (path2 !== '' && path2[0] === '/') {
            path2 = path2.substr(1);
        }
        return path1 + path2;
    }
    static selectFile(accept, fn, name = 'file') {
        const input = document.createElement('input');
        if (accept) {
            input.accept = accept;
        }
        input.type = 'file';
        input.name = name;
        input.click();
        input.onchange = () => (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            fn(input.files[0]);
        });
    }
    static filenameFromMime(mime) {
        if (!mime ||
            !mime['Content-Disposition'] ||
            mime['Content-Disposition'].length < 1) {
            return '';
        }
        const col = '' + mime['Content-Disposition'][0];
        if (!col.toLowerCase().includes('filename=')) {
            return col;
        }
        const f = col.split('filename=')[1];
        return f.replace(/['"]+/gi, '');
    }
    static toArray(v) {
        if (!v) {
            return [];
        }
        if (typeof v !== 'object') {
            return [v];
        }
        if (v instanceof Array) {
            return v;
        }
        const r = [];
        for (const k of Object.keys(v)) {
            r.push(v[k]);
        }
        return r;
    }
    static joinTemplate(s, pages) {
        s = s.trim();
        const i = s.lastIndexOf('</div>');
        const p = pages.join('\n');
        if (i <= 0) {
            return s;
        }
        return s.substring(0, i) + p + '\n</div>';
    }
    static searchTreeNode(treeNode, kw) {
        return searchTreeNode(treeNode, kw);
    }
    static parseURL(url) {
        const a = document.createElement('a');
        a.href = url;
        return {
            protocol: a.protocol.replace(':', ''),
            host: a.hostname,
            port: a.port,
            path: a.pathname.replace(/^([^\/])/, '/$1'),
            hash: a.hash.replace('#', ''),
            params: (() => {
                const ret = {}, seg = a.search.replace(/^\?/, '').split('&'), len = seg.length;
                for (let i = 0; i < len; i++) {
                    if (!seg[i]) {
                        continue;
                    }
                    const s = seg[i].split('=');
                    ret[s[0]] = decodeURIComponent(s[1]);
                }
                return ret;
            })(),
        };
    }
    static parseURLPath(url) {
        const c1 = url.split('//');
        if (c1.length > 0) {
            c1[0] = c1[1];
        }
        const c2 = c1[0].split('?');
        const s = c2[0].indexOf('/');
        if (s >= 0) {
            return c2[0].substring(s);
        }
        return '';
    }
    static openUrl(url, target = '_blank') {
        const a = document.createElement('a');
        a.target = target;
        a.href = url;
        const e = document.createEvent('MouseEvents');
        e.initEvent('click', true, true);
        a.dispatchEvent(e);
    }
    static toast(msg, tp, duration) {
        // ...
        console.log(msg);
        return Promise.resolve(null);
    }
    static alert(msg, tp) {
        // ...
        alert(msg);
        return Promise.resolve(null);
    }
    static selectAllValues(e, isSet = false, checked = false) {
        if (!e) {
            return [];
        }
        const inputs = e.getElementsByTagName('input');
        const res = [];
        for (let i = 0; i < inputs.length; i++) {
            const ei = inputs.item(i);
            if (isSet) {
                ei.checked = checked;
            }
            if (ei.type === 'checkbox' && ei.checked) {
                if (ei.value && ei.value !== 'on') {
                    res.push(ei.value);
                }
            }
        }
        return res;
    }
    /*---------------分页-----------------*/
    static getPaginationByData(data) {
        if (!data) {
            return null;
        }
        return this.getPagination(data.total, data.current_page, data.page_size);
    }
    static getPagination(total, currentPage = 1, pageSize = 20) {
        if (!pageSize || pageSize < 1) {
            pageSize = 1;
        }
        if (!total || total < 0) {
            total = 0;
        }
        if (!currentPage || currentPage < 1) {
            currentPage = 1;
        }
        const pg = {
            currentPage: currentPage ? currentPage : 1,
            totalPage: Math.ceil(total / pageSize),
            start: 1,
            end: Math.ceil(total / pageSize),
            total: total,
            pageSize: pageSize,
            links: this.paginationArray(currentPage, Math.ceil(total / pageSize)),
            linkPrev: this.paginationNext(currentPage, Math.ceil(total / pageSize), '-'),
            linkNext: this.paginationNext(currentPage, Math.ceil(total / pageSize), '+'),
        };
        return pg;
    }
    static paginationArray(i, max) {
        if (!i || !max) {
            return null;
        }
        const arr = [];
        if (i < 1) {
            i = 1;
        }
        else if (i > max) {
            i = max;
        }
        if (i + 2 <= max) {
            for (let index = i + 2; index > i - 3 && index > 0; index--) {
                arr.unshift(index);
            }
        }
        else if (i + 1 <= max) {
            for (let index = i + 1; index > i - 4 && index > 0; index--) {
                if (index <= max) {
                    arr.unshift(index);
                }
            }
        }
        else if (i === max) {
            for (let index = i; index > i - 4 && index > 0; index--) {
                if (index <= max) {
                    arr.unshift(index);
                }
            }
        }
        if (arr[0] > 2) {
            arr.unshift('.');
            arr.unshift(1);
        }
        else if (arr[0] > 1) {
            arr.unshift(1);
        }
        if (arr[arr.length - 1] < max && arr[arr.length - 1] === max - 1) {
            arr.push(max);
        }
        else if (arr[arr.length - 1] < max - 1) {
            arr.push('.');
            arr.push(max);
        }
        return arr;
    }
    static paginationNext(i, totalPage, type) {
        if (type === '+') {
            if (i < totalPage) {
                i++;
            }
            else {
                i = totalPage;
            }
        }
        else {
            if (i > 1) {
                i--;
            }
            else {
                i = 1;
            }
        }
        return i;
    }
    // 随机一个高亮颜色 #888888 ~ #ffffff
    static randLightColor() {
        let color = '';
        for (let i = 0; i < 3; i++) {
            const rand = (190 + Math.floor(Math.random() * 66)).toString(16);
            if (rand === '') {
                color += 'aa';
            }
            else if (rand.length === 1) {
                color += '0' + rand;
            }
            else {
                color += rand;
            }
        }
        return '#' + color;
    }
    // 将数据按剪映射到固定form
    static mappingToForm(mp, obj) {
        if (mp == null || obj == null) {
            return mp;
        }
        for (const k of Object.keys(mp)) {
            for (const ki of Object.keys(obj)) {
                if (k === ki) {
                    if (typeof mp[k] === 'string') {
                        mp[k] = String(obj[ki]);
                    }
                    else if (typeof mp[k] === 'number') {
                        mp[k] = Number(obj[ki]);
                    }
                    else if (typeof mp[k] === 'boolean') {
                        mp[k] = Boolean(obj[ki]);
                    }
                    else {
                        mp[k] = obj[ki];
                    }
                    break;
                }
            }
        }
        return mp;
    }
    // 根据html字符串创建元素
    static createNode(htmlStr) {
        const div = document.createElement('div');
        div.innerHTML = htmlStr;
        return div.childNodes[0];
    }
    static getCurrentWeekFirstDay(date) {
        const weekFirstDay = new Date(date - (date.getDay() - 1) * 86400000);
        let firstMonth = Number(weekFirstDay.getMonth()) + 1;
        if (firstMonth < 10) {
            firstMonth = '0' + firstMonth;
        }
        let weekFirstDays = weekFirstDay.getDate();
        if (weekFirstDays < 10) {
            weekFirstDays = '0' + weekFirstDays;
        }
        return weekFirstDay.getFullYear() + '-' + firstMonth + '-' + weekFirstDays;
    }
    static getCurrentWeekLastDay(date) {
        const weekFirstDay = new Date(date - (date.getDay() - 1) * 86400000);
        const weekLastDay = new Date((weekFirstDay / 1000 + 6 * 86400) * 1000);
        let lastMonth = Number(weekLastDay.getMonth()) + 1;
        if (lastMonth < 10) {
            lastMonth = '0' + lastMonth;
        }
        let weekLastDays = weekLastDay.getDate();
        if (weekLastDays < 10) {
            weekLastDays = '0' + weekLastDays;
        }
        return weekFirstDay.getFullYear() + '-' + lastMonth + '-' + weekLastDays;
    }
    static getCurrentMonthFirstDay() {
        const date = new Date();
        date.setDate(1);
        let month = parseInt((date.getMonth() + 1));
        let day = date.getDate();
        if (month < 10) {
            month = '0' + month;
        }
        if (day < 10) {
            day = '0' + day;
        }
        return date.getFullYear() + '-' + month + '-' + day;
    }
    static getCurrentMonthLastDay() {
        const date = new Date();
        let currentMonth = date.getMonth();
        const nextMonth = ++currentMonth;
        const nextMonthFirstDay = new Date(date.getFullYear(), nextMonth, 1);
        const oneDay = 1000 * 60 * 60 * 24;
        const lastTime = new Date(nextMonthFirstDay - oneDay);
        let month = parseInt((lastTime.getMonth() + 1));
        let day = lastTime.getDate();
        if (month < 10) {
            month = '0' + month;
        }
        if (day < 10) {
            day = '0' + day;
        }
        return date.getFullYear() + '-' + month + '-' + day;
    }
    static mao(v, isMao) {
        if (!v) {
            v = '';
        }
        if (v.includes('#')) {
            return v;
        }
        const pos = v.indexOf('://');
        if (pos <= 6 && pos >= 0) {
            return v;
        }
        if (isMao) {
            return '#' + v;
        }
        return v;
    }
    // 密码强度
    static parsePasswordstrength(str) {
        const p = new Passwordstrength();
        if (!str) {
            return p;
        }
        p.length = str.length;
        for (let i = 0; i < str.length; i++) {
            const c = str.charCodeAt(i);
            if (c < 0 || c > 127) {
                p.notAsciiCharCount++;
            }
            if (c >= 0 && c <= 32) {
                p.spaceCharCount++;
            }
            if (c >= 33 && c <= 47) {
                p.specialCharCount++;
            }
            if (c >= 48 && c <= 57) {
                p.numberCharCount++;
            }
            if (c >= 58 && c <= 64) {
                p.specialCharCount++;
            }
            if (c >= 65 && c <= 90) {
                p.upperCharCount++;
            }
            if (c >= 91 && c <= 96) {
                p.specialCharCount++;
            }
            if (c >= 97 && c <= 122) {
                p.lowerCharCount++;
            }
            if (c >= 123 && c <= 126) {
                p.specialCharCount++;
            }
            if (c === 127) {
                p.spaceCharCount++;
            }
        }
        return p;
    }
    // 密码强度
    static checkasswordstrength(str) {
        const p = AppUtil.parsePasswordstrength(str);
        const x1 = p.length > 8 ? true : false;
        const x2 = p.lowerCharCount > 0 && p.upperCharCount > 0 ? true : false;
        const x3 = p.numberCharCount > 0 ? true : false;
        const x4 = p.specialCharCount > 0 ? true : false;
        if (p.spaceCharCount > 0 || p.notAsciiCharCount > 0) {
            return 0;
        }
        if (p.length > 8) {
            if (x2 && x3 && x4) {
                return 8;
            }
            else if ((x2 && x3) || (x2 && x4) || (x3 && x4)) {
                return 7;
            }
            else {
                return 4;
            }
        }
        else if (p.length >= 6) {
            if (x2 && x3 && x4) {
                return 6;
            }
            else if ((x2 && x3) || (x2 && x4) || (x3 && x4)) {
                return 5;
            }
            else {
                return 3;
            }
        }
        else if (p.length >= 4) {
            if (x2 && x3 && x4) {
                return 2;
            }
        }
        return 1;
    }
    static stopEvent(e) {
        // 阻止href直接跳转事件
        e = e || window.event; // 获取event对象
        if (e.preventDefault) {
            e.preventDefault();
        }
        else {
            e.returnValue = false;
        }
        if (e.stopPropagation) {
            e.stopPropagation();
        }
        else {
            e.cancelBubble = true;
        }
    }
    static convertBase64UrlToBlob(urlData) {
        var arr = urlData.split(','), mime = arr[0].match(/:(.*?);/)[1], bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr], { type: mime });
    }
    static randSort(arr) {
        var cloneArr = arr.concat();
        var len = cloneArr.length;
        for (var i = 0; i < len; i++) {
            var index = Math.floor(Math.random() * cloneArr.length);
            var temp = cloneArr[index];
            cloneArr[index] = cloneArr[i];
            cloneArr[i] = temp;
        }
        return cloneArr;
    }
}
AppUtil.MAX_INT = 2147483647;
const searchTreeNode = (node, kw) => {
    if (!kw || !node || node.name.includes(kw)) {
        return node;
    }
    // 有子节点
    if (node.children && node.children.length > 0) {
        const newChildren = [];
        for (const childNode of node.children) {
            const reNode = searchTreeNode(childNode, kw);
            if (reNode) {
                newChildren.push(reNode);
            }
        }
        // have child node matched
        if (newChildren && newChildren.length > 0) {
            node.children = newChildren;
            return node;
        }
    }
    return null;
};


/***/ }),

/***/ 71669:
/*!********************************!*\
  !*** ./src/config/firebase.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "firebaseConfig": () => (/* binding */ firebaseConfig),
/* harmony export */   "firebaseApp": () => (/* binding */ firebaseApp)
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ 66369);
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBSSqU9TllkwUGdDN5rSJFRqv_fCKplymk",
    authDomain: "english-learning-e674b.firebaseapp.com",
    databaseURL: "https://english-learning-e674b-default-rtdb.firebaseio.com",
    projectId: "english-learning-e674b",
    storageBucket: "english-learning-e674b.appspot.com",
    messagingSenderId: "346486223133",
    appId: "1:346486223133:web:76b08186226edc9a2e71f4",
    measurementId: "G-PMCEMTMN8E"
};
// Initialize Firebase
const firebaseApp = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);
// Import the functions you need from the SDKs you need
// local/mp3/英语听力 - 第七章 旅店安排 7.1.mp3


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 68150);
/* harmony import */ var _app_app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.config */ 49670);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ 92340);
/* harmony import */ var firebaseui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebaseui */ 3175);
/* harmony import */ var _node_modules_firebaseui_dist_firebaseui_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../node_modules/firebaseui/dist/firebaseui.css */ 10791);








window.firebaseui = firebaseui__WEBPACK_IMPORTED_MODULE_3__;
(() => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(void 0, void 0, void 0, function* () {
    // const vConsole = new VConsole();
    // or init with options
    //const vConsole = new VConsole({ maxLogNumber: 1000 });
    if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production) {
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.enableProdMode)();
    }
    yield _app_app_config__WEBPACK_IMPORTED_MODULE_0__.AppConfig.init();
    (0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_7__.platformBrowserDynamic)()
        .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__.AppModule)
        .catch((err) => console.log(err));
}))();


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		70079,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		25593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		13225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		86655,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		44856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		13059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		58648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		98308,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		44690,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		64090,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		36214,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		69447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		17950,
		"default-node_modules_ionic_core_dist_esm_data-caf38df0_js-node_modules_ionic_core_dist_esm_th-d3ab8e",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		79689,
		"default-node_modules_ionic_core_dist_esm_data-caf38df0_js-node_modules_ionic_core_dist_esm_th-d3ab8e",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		18840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		40749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		69667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		83288,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		35473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		53634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		22855,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		58737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		99632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		54446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		32275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		48050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		18994,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		23592,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		35454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		92666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		64816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		45534,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		94902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		91938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		78179,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		90668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		61624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		19989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		28902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		70199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		48395,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		96357,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		38268,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		15269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		32875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 79259:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-menu {\n  --ion-background-color: $light-blue-color;\n  border: 5px solid #f3f4f5;\n}\nion-menu ion-list-header {\n  color: #0d0e0d;\n  font-weight: bold;\n  padding: 10px;\n  background-color: #007bff;\n  border-bottom: 5px solid #f3f4f5;\n  transition: background-color 0.3s ease;\n}\nion-menu ion-list-header:hover {\n  background-color: white;\n}\nion-menu ion-item {\n  color: #f5d5d5;\n  background-color: #fff;\n}\nion-menu ion-item ion-icon {\n  color: #f1c3c3;\n}\nion-menu ion-item:hover {\n  background-color: #000c1a;\n}\nion-menu ion-item:hover ion-icon {\n  color: #007bff;\n}\nion-menu ion-item.selected {\n  background-color: #f3f4f5;\n}\nion-menu ion-item.selected ion-icon {\n  color: #007bff;\n}\nion-menu ion-item.active {\n  background-color: #004a99;\n}\nion-menu ion-item.active ion-icon {\n  color: #ffffff;\n}\nion-menu-toggle ion-item {\n  color: #0d0e0d;\n  background-color: #fff;\n}\nion-menu-toggle ion-item ion-icon {\n  color: #0d0e0d;\n}\nion-menu-toggle ion-item:hover {\n  background-color: #575d57;\n}\nion-menu-toggle ion-item:hover ion-icon {\n  color: #fff;\n}\nion-menu-toggle ion-item.active {\n  background-color: black;\n}\nion-menu-toggle ion-item.active ion-icon {\n  color: #fff;\n}\nion-router-outlet {\n  background-color: #007bff;\n  border: 5px solid #f3f4f5;\n  padding: 20px;\n}\nion-router-outlet.fade-enter-active, ion-router-outlet.fade-leave-active {\n  transition: opacity 0.3s ease;\n}\nion-router-outlet.fade-enter, ion-router-outlet.fade-leave-to {\n  opacity: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcdGVzdCUyMHdlZWtcXGVuZ2xpc2hsZWFybmluZ1xcZW5nbGlzaGxlYXJuaW5nXFxzcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0UseUNBQUE7RUFDQSx5QkFBQTtBQ0pGO0FETUU7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EseUJBWGU7RUFZZixnQ0FBQTtFQUNBLHNDQUFBO0FDSko7QURNSTtFQUNFLHVCQUFBO0FDSk47QURRRTtFQUNFLGNBQUE7RUFDQSxzQkFBQTtBQ05KO0FET0k7RUFDRSxjQUFBO0FDTE47QURTSTtFQUNFLHlCQUFBO0FDUE47QURRTTtFQUNFLGNBQUE7QUNOUjtBRFVJO0VBQ0UseUJBbkNZO0FDMkJsQjtBRFNNO0VBQ0UsY0FBQTtBQ1BSO0FEV0k7RUFDRSx5QkFBQTtBQ1ROO0FEVU07RUFDRSxjQUFBO0FDUlI7QURlRTtFQUNFLGNBdkRZO0VBd0RaLHNCQUFBO0FDWko7QURhSTtFQUNFLGNBMURVO0FDK0NoQjtBRGVJO0VBQ0UseUJBQUE7QUNiTjtBRGNNO0VBQ0UsV0FBQTtBQ1pSO0FEZ0JJO0VBQ0UsdUJBQUE7QUNkTjtBRGVNO0VBQ0UsV0FBQTtBQ2JSO0FEbUJBO0VBQ0UseUJBN0VpQjtFQThFakIseUJBQUE7RUFDQSxhQUFBO0FDaEJGO0FEa0JFO0VBRUUsNkJBQUE7QUNqQko7QURvQkU7RUFFRSxVQUFBO0FDbkJKIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRwcmltYXJ5LWNvbG9yOiAjMGQwZTBkO1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjNmM3NTdkO1xyXG4kbGlnaHQtYmx1ZS1jb2xvcjogIzAwN2JmZjtcclxuJGRlZXAtYmx1ZS1jb2xvcjogI2YzZjRmNTtcclxuXHJcbmlvbi1tZW51IHtcclxuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQtYmx1ZS1jb2xvcjtcclxuICBib3JkZXI6IDVweCBzb2xpZCAkZGVlcC1ibHVlLWNvbG9yO1xyXG5cclxuICBpb24tbGlzdC1oZWFkZXIge1xyXG4gICAgY29sb3I6ICMwZDBlMGQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQtYmx1ZS1jb2xvcjtcclxuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAkZGVlcC1ibHVlLWNvbG9yO1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oJGxpZ2h0LWJsdWUtY29sb3IsIDcwJSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpb24taXRlbSB7XHJcbiAgICBjb2xvcjogI2Y1ZDVkNTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgIGNvbG9yOiAjZjFjM2MzO1xyXG4gICAgXHJcbiAgICB9XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1peCgkbGlnaHQtYmx1ZS1jb2xvciwgIzAwMCwgMTAlKTtcclxuICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgIGNvbG9yOiAjMDA3YmZmO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi5zZWxlY3RlZCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkZWVwLWJsdWUtY29sb3I7XHJcbiAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICBjb2xvcjogIzAwN2JmZjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYuYWN0aXZlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRsaWdodC1ibHVlLWNvbG9yLCAyMCUpO1xyXG4gICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmlvbi1tZW51LXRvZ2dsZSB7XHJcbiAgaW9uLWl0ZW0ge1xyXG4gICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgXHJcbiAgICB9XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oJHByaW1hcnktY29sb3IsIDMwJSk7XHJcbiAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYuYWN0aXZlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRwcmltYXJ5LWNvbG9yLCAxMCUpO1xyXG4gICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmlvbi1yb3V0ZXItb3V0bGV0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQtYmx1ZS1jb2xvcjtcclxuICBib3JkZXI6IDVweCBzb2xpZCAkZGVlcC1ibHVlLWNvbG9yO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcblxyXG4gICYuZmFkZS1lbnRlci1hY3RpdmUsXHJcbiAgJi5mYWRlLWxlYXZlLWFjdGl2ZSB7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcclxuICB9XHJcblxyXG4gICYuZmFkZS1lbnRlcixcclxuICAmLmZhZGUtbGVhdmUtdG8ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbn1cclxuIiwiaW9uLW1lbnUge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQtYmx1ZS1jb2xvcjtcbiAgYm9yZGVyOiA1cHggc29saWQgI2YzZjRmNTtcbn1cbmlvbi1tZW51IGlvbi1saXN0LWhlYWRlciB7XG4gIGNvbG9yOiAjMGQwZTBkO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICNmM2Y0ZjU7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xufVxuaW9uLW1lbnUgaW9uLWxpc3QtaGVhZGVyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5pb24tbWVudSBpb24taXRlbSB7XG4gIGNvbG9yOiAjZjVkNWQ1O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuaW9uLW1lbnUgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBjb2xvcjogI2YxYzNjMztcbn1cbmlvbi1tZW51IGlvbi1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMGMxYTtcbn1cbmlvbi1tZW51IGlvbi1pdGVtOmhvdmVyIGlvbi1pY29uIHtcbiAgY29sb3I6ICMwMDdiZmY7XG59XG5pb24tbWVudSBpb24taXRlbS5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2Y0ZjU7XG59XG5pb24tbWVudSBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XG4gIGNvbG9yOiAjMDA3YmZmO1xufVxuaW9uLW1lbnUgaW9uLWl0ZW0uYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNGE5OTtcbn1cbmlvbi1tZW51IGlvbi1pdGVtLmFjdGl2ZSBpb24taWNvbiB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG5pb24tbWVudS10b2dnbGUgaW9uLWl0ZW0ge1xuICBjb2xvcjogIzBkMGUwZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbmlvbi1tZW51LXRvZ2dsZSBpb24taXRlbSBpb24taWNvbiB7XG4gIGNvbG9yOiAjMGQwZTBkO1xufVxuaW9uLW1lbnUtdG9nZ2xlIGlvbi1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU3NWQ1Nztcbn1cbmlvbi1tZW51LXRvZ2dsZSBpb24taXRlbTpob3ZlciBpb24taWNvbiB7XG4gIGNvbG9yOiAjZmZmO1xufVxuaW9uLW1lbnUtdG9nZ2xlIGlvbi1pdGVtLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuaW9uLW1lbnUtdG9nZ2xlIGlvbi1pdGVtLmFjdGl2ZSBpb24taWNvbiB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG5pb24tcm91dGVyLW91dGxldCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XG4gIGJvcmRlcjogNXB4IHNvbGlkICNmM2Y0ZjU7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5pb24tcm91dGVyLW91dGxldC5mYWRlLWVudGVyLWFjdGl2ZSwgaW9uLXJvdXRlci1vdXRsZXQuZmFkZS1sZWF2ZS1hY3RpdmUge1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcbn1cbmlvbi1yb3V0ZXItb3V0bGV0LmZhZGUtZW50ZXIsIGlvbi1yb3V0ZXItb3V0bGV0LmZhZGUtbGVhdmUtdG8ge1xuICBvcGFjaXR5OiAwO1xufSJdfQ== */";

/***/ }),

/***/ 33383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\r\n  <ion-split-pane contentId=\"main-content\">\r\n    <ion-menu contentId=\"main-content\" type=\"overlay\" side=\"end\">\r\n      <ion-content>\r\n        <ion-list id=\"inbox-list\" *ngIf=\"$isLogin\">\r\n          <ion-list-header>Function  </ion-list-header>\r\n          <ion-menu-toggle\r\n            auto-hide=\"false\"\r\n            *ngFor=\"let item of drapdownList; let i = index\"\r\n          >\r\n            <ion-item\r\n              *ngIf=\"item.url\"\r\n              routerDirection=\"root\"\r\n              [routerLink]=\"item.url\"\r\n              lines=\"none\"\r\n              detail=\"false\"\r\n              routerLinkActive=\"selected\"\r\n            >\r\n              <ion-icon\r\n                slot=\"start\"\r\n                [name]=\"item.icon ? item.icon : 'link-outline'\"\r\n              ></ion-icon>\r\n              <ion-label>{{ item.title }}</ion-label>\r\n            </ion-item>\r\n            <ion-item\r\n              *ngIf=\"item.func\"\r\n              routerDirection=\"root\"\r\n              (click)=\"item.func()\"\r\n              lines=\"none\"\r\n              detail=\"false\"\r\n              routerLinkActive=\"selected\"\r\n            >\r\n              <ion-icon\r\n                slot=\"start\"\r\n                [name]=\"item.icon ? item.icon : 'link-outline'\"\r\n              ></ion-icon>\r\n              <ion-label>{{ item.title }}</ion-label>\r\n            </ion-item>\r\n          </ion-menu-toggle>\r\n          <ion-menu-toggle auto-hide=\"false\">\r\n            <ion-item\r\n              routerDirection=\"root\"\r\n              (click)=\"onLogout()\"\r\n              lines=\"none\"\r\n              detail=\"false\"\r\n            >\r\n              <ion-icon slot=\"start\" name=\"log-out-outline\"></ion-icon>\r\n              <ion-label>Logout</ion-label>\r\n            </ion-item>\r\n          </ion-menu-toggle>\r\n        </ion-list>\r\n        <ion-list id=\"inbox-list\" *ngIf=\"!$isLogin\">\r\n          <ion-list-header>Function  </ion-list-header>\r\n          <ion-menu-toggle\r\n            auto-hide=\"false\"\r\n            *ngFor=\"let item of drapdownList; let i = index\"\r\n          >\r\n            <ion-item\r\n              *ngIf=\"item.func\"\r\n              routerDirection=\"root\"\r\n              (click)=\"item.func()\"\r\n              lines=\"none\"\r\n              detail=\"false\"\r\n              routerLinkActive=\"selected\"\r\n            >\r\n              <ion-icon\r\n                slot=\"start\"\r\n                [name]=\"item.icon ? item.icon : 'link-outline'\"\r\n              ></ion-icon>\r\n              <ion-label>{{ item.title }}</ion-label>\r\n            </ion-item>\r\n            <ion-item\r\n              *ngIf=\"item.url\"\r\n              routerDirection=\"root\"\r\n              [routerLink]=\"item.url\"\r\n              lines=\"none\"\r\n              detail=\"false\"\r\n              routerLinkActive=\"selected\"\r\n            >\r\n              <ion-icon\r\n                slot=\"start\"\r\n                [name]=\"item.icon ? item.icon : 'link-outline'\"\r\n              ></ion-icon>\r\n              <ion-label>{{ item.title }}</ion-label>\r\n            </ion-item>\r\n          </ion-menu-toggle>\r\n        </ion-list>\r\n      </ion-content>\r\n    </ion-menu>\r\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\r\n  </ion-split-pane>\r\n</ion-app>\r\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map