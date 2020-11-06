# 復刻 Trello
主要實作以下功能
- 會員功能
- List
  - 新增修改刪除
  - 可拖拉
- Card
  - 新增修改刪除
  - 可跨 List 拖拉
- 即時互動功能  
  同帳號不同瀏覽器,修改同時可見效果

## 開發
- 系統
  - Ruby 2.6.0
  - Rails 6.0.3.4
- 資料庫: PostgreSQL
- 原始碼管理: GitHub  

## 使用套件及第三方服務
- 會員功能: [Devise](https://github.com/heartcombo/devise)
- CSS Framework: [Tailwind CSS](https://tailwindcss.com/)
- JavaScript Framework: [Vue.js](https://stimulusjs.org)
- 管理 Procfile 套件: [foreman](https://github.com/ddollar/foreman)
  - 執行 web server
  - 開發時執行 webpack-dev-server
- icon: [font awesome](https://fontawesome.com/)
- 即時互動功能: [Action Cable](https://guides.rubyonrails.org/action_cable_overview.html)
  - 底層是使用[WebSocket](https://zh.wikipedia.org/wiki/WebSocket)傳輸協定

## 執行方式  
1. 將整個專案clone到本機
1. 執行`$ foreman start`
1. `localhost:4000`瀏覽網頁
