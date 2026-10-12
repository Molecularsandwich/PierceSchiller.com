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
