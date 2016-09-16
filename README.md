[WIP] mnpk sphere
===========

## これはなに

[Ricoh Theta S](https://theta360.com/ja/about/theta/s.html)で撮影した全天球イメージをいい感じに表示するためのViewerです。
[まんぷく！のブログ](https://mnpk.jp/)で記事内に表示するために作りました。

## 使い方(イメージ)

```html
<script src="mnpk-sphere.js"></script>

...

<div class="mnpk-sphere-image" data-url="./img/sample.jpg" data-width="500" data-height="375"></div>
```

## 作り方

```sh
$ npm install

$ # run watchでファイルを監視してコンパイルしてくれる
$ npm run watch

$ # startでhttpサーバが起動する
$ npm start
$ # => http://127.0.0.1:8080 みたいな

```

`npm run watch` と `npm run server` は別々のターミナルで動かすとGoodです。

