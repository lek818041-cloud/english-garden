const lessons = [
  { id: 'greetings', title: 'Chào hỏi lần đầu', category: 'Giao tiếp', description: 'Bắt đầu cuộc trò chuyện và giới thiệu bản thân.', duration: 5, icon: '☀', color: '#f4ead9', words: [{ word: 'hello', pronunciation: '/həˈləʊ/', translation: 'xin chào' }, { word: 'nice', pronunciation: '/naɪs/', translation: 'vui, tốt đẹp' }, { word: 'meet', pronunciation: '/miːt/', translation: 'gặp gỡ' }] },
  { id: 'daily-routine', title: 'Một ngày của tôi', category: 'Từ vựng', description: 'Kể về những hoạt động quen thuộc mỗi ngày.', duration: 5, icon: '◷', color: '#e9eedf', words: [{ word: 'wake up', pronunciation: '/weɪk ʌp/', translation: 'thức dậy' }, { word: 'breakfast', pronunciation: '/ˈbrekfəst/', translation: 'bữa sáng' }, { word: 'usually', pronunciation: '/ˈjuːʒuəli/', translation: 'thường thường' }] },
  { id: 'at-a-cafe', title: 'Gọi món ở quán cà phê', category: 'Giao tiếp', description: 'Gọi thức uống yêu thích một cách tự nhiên.', duration: 7, icon: '☕', color: '#f4e4dc', words: [{ word: 'coffee', pronunciation: '/ˈkɒfi/', translation: 'cà phê' }, { word: 'please', pronunciation: '/pliːz/', translation: 'làm ơn' }, { word: 'would like', pronunciation: '/wʊd laɪk/', translation: 'muốn, mong muốn' }] },
  { id: 'my-family', title: 'Gia đình của tôi', category: 'Từ vựng', description: 'Gọi tên các thành viên trong gia đình.', duration: 5, icon: '♡', color: '#f5e5e9', words: [{ word: 'family', pronunciation: '/ˈfæməli/', translation: 'gia đình' }, { word: 'sister', pronunciation: '/ˈsɪstə(r)/', translation: 'chị/em gái' }, { word: 'together', pronunciation: '/təˈɡeðə(r)/', translation: 'cùng nhau' }] },
  { id: 'simple-present', title: 'Thói quen mỗi ngày', category: 'Ngữ pháp', description: 'Làm quen với thì hiện tại đơn thật dễ hiểu.', duration: 8, icon: '↻', color: '#e4e9f2', words: [{ word: 'every day', pronunciation: '/ˈevri deɪ/', translation: 'mỗi ngày' }, { word: 'work', pronunciation: '/wɜːk/', translation: 'làm việc' }, { word: 'study', pronunciation: '/ˈstʌdi/', translation: 'học tập' }] },
  { id: 'in-the-city', title: 'Hỏi đường trong thành phố', category: 'Giao tiếp', description: 'Hỏi và hiểu những chỉ dẫn đường cơ bản.', duration: 6, icon: '⌖', color: '#e5eee9', words: [{ word: 'where', pronunciation: '/weə(r)/', translation: 'ở đâu' }, { word: 'street', pronunciation: '/striːt/', translation: 'con phố' }, { word: 'near', pronunciation: '/nɪə(r)/', translation: 'gần' }] }
];

const initialWord = { word: 'grow', pronunciation: '/ɡrəʊ/', translation: 'phát triển · lớn lên' };
const storageKey = 'english-garden-progress-v1';
let selectedFilter = 'all';
let activeLessonId = null;
let activeWordIndex = 0;
let progress = loadProgress();

function loadProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || '{}');
    const completed = Array.isArray(saved.completed)
      ? saved.completed.filter((id) => lessons.some((lesson) => lesson.id === id))
      : [];
    return { completed: [...new Set(completed)] };
  } catch (error) {
    console.error('Could not load saved learning progress.', error);
    return { completed: [] };
  }
}

function saveProgress() {
  try {
    localStorage.setItem(storageKey, JSON.stringify(progress));
  } catch (error) {
    console.error('Could not save learning progress.', error);
  }
}

function updateProgress() {
  const count = progress.completed.length;
  const percent = Math.round((count / lessons.length) * 100);
  document.querySelector('#completed-count').textContent = String(count);
  document.querySelector('#progress-label').textContent = `${percent}%`;
  document.querySelector('#progress-fill').style.width = `${percent}%`;
  document.querySelector('.progress-track').setAttribute('aria-valuenow', String(percent));
}

