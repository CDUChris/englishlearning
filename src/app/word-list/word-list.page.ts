import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-word-list',
  templateUrl: './word-list.page.html',
  styleUrls: ['./word-list.page.scss'],
})
export class WordListPage implements OnInit {

  wordsList = [
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
  ]

  constructor() { }

  ngOnInit() {
  }

}
