document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded ✅");

  // === THEME TOGGLE ===
  const toggle = document.getElementById('mode-toggle');
  // const body = document.body;
  
  // === ANIMATION CONTROL ===
  let animationId = null;
  let isAnimating = true; // ✅ Move this up so it's defined before applyTheme()

  function applyTheme(isDark) {
  const body = document.body;
  if (isDark) {
    body.classList.add('dark-mode');
    body.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    document.getElementById("globe-icon").style.filter = "invert(1)";
  } else {
    body.classList.remove('dark-mode');
    body.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    document.getElementById("globe-icon").style.filter = "invert(0)";
  }

  // ✅ Force canvas refresh if animation is paused
  if (!isAnimating) {
    draw();
  }
}

  if (localStorage.getItem('theme') === 'dark') {
    toggle.checked = true;
    applyTheme(true);
  } else {
    applyTheme(false);
  }

  toggle.addEventListener('change', () => {
    applyTheme(toggle.checked);
  });

  // === LANGUAGE TRANSLATION ===
  const translations = {
    en: {
      slogan: "ADD SLOGAN HERE!!!!",
      footerText: "Ready to see it in action?",
      requestDemo: "Request a Demo",
      steps: [
        {
          title: "User Needs",
          summary: "Full-time traders like Ameer want safer, smarter, time-saving trading tools.",
          details: "Many traders today rely on manual processes that are time-consuming and error-prone. Identifying this need helps shape an AI robot that prioritizes usability, automation, and performance support."
        },
        {
          title: "Problem Framing",
          summary: "How might we automate high-confidence trades only during major market sessions?",
          details: "By framing the problem clearly, we focus on timing and trust — ensuring trades happen only during high-volume sessions, backed by reliable predictions and clear conditions."
        },
        {
          title: "AI Model Prediction",
          summary: "Cloud-hosted ML model predicts price direction, high/low, and confidence score.",
          details: "The heart of the robot is a machine learning model trained on historical data. It uses technical indicators and price action patterns to predict near-future movements, and gives each prediction a confidence score."
        },
        {
          title: "Filtering Logic",
          summary: "Trades only happen if model confidence & agreement criteria are met.",
          details: "Multiple checks are applied before a trade is executed: confidence thresholds, agreement between models, and predefined pip margins help ensure only the most trustworthy trades are triggered."
        },
        {
          title: "Trade Execution",
          summary: "Expert Advisor (EA) places trades in MT5 and logs all decisions transparently.",
          details: "Once approved, trades are placed through MetaTrader. All decisions — including skipped trades — are logged for user review, helping traders build confidence in the system and refine rules if needed."
        }
      ]
    },
    ar: {
    slogan: "أضف الشعار هنا!!!!",
    footerText: "هل أنت مستعد لرؤيته قيد التنفيذ؟",
    requestDemo: "طلب عرض",
    steps: [
      {
        title: "احتياجات المستخدم",
        summary: "يرغب المتداولون بدوام كامل في أدوات تداول أكثر أمانًا وذكاءً وتوفيرًا للوقت.",
        details: "يعتمد العديد من المتداولين اليوم على عمليات يدوية تستغرق وقتًا طويلاً. تحديد هذه الحاجة يساعد على تطوير روبوت يركز על الاستخدام السهل والدقة والسرعة."
      },
      {
        title: "صياغة المشكلة",
        summary: "كيف نؤتمت التداولات ذات الثقة العالية فقط خلال الجلسات الرئيسية؟",
        details: "من خلال تحديد المشكلة بوضوح، نركز على توقيت التداول وضمان أن تتم العمليات فقط خلال فترات النشاط المرتفع."
      },
      {
        title: "توقعات النموذج",
        summary: "النموذج السحابي يتوقع الاتجاهات والثقة في السعر.",
        details: "يعتمد الروبوت على نموذج تعلم آلي مدرب על بيانات تاريخية ويحدد كل تنبؤ بمؤشر ثقة."
      },
      {
        title: "منطق التصفية",
        summary: "التداول يتم فقط عند استيفاء شروط الثقة والاتفاق بين النماذج.",
        details: "تشمل آليات التصفية الحد الأدنى للثقة، توافق التنبؤات، وهامش السعر المحدد مسبقاً لضمان التداولات الأكثر أماناً."
      },
      {
        title: "تنفيذ التداول",
        summary: "الروبوت ينفذ الأوامر عبر MT5 ويُسجّل كل القرارات.",
        details: "كل عملية يتم تنفيذها بشفافية كاملة، مع سجل يمكن مراجعته لاحقًا لفهم الأداء وتحسين القواعد."
      }
    ]
  },
  he: {
    slogan: "הוסף סלוגן כאן!!!!",
    footerText: "מוכן לראות את זה בפעולה?",
    requestDemo: "בקש הדגמה",
    steps: [
      {
        title: "צרכי המשתמש",
        summary: "סוחרים במשרה מלאה רוצים כלי מסחר בטוחים, חכמים וחוסכי זמן.",
        details: "סוחרים רבים עובדים ידנית — מה שלוקח זמן וגורם לטעויות. זהו הצורך העיקרי שאנו באים לפתור באמצעות אוטומציה מבוססת בינה מלאכותית."
      },
      {
        title: "הגדרת הבעיה",
        summary: "כיצד נוכל לאפשר רק עסקאות אמינות בשעות מסחר פעילות?",
        details: "באמצעות ניסוח מדויק של הבעיה, המערכת מתמקדת בזיהוי הזדמנויות מבוססות ובטוחות בלבד."
      },
      {
        title: "חיזוי עם מודל AI",
        summary: "מודל בענן חוזה את כיוון השוק, רמות בטחון ומחיר יעד.",
        details: "המודל משתמש בנתונים היסטוריים ובאינדיקטורים טכניים כדי להפיק חיזויים עם מדד בטחון נלווה."
      },
      {
        title: "סינון עסקאות",
        summary: "רק עסקאות בטוחות עוברות סינון וביצוע.",
        details: "המנגנון כולל רמות בטחון, הסכמה בין מודלים, ומרווח פיפ מוגדר כדי להימנע מטעויות."
      },
      {
        title: "ביצוע עסקה",
        summary: "המערכת מבצעת את העסקאות אוטומטית ביומני MetaTrader.",
        details: "כל החלטה מתועדת, גם עסקאות שנדחו, על מנת לשפר אמון ושקיפות לאורך זמן."
      }
    ]
  }
  };

  function applyTranslation(lang) {
    const t = translations[lang];
    document.getElementById("footer-text").textContent = t.footerText;
    document.getElementById("cta-button").textContent = t.requestDemo;

    const sections = document.querySelectorAll(".funnel-section");
    sections.forEach((el, i) => {
      if (t.steps[i]) {
        el.querySelector("h2").textContent = t.steps[i].title;
        el.querySelector(".summary").textContent = t.steps[i].summary;
        el.querySelector(".details").textContent = t.steps[i].details;
      }
    });

    const isRTL = (lang === "ar" || lang === "he");
    document.body.setAttribute("dir", isRTL ? "rtl" : "ltr");

    localStorage.setItem("lang", lang);
  }

  const languageSelect = document.getElementById("language-select");
  const savedLang = localStorage.getItem("lang") || "en";
  languageSelect.value = savedLang;
  applyTranslation(savedLang);
  languageSelect.addEventListener("change", (e) => {
    applyTranslation(e.target.value);
  });

  // === PARTICLE ANIMATION SETUP ===
  const canvas = document.getElementById("network-canvas");
  const ctx = canvas.getContext("2d");
  let width, height, particles;

  if (!ctx) {
    console.error("❌ Canvas context could not be initialized!");
    return;
  } else {
    console.log("✅ Canvas context initialized");
  }

  function resizeCanvas() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  function createParticles() {
  const isMobile = window.innerWidth < 768;
  const count = isMobile ? 20 : 120; // fewer dots on mobile

  particles = [];
  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      radius: 1.8 + Math.random() * 1.2,
    });
  }
}

  function draw() {
    const isDark = document.body.getAttribute("data-theme") === "dark";
    const dotColor = isDark ? "rgba(187, 134, 252, 0.8)" : "rgba(0, 0, 0, 0.75)";
    const lineColorBase = isDark ? "187, 134, 252" : "0, 0, 0";

    ctx.clearRect(0, 0, width, height);

    for (let p of particles) {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = dotColor;
      ctx.shadowBlur = 0;
      ctx.shadowColor = "transparent";
      ctx.fill();
      ctx.closePath();
    }

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 220) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(${lineColorBase}, ${1 - dist / 220})`;
          ctx.lineWidth = 0.4;
          ctx.stroke();
          ctx.closePath();
        }
      }
    }
  }

  function drawLoop() {
    draw();
    animationId = requestAnimationFrame(drawLoop);
  }

  function startAnimation() {
  if (!animationId) {
    animationId = requestAnimationFrame(drawLoop);
    const btn = document.getElementById("toggle-animation");
    if (btn) {
      btn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
          class="lucide lucide-circle-pause-icon" style="vertical-align: middle;">
          <circle cx="12" cy="12" r="10"/>
          <line x1="10" x2="10" y1="15" y2="9"/>
          <line x1="14" x2="14" y1="15" y2="9"/>
        </svg>
      `;
      btn.classList.remove("paused");
      btn.classList.add("running");
    }
    isAnimating = true;
  }
}

function stopAnimation() {
  cancelAnimationFrame(animationId);
  animationId = null;
  const btn = document.getElementById("toggle-animation");
  if (btn) {
    btn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
        class="lucide lucide-circle-play-icon" style="vertical-align: middle;">
        <circle cx="12" cy="12" r="10"/>
        <polygon points="10 8 16 12 10 16 10 8"/>
      </svg>
    `;
    btn.classList.remove("running");
    btn.classList.add("paused");
  }
  isAnimating = false;
}

  const toggleBtn = document.getElementById("toggle-animation");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      isAnimating ? stopAnimation() : startAnimation();
    });
  }

  // === INITIALIZE ===
  window.addEventListener("resize", () => {
    resizeCanvas();
    createParticles();
  });

  resizeCanvas();
  createParticles();
  startAnimation();

  document.getElementById("toggle-animation").classList.add("running");

  // === EXPAND SECTIONS ON CLICK ===
  document.querySelectorAll(".funnel-section").forEach(section => {
    section.addEventListener("click", () => {
      section.classList.toggle("expanded");
    });
  });
});
