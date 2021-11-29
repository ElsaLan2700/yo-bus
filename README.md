# Yo!Bus

## 作品說明

The F2E 全台公車動態時刻查詢應用服務，提供縣市與公車路線查詢功能。並可點擊連結導向全台觀光景點頁面，一覽島嶼各地風光。

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
