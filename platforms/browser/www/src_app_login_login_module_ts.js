"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_login_login_module_ts"],{

/***/ 45393:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 66825);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 80107:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 45393);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 66825);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 66825:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page.html?ngResource */ 41729);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 87047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.config */ 49670);
/* harmony import */ var _app_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.page */ 75162);
/* harmony import */ var _app_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.store */ 94827);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/compat/auth */ 5873);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/auth */ 61577);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/auth */ 23628);
/* harmony import */ var _utils_fbui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/fbui */ 26260);












let LoginPage = class LoginPage extends _app_page__WEBPACK_IMPORTED_MODULE_3__.PageBase {
    constructor(appStore, navCtrl, route, auth) {
        super(appStore, navCtrl, route);
        this.appStore = appStore;
        this.navCtrl = navCtrl;
        this.route = route;
        this.auth = auth;
        this.form = {
            phone: '+61450431269',
            code: '',
        };
    }
    ngOnInit() { }
    ionViewWillEnter() {
        (0,_utils_fbui__WEBPACK_IMPORTED_MODULE_5__.firebaseUIInit)('#loginContainer', this);
    }
    onLoginUserinfo(user) {
        this.doLogin(user.phoneNumber, user, '11111111111111');
    }
    onSignIn() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (this.form.phone == '1234') {
                this.mockLogin();
                return;
            }
            if (!this.confirmationResult) {
                alert('Please click send sms');
                return;
            }
            let code = this.form.code;
            code = code.replace(/\s+/gi, '');
            if (code.length < 6) {
                alert('Input valid value');
                return;
            }
            try {
                const userCred = yield this.confirmationResult.confirm(code);
                if (userCred == null) {
                    this.confirmationResult = null;
                    alert('sign in fail');
                    return;
                }
                const userCredClone = this.copy(userCred);
                console.log('userCredClone', this.json(userCredClone));
                this.doLogin(this.form.phone, userCredClone.user, userCredClone.credential);
            }
            catch (e) {
                this.confirmationResult = null;
                alert(e.toString());
            }
        });
    }
    onTest() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const str = '{"uid":"ea67mwX9s6Mkff2zZupS1JACyz92","emailVerified":false,"isAnonymous":false,"phoneNumber":"+61481778483","providerData":[{"providerId":"phone","uid":"+61481778483","displayName":null,"email":null,"phoneNumber":"+61481778483","photoURL":null}],"stsTokenManager":{"refreshToken":"AOEOulZ_P33ZQOlSrySuSgVHKZqI2Ofn-w4yoKX3ohahdTrKMJlxWbYnOrNWXiBj1YqfDSHmtvZNTBq0YJxGQwUqjEVr3nNFxA4vkzmWPBa5twwqGXsMp3F6Npi0sY7jDlRBnm5N5BOH0hQJ-z6CWV9Wky_eEOzOKQs4DN6wSe9jxSarOSVmMEZ50_wryTayXNaKX7STNG7wHoo-Wkv1V5YfwAhZi-By0A","accessToken":"eyJhbGciOiJSUzI1NiIsImtpZCI6IjVkMzQwZGRiYzNjNWJhY2M0Y2VlMWZiOWQxNmU5ODM3ZWM2MTYzZWIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vbWFuZGFyaW5nYXRoZXJpbmctZDkxZDQiLCJhdWQiOiJtYW5kYXJpbmdhdGhlcmluZy1kOTFkNCIsImF1dGhfdGltZSI6MTY2NTk5NTYxMiwidXNlcl9pZCI6ImVhNjdtd1g5czZNa2ZmMnpadXBTMUpBQ3l6OTIiLCJzdWIiOiJlYTY3bXdYOXM2TWtmZjJ6WnVwUzFKQUN5ejkyIiwiaWF0IjoxNjY1OTk1NjEyLCJleHAiOjE2NjU5OTkyMTIsInBob25lX251bWJlciI6Iis2MTQ4MTc3ODQ4MyIsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsicGhvbmUiOlsiKzYxNDgxNzc4NDgzIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGhvbmUifX0.xtoyiPLx4VDLCWarKAdTs8raU3JiFmkdR1USe__O2TckYXIQrZurYqkPow4csYesQ6TE0NiG3NUSreMNqerXwUctP3IRHmweIMbdGskv-CNrgWTC6Pb94fLgiK5yerMgjbA8-md6rpzzRgyiRgfeD_ePXMR7OqBaI8fQ3kL3OTrTprSmcK2e7mXVnxo0jT0SP38rYVoY4hMxLXMWDIfRsTgZGi3HynjutOGDc_l8cUitY0CZnLoMZoDuSlOSk78gPJ_wiFgR2Tk6kZzpsncV7gghtYMrqpKyqbIpXBlWg2nUWxO49Zpp_8oosucmi27XGNzFfp__Jvkhl5c28UXI5A","expirationTime":1665999212267},"createdAt":"1665290970828","lastLoginAt":"1665995611990","apiKey":"AIzaSyDhuDC4kWZvwrpr-3ueD5qRCvlufpy6z2I","appName":"[DEFAULT]"}';
            const user = JSON.parse(str);
            console.log(user);
            this.doLogin(this.form.phone, user, '#11111111');
        });
    }
    onSendSMS() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            let phone = this.form.phone;
            phone = phone.replace(/\s+/gi, '');
            if (phone.length < 4) {
                alert('Please input valid value');
                return;
            }
            if (phone == '1234') {
                this.mockLogin();
                return;
            }
            const auth = (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__.getAuth)();
            const recaptchaVerifier = new _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__.RecaptchaVerifier('signInMessage', {
                size: 'invisible',
                callback: (response) => {
                    console.log('sign in response:', this.json(response));
                },
            }, auth);
            try {
                this.confirmationResult = yield this.auth.signInWithPhoneNumber(phone, recaptchaVerifier);
            }
            catch (e) {
                this.confirmationResult = null;
                alert(e.toString());
            }
        });
    }
    doLogin(phone, user, credential) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (credential) {
                yield _app_config__WEBPACK_IMPORTED_MODULE_2__.AppConfig.setSessToken({ token: credential.toString() });
            }
            user = this.copy(user);
            yield _app_config__WEBPACK_IMPORTED_MODULE_2__.AppConfig.setSession(user);
            yield _app_config__WEBPACK_IMPORTED_MODULE_2__.AppConfig.set('loginAccount', phone);
            console.log('#aabb', user);
            this.appStore.update((state) => ({
                sess: _app_config__WEBPACK_IMPORTED_MODULE_2__.AppConfig.$session,
                isLogin: _app_config__WEBPACK_IMPORTED_MODULE_2__.AppConfig.isLogin(),
            }));
            console.log('#3333');
            this.hrefReplace('/folder/Inbox');
            yield this.toast('Successful');
        });
    }
    mockLogin() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.doLogin('123456789123', { uid: '1234' }, '11111111111111');
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _app_store__WEBPACK_IMPORTED_MODULE_4__.AppStore },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute },
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_11__.AngularFireAuth }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-login',
        template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 26260:
