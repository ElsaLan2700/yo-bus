# Yo!Bus

## 作品說明

YoBus全台公車動態時刻查詢應用服務，為YoTaiwan系列網站。提供縣市與公車路線查詢功能。並可點擊連結導向全台觀光景點頁面，一覽島嶼各地風光。

團隊在設計與開發的前期需求討論下了許多努力。考量製作符合F2E每週主題的網站需在短時間內做到最大程度的開發，我們在第一週的網站設計便決定將這三週的挑戰：包含全台景點、自行車與公車做成一個系列網站，除了設計風格一致外，網站之間更可互相連結，增加網站間互相轉換率。

設計風格：延續YoTaiwan所要傳達的「輕鬆、雀躍」意象，我們採用了YoTaiwan設計三原色的粉色作為主色，並將其餘兩色粉藍及粉黃作為輔助色。希望帶給使用者親切活潑的形象。

## 系統說明

專案運行方式是使用 `yarn install`、`yarn start`，並 deploy 到 github page 上。

## 資料夾說明

```
├── public
└── src
    ├── apis           （api放置處）
    ├── components     （元件資料夾）
    │   ├── BusInfoPage  （頁面元件資料夾）
    │   ├── Common       （共用元件資料夾）
    │   └── HomePage     （頁面元件資料夾）
    ├── css            （css檔案）
    ├── images         （圖片資料夾）
    │   ├── icon         （icon圖片資料夾）
    │   └── image        （網頁圖片資料夾）
    ├── pages          （SPA頁面）
    └── utils          （共用腳本）
```

## 使用技術

- Create React App
- Axios
- React、React hooks
- React Leaflet
- Navigator.geolocation
