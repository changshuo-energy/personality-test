const questions = [
  {
    id: 1,
    text: "如果你成功了，你比較希望？",
    options: {
      A: "被崇拜",
      B: "被羨慕",
      C: "被需要",
      D: "不被打擾",
    },
  },
  {
    id: 2,
    text: "你會不會在心裡比較朋友？",
    options: {
      A: "一定會",
      B: "偶爾",
      C: "幾乎不",
      D: "不承認但會",
    },
  },
  {
    id: 3,
    text: "你有沒有利用過別人？",
    options: {
      A: "有，而且很合理",
      B: "有一點",
      C: "沒有",
      D: "不確定但可能有",
    },
  },
  {
    id: 4,
    text: "你更怕哪個？",
    options: {
      A: "沒錢",
      B: "被看不起",
      C: "沒人愛",
      D: "被控制",
    },
  },
  {
    id: 5,
    text: "你覺得自己善良嗎？",
    options: {
      A: "看情況",
      B: "算是",
      C: "很善良",
      D: "表面善良",
    },
  },
  {
    id: 6,
    text: "如果可以不用負責任？",
    options: {
      A: "我會更敢做事",
      B: "我會試試壞事",
      C: "不會差太多",
      D: "可能會變另一個人",
    },
  },
  {
    id: 7,
    text: "你在人群中通常？",
    options: {
      A: "帶風向",
      B: "觀察",
      C: "融入",
      D: "抽離",
    },
  },
  {
    id: 8,
    text: "你最不能接受別人說你？",
    options: {
      A: "沒用",
      B: "假",
      C: "自私",
      D: "可有可無",
    },
  },
  {
    id: 9,
    text: "你會隱藏真實想法嗎？",
    options: {
      A: "一定",
      B: "看人",
      C: "不太會",
      D: "幾乎都在演",
    },
  },
  {
    id: 10,
    text: "你覺得人際關係是？",
    options: {
      A: "資源",
      B: "必要",
      C: "情感",
      D: "消耗",
    },
  },
  {
    id: 11,
    text: "如果朋友變很成功？",
    options: {
      A: "學他",
      B: "祝福",
      C: "靠近",
      D: "疏遠",
    },
  },
  {
    id: 12,
    text: "你比較常？",
    options: {
      A: "計畫",
      B: "拖延",
      C: "配合",
      D: "亂來",
    },
  },
  {
    id: 13,
    text: "你有沒有想過「如果沒有道德」？",
    options: {
      A: "想過而且很清楚",
      B: "想過一點",
      C: "沒有",
      D: "不敢想",
    },
  },
  {
    id: 14,
    text: "你最真實的狀態是？",
    options: {
      A: "控制一切",
      B: "害怕失去",
      C: "需要認同",
      D: "不相信任何人",
    },
  },
  {
    id: 15,
    text: "如果別人看穿你？",
    options: {
      A: "無所謂",
      B: "有點不爽",
      C: "很害怕",
      D: "會否認",
    },
  },
];

const layerConfig = {
  surface: {
    questionIds: [1, 7, 10, 11],
    names: {
      A: "流量操盤手",
      B: "穩定現實派",
      C: "社交吸附體",
      D: "冷感觀察者",
    },
    lines: {
      A: "你不是跟風者，你常常是風向本身。你知道如何把場面推向你要的方向。",
      B: "你習慣把情緒收起來換成效率，對你來說，穩定比戲劇性更有價值。",
      C: "你擅長讓關係保持熱度，別人和你在一起時，會感覺被理解、被接住。",
      D: "你在外表上保持距離，不是冷漠，而是你不喜歡把底牌交出去。",
    },
  },
  inner: {
    questionIds: [2, 4, 6, 9, 12, 14],
    names: {
      A: "控制狂",
      B: "逃避者",
      C: "情感交易者",
      D: "自我懷疑者",
    },
    lines: {
      A: "你害怕失控，所以你偏好先計畫、先掌握、先預判，安全感建立在掌控感上。",
      B: "你不是懶，而是害怕失敗後的評價，所以會先退一步，讓風險離自己遠一點。",
      C: "你其實很重視互動公平，付出與回報不平衡時，你心裡會快速記帳。",
      D: "你不容易完全相信別人，也不完全相信自己，所以常常在關係裡反覆拉扯。",
    },
  },
  dark: {
    questionIds: [3, 5, 8, 13, 15],
    weight: 2,
    names: {
      A: "人際寄生型",
      B: "操控型人格",
      C: "情緒勒索者",
      D: "偽裝善良者",
    },
    lines: {
      A: "你很會借力使力，未必惡意，但關係在你手上很容易變成效率工具。",
      B: "你擅長看出他人弱點，必要時會推動情勢靠向自己，連語氣都像策略。",
      C: "你對被忽略非常敏感，失衡時會用情緒施壓，要求對方證明在乎。",
      D: "你知道怎麼保持體面形象，真實想法卻常常藏在『我只是為你好』後面。",
    },
  },
};

