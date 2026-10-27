const lessons = [
  { id: 'greetings', skill: 'vocabulary', title: 'Chào hỏi lần đầu', category: 'Giao tiếp', description: 'Bắt đầu cuộc trò chuyện và giới thiệu bản thân.', duration: 5, icon: '☀', color: '#f4ead9', words: [{ word: 'hello', pronunciation: '/həˈləʊ/', translation: 'xin chào' }, { word: 'nice', pronunciation: '/naɪs/', translation: 'vui, tốt đẹp' }, { word: 'meet', pronunciation: '/miːt/', translation: 'gặp gỡ' }] },
  { id: 'daily-routine', skill: 'vocabulary', title: 'Một ngày của tôi', category: 'Từ vựng', description: 'Kể về những hoạt động quen thuộc mỗi ngày.', duration: 5, icon: '◷', color: '#e9eedf', words: [{ word: 'wake up', pronunciation: '/weɪk ʌp/', translation: 'thức dậy' }, { word: 'breakfast', pronunciation: '/ˈbrekfəst/', translation: 'bữa sáng' }, { word: 'usually', pronunciation: '/ˈjuːʒuəli/', translation: 'thường thường' }] },
  { id: 'at-a-cafe', skill: 'vocabulary', title: 'Gọi món ở quán cà phê', category: 'Giao tiếp', description: 'Gọi thức uống yêu thích một cách tự nhiên.', duration: 7, icon: '☕', color: '#f4e4dc', words: [{ word: 'coffee', pronunciation: '/ˈkɒfi/', translation: 'cà phê' }, { word: 'please', pronunciation: '/pliːz/', translation: 'làm ơn' }, { word: 'would like', pronunciation: '/wʊd laɪk/', translation: 'muốn, mong muốn' }] },
  { id: 'my-family', skill: 'vocabulary', title: 'Gia đình của tôi', category: 'Từ vựng', description: 'Gọi tên các thành viên trong gia đình.', duration: 5, icon: '♡', color: '#f5e5e9', words: [{ word: 'family', pronunciation: '/ˈfæməli/', translation: 'gia đình' }, { word: 'sister', pronunciation: '/ˈsɪstə(r)/', translation: 'chị/em gái' }, { word: 'together', pronunciation: '/təˈɡeðə(r)/', translation: 'cùng nhau' }] },
  { id: 'simple-present', skill: 'grammar', title: 'Thói quen mỗi ngày', category: 'Ngữ pháp', description: 'Làm quen với thì hiện tại đơn thật dễ hiểu.', duration: 8, icon: '↻', color: '#e4e9f2', grammar: { title: 'Thì hiện tại đơn', rule: 'Dùng để nói về thói quen hoặc sự thật. Với I/you/we/they, dùng động từ nguyên mẫu. Với he/she/it, thêm -s hoặc -es.', example: 'I study English every day. — Tôi học tiếng Anh mỗi ngày.' }, exercises: [{ type: 'choice', prompt: 'She ___ English every day.', choices: ['study', 'studies', 'studying'], correct: 1 }, { type: 'text', prompt: 'Điền dạng đúng của động từ: I ___ (study) English every day.', answer: 'study', hint: 'Với chủ ngữ “I”, dùng động từ nguyên mẫu.' }, { type: 'choice', prompt: 'They ___ to school every morning.', choices: ['go', 'goes', 'going'], correct: 0 }], words: [{ word: 'every day', pronunciation: '/ˈevri deɪ/', translation: 'mỗi ngày' }, { word: 'study', pronunciation: '/ˈstʌdi/', translation: 'học tập' }, { word: 'work', pronunciation: '/wɜːk/', translation: 'làm việc' }] },
  { id: 'in-the-city', skill: 'vocabulary', title: 'Hỏi đường trong thành phố', category: 'Giao tiếp', description: 'Hỏi và hiểu những chỉ dẫn đường cơ bản.', duration: 6, icon: '⌖', color: '#e5eee9', words: [{ word: 'where', pronunciation: '/weə(r)/', translation: 'ở đâu' }, { word: 'street', pronunciation: '/striːt/', translation: 'con phố' }, { word: 'near', pronunciation: '/nɪə(r)/', translation: 'gần' }] },
  { id: 'translation-intro', skill: 'translation', title: 'Câu giao tiếp đơn giản', category: 'Dịch câu', description: 'Luyện dịch những câu chào hỏi và giới thiệu bản thân.', duration: 5, icon: '⇄', color: '#e9eee4', exercises: [{ type: 'text', prompt: 'Xin chào, tôi là Lan.', answers: ['Hello, I am Lan.', "Hello, I'm Lan."], hint: 'Có thể dùng “I am” hoặc dạng rút gọn “I’m”.' }, { type: 'text', prompt: 'Rất vui được gặp bạn.', answer: 'Nice to meet you.', hint: 'Cụm “nice to meet you” nghĩa là rất vui được gặp bạn.' }, { type: 'text', prompt: 'Tên tôi là Minh.', answer: 'My name is Minh.', hint: 'Bắt đầu bằng “My name is...”.' }] },
  { id: 'translation-routine', skill: 'translation', title: 'Thói quen hằng ngày', category: 'Dịch câu', description: 'Dịch câu ngắn về học tập và sinh hoạt.', duration: 6, icon: '◷', color: '#f4ead9', exercises: [{ type: 'text', prompt: 'Tôi học tiếng Anh mỗi ngày.', answer: 'I study English every day.', hint: 'Gợi ý: “study” là học, “every day” là mỗi ngày.' }, { type: 'text', prompt: 'Cô ấy thức dậy lúc bảy giờ.', answer: 'She wakes up at seven o’clock.', hint: 'Với “she”, động từ “wake” thêm -s.' }, { type: 'text', prompt: 'Chúng tôi ăn sáng cùng nhau.', answer: 'We have breakfast together.', hint: '“Ăn sáng” thường nói là “have breakfast”.' }] },
  { id: 'translation-cafe', skill: 'translation', title: 'Ở quán cà phê', category: 'Dịch câu', description: 'Thực hành dịch lời gọi món lịch sự.', duration: 6, icon: '☕', color: '#f4e4dc', exercises: [{ type: 'text', prompt: 'Làm ơn cho tôi một ly cà phê.', answer: 'A coffee, please.', hint: 'Gợi ý: kết thúc lời yêu cầu bằng “please”.' }, { type: 'text', prompt: 'Tôi muốn một tách trà.', answer: 'I would like a cup of tea.', hint: 'Dùng “I would like...” để gọi món lịch sự.' }, { type: 'text', prompt: 'Bạn có nước cam không?', answer: 'Do you have orange juice?', hint: 'Câu hỏi này bắt đầu bằng “Do you have...?”' }] }
];

