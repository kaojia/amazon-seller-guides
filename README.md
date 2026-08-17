# 亞馬遜賣家經營指導手冊

台灣賣家開站用的單頁式經營手冊（純靜態 HTML，內含即時搜尋、身分／階段篩選、進度勾選、互動小工具），目前涵蓋澳洲站與中東站。

## 🔗 線上網址

| 頁面 | 網址 |
|---|---|
| 🏠 總入口（選站頁） | https://kaojia.github.io/amazon-seller-guides/ |
| 🇦🇺 澳洲站手冊 | https://kaojia.github.io/amazon-seller-guides/au-seller-guide/ |
| 🌐 中東站手冊（阿聯 AE／沙烏地 SA） | https://kaojia.github.io/amazon-seller-guides/mena-seller-guide/ |

兩站頁首皆有「切換站點」按鈕可互相跳轉。

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
