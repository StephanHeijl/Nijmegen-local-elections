// =====================================================
// QUIZ STATE
// =====================================================

let currentQuestion = 0;
let userAnswers = new Array(questions.length).fill(null);

// =====================================================
// QUIZ FLOW
// =====================================================

function startQuiz() {
    document.getElementById('intro').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    currentQuestion = 0;
    userAnswers = new Array(questions.length).fill(null);
    showQuestion();
}

function showQuestion() {
    const q = questions[currentQuestion];
    document.getElementById('questionCategory').textContent = q.category;
    document.getElementById('questionText').textContent = q.text;
    document.getElementById('progressText').textContent = `Vraag ${currentQuestion + 1} van ${questions.length}`;
    document.getElementById('progressBar').style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;
    document.getElementById('prevBtn').disabled = currentQuestion === 0;

    // Highlight selected answer
    const buttons = document.querySelectorAll('.answer-btn');
    buttons.forEach(btn => btn.classList.remove('selected'));

    if (userAnswers[currentQuestion] !== null && userAnswers[currentQuestion] !== undefined) {
        const val = userAnswers[currentQuestion];
        if (val === 1) buttons[0].classList.add('selected');
        else if (val === 0) buttons[1].classList.add('selected');
        else if (val === -1) buttons[2].classList.add('selected');
    }
}

function answer(value) {
    userAnswers[currentQuestion] = value;

    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion();
    } else {
        showResults();
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion();
    }
}

function restart() {
    document.getElementById('results').style.display = 'none';
    document.getElementById('intro').style.display = 'block';
    currentQuestion = 0;
    userAnswers = new Array(questions.length).fill(null);
}

// =====================================================
// SCORING
// =====================================================

function calculateScores() {
    const scores = {};

    parties.forEach(party => {
        let totalMatch = 0;
        let totalAnswered = 0;

        questions.forEach((q, i) => {
            if (userAnswers[i] === null || userAnswers[i] === undefined) return;

            const userPos = userAnswers[i];
            const partyPos = q.positions[party.id];

            totalAnswered++;

            // Score: 2 for exact match, 1 for partial (one is neutral), 0 for mismatch
            if (userPos === partyPos) {
                totalMatch += 2;
            } else if (userPos === 0 || partyPos === 0) {
                totalMatch += 1;
            } else if (userPos === -partyPos) {
                totalMatch += 0;
            }
        });

        const maxScore = totalAnswered * 2;
        const percentage = maxScore > 0 ? Math.round((totalMatch / maxScore) * 100) : 0;

        scores[party.id] = {
            party: party,
            percentage: percentage,
            totalMatch: totalMatch,
            maxScore: maxScore
        };
    });

    return scores;
}

// =====================================================
// COMPASS POSITION
// =====================================================

function getCompassPosition(answerFn) {
    let econScore = 0;
    let progScore = 0;
    let econCount = 0;
    let progCount = 0;

    questions.forEach(q => {
        const val = answerFn(q) * q.direction;
        if (q.axis === "econ") {
            econScore += val;
            econCount++;
        } else if (q.axis === "prog") {
            progScore += val;
            progCount++;
        }
    });

    return {
        x: econCount > 0 ? econScore / econCount : 0,
        y: progCount > 0 ? progScore / progCount : 0
    };
}

function getUserCompassPosition() {
    return getCompassPosition((q) => {
        const a = userAnswers[questions.indexOf(q)];
        return (a === null || a === undefined) ? 0 : a;
    });
}

function getPartyCompassPosition(partyId) {
    return getCompassPosition((q) => q.positions[partyId] ?? 0);
}

// =====================================================
// RESULTS RENDERING
// =====================================================

function showResults() {
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('results').style.display = 'block';

    const scores = calculateScores();
    renderCompass(scores);
    renderMatchList(scores);
}

