// Hobbit-Quiz: CSS-Fragen (Antworten gemischt, korrekter answerIndex gesetzt)
const levels = [
    {
        id: "ebene-1",
        name: "Ebene I: Die Grünen Hügel von Hobbingen",
        flavor: "Im Gras verstecken sich Regeln – finde die richtigen.",
        questions: [
        {
            q: "Welcher CSS-Gradient erzeugt einen Farbverlauf, der von der Mitte kreisförmig nach außen verläuft?",
            options: [
            "central-gradient",
            "radial-gradient",
            "linear-gradient",
            "circle-gradient",
            ],
            answerIndex: 1,
        },
        {
            q: "Welches der folgenden Farbmodelle wird in CSS nicht unterstützt?",
            options: ["HSL", "CMYK", "RGB", "HEX"],
            answerIndex: 1,
        },
        {
            q: "Mit welcher CSS-Eigenschaft kann man die Hintergrundfarbe eines Elements festlegen?",
            options: ["background-color", "bg-color", "background", "color"],
            answerIndex: 0,
        },
        {
            q: "Welche Funktion erfüllt der Alpha-Wert bei rgba() oder hsla()?",
            options: [
            "Er bestimmt die Transparenz",
            "Er verändert die Schriftgröße",
            "Er formatiert den Text",
            "Er ändert die Farbe automatisch",
            ],
            answerIndex: 0,
        },
        {
            q: "Welche CSS-Eigenschaft wird verwendet, um ein Bild als Hintergrund einzubinden?",
            options: ["image-background", "background-image", "bg-img", "img-url"],
            answerIndex: 1,
        },
        {
            q: "Was bewirkt die CSS-Anweisung background-repeat: no-repeat;?",
            options: [
            "Das Hintergrundbild wird transparent.",
            "Das Hintergrundbild wird vergrößert.",
            "Das Hintergrundbild erscheint nur einmal.",
            "Das Hintergrundbild ändert sich beim Anklicken.",
            ],
            answerIndex: 2,
        },
        {
            q: "Mit welcher Eigenschaft kann man die Position eines Hintergrundbildes festlegen?",
            options: [
            "align-background",
            "background-position",
            "position",
            "image-position",
            ],
            answerIndex: 1,
        },
        {
            q: "Was bedeutet die Einstellung background-size: cover;?",
            options: [
            "Das Bild wird so skaliert, dass es den gesamten Container ausfüllt.",
            "Das Bild wird horizontal wiederholt.",
            "Das Bild wird in seiner Originalgröße angezeigt.",
            "Das Bild wird so vergrößert, dass es den gesamten Monitor ausfüllt.",
            ],
            answerIndex: 0,
        },
        ],
    },
    {
        id: "ebene-2",
        name: "Ebene II: Die Runden Türen der Smials",
        flavor: "Hinter jeder Tür steckt ein Detail – manche sind tückisch.",
        questions: [
        {
            q: "Welches Schlüsselwort sorgt dafür, dass ein Hintergrundbild vollständig sichtbar bleibt, auch wenn es kleiner als das Element ist?",
            options: ["expand", "contain", "cover", "fit"],
            answerIndex: 1,
        },
        {
            q: "Wie wird in CSS ein linearer Farbverlauf definiert?",
            options: [
            "background-image: linear-gradient(...)",
            "linear-background: color(...)",
            "color-gradient: linear(...)",
            "background-gradient: linear()",
            ],
            answerIndex: 0,
        },
        {
            q: "Welche CSS-Funktion erzeugt einen kreisförmigen Farbverlauf?",
            options: [
            "circle-gradient",
            "orbital-gradient",
            "radial-gradient",
            "linear-gradient",
            ],
            answerIndex: 2,
        },
        {
            q: "Welche CSS-Eigenschaft bestimmt, wie ein Rahmen dargestellt wird (z. B. durchgezogen, gestrichelt oder doppelt)?",
            options: [
            "border-width",
            "border-style",
            "border-color",
            "border-bottom-color",
            ],
            answerIndex: 1,
        },
        {
            q: "Wie kann man allen <h1>-Elementen eine Hintergrundfarbe zuweisen?",
            options: [
            "h1 {background-color:#FFFFFF;}",
            "al.h1 {background-color:#FFFFFF;}",
            "h1.all {background-color:#FFFFFF;}",
            ],
            answerIndex: 0,
        },
        {
            q: "Welche CSS-Eigenschaft legt die Hintergrundfarbe eines Elements fest?",
            options: ["bgcolor", "color", "background-color"],
            answerIndex: 2,
        },
        {
            q: "Mit welcher CSS-Eigenschaft wird die Textfarbe eines Elements bestimmt?",
            options: ["fg-color", "text-color", "color"],
            answerIndex: 2,
        },
        ],
    },
    {
        id: "ebene-3",
        name: "Ebene III: Das Große Fest im Grünen Drachen",
        flavor: "Jetzt wird’s gemütlich – aber bleib wach! Die letzte Runde zählt.",
        questions: [
        {
            q: "Welche HTML-Syntax ist korrekt, um eine externe CSS-Datei einzubinden?",
            options: [
            "<stylesheet>mystyle.css</stylesheet>",
            '<style src="mystyle.css">',
            '<link rel="stylesheet" type="text/css" href="mystyle.css">',
            ],
            answerIndex: 2,
        },
        {
            q: "Mit welcher CSS-Eigenschaft kann man die Schriftart ändern?",
            options: ["font-style", "font-family", "font-weight"],
            answerIndex: 1,
        },
        {
            q: "Wie entfernt man die Unterstreichung von Hyperlinks in CSS?",
            options: [
            "a {text-decoration:no-underline;}",
            "a {decoration:no-underline;}",
            "a {underline:none;}",
            "a {text-decoration:none;}",
            ],
            answerIndex: 3,
        },
        {
            q: "Welches HTML-Attribut wird verwendet, um Inline-CSS zu definieren?",
            options: ["font", "style", "class", "styles"],
            answerIndex: 1,
        },
        {
            q: "Welches HTML-Tag wird verwendet, um interne Stylesheets zu definieren?",
            options: ["<css>", "<style>", "<script>"],
            answerIndex: 1,
        },
        {
            q: "Mit welcher CSS-Eigenschaft wird die Größe eines Textes festgelegt?",
            options: ["text-size", "font-size", "font-style", "text-style"],
            answerIndex: 1,
        },
        {
            q: "Welcher Fehler befindet sich im folgenden CSS-Code?",
            options: [
            "center ist kein gültiger Wert für justify-items",
            "justify-items funktioniert nur in Grid-Layouts",
            "flex ist kein gültiger Wert",
            "Der Selektor muss in Anführungszeichen stehen",
            ],
            answerIndex: 1,
        },
        ],
    },
    ];

    /* ==========================================
    Hobbit-Quiz – Restliche JS-Logik
    (Level nacheinander, Antworten gemischt,
    Passwort ab 80%)
   ========================================== */

