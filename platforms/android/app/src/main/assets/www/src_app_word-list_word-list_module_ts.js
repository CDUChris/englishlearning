"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_word-list_word-list_module_ts"],{

/***/ 14148:
/*!*******************************************************!*\
  !*** ./src/app/word-list/word-list-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WordListPageRoutingModule": () => (/* binding */ WordListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _word_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./word-list.page */ 69265);




const routes = [
    {
        path: '',
        component: _word_list_page__WEBPACK_IMPORTED_MODULE_0__.WordListPage
    }
];
let WordListPageRoutingModule = class WordListPageRoutingModule {
};
WordListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], WordListPageRoutingModule);



/***/ }),

/***/ 38533:
/*!***********************************************!*\
  !*** ./src/app/word-list/word-list.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WordListPageModule": () => (/* binding */ WordListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _word_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./word-list-routing.module */ 14148);
/* harmony import */ var _word_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./word-list.page */ 69265);







let WordListPageModule = class WordListPageModule {
};
WordListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _word_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.WordListPageRoutingModule
        ],
        declarations: [_word_list_page__WEBPACK_IMPORTED_MODULE_1__.WordListPage]
    })
], WordListPageModule);



/***/ }),

/***/ 69265:
/*!*********************************************!*\
  !*** ./src/app/word-list/word-list.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WordListPage": () => (/* binding */ WordListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _word_list_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./word-list.page.html?ngResource */ 7286);
/* harmony import */ var _word_list_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./word-list.page.scss?ngResource */ 10446);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _word_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./word-list */ 46068);







let WordListPage = class WordListPage {
    constructor(location, router) {
        this.location = location;
        this.router = router;
        this.wordsList = [];
    }
    ngOnInit() {
        this.getWordListRememberStatus();
    }
    getWordListRememberStatus() {
        this.wordsList = _word_list__WEBPACK_IMPORTED_MODULE_2__.WordsList.map(WordsListItem => {
            return Object.assign(Object.assign({}, WordsListItem), { words: WordsListItem.words.map(WordsListItemWord => {
                    return Object.assign(Object.assign({}, WordsListItemWord), { remembered: localStorage.getItem(WordsListItemWord.en) });
                }) });
        });
    }
    onCheckboxChange(word, e) {
        const { en } = word;
        const { detail: { checked } } = e;
        if (checked) {
            localStorage.setItem(en, '1');
        }
        else {
            localStorage.removeItem(en);
        }
    }
    onBack() {
        // this.location.back()
        this.router.navigate(['folder/Inbox']);
    }
};
WordListPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__.Location },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
WordListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-word-list',
        template: _word_list_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_word_list_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], WordListPage);



/***/ }),

/***/ 46068:
/*!****************************************!*\
  !*** ./src/app/word-list/word-list.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WordsList": () => (/* binding */ WordsList)
