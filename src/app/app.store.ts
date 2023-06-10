import { Store, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';

export interface AppState {
  sess: any;
  isLogin: boolean;
  lang: string;
  debug: boolean;
  conversations: Array<any>;
}

export function createInitialState(): AppState {
  return {
    sess: null,
    isLogin: false,
    lang: 'en',
    debug: true,
    conversations: [
      {
        title: 'Bussiness dinner 1/晚餐 .mp3',
        path: '../../assets/mp3/conversation/英语听力 - 第四章 商务会餐 4.1.mp3',
        text: ["说话人1 00:00", "Welcome mister sun.", "说话人2 00:02", "Thank you for your entertaining me.", "说话人1 00:04", "Today I invite you to enjoy the seafood. Please make yourself at home.", "说话人2 00:09", "Excuse me, what business are you looking after in German?", "说话人1 00:12", "I am running Chinese arts and crafts.", "说话人2 00:16", "What arts and crafts are you interested in this time?", "说话人1 00:18", "I hope to import some silk from Hangzhou to Germany. Can you help me?","说话人2 00:23","Sure, I'll certainly help you do it."]
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

@Injectable({
  providedIn: 'root',
})
@StoreConfig({ name: 'app_state' })
export class AppStore extends Store<AppState> {
  constructor() {
    super(createInitialState());
  }
}


