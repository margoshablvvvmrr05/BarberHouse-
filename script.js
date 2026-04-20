 ===== ДАНІ (БД на стороні клієнта) =====
const services = [
  { id1, cat'Стрижка', name'Класична стрижка', desc'Стрижка ножицями або машинкою в класичному стилі', dur'45 хв', price350 },
  { id2, cat'Стрижка', name'Fade стрижка', desc'Плавний перехід від коротких до довших волосин', dur'60 хв', price450 },
  { id3, cat'Стрижка', name'Стрижка машинкою', desc'Рівна стрижка по всій довжині', dur'35 хв', price280 },
  { id4, cat'Стрижка', name'Дитяча стрижка', desc'Для хлопчиків до 12 років, з особливим підходом', dur'30 хв', price220 },
  { id5, cat'Стрижка', name'Чоловіча модельна', desc'Авторська стрижка з урахуванням типу обличчя', dur'75 хв', price550 },
  { id6, cat'Борода', name'Оформлення бороди', desc'Підстригання та формування контурів бороди', dur'30 хв', price250 },
  { id7, cat'Борода', name'Гоління небезпечною бритвою', desc'Класичне королівське гоління з теплим рушником', dur'45 хв', price380 },
  { id8, cat'Борода', name'Trimming бороди', desc'Підрівнювання бороди машинкою без оформлення', dur'20 хв', price180 },
  { id9, cat'Догляд', name'Мийка голови + укладка', desc'Шампунь, кондиціонер, фен і стайлінг', dur'30 хв', price200 },
  { id10, cat'Догляд', name'Маска для волосся', desc'Живильна маска для відновлення структури волосся', dur'20 хв', price220 },
  { id11, cat'Догляд', name'Тонування бороди', desc'Фарбування або відновлення кольору бороди', dur'40 хв', price350 },
  { id12, cat'Догляд', name'Скраб для голови', desc'Глибоке очищення шкіри голови', dur'25 хв', price280 },
  { id13, cat'Комбо', name'Стрижка + Борода', desc'Класична стрижка та оформлення бороди', dur'75 хв', price550 },
  { id14, cat'Комбо', name'Стрижка + Укладка', desc'Стрижка ножицями та стайлінг на виході', dur'60 хв', price480 },
  { id15, cat'Комбо', name'VIP-пакет', desc'Стрижка + борода + маска + скраб голови', dur'120 хв', price950 },
];

const reviews = [
  { name'Олексій Петренко', init'ОП', rating5, text'Давно шукав свого барбера і нарешті знайшов. Дмитро — справжній майстер своєї справи.', date'12 квіт. 2025', service'Fade стрижка' },
  { name'Михайло Ковальчук', init'МК', rating5, text'Чудова атмосфера, чисто, стильно. Підходжу вже рік, жодного разу не був розчарований.', date'8 квіт. 2025', service'Стрижка + Борода' },
  { name'Сергій Бондар', init'СБ', rating5, text'Записався онлайн, прийшов точно вчасно — все ідеально. Майстер порекомендував стиль.', date'5 квіт. 2025', service'Модельна стрижка' },
  { name'Андрій Мартиненко', init'АМ', rating4, text'Хороший рівень сервісу. Гоління небезпечною бритвою — це взагалі окремий вид задоволення.', date'29 бер. 2025', service'Гоління бритвою' },
  { name'Роман Шевченко', init'РШ', rating5, text'VIP-пакет — це топ! Займає 2 години, але воно того варте. Виходиш як новий чоловік.', date'22 бер. 2025', service'VIP-пакет' },
  { name'Іван Кравченко', init'ІК', rating5, text'Привів сина на першу стрижку — хлопці були дуже уважні і терплячі. Дитяча стрижка пройшла без сліз.', date'15 бер. 2025', service'Дитяча стрижка' }
];

const galleryItems = [
  { cat'cuts', label'Класична стрижка', num'I' }, { cat'cuts', label'Fade Low', num'II' },
  { cat'beard', label'Повна борода', num'III' }, { cat'style', label'Тестурна укладка', num'IV' },
  { cat'cuts', label'Crew Cut', num'V' }, { cat'beard', label'Stubble борода', num'VI' },
  { cat'style', label'Слік-бек', num'VII' }, { cat'cuts', label'Fade High', num'VIII' },
  { cat'beard', label'Підведення контуру', num'IX' }, { cat'style', label'Матова укладка', num'X' },
  { cat'cuts', label'Scissor Cut', num'XI' }, { cat'beard', label'Королівське гоління', num'XII' },
];

 ===== СТАН =====
