# 表單切換效果1: 註冊、登錄與忘記密碼的切換與卡片交換動畫

## 展示
1. [展示](https://idben.github.io/form_switch_01/)

## 主要分支
1. 使用純 HTML、CSS 和 JS 撰寫

## 分支 react
1. 主要分支的 react 版本
2. 主要控制寫在 index，再把狀態與 function 傳到各組件中使用

## 有使用到 next 的部份

首先，啟動開發伺服器：

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

用瀏覽器開啟 [http://localhost:3000](http://localhost:3000) 查看結果。

你可以開始編輯 `pages/index.js`. 來修改頁面。檔案在修改後會自動更新頁面。

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) 可以透過 [http://localhost:3000/api/hello](http://localhost:3000/api/hello)存取。 你可以在`pages/api/hello.js`中編輯這個端點。

`pages/api` 目錄會對應到  `/api/*`。這個目錄下的檔案會被視為 [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes)，而不是 React 頁面。

這個專案使用 [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) 自動優化並載入 [Geist](https://vercel.com/font)，Vercel 推出的新字型家族。