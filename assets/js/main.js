// Assemble the address at runtime so scrapers reading the HTML don't see it.
(function () {
  var u = "gmail";
  var d = ["pierceschiller", "com"].join(".");
  var addr = u + "@" + d;
  document.querySelectorAll(".js-mail").forEach(function (a) {
    a.href = "mailto:" + addr +
      "?subject=" + encodeURIComponent("Let's make this interesting.") +
      "&body=" + encodeURIComponent("Your move, internet stranger.");
  });
  var t = document.querySelector(".js-mail-text");
  if (t) t.textContent = addr;
  document.getElementById("yr").textContent = new Date().getFullYear();
})();

// Scroll reveals for browsers without CSS scroll timelines (Safari, Firefox).
(function () {
  if (window.CSS && CSS.supports("animation-timeline: view()")) return;
  if (!("IntersectionObserver" in window)) return;
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  document.documentElement.classList.add("js");
  var targets = document.querySelectorAll(".section, .section h2, .era h3, .role, .creds div, .story p");
  targets.forEach(function (el) { if (!el.classList.contains("section")) el.classList.add("reveal"); });
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    });
  }, { threshold: 0.15 });
  targets.forEach(function (el) { io.observe(el); });
})();

// ---------- Easter egg 1: type "pcr" to amplify the gel ----------
(function () {
  var gel = document.querySelector(".gel");
  var count = document.querySelector(".pcr-count");
  if (!gel) return;
  var typed = "", running = false;
  document.addEventListener("keydown", function (e) {
    if (e.target.closest("input, textarea, [contenteditable]")) return;
    if (!e.key || e.key.length !== 1) return;
    typed = (typed + e.key.toLowerCase()).slice(-3);
    if (typed !== "pcr" || running) return;
    running = true;
    var cycle = 0;
    var step = setInterval(function () {
      cycle += 1;
      gel.setAttribute("data-cycle", cycle);
      count.textContent = "PCR cycle " + cycle + " of 3";
      if (cycle === 3) {
        clearInterval(step);
        gel.classList.add("uv");
        count.textContent = "Amplified.";
        setTimeout(function () {
          gel.classList.remove("uv");
          gel.removeAttribute("data-cycle");
          count.textContent = "";
          running = false;
        }, 2600);
      }
    }, 700);
  });
})();

// ---------- Easter egg 2: triple-click Giffen Brands ----------
(function () {
  var role = document.getElementById("giffen");
  if (!role) return;
  var panel = role.querySelector(".giffen");
  var path = role.querySelector(".curve");
  var dot = role.querySelector(".dot");
  var slider = role.querySelector(".giffen input");
  var clicks = 0, timer;
  role.addEventListener("click", function (e) {
    if (e.target.closest(".giffen")) return;
    clicks += 1;
    clearTimeout(timer);
    timer = setTimeout(function () { clicks = 0; }, 1200);
    if (clicks >= 3) { clicks = 0; panel.hidden = false; slider.focus(); }
  });
  function place() {
    var len = path.getTotalLength();
    var pt = path.getPointAtLength(len * slider.value / 100);
    dot.setAttribute("cx", pt.x);
    dot.setAttribute("cy", pt.y);
  }
  slider.addEventListener("input", place);
  role.querySelector(".giffen-x").addEventListener("click", function () { panel.hidden = true; });
  place();
})();

// ---------- Easter egg 3: the '85 Civic rolls in at the bottom ----------
(function () {
  var trip = document.querySelector(".roadtrip");
  var car = document.querySelector(".car");
  if (!trip || !car) return;
  if (!("IntersectionObserver" in window)) { trip.classList.add("go"); return; }
  var io = new IntersectionObserver(function (entries) {
    if (entries[0].isIntersecting) { trip.classList.add("go"); io.disconnect(); }
  }, { threshold: 0.6 });
  io.observe(trip);

  // click the car for an actual honk
  var ctx;
  car.addEventListener("click", function () {
    car.classList.add("honking");
    setTimeout(function () { car.classList.remove("honking"); }, 1600);
    try {
      ctx = ctx || new (window.AudioContext || window.webkitAudioContext)();
      [0, 0.18].forEach(function (t) {
        var o = ctx.createOscillator(), g = ctx.createGain();
        o.type = "square";
        o.frequency.value = 415;
        g.gain.setValueAtTime(0.0001, ctx.currentTime + t);
        g.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + t + 0.02);
        g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + t + 0.14);
        o.connect(g).connect(ctx.destination);
        o.start(ctx.currentTime + t);
        o.stop(ctx.currentTime + t + 0.15);
      });
    } catch (err) {}
  });
})();

// ---------- For anyone who opens dev tools ----------
console.log(
  "%cReading source? You're my kind of person.\n%cSay hi: gmail@pierceschiller.com",
  "color:#ff2fd0;font:700 14px sans-serif;text-shadow:0 0 6px #ff2fd0",
  "color:#19f3ff;font:12px sans-serif"
);