// Einstellungen
const PASS_THRESHOLD = 0.8; // 80%
const SUCCESS_PASSWORD = "SECOND-BREAKFAST";

// DOM
const screenStart = document.getElementById("screenStart");
const screenQuiz = document.getElementById("screenQuiz");
const screenResult = document.getElementById("screenResult");
const screenLevel = document.getElementById("screenLevel");

const btnStart = document.getElementById("btnStart");
const btnNext = document.getElementById("btnNext");
const btnRestart = document.getElementById("btnRestart");
const btnReview = document.getElementById("btnReview");
const btnLevelContinue = document.getElementById("btnLevelContinue");

const shuffleToggle = document.getElementById("shuffleToggle");
const instantFeedbackToggle = document.getElementById("instantFeedbackToggle");

// Optional: Skip existiert evtl. nicht mehr (wenn du ihn entfernt hast)
const btnSkip = document.getElementById("btnSkip");

const hudLevel = document.getElementById("hudLevel");
const hudQuestion = document.getElementById("hudQuestion");
const hudScore = document.getElementById("hudScore");

const levelName = document.getElementById("levelName");
const levelFlavor = document.getElementById("levelFlavor");
const questionText = document.getElementById("questionText");
const answersForm = document.getElementById("answersForm");
const feedback = document.getElementById("feedback");

const progressFill = document.getElementById("progressFill");
const progressText = document.getElementById("progressText");

const resultPercent = document.getElementById("resultPercent");
const resultCorrect = document.getElementById("resultCorrect");
const resultTotal = document.getElementById("resultTotal");
const passwordBox = document.getElementById("passwordBox");
const reviewLog = document.getElementById("reviewLog");
const reviewContent = document.getElementById("reviewContent");

const levelTitle = document.getElementById("levelTitle");
const levelText = document.getElementById("levelText");

// State
let levelIndex = 0;
let questionIndex = 0;

let preparedLevels = []; // deep-copied levels; questions optional shuffled; answers always shuffled at start
let correctCount = 0;
let totalCount = 0;
let locked = false;

let history = []; // {level, q, chosen, correct, correctText}

