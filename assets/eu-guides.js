// 歐洲站手冊對照表（portal 與澳洲／中東手冊共用）；新增人員只要在 EU_GUIDES 加一行
var EU_GUIDES = {
  jenny: 'https://kaojia.github.io/eu-guide/',
  eddie: 'https://eddiechu1009-bit.github.io/amazon-eu-seller-guide/'
};
var EU_DEFAULT = 'eddie';

// 依 ?am= 決定代號（只接受對照表內的值，否則用 fallback），
// 再把 [data-eu] 連到對應歐洲站、[data-am-pass] 連結帶上 ?am= 讓代號跟著賣家走
function applyEuGuide(fallback) {
  var am = (new URLSearchParams(location.search).get('am') || '').toLowerCase();
  var key = Object.prototype.hasOwnProperty.call(EU_GUIDES, am) ? am : fallback;
  document.querySelectorAll('[data-eu]').forEach(function (a) { a.href = EU_GUIDES[key]; });
  document.querySelectorAll('[data-am-pass]').forEach(function (a) {
    var u = new URL(a.getAttribute('href'), location.href);
    u.searchParams.set('am', key);
    a.href = u.href;
  });
}