const storageKey = 'english-garden-progress-v1';
let activeSkill = null;
let activeExercises = [];
let activeExerciseIndex = 0;
let exerciseScore = 0;
let exerciseChecked = false;
let exerciseFinished = false;
let progress = loadProgress();
const branches = {
  vocabulary: { title: 'Học từ vựng', eyebrow: 'NHÁNH 01 · TỪ VỰNG', description: 'Học từ mới theo chủ đề, kèm cách phát âm và nghĩa tiếng Việt.' },
  grammar: { title: 'Rèn ngữ pháp', eyebrow: 'NHÁNH 02 · NGỮ PHÁP', description: 'Nắm quy tắc ngữ pháp cơ bản qua giải thích và bài tập.' },
  translation: { title: 'Tập dịch', eyebrow: 'NHÁNH 03 · DỊCH CÂU', description: 'Tự dịch câu tiếng Việt sang tiếng Anh và kiểm tra đáp án.' }
};

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
    const matchesFilter = lesson.skill === activeSkill;
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

document.querySelector('#lesson-grid').addEventListener('click', (event) => {
  const button = event.target.closest('[data-lesson-id]');
  if (!button) return;

  window.location.hash = `lesson/${button.dataset.lessonId}`;
});

document.querySelector('#lesson-search').addEventListener('input', renderLessons);