const shareTemplates = [
  "我測出來「{dark}」…有點準到不舒服。你敢測嗎👉",
  "這測驗有點狠，我黑暗人格是「{dark}」，直接被看穿。👉",
  "某些人真的很適合來測這個，我是「{dark}」。你來挑戰👉",
];

const state = {
  cursor: 0,
  answers: [],
  result: null,
  hasShared: false,
};

const el = {
  startCard: document.querySelector("#startCard"),
  quizCard: document.querySelector("#quizCard"),
  resultCard: document.querySelector("#resultCard"),
  unlockCard: document.querySelector("#unlockCard"),
  questionTitle: document.querySelector("#questionTitle"),
  answers: document.querySelector("#answers"),
  progressText: document.querySelector("#progressText"),
  progressBar: document.querySelector("#progressBar"),
  resultOutput: document.querySelector("#resultOutput"),
  shareText: document.querySelector("#shareText"),
  unlockOutput: document.querySelector("#unlockOutput"),
  adMid: document.querySelector("#adMid"),
};

document.querySelector("#startBtn").addEventListener("click", startQuiz);
document.querySelector("#retryBtn").addEventListener("click", resetQuiz);
document.querySelector("#copyShareBtn").addEventListener("click", copyShare);
document.querySelector("#nativeShareBtn").addEventListener("click", nativeShare);
document.querySelector("#unlockBtn").addEventListener("click", unlockAdvanced);

function startQuiz() {
  el.startCard.classList.add("hidden");
  el.quizCard.classList.remove("hidden");
  renderQuestion();
}

function renderQuestion() {
  const q = questions[state.cursor];
  const total = questions.length;
  const progress = Math.round((state.cursor / total) * 100);
  el.progressText.textContent = `第 ${state.cursor + 1} / ${total} 題`;
  el.progressBar.style.width = `${progress}%`;
  el.questionTitle.textContent = `Q${q.id}. ${q.text}`;
  el.answers.innerHTML = "";

  Object.entries(q.options).forEach(([key, text]) => {
    const btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.textContent = `${key}. ${text}`;
    btn.addEventListener("click", () => handleAnswer(q.id, key));
    el.answers.appendChild(btn);
  });

  const showMidAd = state.cursor === 5 || state.cursor === 10;
  el.adMid.classList.toggle("hidden", !showMidAd);
}

function handleAnswer(questionId, choice) {
  state.answers.push({ questionId, choice });
  state.cursor += 1;
  if (state.cursor >= questions.length) {
    finishQuiz();
    return;
  }
  renderQuestion();
}

function finishQuiz() {
  el.quizCard.classList.add("hidden");
  el.resultCard.classList.remove("hidden");
  el.unlockCard.classList.remove("hidden");
  state.result = calculateResult();
  renderResult();
}