let cart = {};
let cartTotal = 0;

 ===== НАВІГАЦІЯ (SPA) =====
function showPage(pageId, linkEl) {
  document.querySelectorAll('.page').forEach(p = p.classList.remove('active'));
  document.getElementById('page-' + pageId).classList.add('active');
  document.querySelectorAll('.nav-links a').forEach(a = a.classList.remove('active'));
  if (linkEl) linkEl.classList.add('active');
  window.scrollTo({ top 0, behavior 'smooth' });
}

 ===== ПРОГРЕС СКРОЛУ =====
window.addEventListener('scroll', () = {
  const el = document.documentElement;
  const pct = (el.scrollTop  (el.scrollHeight - el.clientHeight))  100;
  document.getElementById('scrollLine').style.width = pct + '%';
  document.getElementById('mainNav').classList.toggle('scrolled', el.scrollTop  20);
});

 ===== АНІМАЦІЯ ЛІЧИЛЬНИКІВ =====
function animateCounter(id, target, suffix) {
  const el = document.getElementById(id);
  let start = 0; const dur = 1500;
  const step = () = {
    start += Math.ceil(target  (dur  16));
    if (start = target) { el.textContent = target + (suffix  ''); return; }
    el.textContent = start + (suffix  '');
    requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}
setTimeout(() = {
  animateCounter('cnt1', 2400, '+');
  animateCounter('cnt2', 6, '');
  animateCounter('cnt3', 15, '');
  animateCounter('cnt4', 8, '');
}, 400);

 ===== РЕНДЕР ВІДГУКІВ =====
function renderHomeReviews() {
  const container = document.getElementById('homeReviews');
  container.innerHTML = reviews.slice(0,3).map(r = `
    div class=review-card
      div class=stars${'★'.repeat(r.rating)}${'☆'.repeat(5-r.rating)}div
      p class=review-text${r.text}p
      div class=review-author
        div class=author-avatar${r.init}div
        div
          div class=author-name${r.name}div
          div class=author-date${r.date} · ${r.service}div
        div
      div
    div
  `).join('');
}
renderHomeReviews();

function renderAllReviews() {
  document.getElementById('allReviewsGrid').innerHTML = reviews.map(r = `
    div class=review-card
      div class=stars${'★'.repeat(r.rating)}${'☆'.repeat(5-r.rating)}div
      p class=review-text${r.text}p
      div class=review-author
        div class=author-avatar${r.init}div
        div
          div class=author-name${r.name}div
          div class=author-date${r.date} · ${r.service}div
        div
      div
    div
  `).join('');

  const counts = {50,40,30,20,10};
  reviews.forEach(r = counts[r.rating]++);
  const total = reviews.length;
  document.getElementById('ratingBreakdown').innerHTML = [5,4,3,2,1].map(n = `
    div style=displayflex;align-itemscenter;gap0.8rem;margin-bottom0.5rem
      span style=font-size0.8rem;width16px${n}span
      span style=colorvar(--accent);font-size0.8rem★span
      div style=width200px;height6px;backgroundvar(--border);border-radius3px
        div style=width${Math.round((counts[n]total)100)}%;height100%;backgroundvar(--accent);border-radius3pxdiv
      div
      span style=font-size0.78rem;colorvar(--gray)${counts[n]}span
    div
  `).join('');
}
renderAllReviews();

 ===== РЕНДЕР ПОСЛУГ ТА КАЛЬКУЛЯТОР =====
function renderServices() {
  const list = document.getElementById('servicesList');
  list.innerHTML = services.map((s, i) = `
    div class=service-row data-cat=${s.cat} id=svc-${s.id}
      span class=service-index${String(i+1).padStart(2,'0')}span
      div class=service-info
        span class=service-cat-badge${s.cat}span
        div class=service-name${s.name}div
        div class=service-desc${s.desc}div
      div
      span class=service-dur⏱ ${s.dur}span
      span class=service-price₴${s.price}span
      button class=service-add id=btn-${s.id} onclick=toggleService(${s.id}) title=Додати до кошика+button
    div
  `).join('');
}
renderServices();

function filterServices(cat, el) {
  document.querySelectorAll('.filter-row .filter-btn').forEach(b = b.classList.remove('active'));
  el.classList.add('active');
  document.querySelectorAll('.service-row').forEach(row = {
    row.classList.toggle('hidden', cat !== 'all' && row.dataset.cat !== cat);
  });
}

function toggleService(id) {
  const svc = services.find(s = s.id === id);
  const btn = document.getElementById('btn-' + id);
  if (cart[id]) {
    delete cart[id];
    btn.textContent = '+';
    btn.classList.remove('selected');
  } else {
    cart[id] = svc;
    btn.textContent = '✓';
    btn.classList.add('selected');
  }
  updateCart();
}

function updateCart() {
  const ids = Object.keys(cart);
  cartTotal = ids.reduce((sum, id) = sum + cart[id].price, 0);
  document.getElementById('cartCount').textContent = ids.length;
  document.getElementById('cartTotalDisplay').textContent = '₴' + cartTotal;
  document.getElementById('calcTotal').textContent = '₴' + cartTotal;
  document.getElementById('cartStrip').classList.toggle('visible', ids.length  0);
}

function clearCart() {
  Object.keys(cart).forEach(id = {
    cart[id] = null;
    const btn = document.getElementById('btn-' + id);
    if (btn) { btn.textContent = '+'; btn.classList.remove('selected'); }
  });
  cart = {}; updateCart();
}

 Заповнення селекту у формі
const sel = document.getElementById('serviceSelect');
services.forEach(s = {
  const opt = document.createElement('option');
  opt.value = s.id;
  opt.textContent = `${s.name} — ₴${s.price}`;
  sel.appendChild(opt);
});

 ===== ГАЛЕРЕЯ =====
function renderGallery(filter) {
  const grid = document.getElementById('galleryGrid');
  const filtered = filter === 'all'  galleryItems  galleryItems.filter(g = g.cat === filter);
  grid.innerHTML = filtered.map(g = `
    div class=gallery-item style=aspect-ratio1;backgroundvar(--cream);displayflex;align-itemscenter;justify-contentcenter;positionrelative;overflowhidden;cursorpointer onclick=showToast('${g.label}')
      div class=gallery-inner style=displayflex;flex-directioncolumn;align-itemscenter;justify-contentcenter;width100%;height100%;transitiontransform 0.4s
        span style=font-familyvar(--serif);font-size4rem;font-weight300;opacity0.1;line-height1${g.num}span
        span style=font-size0.72rem;letter-spacing0.1em;text-transformuppercase;colorvar(--gray);opacity0.7;margin-top0.5rem${g.label}span
      div
      div class=gallery-overlayspanПереглянутиspandiv
    div
  `).join('');
}
function filterGallery(cat, el) {
  document.querySelectorAll('#page-gallery .filter-btn').forEach(b = b.classList.remove('active'));
  el.classList.add('active');
  renderGallery(cat);
}
renderGallery('all');

 ===== ФОРМА =====
function submitForm() {
  const name = document.getElementById('nameInput').value.trim();
  const phone = document.getElementById('phoneInput').value.trim();
  if (!name) { showToast('Введіть ваше ім'я'); document.getElementById('nameInput').focus(); return; }
  if (!phone) { showToast('Введіть номер телефону'); document.getElementById('phoneInput').focus(); return; }
  
  document.getElementById('successName').textContent = name;
  document.getElementById('successPhone').textContent = phone;
  document.getElementById('bookingForm').style.opacity = '0.3';
  document.getElementById('bookingForm').style.pointerEvents = 'none';
  document.getElementById('formSuccess').classList.add('visible');
  showToast('✓ Заявку успішно надіслано!');
}

 ===== СПОВІЩЕННЯ (TOAST) =====
let toastTimer;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() = t.classList.remove('show'), 2800);
}

 Обмеження дати у формі (не можна вибрати минулу)
const today = new Date().toISOString().split('T')[0];
document.getElementById('dateInput').min = today;
document.getElementById('dateInput').value = today;