function renderLessonDetail(lesson) {
  document.querySelector('#detail-category').textContent = `${lesson.category} · BÀI HỌC CƠ BẢN`;
  document.querySelector('#detail-title').textContent = lesson.title;
  document.querySelector('#detail-description').textContent = lesson.description;
  document.querySelector('#detail-back').href = `#section/${lesson.skill}`;
  const isTranslation = lesson.skill === 'translation';
  const isGrammar = lesson.skill === 'grammar';
  document.querySelector('.detail-words').hidden = isTranslation || isGrammar;
  document.querySelector('#detail-quiz').hidden = false;
  document.querySelector('#grammar-explanation').hidden = !isGrammar;
  document.querySelector('#detail-word-count').textContent = isTranslation
    ? `${lesson.duration} phút · Luyện dịch`
    : isGrammar
      ? `${lesson.duration} phút · Ngữ pháp`
      : `${lesson.words.length} từ mới · ${lesson.duration} phút`;
  document.querySelector('#detail-word-grid').innerHTML = (lesson.words || []).map((word, index) => `
    <article class="detail-word-card">
      <div class="detail-word-top"><span class="detail-word-index">0${index + 1}</span><button class="word-speak" type="button" data-word-index="${index}" aria-label="Nghe phát âm ${word.word}">◖))) Nghe</button></div>
      <h3>${word.word}</h3>
      <p class="detail-pronunciation">${word.pronunciation}</p>
      <p class="detail-translation">${word.translation}</p>
      <p class="word-speech-status" role="status" aria-live="polite"></p>
    </article>
  `).join('');

  if (isGrammar) {
    document.querySelector('#grammar-title').textContent = lesson.grammar.title;
    document.querySelector('#grammar-rule').textContent = lesson.grammar.rule;
    document.querySelector('#grammar-example').textContent = lesson.grammar.example;
  }

  activeExercises = getExercises(lesson);
  activeExerciseIndex = 0;
  exerciseScore = 0;
  exerciseChecked = false;
  exerciseFinished = false;
  renderExercise();

  const completed = progress.completed.includes(lesson.id);
  document.querySelector('#detail-completion-status').textContent = completed ? 'Bạn đã hoàn thành bài học này. Có thể ôn lại bất cứ lúc nào.' : '';
  const completionButton = document.querySelector('#complete-lesson');
  completionButton.disabled = completed;
  completionButton.innerHTML = completed ? 'Đã hoàn thành <span aria-hidden="true">✓</span>' : 'Đánh dấu hoàn thành <span aria-hidden="true">✓</span>';
}

function getExercises(lesson) {
  if (lesson.exercises) return lesson.exercises;
  return lesson.words.map((word, index) => index === 1
    ? { type: 'text', prompt: `Hãy viết từ tiếng Anh có nghĩa là “${word.translation}”.`, answer: word.word }
    : {
        type: 'choice',
        prompt: `Từ nào có nghĩa là “${word.translation}”?`,
        choices: lesson.words.map((item) => item.word),
        correct: index
      });
}

