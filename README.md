# OUTSIDER GAME

アウトサイダーゲームというその場で遊べるパーティーゲームのアプリです。転職用のポートフォリオとして作成しました。


![アウトサイダーゲーム ](https://i.gyazo.com/04ac50303906ab33084687d98b887a2c.png)

### ルールボタンを押していただければ、ルールを参照できます。

![ルール説明 ](https://i.gyazo.com/a41d7994f7c0936327a790bd17a7161b.png)
![ルール説明２ ](https://gyazo.com/f75189721f9f0167b456a45453e1a553.png)

## 実装内容

* STARTボタン押していただければ、ゲーム開始です。
* 参加するプレイヤー人数とテーマを決めます。
* 他のプレイヤーには見せずに、自分だけお題を確認します。
* 全員が確認し終わった後、NEXTボタンで次に進みます。
* 制限時間３分の話し合いが終わり次第、リザルト画面へを押していただき結果発表となります。

## 特に見ていただきたい部分

* JavaScriptとjQueryを使い、お題表示や参加人数の非同期通信を行えるようにした。
* カウントダウンタイマーを実装しました。
* 全員がお題を見終わると、事故を防ぐためボタンを押せない工夫をしています。

## 使用技術

### サーバーサイド：

* ruby '2.6.3'


### フロントエンド：

* HTML
* CSS

* javaScript
* jQuery

## 機能一覧

* 参加人数選択機能
* テーマ選択機能
* ランダムテーマ機能
* アウトサイダーのランダム表示機能
* カウントダウンタイマー機能