function renderCompass(scores) {
    const canvas = document.getElementById('compass');
    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;
    const cx = w / 2;
    const cy = h / 2;
    const padding = 50;
    const plotSize = w - padding * 2;

    ctx.clearRect(0, 0, w, h);

    // Background quadrants
    ctx.globalAlpha = 0.08;
    ctx.fillStyle = '#e74c3c';
    ctx.fillRect(padding, padding, plotSize / 2, plotSize / 2); // top-left: auth-left
    ctx.fillStyle = '#3498db';
    ctx.fillRect(cx, padding, plotSize / 2, plotSize / 2); // top-right: auth-right
    ctx.fillStyle = '#2ecc71';
    ctx.fillRect(padding, cy, plotSize / 2, plotSize / 2); // bottom-left: lib-left
    ctx.fillStyle = '#f39c12';
    ctx.fillRect(cx, cy, plotSize / 2, plotSize / 2); // bottom-right: lib-right
    ctx.globalAlpha = 1;

    // Grid lines
    ctx.strokeStyle = '#ddd';
    ctx.lineWidth = 1;
    for (let i = 0; i <= 4; i++) {
        const pos = padding + (plotSize / 4) * i;
        ctx.beginPath();
        ctx.moveTo(pos, padding);
        ctx.lineTo(pos, h - padding);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(padding, pos);
        ctx.lineTo(w - padding, pos);
        ctx.stroke();
    }

    // Axes
    ctx.strokeStyle = '#999';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(cx, padding);
    ctx.lineTo(cx, h - padding);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(padding, cy);
    ctx.lineTo(w - padding, cy);
    ctx.stroke();

    // Labels
    ctx.fillStyle = '#666';
    ctx.font = '12px Segoe UI, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('Conservatief', cx, padding - 10);
    ctx.fillText('Progressief', cx, h - padding + 25);
    ctx.save();
    ctx.translate(padding - 10, cy);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText('Links', 0, 0);
    ctx.restore();
    ctx.save();
    ctx.translate(w - padding + 15, cy);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText('Rechts', 0, 0);
    ctx.restore();

    // Plot parties
    parties.forEach(party => {
        const pos = getPartyCompassPosition(party.id);
        const px = cx + pos.x * (plotSize / 2);
        const py = cy - pos.y * (plotSize / 2); // invert y: positive = up (conservative)

        // Dot
        ctx.beginPath();
        ctx.arc(px, py, 8, 0, Math.PI * 2);
        ctx.fillStyle = party.color;
        ctx.fill();
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Label
        ctx.fillStyle = '#333';
        ctx.font = 'bold 11px Segoe UI, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(party.shortName, px, py - 14);
    });

    // Plot user position
    const userPos = getUserCompassPosition();
    const ux = cx + userPos.x * (plotSize / 2);
    const uy = cy - userPos.y * (plotSize / 2);

    // Star shape for user
    ctx.beginPath();
    const spikes = 5;
    const outerR = 14;
    const innerR = 7;
    for (let i = 0; i < spikes * 2; i++) {
        const r = i % 2 === 0 ? outerR : innerR;
        const angle = (i * Math.PI / spikes) - Math.PI / 2;
        const sx = ux + Math.cos(angle) * r;
        const sy = uy + Math.sin(angle) * r;
        if (i === 0) ctx.moveTo(sx, sy);
        else ctx.lineTo(sx, sy);
    }
    ctx.closePath();
    ctx.fillStyle = '#e74c3c';
    ctx.fill();
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillStyle = '#e74c3c';
    ctx.font = 'bold 12px Segoe UI, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('JIJ', ux, uy - 20);
}

function renderMatchList(scores) {
    const sorted = Object.values(scores).sort((a, b) => b.percentage - a.percentage);
    const container = document.getElementById('matchList');
    container.innerHTML = '';

    sorted.forEach((result, index) => {
        const card = document.createElement('div');
        card.className = `match-card${index === 0 ? ' top' : ''}`;
        card.onclick = () => showDetail(result.party.id);

        const barColor = result.percentage >= 70 ? '#27ae60' :
                       result.percentage >= 50 ? '#f39c12' : '#e74c3c';

        card.innerHTML = `
            <div class="match-rank">${index + 1}</div>
            <div class="match-info">
                <div class="match-party">${result.party.name}</div>
                <div class="match-description">${result.party.description}</div>
            </div>
            <div class="match-score-wrapper">
                <div class="match-score">${result.percentage}%</div>
                <div class="match-bar-container">
                    <div class="match-bar" style="width: ${result.percentage}%; background: ${barColor}"></div>
                </div>
            </div>
        `;

        container.appendChild(card);
    });
}