function renderExercise() {
  const exercise = activeExercises[activeExerciseIndex];
  if (!exercise) return;

  const isText = exercise.type === 'text';
  const answerList = document.querySelector('#detail-answer-list');
  const textAnswer = document.querySelector('#exercise-text-answer');
  const feedback = document.querySelector('#detail-feedback');
  const submit = document.querySelector('#exercise-submit');
  document.querySelector('#exercise-number').textContent = `${String(activeExerciseIndex + 1).padStart(2, '0')} / ${String(activeExercises.length).padStart(2, '0')}`;
  document.querySelector('#exercise-type').textContent = exercise.type === 'text'
    ? (activeSkill === 'translation' ? 'DỊCH SANG TIẾNG ANH' : 'ĐIỀN TỪ CÒN THIẾU')
    : activeSkill === 'grammar' ? 'CHỌN ĐÁP ÁN ĐÚNG' : 'ÔN TẬP TỪ VỰNG';
  document.querySelector('#detail-question').textContent = exercise.prompt;
  answerList.hidden = isText;
  answerList.innerHTML = isText ? '' : `
    <legend class="sr-only">Chọn một đáp án</legend>
    ${exercise.choices.map((choice, index) => `
      <label class="answer-option"><input type="radio" name="lesson-answer" value="${index}"><span class="answer-letter">${String.fromCharCode(65 + index)}</span><span>${choice}</span></label>
    `).join('')}
  `;
  textAnswer.hidden = !isText;
  textAnswer.value = '';
  textAnswer.placeholder = activeSkill === 'translation' ? 'Nhập câu dịch tiếng Anh...' : 'Nhập từ còn thiếu...';
  document.querySelector('#exercise-hint').textContent = '';
  feedback.textContent = '';
  feedback.classList.remove('error');
  submit.innerHTML = 'Kiểm tra <span aria-hidden="true">→</span>';
  submit.hidden = false;
  exerciseChecked = false;
  exerciseFinished = false;
}

function normalizeAnswer(value) {
  return value.trim().toLocaleLowerCase('en').replace(/[.!?]+$/, '').replace(/\s+/g, ' ');
}

