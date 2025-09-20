// 年份
document.getElementById('year')?.append(new Date().getFullYear());

// Navbar active（根據目前頁面）
const path = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.navbar .nav-link').forEach(a=>{
  const href = a.getAttribute('href');
  if (href === path) a.classList.add('active');
});

// Back to top
const backBtn = document.getElementById('backToTop');
const onScroll = () => {
  if (window.scrollY > 300) backBtn?.classList.add('show');
  else backBtn?.classList.remove('show');
};
window.addEventListener('scroll', onScroll);
backBtn?.addEventListener('click', ()=>window.scrollTo({top:0, behavior:'smooth'}));

// Contact form 前端驗證與送出提示
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', function (e) {
    // Bootstrap style 驗證
    if (!form.checkValidity()) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      // 若是使用 Formspree (POST)，可以不阻止提交，並於成功後顯示訊息
      // 目前 mailto 方案無法攔截成功回傳，只做視覺提示
      const alert = document.getElementById('formAlert');
      alert?.classList.remove('d-none');
      // 若使用 Formspree：請改為 fetch 提交
      // e.preventDefault();
      // fetch('https://formspree.io/f/YOUR_FORMSPREE_ID', {
      //   method: 'POST',
      //   headers: { 'Accept': 'application/json' },
      //   body: new FormData(form)
      // }).then(()=> alert?.classList.remove('d-none'));
    }
    form.classList.add('was-validated');
  }, false);
}