/*!*******************************!*\
  !*** ./src/app/utils/fbui.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleSignedInUser": () => (/* binding */ handleSignedInUser),
/* harmony export */   "handleSignedOutUser": () => (/* binding */ handleSignedOutUser),
/* harmony export */   "firebaseUIInit": () => (/* binding */ firebaseUIInit)
/* harmony export */ });
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/compat/app */ 8427);
/* harmony import */ var firebaseui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebaseui */ 3175);


let oberserve = null;
function getUiConfig() {
    return {
        callbacks: {
            // Called when the user has been successfully signed in.
            signInSuccessWithAuthResult: function (authResult, redirectUrl) {
                if (authResult.user) {
                    handleSignedInUser(authResult.user);
                }
                if (authResult.additionalUserInfo) {
                    document.getElementById('is-new-user').textContent = authResult
                        .additionalUserInfo.isNewUser
                        ? 'New User'
                        : 'Existing User';
                }
                // Do not redirect.
                return false;
            },
        },
        // Opens IDP Providers sign-in flow in a popup.
        signInFlow: 'popup',
        signInOptions: [
            {
                provider: firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth.PhoneAuthProvider.PROVIDER_ID,
                defaultCountry: 'AU',
                recaptchaParameters: {
                    size: 'invisible',
                },
            },
        ],
        // Terms of service url.
        tosUrl: 'https://www.google.com',
        // Privacy policy url.
        privacyPolicyUrl: 'https://www.google.com',
        credentialHelper: firebaseui__WEBPACK_IMPORTED_MODULE_1__.auth.CredentialHelper.NONE,
    };
}
// Initialize the FirebaseUI Widget using Firebase.
const ui = new firebaseui__WEBPACK_IMPORTED_MODULE_1__.auth.AuthUI(firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth());
ui.disableAutoSignIn();
/**
 * Displays the UI for a signed in user.
 * @param {!firebase.User} user
 */
const handleSignedInUser = (user) => {
    console.log('login', JSON.stringify(user));
    if (user && oberserve && oberserve.onLoginUserinfo) {
        oberserve.onLoginUserinfo(user);
    }
    /// .........
};
/**
 * Displays the UI for a signed out user.
 */
const handleSignedOutUser = () => {
    // console.log('logout');
    // ...
};
// Listen to change in auth state so it displays the correct UI for when
// the user is signed in or not.
firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth().onAuthStateChanged((user) => {
    // document.getElementById('loading').style.display = 'none';
    // document.getElementById('loaded').style.display = 'block';
    user ? handleSignedInUser(user) : handleSignedOutUser();
});
/**
 * Handles when the user changes the reCAPTCHA, email signInMethod or email
 * disableSignUp config.
 */
function handleConfigChange() {
    console.log('config change...');
    ui.reset();
    ui.start('#firebaseui-container', getUiConfig());
}
/**
 * Initializes the app.
 */
