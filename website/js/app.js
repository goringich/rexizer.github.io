let tg = window.Telegram.WebApp;

if (tg.initDataUnsafe.user.id) {
  tg.expand(); 
 

} else {
  window.location.href = '/pages/404.html';
} 