function calculateResult() {
  const byQuestion = Object.fromEntries(state.answers.map((a) => [a.questionId, a.choice]));

  const surfaceCode = getTopCode("surface", byQuestion);
  const innerCode = getTopCode("inner", byQuestion);
  const darkCode = getTopCode("dark", byQuestion, layerConfig.dark.weight);

  return {
    surface: {
      name: layerConfig.surface.names[surfaceCode],
      line: layerConfig.surface.lines[surfaceCode],
    },
    inner: {
      name: layerConfig.inner.names[innerCode],
      line: layerConfig.inner.lines[innerCode],
    },
    dark: {
      name: layerConfig.dark.names[darkCode],
      line: layerConfig.dark.lines[darkCode],
      code: darkCode,
    },
  };
}

function getTopCode(layerKey, byQuestion, weight = 1) {
  const ids = layerConfig[layerKey].questionIds;
  const score = { A: 0, B: 0, C: 0, D: 0 };
  ids.forEach((id) => {
    const c = byQuestion[id];
    if (c) score[c] += weight;
  });

  return Object.entries(score).sort((a, b) => b[1] - a[1])[0][0];
}

function renderResult() {
  const { surface, inner, dark } = state.result;
  const html = `
    <h3>🧠 表人格：${surface.name}</h3>
    <p>${surface.line}</p>
    <h3>🌑 裡人格：${inner.name}</h3>
    <p>${inner.line}</p>
    <h3>🩸 黑暗人格：${dark.name}</h3>
    <p>${dark.line}</p>
  `;
  el.resultOutput.innerHTML = html;

  const text = buildShareText();
  el.shareText.textContent = `${text} ${window.location.href}`;
}

function buildShareText() {
  const pick = shareTemplates[Math.floor(Math.random() * shareTemplates.length)];
  return pick.replace("{dark}", state.result.dark.name);
}

async function copyShare() {
  try {
    await navigator.clipboard.writeText(el.shareText.textContent);
    state.hasShared = true;
    alert("分享文案已複製，快丟給朋友。");
  } catch (err) {
    alert("複製失敗，請手動複製。");
  }
}

async function nativeShare() {
  const text = el.shareText.textContent;
  if (navigator.share) {
    try {
      await navigator.share({
        title: "病毒型人格測驗",
        text,
      });
      state.hasShared = true;
    } catch (err) {
      // 使用者取消分享不視為錯誤
    }
  } else {
    copyShare();
  }
}

function unlockAdvanced() {
  if (!state.hasShared) {
    alert("請先分享或複製分享文案，再解鎖完整版人格。");
    return;
  }

  const map = {
    A: {
      love: "戀愛黑暗人格：情感投資人。你會衡量每次付出是否能換回足夠安全感。",
      money: "金錢黑暗人格：槓桿掠食者。你對資源流向極度敏感，會主動卡位最有利的位置。",
    },
    B: {
      love: "戀愛黑暗人格：界線操盤手。你用冷熱調節對方情緒，避免自己落入弱勢。",
      money: "金錢黑暗人格：風險導演者。你擅長設計局面，讓風險看起來像是別人的問題。",
    },
    C: {
      love: "戀愛黑暗人格：情緒放大器。你會用情緒密度驗證對方是否在乎你。",
      money: "金錢黑暗人格：關係索取者。你容易把親密關係當成資源互換系統。",
    },
    D: {
      love: "戀愛黑暗人格：溫柔偽裝者。你看似體貼，但真正脆弱時更傾向抽離。",
      money: "金錢黑暗人格：保守掩體者。你寧願被低估，也不讓人知道你真正的盤算。",
    },
  };

  const key = state.result.dark.code;
  const data = map[key];
  el.unlockOutput.classList.remove("hidden");
  el.unlockOutput.innerHTML = `<p>${data.love}</p><p>${data.money}</p>`;
}

function resetQuiz() {
  state.cursor = 0;
  state.answers = [];
  state.result = null;
  state.hasShared = false;

  el.resultCard.classList.add("hidden");
  el.unlockCard.classList.add("hidden");
  el.unlockOutput.classList.add("hidden");
  el.unlockOutput.innerHTML = "";
  el.quizCard.classList.remove("hidden");
  renderQuestion();
}