const firebaseUIInit = (container, ob) => {
    ui.start(container, getUiConfig());
    oberserve = ob;
};


/***/ }),

/***/ 87047:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = ".inner-toolbar {\n  position: absolute;\n  top: 12px;\n  left: 0;\n  width: auto !important;\n  --background: none !important;\n  --background-color: transparent !important;\n}\n.inner-toolbar .toolbar-container {\n  width: auto !important;\n}\n.inner-toolbar .inner-buttons {\n  color: rgba(255, 255, 255, 0.6);\n  padding: 0 14px 0 6px;\n  margin-left: 12px;\n  border-radius: 100px;\n}\n.form {\n  margin: 100px auto;\n  background-color: #e0fde7;\n  border-radius: 5px;\n  padding: 15px;\n  width: 80%;\n}\n.form .tit {\n  margin-top: 10px;\n  font-size: 18px;\n  color: #333;\n  margin-bottom: 20px;\n  text-align: center;\n}\n.form .name, .form .psd {\n  margin-bottom: 15px;\n}\n.form .label {\n  width: 80px;\n  font-size: 14px;\n}\n.form input {\n  font-size: 12px;\n  padding-left: 10px;\n  border-radius: 3px;\n  border: 1px solid #ccc;\n  height: 32px;\n  line-height: 32px;\n}\n.form .btn {\n  width: 100%;\n  text-align: center;\n  border-radius: 50px;\n  color: #fff;\n  font-size: 14px;\n  line-height: 40px;\n  margin-bottom: 30px;\n  margin-top: 30px;\n  background-image: linear-gradient(45deg, rgba(255, 69, 22, 0.925), #ff9900);\n}\n.form .zc {\n  text-align: right;\n  color: #00f;\n  text-decoration: underline;\n  font-size: 12px;\n}\n#signInMessage {\n  color: red;\n}\nion-input {\n  border-bottom: 1px solid #d2d2d2;\n}\n.sms-btn {\n  margin-left: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxzQkFBQTtFQU1BLDZCQUFBO0VBQ0EsMENBQUE7QUFKRjtBQURFO0VBQ0Usc0JBQUE7QUFHSjtBQUdFO0VBQ0UsK0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFESjtBQVVBO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7QUFQRjtBQVFFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFOSjtBQVFFO0VBQ0UsbUJBQUE7QUFOSjtBQVFFO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUFOSjtBQVFFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQU5KO0FBUUU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkVBQUE7QUFOSjtBQVFFO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0FBTko7QUFVQTtFQUNFLFVBQUE7QUFQRjtBQVVBO0VBQ0UsZ0NBQUE7QUFQRjtBQVVBO0VBQ0UsaUJBQUE7QUFQRiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5uZXItdG9vbGJhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMnB4O1xuICBsZWZ0OiAwO1xuICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xuXG4gIC50b29sYmFyLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgfVxuXG4gIC0tYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG5cbiAgLmlubmVyLWJ1dHRvbnMge1xuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG4gICAgcGFkZGluZzogMCAxNHB4IDAgNnB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICB9XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLy8gLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2JnLmpwZyk7XG4gIC8vIC0tYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmZvcm0ge1xuICBtYXJnaW46IDEwMHB4IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGZkZTc7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMTVweDtcbiAgd2lkdGg6IDgwJTtcbiAgLnRpdHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBjb2xvcjogIzMzMztcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAubmFtZSwucHNke1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIH1cbiAgLmxhYmVse1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuICBpbnB1dHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGhlaWdodDogMzJweDtcbiAgICBsaW5lLWhlaWdodDogMzJweDtcbiAgfVxuICAuYnRuIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiYSgyNTUsIDY5LCAyMiwgMC45MjUpLCAjZmY5OTAwKTtcbiAgfVxuICAuemN7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgY29sb3I6ICMwMGY7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG59XG5cbiNzaWduSW5NZXNzYWdlIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuaW9uLWlucHV0IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkMmQyZDI7XG59XG5cbi5zbXMtYnRuIHtcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XG59Il19 */";

/***/ }),

/***/ 41729:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <ion-toolbar class=\"inner-toolbar\">\n    <ion-buttons class=\"inner-buttons\" slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title></ion-title>\n  </ion-toolbar>\n  \n  <!--div class=\"form\">\n    <div class=\"tit\"></div>\n    <div class=\"name flex\">\n      <ion-input class=\"flex-1\" [(ngModel)]=\"form.phone\" placeholder=\"Phone number\" type=\"text\"></ion-input>\n    </div>\n    <div class=\"psd flex\">\n      <ion-input class=\"flex-1\" type=\"text\" placeholder=\"Sms code\" [(ngModel)]=\"form.code\"></ion-input>\n      <ion-button class=\"sms-btn\" type=\"button\" (click)=\"onSendSMS()\">Send SMS</ion-button>\n    </div>\n    <div id=\"signInMessage\"></div>\n    <div class=\"btn\" (click)=\"onTest()\">Sign in</div>\n  </div-->\n\n  <div id=\"loginContainer\">--</div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map