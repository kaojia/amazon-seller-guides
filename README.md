# 亞馬遜賣家經營指導手冊

台灣賣家開站用的單頁式經營手冊（純靜態 HTML，內含即時搜尋、身分／階段篩選、進度勾選、互動小工具），目前涵蓋澳洲站、中東站、日本站與歐洲站。

## 🔗 線上網址

| 頁面 | 網址 |
|---|---|
| 🏠 總入口（選站頁） | https://kaojia.github.io/amazon-seller-guides/ |
| 🇦🇺 澳洲站手冊 | https://kaojia.github.io/amazon-seller-guides/au-seller-guide/ |
| 🌐 中東站手冊（阿聯 AE／沙烏地 SA） | https://kaojia.github.io/amazon-seller-guides/mena-seller-guide/ |
| 🇯🇵 日本站手冊 | https://hsinyi94.github.io/amazon-jp-seller-guide |
| 🇪🇺 歐洲站手冊（Jenny 版） | https://kaojia.github.io/eu-guide/ （倉庫 [kaojia/eu-guide](https://github.com/kaojia/eu-guide)） |
| 🇪🇺 歐洲站手冊（Eddie 版） | https://eddiechu1009-bit.github.io/amazon-eu-seller-guide/ |

各站頁首皆有「切換站點」按鈕可互相跳轉，並可「🏠 回到目錄」返回總入口。

> 註：日本站與 Eddie 版歐洲站手冊由其他帳號的獨立倉庫部署，本倉庫僅在目錄與切換列連結過去；該兩站頁面本身是否有「回到目錄」連結，需由各自倉庫維護者加入。Jenny 版歐洲站（kaojia/eu-guide）已內建切換列。

## 🔀 歐洲站連結依 `?am=` 參數切換

總入口的「歐洲站」卡片會依網址參數 `am`（客戶經理代號）連到對應的歐洲站手冊，其他站點連結不受影響。

| 發給賣家的連結 | 歐洲站卡片連到 |
|---|---|
| https://kaojia.github.io/amazon-seller-guides/?am=jenny | Jenny 版 |
| https://kaojia.github.io/amazon-seller-guides/?am=eddie | Eddie 版 |
| 不帶參數，或代號不在對照表內 | 預設（目前為 Eddie 版） |

- 對照表集中在共用檔 `assets/eu-guides.js` 的 `EU_GUIDES` 物件，portal 預設值為 `EU_DEFAULT`；portal 與澳洲／中東手冊都載入這支檔案。
- **新增人員**：只要在 `EU_GUIDES` 加一行 `代號: '歐洲站網址',`（代號用小寫英文，比對時不分大小寫）。修改後把各頁 `eu-guides.js?v=1` 的版本號 +1 以破快取。
- **代號會跟著賣家走**：portal 點澳洲／中東站時自動帶上目前代號（不帶參數時帶預設值）；澳洲／中東手冊依代號決定「🇪🇺 前往歐洲站」與「🏠 回到目錄」的目標，互相切換時也會帶著代號。直接開澳洲／中東手冊（無參數）時預設為 `jenny`。
- 連結標記方式：`data-eu` = 換成對應的歐洲站網址；`data-am-pass` = 在原連結加上 `?am=代號`。
- 參數只用來比對對照表，不在表內就用預設值，不會插入頁面內容。
- Jenny 版歐洲站（kaojia/eu-guide）的「🏠 回到目錄」固定連到 `?am=jenny`；Eddie 版沒有切換列，賣家需用瀏覽器「上一頁」返回。

## 📦 內容涵蓋

- **澳洲站**：註冊 KYC、四大成本、GST 10%、品牌授權、跨站搬遷、FBA 與棧板 ISPM-15、VINE 計畫、新品冷啟動、全年促銷檔期、企業購 B2B
- **中東站**：註冊 KYC、稅務（AE 5%／SA 15% VAT）、品牌、上架、FBA、大促檔期

## 🛠 技術

- 每份手冊為單一 `index.html`，內嵌 CSS 與原生 JavaScript，無需後端或建置流程
- 進度勾選儲存在瀏覽器 localStorage（每個裝置／瀏覽器獨立，不跨裝置同步）
- 由 GitHub Pages 部署（`main` 分支根目錄）

## ✏️ 更新方式

1. 編輯對應的 `index.html`
2. 執行：
   ```bash
   git add .
   git commit -m "update"
   git push
   ```
3. 約 1 分鐘後 GitHub Pages 自動重新部署（瀏覽器 Ctrl+F5 強制刷新）

## ⚠️ 免責聲明

本手冊為亞馬遜客戶經理為輔導客戶額外整理之參考資料，不代表亞馬遜官方立場，亦不構成法律、稅務或合規意見。所有費率、優惠、大促日期與法規時程請以賣家後台、官方公告及當地主管機關最新公告為準。