// =====================================================
// DETAIL VIEW
// =====================================================

function showDetail(partyId) {
    const party = parties.find(p => p.id === partyId);
    const overlay = document.getElementById('detailOverlay');
    const content = document.getElementById('detailContent');

    let html = `<div class="detail-party-name" style="color: ${party.color}">${party.name}</div>`;
    html += `<p style="color: var(--text-light); margin-bottom: 15px; font-size: 0.9em;">Vergelijking per stelling (klik buiten om te sluiten)</p>`;

    questions.forEach((q, i) => {
        if (userAnswers[i] === null || userAnswers[i] === undefined) return;

        const userPos = userAnswers[i];
        const partyPos = q.positions[partyId];

        let iconClass, iconText;
        if (userPos === partyPos) {
            iconClass = 'match';
            iconText = '=';
        } else if (userPos === 0 || partyPos === 0) {
            iconClass = 'partial';
            iconText = '~';
        } else {
            iconClass = 'mismatch';
            iconText = '!';
        }

        const posLabel = (val) => val === 1 ? 'Eens' : val === -1 ? 'Oneens' : 'Neutraal';
        const quote = q.quotes && q.quotes[partyId] ? q.quotes[partyId] : null;

        html += `
            <div class="detail-question">
                <div class="detail-icon ${iconClass}">${iconText}</div>
                <div class="detail-q-text">
                    <strong>${q.text}</strong>
                    <span>Jij: ${posLabel(userPos)} | ${party.shortName}: ${posLabel(partyPos)}</span>
                    ${quote ? `<span class="party-quote">"${quote}"</span>` : ''}
                </div>
            </div>
        `;
    });

    content.innerHTML = html;
    overlay.classList.add('active');
}

function closeDetail(event) {
    if (event && event.target !== document.getElementById('detailOverlay')) return;
    document.getElementById('detailOverlay').classList.remove('active');
}

// Close overlay when clicking outside card
document.getElementById('detailOverlay').addEventListener('click', function(e) {
    if (e.target === this) {
        this.classList.remove('active');
    }
});

// =====================================================
// PARTY OPINIONS VIEW
// =====================================================

function showPartyOpinions() {
    const q = questions[currentQuestion];
    const overlay = document.getElementById('partyOpinionsOverlay');
    const content = document.getElementById('partyOpinionsContent');

    const groups = { 1: [], 0: [], [-1]: [] };
    parties.forEach(party => {
        const pos = q.positions[party.id];
        groups[pos].push(party);
    });

    const posLabel = { 1: 'Eens', 0: 'Neutraal', [-1]: 'Oneens' };
    const groupClass = { 1: 'agree', 0: 'neutral', [-1]: 'disagree' };

    let html = `<div class="opinions-question-title">${q.text}</div>`;

    [1, 0, -1].forEach(pos => {
        const list = groups[pos];
        html += `<div class="opinions-group">`;
        html += `<span class="opinions-group-label ${groupClass[pos]}">${posLabel[pos]}</span>`;
        if (list.length === 0) {
            html += `<div class="opinions-empty">Geen partijen</div>`;
        } else {
            html += `<div class="opinions-party-list">`;
            list.forEach(party => {
                const quote = q.quotes && q.quotes[party.id] ? q.quotes[party.id] : null;
                html += `<div class="opinions-party-row ${groupClass[pos]}">
                    <span class="opinions-party-badge" style="background:${party.color}">${party.shortName}</span>
                    ${quote ? `<span class="opinions-party-quote">"${quote}"</span>` : ''}
                </div>`;
            });
            html += `</div>`;
        }
        html += `</div>`;
    });

    content.innerHTML = html;
    overlay.classList.add('active');
}

function closePartyOpinions(event) {
    if (event && event.target !== document.getElementById('partyOpinionsOverlay')) return;
    document.getElementById('partyOpinionsOverlay').classList.remove('active');
}

document.getElementById('partyOpinionsOverlay').addEventListener('click', function(e) {
    if (e.target === this) {
        this.classList.remove('active');
    }
});
