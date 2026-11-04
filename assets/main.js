(function () {
  "use strict";
  var BP = 960;
  var root = document.documentElement;
  var burger = document.getElementById("burger");
  var drawer = document.getElementById("drawer");
  var overlay = document.getElementById("overlay");
  var closeBtn = document.getElementById("drawerClose");
  function openDrawer() {
    if (!drawer) return;
    drawer.classList.add("open");
    overlay.classList.add("open");
    burger.setAttribute("aria-expanded", "true");
    root.style.overflow = "hidden";
  }
  function closeDrawer() {
    if (!drawer) return;
    drawer.classList.remove("open");
    overlay.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
    root.style.overflow = "";
  }
  if (burger) {
    burger.addEventListener("click", function () {
      if (drawer.classList.contains("open")) { closeDrawer(); } else { openDrawer(); }
    });
    overlay.addEventListener("click", closeDrawer);
    closeBtn.addEventListener("click", closeDrawer);
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeDrawer();
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth > BP) closeDrawer();
    });
  }
  var accs = document.querySelectorAll(".macc > button");
  for (var i = 0; i < accs.length; i++) {
    accs[i].addEventListener("click", function () {
      var li = this.parentNode;
      var open = li.classList.toggle("open");
      this.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }
  var qs = document.querySelectorAll(".faq-q");
  function setH(item, open) {
    var a = item.querySelector(".faq-a");
    a.style.maxHeight = open ? a.scrollHeight + 40 + "px" : "0px";
  }
  for (var j = 0; j < qs.length; j++) {
    qs[j].addEventListener("click", function () {
      var item = this.parentNode;
      var open = item.classList.toggle("open");
      this.setAttribute("aria-expanded", open ? "true" : "false");
      setH(item, open);
    });
  }
  window.addEventListener("resize", function () {
    var items = document.querySelectorAll(".faq-item.open");
    for (var k = 0; k < items.length; k++) { setH(items[k], true); }
  });
})();