/* ---------------- Helpers ---------------- */

    function showScreen(which) {
    for (const s of [screenStart, screenQuiz, screenResult, screenLevel]) {
        if (s) s.classList.remove("active");
    }
    which.classList.add("active");
    }

    function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
    }

    /**
     * Mischt Antwortoptionen einer Frage und passt answerIndex korrekt an.
     */
    function shuffleQuestionAnswers(question) {
    const zipped = question.options.map((text, idx) => ({ text, idx }));
    const shuffled = shuffle(zipped);

    const newOptions = shuffled.map((x) => x.text);
    const newAnswerIndex = shuffled.findIndex(
        (x) => x.idx === question.answerIndex,
    );

    return {
        ...question,
        options: newOptions,
        answerIndex: newAnswerIndex,
    };
    }

    function prepareGame() {
    // Deep copy levels/questions
    preparedLevels = levels.map((lvl) => ({
        ...lvl,
        questions: lvl.questions.map((q) => ({ ...q })),
    }));

    // Optional: Fragen innerhalb jeder Ebene mischen
    if (shuffleToggle && shuffleToggle.checked) {
        preparedLevels = preparedLevels.map((lvl) => ({
        ...lvl,
        questions: shuffle(lvl.questions),
        }));
    }

    // Antworten IMMER mischen (damit korrekt nicht immer A ist)
    preparedLevels = preparedLevels.map((lvl) => ({
        ...lvl,
        questions: lvl.questions.map(shuffleQuestionAnswers),
    }));

    // Totals
    totalCount = preparedLevels.reduce(
        (sum, lvl) => sum + lvl.questions.length,
        0,
    );

    // Reset progress
    levelIndex = 0;
    questionIndex = 0;
    correctCount = 0;
    locked = false;
    history = [];
    if (reviewLog) reviewLog.open = false;
}