/* harmony export */ });
const WordsList = [
    {
        title: 'words1',
        img: '../../assets/img/words1.png',
        words: [
            {
                "en": "doghouse",
                "cn": "犬屋"
            },
            {
                "en": "lawn mower",
                "cn": "割草机"
            },
            {
                "en": "satellite dish",
                "cn": "碟形卫星信号接受器"
            },
            {
                "en": "basketball hoop",
                "cn": "篮筐"
            },
            {
                "en": "curtain",
                "cn": "窗帘"
            },
            {
                "en": "garage",
                "cn": "车房,车库"
            },
            {
                "en": "porch",
                "cn": "入口处"
            },
            {
                "en": "driveway",
                "cn": "车库通向马路的空地"
            },
            {
                "en": "mailbox",
                "cn": "信箱"
            },
            {
                "en": "dormer",
                "cn": "屋顶窗"
            },
            {
                "en": "skylight",
                "cn": "天窗"
            },
            {
                "en": "chimney",
                "cn": "烟囱"
            },
            {
                "en": "French window",
                "cn": "落地窗"
            },
            {
                "en": "balcony",
                "cn": "阳台"
            },
            {
                "en": "venetian blind",
                "cn": "百叶窗帘"
            },
            {
                "en": "shutter",
                "cn": "百叶窗"
            },
            {
                "en": "bay window",
                "cn": "凸窗;窗台"
            },
            {
                "en": "lawn",
                "cn": "草坪,草地"
            },
            {
                "en": "shrubs",
                "cn": "灌木"
            },
            {
                "en": "sprinkler",
                "cn": "自动撒水器"
            }
        ]
    },
    {
        title: 'words2',
        img: '../../assets/img/words2.png',
        words: [
            {
                "en": "window",
                "cn": "窗户"
            },
            {
                "en": "television",
                "cn": "电视机"
            },
            {
                "en": "console",
                "cn": "主控台，控制台"
            },
            {
                "en": "chair",
                "cn": "椅子"
            },
            {
                "en": "floor",
                "cn": "地板，地面"
            },
            {
                "en": "carpet",
                "cn": "地毯"
            },
            {
                "en": "coffee table",
                "cn": "(置于沙发前的)茶几"
            },
            {
                "en": "clock",
                "cn": "钟"
            },
            {
                "en": "calendar",
                "cn": "日历"
            },
            {
                "en": "door",
                "cn": "门"
            },
            {
                "en": "light switch",
                "cn": "灯开关"
            },
            {
                "en": "bookcase",
                "cn": "书柜，书橱"
            },
            {
                "en": "throw pillow",
                "cn": "靠枕"
            },
            {
                "en": "couch",
                "cn": "沙发"
            },
            {
                "en": "lamp",
                "cn": "灯"
            },
            {
                "en": "lamp shade",
                "cn": "灯罩"
            },
            {
                "en": "wall",
                "cn": "墙"
            }
        ]
    },
    {
        title: 'words3',
        img: '../../assets/img/words3.png',
        words: [
            {
                "en": "lighter",
                "cn": "打火机"
            },
            {
                "en": "matches",
                "cn": "火柴"
            },
            {
                "en": "ashtray",
                "cn": "烟灰缸"
            },
            {
                "en": "cigarette",
                "cn": "香烟"
            },
            {
                "en": "armchair",
                "cn": "扶手椅"
            },
            {
                "en": "end table",
                "cn": "茶几"
            },
            {
                "en": "vase",
                "cn": "花瓶"
            },
            {
                "en": "telephone",
                "cn": "电话机"
            },
            {
                "en": "waste basket",
                "cn": "垃圾桶"
            },
            {
                "en": "recliner",
                "cn": "卧椅"
            },
            {
                "en": "rocking chair",
                "cn": "摇椅"
            },
            {
                "en": "air conditioner",
                "cn": "空调"
            },
            {
                "en": "vacuum cleaner",
                "cn": "吸尘器"
            }
        ]
    },
    {
        title: 'words4',
        img: '../../assets/img/words4.png',
        words: [
            {
                "en": "refrigerator",
                "cn": "冰箱"
            },
            {
                "en": "dish rack",
                "cn": "碗架"
            },
            {
                "en": "counter",
                "cn": "柜台"
            },
            {
                "en": "sink",
                "cn": "洗涤槽，水槽"
            },
            {
                "en": "wok",
                "cn": "铁锅(带把的中国炒菜锅)"
            },
            {
                "en": "pan",
                "cn": "平底锅"
            },
            {
                "en": "ladle",
                "cn": "勺子，长柄勺"
            },
            {
                "en": "gas stove",
                "cn": "煤气炉"
            },
            {
                "en": "ventilator",
                "cn": "通风机，换气扇"
            },
            {
                "en": "apron",
                "cn": "围裙，工作裙"
            },
            {
                "en": "cupboard",
                "cn": "食橱，碗柜"
            },
            {
                "en": "oven",
                "cn": "炉，灶"
            },
            {
                "en": "cabinets",
                "cn": "橱柜"
            },
            {
                "en": "dustpan",
                "cn": "簸箕"
            },
            {
                "en": "broom",
                "cn": "扫帚"
            },
            {
                "en": "mop",
                "cn": "拖把"
            },
            {
                "en": "rice cooker",
                "cn": "电饭锅"
            },
            {
                "en": "blender",
                "cn": "搅拌机，捣碎机"
            },
            {
                "en": "hot water thermos",
                "cn": "热水瓶，保温瓶"
            },
            {
                "en": "toaster",
                "cn": "烤面包器，烤炉，烤箱"
            },
            {
                "en": "cutting board",
                "cn": "砧板"
            },
            {
                "en": "knife",
                "cn": "刀，小刀，菜刀"
            },
            {
                "en": "microwave",
                "cn": "微波炉"
            }
        ]
    },
    {
        title: 'words5',
        img: '../../assets/img/words5.png',
        words: [
            {
                "en": "showerhead",
                "cn": "喷头"
            },
            {
                "en": "faucet",
                "cn": "龙头，旋塞"
            },
            {
                "en": "toilet paper",
                "cn": "厕纸，卫生纸"
            },
            {
                "en": "bathtub",
                "cn": "浴缸"
            },
            {
                "en": "drain",
                "cn": "排水管，下水道"
            },
            {
                "en": "tile",
                "cn": "瓦，瓷砖，墙砖，地砖"
            },
            {
                "en": "mirror",
                "cn": "镜子"
            },
            {
                "en": "sink",
                "cn": "洗涤槽，水槽"
            },
            {
                "en": "washcloth",
                "cn": "毛巾"
            },
            {
                "en": "cabinet",
                "cn": "橱，柜"
            },
            {
                "en": "rug",
                "cn": "小地毯，毛皮地毯"
            },
            {
                "en": "toilet",
                "cn": "厕所，洗手间，盥洗室"
            },
            {
                "en": "bath towel",
                "cn": "浴巾"
            },
            {
                "en": "reservoir",
                "cn": "蓄水库，贮水池，贮存器"
            }
        ]
    },
    {
        title: 'words6',
        img: '../../assets/img/words6.png',
        words: [
            {
                "en": "landing",
                "cn": "降落"
            },
            {
                "en": "airport shuttle bus",
                "cn": "机场穿梭巴士"
            },
            {
                "en": "ticket dispenser",
                "cn": "自动售票机"
            },
            {
                "en": "passenger",
                "cn": "乘客"
            },
            {
                "en": "currency exchange",
                "cn": "货币兑换，货币互换"
            },
            {
                "en": "check-in counter",
                "cn": "登机手续办理处"
            },
            {
                "en": "luggage",
                "cn": "行李"
            },
            {
                "en": "departure lobby",
                "cn": "出境大厅"
            },
            {
                "en": "takeoff",
                "cn": "起飞"
            },
            {
                "en": "airplane",
                "cn": "飞机"
            },
            {
                "en": "airlines",
                "cn": "(飞机的)航线"
            },
            {
                "en": "customs",
                "cn": "进口税，海关"
            },
            {
                "en": "boarding gate",
                "cn": "登机口"
            },
            {
                "en": "customs officer",
                "cn": "海关官员"
            },
            {
                "en": "duty-free shop",
                "cn": "免税商店"
            },
            {
                "en": "duty-free items",
                "cn": "免税物品"
            }
        ]
    },
];


/***/ }),

/***/ 10446:
/*!**********************************************************!*\
  !*** ./src/app/word-list/word-list.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3b3JkLWxpc3QucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 7286:
/*!**********************************************************!*\
  !*** ./src/app/word-list/word-list.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n    <ion-back-button default-href=\"#\" (click)=\"onBack()\"></ion-back-button> \n  </ion-buttons>\n    <ion-title>English Words</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-card *ngFor=\"let wordsItem of wordsList\">\n    <ion-img\n      [src]=\"wordsItem.img\"\n      alt=\"words-1\"\n      class=\"img\"\n    ></ion-img>\n    <ion-card-header>\n      <ion-card-title>{{wordsItem.title}}</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-list>\n        <ion-item>\n          <ion-label>word</ion-label>\n          <ion-label>中文翻译</ion-label>\n        </ion-item>\n        <ion-item *ngFor=\"let word of wordsItem.words\">\n          <ion-label>{{word.en}}</ion-label>\n          <ion-label>{{word.cn}}</ion-label>\n          <ion-checkbox slot=\"end\" [checked]=\"word.remembered\" (ionChange)=\"onCheckboxChange(word,$event)\"></ion-checkbox>\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_word-list_word-list_module_ts.js.map