function renderLessons() {
  const query = document.querySelector('#lesson-search').value.trim().toLocaleLowerCase('vi');
  const filtered = lessons.filter((lesson) => {
    const matchesFilter = selectedFilter === 'all' || lesson.category === selectedFilter;
    const matchesQuery = `${lesson.title} ${lesson.category} ${lesson.description}`.toLocaleLowerCase('vi').includes(query);
    return matchesFilter && matchesQuery;
  });

  document.querySelector('#lesson-grid').innerHTML = filtered.map((lesson) => {
    const completed = progress.completed.includes(lesson.id);
    return `<article class="lesson-card${completed ? ' completed' : ''}">
      <div class="lesson-card-top"><span class="lesson-category">${lesson.category}</span><span class="lesson-icon" style="background:${lesson.color}" aria-hidden="true">${lesson.icon}</span></div>
      <h3>${lesson.title}</h3>
      <p>${lesson.description}</p>
      <div class="lesson-card-bottom"><span class="lesson-duration">${lesson.duration} phút · Cơ bản</span><button class="lesson-start" type="button" data-lesson-id="${lesson.id}">${completed ? 'Ôn lại' : 'Bắt đầu'} <span aria-hidden="true">→</span></button></div>
    </article>`;
  }).join('');
  document.querySelector('#empty-state').hidden = filtered.length > 0;
}

function showWord(word) {
  document.querySelector('#flash-word').textContent = word.word;
  document.querySelector('#flash-pronunciation').textContent = word.pronunciation;
  document.querySelector('#flash-translation').textContent = word.translation;
  document.querySelector('#speech-status').textContent = '';
}

function updateLessonCard() {
  renderLessons();
}

document.querySelector('#lesson-grid').addEventListener('click', (event) => {
  const button = event.target.closest('[data-lesson-id]');
  if (!button) return;

  activeLessonId = button.dataset.lessonId;
  activeWordIndex = 0;
  const lesson = lessons.find((item) => item.id === activeLessonId);
  showWord(lesson.words[activeWordIndex]);
  document.querySelector('#next-word').textContent = lesson.words.length > 1 ? 'Từ tiếp theo →' : 'Đánh dấu hoàn thành →';
  document.querySelector('#practice').scrollIntoView({ behavior: 'smooth' });
});

document.querySelectorAll('.filter-button').forEach((button) => {
  button.addEventListener('click', () => {
    selectedFilter = button.dataset.filter;
    document.querySelectorAll('.filter-button').forEach((filterButton) => {
      const selected = filterButton === button;
      filterButton.classList.toggle('selected', selected);
      filterButton.setAttribute('aria-pressed', String(selected));
    });
    renderLessons();
  });
});

document.querySelector('#lesson-search').addEventListener('input', renderLessons);

document.querySelector('#next-word').addEventListener('click', () => {
  if (!activeLessonId) {
    const word = document.querySelector('#flash-word').textContent;
    const allWords = [initialWord, ...lessons.flatMap((lesson) => lesson.words)];
    const currentIndex = allWords.findIndex((item) => item.word === word);
    showWord(allWords[(currentIndex + 1) % allWords.length]);
    return;
  }

  const lesson = lessons.find((item) => item.id === activeLessonId);
  activeWordIndex += 1;
  if (activeWordIndex < lesson.words.length) {
    showWord(lesson.words[activeWordIndex]);
    return;
  }

  if (!progress.completed.includes(lesson.id)) {
    progress.completed.push(lesson.id);
    saveProgress();
    updateProgress();
    updateLessonCard();
    document.querySelector('#speech-status').textContent = `Đã hoàn thành bài “${lesson.title}”. Giỏi lắm!`;
  }
  activeLessonId = null;
  activeWordIndex = 0;
  document.querySelector('#next-word').textContent = 'Từ tiếp theo →';
});

document.querySelector('#speak-button').addEventListener('click', () => {
  const word = document.querySelector('#flash-word').textContent;
  const status = document.querySelector('#speech-status');
  if (!('speechSynthesis' in window)) {
    status.textContent = 'Trình duyệt này chưa hỗ trợ phát âm tự động.';
    return;
  }

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = 'en-GB';
  utterance.rate = 0.85;
  utterance.onerror = () => {
    status.textContent = 'Không phát được âm thanh. Bạn hãy thử lại nhé.';
  };
  window.speechSynthesis.speak(utterance);
  status.textContent = 'Đang phát âm...';
});

document.querySelector('#quiz-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const feedback = document.querySelector('#quiz-feedback');
  const answer = new FormData(event.currentTarget).get('answer');
  feedback.classList.remove('error');

  if (!answer) {
    feedback.textContent = 'Bạn hãy chọn một đáp án nhé.';
    feedback.classList.add('error');
    return;
  }

  if (answer === 'grow') {
    feedback.textContent = 'Chính xác! “Grow” nghĩa là lớn lên.';
  } else {
    feedback.textContent = 'Chưa đúng rồi. Đáp án là “grow” — lớn lên.';
    feedback.classList.add('error');
  }
});

renderLessons();
updateProgress();
