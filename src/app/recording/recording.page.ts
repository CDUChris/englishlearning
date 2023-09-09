import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { PageBase } from "../app.page";
import { AppStore } from "../app.store";
import { ActivatedRoute } from "@angular/router";
import { NavController } from "@ionic/angular";
import { similar } from "../utils/string";
import { ToastController } from "@ionic/angular";
import { LoadingController } from "@ionic/angular";
import { getDownloadURL, getStorage, ref } from "@firebase/storage";
import { Location } from "@angular/common";
import { SpeechRecognition } from "@awesome-cordova-plugins/speech-recognition/ngx";

@Component({
  selector: "app-recording",
  templateUrl: "./recording.page.html",
  styleUrls: ["./recording.page.scss"],
})
export class RecordingPage extends PageBase implements OnInit {
  public conversation: any = {};

  isPlaying = false;
  isRecording = false;
  recordScore = null;
  recognition = new (window as any).webkitSpeechRecognition();
  recognitionResult = "";

  constructor(
    private activatedRoute: ActivatedRoute,
    protected appStore: AppStore,
    protected navCtrl: NavController,
    public route: ActivatedRoute,
    private toastController: ToastController,
    private loadingController: LoadingController,
    private cdf: ChangeDetectorRef,
    public location: Location,
    private speechRecognition: SpeechRecognition,
  ) {
    super(appStore, navCtrl, route);
    this.compare = debounce(this.compare, 3000) as any;
  }

  async ngOnInit() {
    const toast = await this.toastController.create({
      message: `语音识别huanjingjiange111`,
      duration: 1500,
      position: "middle",
    });
    await toast.present();
    

    const title = this.activatedRoute.snapshot.paramMap.get("title");
    const name = this.activatedRoute.snapshot.paramMap.get("name");
    if (title) {
      this.fetchConversationDetail();
    } else {
      this.fetchSentenceDetail();
    }
    this.recognition.continuous = true;
    this.recognition.onend = async () => {
      const str = this.recognitionResult;
      this.recognitionResult = "";
      await this.showLoading();
      await this.compare(str);
    };
    this.recognition.onresult = (event) => {
      for (var i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          this.recognitionResult += event.results[i][0].transcript;
        }
      }
    };
  }
  async fetchConversationDetail() {
    const storage = getStorage();
    const mp3Ref = ref(
      storage,
      "conversations/" +
        this.activatedRoute.snapshot.paramMap.get("title") +
        "/" +
        this.activatedRoute.snapshot.paramMap.get("title") +
        ".mp3"
    );
    const wordRef = ref(
      storage,
      "conversations/" +
        this.activatedRoute.snapshot.paramMap.get("title") +
        "/" +
        this.activatedRoute.snapshot.paramMap.get("title") +
        ".txt"
    );
    try {
      const [mp3Url, wordsUrl] = await Promise.all([
        getDownloadURL(mp3Ref),
        getDownloadURL(wordRef),
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
            text: (reader.result as any).split("\n"),
          };
        };
      };
      xhr.open("GET", wordsUrl.toString());
      xhr.send();
    } catch (error) {
      const toast = await this.toastController.create({
        message: "加载失败，请重试!",
        duration: 1500,
        position: "middle",
      });
      await toast.present();
    }
  }

  async fetchSentenceDetail() {
    const storage = getStorage();
    const wordRef = ref(
      storage,
      "sentence/" + this.activatedRoute.snapshot.paramMap.get("name")
    );
    try {
      const wordsUrl = await getDownloadURL(wordRef);
      const xhr = new XMLHttpRequest();
      xhr.responseType = "blob";
      xhr.onload = (event) => {
        const blob = xhr.response;
        var reader = new FileReader();
        reader.readAsText(blob, "utf-8");
        reader.onload = () => {
          this.conversation = {
            title: this.activatedRoute.snapshot.paramMap.get("name"),
            text: (reader.result as any).split("\n"),
          };
        };
      };
      xhr.open("GET", wordsUrl.toString());
      xhr.send();
    } catch (error) {
      const toast = await this.toastController.create({
        message: "加载失败，请重试!",
        duration: 1500,
        position: "middle",
      });
      await toast.present();
    }
  }

  async showLoading() {
    const loading = await this.loadingController.create({
      message: "Calculating...",
    });

    await loading.present();
  }
  async hideLoading() {
    await this.loadingController.dismiss();
  }
  play() {
    this.isPlaying = !this.isPlaying;
    const audio: any = document.getElementById("audio");
    if (this.isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
  }

  async record() {
    this.isRecording = !this.isRecording;
    if (this.isRecording) {
      this.recognition.start();
    } else {
      this.recognition.stop();
    }
  }
  async compare(text) {
    const compareResult = similar(
      text,
      this.conversation.text.filter((cur, index) => index % 2).join(""),
      null
    );
    await this.hideLoading();
    const _num = Number(compareResult * 100).toFixed(0);
    const toast = await this.toastController.create({
      message: "The score is :" + _num + " Keep Going!",
      duration: 5000,
      position: "middle",
    });
    await toast.present();
    this.recordScore = _num;
    this.cdf.markForCheck(); // 进行标注
    this.cdf.detectChanges(); // 要多加一行这个 执行一次变化检测
  }
  onBack() {
    this.location.back();
  }
}

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