function renderRoute() {
  const hash = window.location.hash;
  const lessonMatch = hash.match(/^#lesson\/([a-z0-9-]+)$/);
  const branchMatch = hash.match(/^#section\/(vocabulary|grammar|translation)$/);
  const lesson = lessonMatch && lessons.find((item) => item.id === lessonMatch[1]);
  const detail = document.querySelector('#lesson-detail');
  const learningSection = document.querySelector('#lessons');
  const homeSections = document.querySelectorAll('#home > .home-section');

  if (lesson) {
    activeSkill = lesson.skill;
    homeSections.forEach((section) => { section.hidden = true; });
    learningSection.hidden = true;
    detail.hidden = false;
    renderLessonDetail(lesson);
    window.scrollTo(0, 0);
    document.querySelectorAll('.nav-link').forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#section/${lesson.skill}`));
    return;
  }

  if (branchMatch) {
    activeSkill = branchMatch[1];
    const branch = branches[activeSkill];
    homeSections.forEach((section) => { section.hidden = true; });
    detail.hidden = true;
    learningSection.hidden = false;
    document.querySelector('#branch-eyebrow').textContent = branch.eyebrow;
    document.querySelector('#lessons-title').textContent = branch.title;
    document.querySelector('#branch-description').textContent = branch.description;
    document.querySelector('#lesson-search').value = '';
    renderLessons();
    window.scrollTo(0, 0);
    document.querySelectorAll('.nav-link').forEach((link) => link.classList.toggle('active', link.getAttribute('href') === hash));
    return;
  }

  activeSkill = null;
  learningSection.hidden = true;
  detail.hidden = true;
  homeSections.forEach((section) => { section.hidden = false; });
  document.querySelectorAll('.nav-link').forEach((link) => link.classList.toggle('active', link.getAttribute('href') === (hash || '#home')));
  requestAnimationFrame(() => {
    const target = hash && document.querySelector(hash);
    if (target) target.scrollIntoView();
  });
}

document.querySelector('#detail-word-grid').addEventListener('click', (event) => {
  const button = event.target.closest('[data-word-index]');
  if (!button) return;

  const lessonId = window.location.hash.match(/^#lesson\/([a-z0-9-]+)$/)?.[1];
  const lesson = lessons.find((item) => item.id === lessonId);
  if (!lesson) return;

  const status = button.closest('.detail-word-card').querySelector('.word-speech-status');
  if (!('speechSynthesis' in window)) {
    status.textContent = 'Trình duyệt này chưa hỗ trợ phát âm tự động.';
    return;
  }

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(lesson.words[Number(button.dataset.wordIndex)].word);
  utterance.lang = 'en-GB';
  utterance.rate = 0.85;
  utterance.onerror = () => { status.textContent = 'Không phát được âm thanh. Bạn hãy thử lại nhé.'; };
  window.speechSynthesis.speak(utterance);
  status.textContent = 'Đang phát âm...';
});

document.querySelector('#detail-quiz').addEventListener('submit', (event) => {
  event.preventDefault();
  const feedback = document.querySelector('#detail-feedback');
  const exercise = activeExercises[activeExerciseIndex];
  if (!exercise) return;

  if (exerciseFinished) {
    activeExerciseIndex = 0;
    exerciseScore = 0;
    renderExercise();
    return;
  }

  if (exerciseChecked) {
    if (activeExerciseIndex === activeExercises.length - 1) {
      exerciseFinished = true;
      document.querySelector('#exercise-number').textContent = 'HOÀN TẤT';
      document.querySelector('#exercise-type').textContent = 'KẾT QUẢ LUYỆN TẬP';
      document.querySelector('#detail-question').textContent = `Bạn trả lời đúng ${exerciseScore}/${activeExercises.length} câu.`;
      document.querySelector('#detail-answer-list').hidden = true;
      document.querySelector('#exercise-text-answer').hidden = true;
      document.querySelector('#exercise-hint').textContent = 'Bạn có thể làm lại lượt bài tập hoặc đánh dấu bài học hoàn thành.';
      feedback.textContent = 'Làm tốt lắm! Hãy tiếp tục luyện tập nhé.';
      document.querySelector('#exercise-submit').innerHTML = 'Làm lại bài tập <span aria-hidden="true">↻</span>';
      return;
    }

    activeExerciseIndex += 1;
    renderExercise();
    return;
  }

  const selected = new FormData(event.currentTarget).get('lesson-answer');
  const typed = document.querySelector('#exercise-text-answer').value;
  if ((exercise.type === 'text' && !typed.trim()) || (exercise.type === 'choice' && selected === null)) {
    feedback.textContent = 'Bạn hãy trả lời câu hỏi trước nhé.';
    feedback.classList.add('error');
    return;
  }

  const correct = exercise.type === 'text'
    ? (exercise.answers || [exercise.answer]).some((answer) => normalizeAnswer(typed) === normalizeAnswer(answer))
    : Number(selected) === exercise.correct;
  if (correct) exerciseScore += 1;
  feedback.textContent = correct
    ? 'Chính xác! Bạn làm tốt lắm.'
    : `Chưa đúng rồi. Đáp án tham khảo: ${exercise.type === 'text' ? exercise.answer : exercise.choices[exercise.correct]}.`;
  feedback.classList.toggle('error', !correct);
  document.querySelector('#exercise-hint').textContent = exercise.hint || '';
  document.querySelector('#exercise-submit').innerHTML = activeExerciseIndex === activeExercises.length - 1
    ? 'Xem kết quả <span aria-hidden="true">→</span>'
    : 'Câu tiếp theo <span aria-hidden="true">→</span>';
  exerciseChecked = true;
});

document.querySelector('#complete-lesson').addEventListener('click', () => {
  const lessonId = window.location.hash.match(/^#lesson\/([a-z0-9-]+)$/)?.[1];
  const lesson = lessons.find((item) => item.id === lessonId);
  if (!lesson || progress.completed.includes(lesson.id)) return;

  progress.completed.push(lesson.id);
  saveProgress();
  updateProgress();
  renderLessons();
  renderLessonDetail(lesson);
  document.querySelector('#detail-completion-status').textContent = `Đã hoàn thành bài “${lesson.title}”. Giỏi lắm!`;
});

updateProgress();
window.addEventListener('hashchange', renderRoute);
renderRoute();