function currentLevel() {
    return preparedLevels[levelIndex];
    }

    function currentQuestion() {
    const lvl = currentLevel();
    return lvl ? lvl.questions[questionIndex] : null;
    }

    /**
     * Laufende Gesamt-Fragenummer (1..totalCount)
     */
    function overallQuestionNumber() {
    let n = 0;
    for (let i = 0; i < levelIndex; i++) {
        n += preparedLevels[i].questions.length;
    }
    n += questionIndex + 1;
    return n;
    }

    function updateHud() {
    const percent =
        totalCount === 0 ? 0 : Math.round((correctCount / totalCount) * 100);
    if (hudScore) hudScore.textContent = `${percent}%`;
    if (hudQuestion)
        hudQuestion.textContent = `${Math.min(overallQuestionNumber(), totalCount)}/${totalCount}`;

    const lvl = currentLevel();
    if (hudLevel)
        hudLevel.textContent = lvl
        ? lvl.name.replace("Ebene ", "").split(":")[0]
        : "—";
    }

    function updateProgress() {
    const answeredSoFar = overallQuestionNumber() - 1; // already answered before current
    const p = totalCount === 0 ? 0 : (answeredSoFar / totalCount) * 100;

    if (progressFill) progressFill.style.width = `${p}%`;
    if (progressText) progressText.textContent = `Fortschritt: ${Math.round(p)}%`;
    }

    /* ---------------- Flow: Level Screens ---------------- */

    function showLevelIntro() {
    const lvl = currentLevel();
    if (!lvl) return finish();

    if (levelTitle) levelTitle.textContent = lvl.name;
    if (levelText) levelText.textContent = lvl.flavor;

    showScreen(screenLevel);
    }

    function startLevel() {
    showScreen(screenQuiz);
    renderQuestion();
    }

    function renderQuestion() {
    locked = false;
    if (btnNext) btnNext.disabled = true;

    if (feedback) {
        feedback.className = "feedback";
        feedback.textContent = "";
    }

    const lvl = currentLevel();
    const q = currentQuestion();

    if (!lvl || !q) {
        return goNextLevelOrFinish();
    }

    if (levelName) levelName.textContent = lvl.name;
    if (levelFlavor) levelFlavor.textContent = lvl.flavor;
    if (questionText) questionText.textContent = q.q;

    if (answersForm) {
        answersForm.innerHTML = "";
        q.options.forEach((opt, i) => {
        const label = document.createElement("label");
        label.className = "answer";

        const input = document.createElement("input");
        input.type = "radio";
        input.name = "answer";
        input.value = String(i);

        const span = document.createElement("span");
        span.className = "text";
        span.textContent = opt;

        label.appendChild(input);
        label.appendChild(span);

        label.addEventListener("click", () => setTimeout(() => onSelect(i), 0));
        answersForm.appendChild(label);
        });
    }

    updateHud();
    updateProgress();
    }

    function markAnswers(chosenIndex) {
    const q = currentQuestion();
    if (!q || !answersForm) return;

    const nodes = [...answersForm.querySelectorAll(".answer")];
    nodes.forEach((node, i) => {
        node.classList.remove("correct", "wrong");
        if (i === q.answerIndex) node.classList.add("correct");
        if (i === chosenIndex && chosenIndex !== q.answerIndex)
        node.classList.add("wrong");
    });
    }

    function onSelect(chosenIndex) {
    if (locked) return;

    const lvl = currentLevel();
    const q = currentQuestion();
    if (!lvl || !q) return;

    locked = true;

    const isCorrect = chosenIndex === q.answerIndex;
    if (isCorrect) correctCount++;

    const chosenText = q.options[chosenIndex];
    const correctText = q.options[q.answerIndex];

    history.push({
        level: lvl.name,
        q: q.q,
        chosen: chosenText,
        correct: isCorrect,
        correctText,
    });

    if (btnNext) btnNext.disabled = false;

    if (instantFeedbackToggle && instantFeedbackToggle.checked) {
        markAnswers(chosenIndex);

        if (feedback) {
        feedback.classList.add(isCorrect ? "good" : "bad");
        feedback.textContent = isCorrect
            ? "Richtig."
            : `Falsch. Lösung: „${correctText}“.`;
        }
    } else {
        if (feedback)
        feedback.textContent = "Antwort gespeichert. Drücke „Weiter“.";
    }

    updateHud();
    }

    function skip() {
    // Falls du Skip entfernt hast: einfach nie aufrufen
    if (!btnSkip) return;
    if (locked) return;

    const lvl = currentLevel();
    const q = currentQuestion();
    if (!lvl || !q) return;

    locked = true;

    history.push({
        level: lvl.name,
        q: q.q,
        chosen: "Übersprungen",
        correct: false,
        correctText: q.options[q.answerIndex],
    });

    if (btnNext) btnNext.disabled = false;

    if (feedback) {
        feedback.classList.add("bad");
        feedback.textContent = `Übersprungen. Lösung: „${q.options[q.answerIndex]}“.`;
    }

    if (instantFeedbackToggle && instantFeedbackToggle.checked) {
        markAnswers(-1);
    }

    updateHud();
    }

    function next() {
    questionIndex++;
    renderQuestion();
    }

    function goNextLevelOrFinish() {
    levelIndex++;
    questionIndex = 0;

    if (levelIndex < preparedLevels.length) {
        showLevelIntro();
    } else {
        finish();
    }
    }

    /* ---------------- Result / Review ---------------- */

    function finish() {
    const percentRaw = totalCount === 0 ? 0 : correctCount / totalCount;
    const percent = Math.round(percentRaw * 100);

    if (resultPercent) resultPercent.textContent = `${percent}%`;
    if (resultCorrect) resultCorrect.textContent = `${correctCount}`;
    if (resultTotal) resultTotal.textContent = `${totalCount}`;

    const success = percentRaw >= PASS_THRESHOLD;

    if (passwordBox) {
        passwordBox.innerHTML = success
        ? `
            <div><strong>Die runde Tür klickt leise… und öffnet sich.</strong></div>
            <div class="small">Du hast bestanden (mind. ${Math.round(PASS_THRESHOLD * 100)}%). Dein Passwort lautet:</div>
            <div class="password">${SUCCESS_PASSWORD}</div>
        `
        : `
            <div><strong>Die Tür bleibt zu. Ein Hobbit schüttelt bedauernd den Kopf.</strong></div>
            <div class="small">Du brauchst mindestens <strong>${Math.round(PASS_THRESHOLD * 100)}%</strong>. Versuch’s nochmal!</div>
        `;
    }

    renderReview();
    showScreen(screenResult);
    }

    function renderReview() {
    if (!reviewContent) return;

    reviewContent.innerHTML = "";
    history.forEach((h, i) => {
        const div = document.createElement("div");
        div.className = "reviewItem";
        div.innerHTML = `
        <div class="q">${i + 1}. ${h.q}</div>
        <div class="meta">
            <div><strong>Ebene:</strong> ${h.level}</div>
            <div><strong>Deine Antwort:</strong> ${h.chosen}</div>
            <div><strong>Richtig:</strong> ${h.correct ? "Ja" : "Nein"}</div>
            <div><strong>Lösung:</strong> ${h.correctText}</div>
        </div>
        `;
        reviewContent.appendChild(div);
    });
    }

    function restart() {
    prepareGame();
    showLevelIntro();
    }

    /* ---------------- Events ---------------- */

    if (btnStart) {
    btnStart.addEventListener("click", () => {
        prepareGame();
        showLevelIntro();
    });
    }

    if (btnLevelContinue) {
    btnLevelContinue.addEventListener("click", () => startLevel());
    }

    if (btnNext) {
    btnNext.addEventListener("click", () => next());
    }

    if (btnSkip) {
    btnSkip.addEventListener("click", () => skip());
    }

    if (btnRestart) {
    btnRestart.addEventListener("click", () => restart());
    }

    if (btnReview) {
    btnReview.addEventListener("click", () => {
        if (reviewLog) reviewLog.open = true;
        if (reviewLog)
        reviewLog.scrollIntoView({ behavior: "smooth", block: "start" });
    });
}

// Init
showScreen(screenStart);
updateHud();
