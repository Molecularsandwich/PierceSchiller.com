// Assemble the address at runtime so scrapers reading the HTML don't see it.
(function () {
  var u = ["pierce", "schiller"].join(".");
  var d = ["gmail", "com"].join(".");
  var addr = u + "@" + d;
  document.querySelectorAll(".js-mail").forEach(function (a) {
    a.href = "mailto:" + addr;
  });
  var t = document.querySelector(".js-mail-text");
  if (t) t.textContent = addr;
  document.getElementById("yr").textContent = new Date().getFullYear();
})();
