(function () {
  "use strict";
  var root = document.documentElement;
  try {
    var q = new URLSearchParams(window.location.search).get("motion");
    if (q === "full" || q === "auto" || q === "off") {
      root.setAttribute("data-motion-mode", q);
      root.setAttribute("data-motion", q === "full" ? "full" : q === "off" ? "off" : "auto");
    }
  } catch (e) {}

  var mode = root.getAttribute("data-motion-mode") || "full";
  var reduced =
    mode === "off" ||
    (mode === "auto" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  window.SOFTLAND_MOTION = { mode: mode, enabled: !reduced };

  function downloadDraft(fields, title, filename) {
    var lines = [title, ""];
    Object.keys(fields).forEach(function (k) {
      lines.push(k + ": " + fields[k]);
    });
    lines.push("", "Status: local draft only — nothing was sent.");
    var blob = new Blob([lines.join("\n")], { type: "text/plain;charset=utf-8" });
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(function () {
      URL.revokeObjectURL(a.href);
      a.remove();
    }, 0);
  }

  function bindContactDraft() {
    var form = document.querySelector("form.php-email-form");
    if (!form) return;
    form.setAttribute("action", "#");
    form.removeAttribute("method");
    form.addEventListener(
      "submit",
      function (ev) {
        ev.preventDefault();
        ev.stopImmediatePropagation();
        var name = (form.querySelector("#name") || {}).value || "";
        var email = (form.querySelector("#email") || {}).value || "";
        var subject = (form.querySelector("#subject") || {}).value || "";
        var messageEl = form.querySelector("textarea[name='message'], #message");
        var message = messageEl ? messageEl.value || "" : "";
        var err = form.querySelector(".error-message");
        var sent = form.querySelector(".sent-message");
        var loading = form.querySelector(".loading");
        if (loading) loading.style.display = "none";
        if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
          if (err) {
            err.textContent = "Please fill in name, email, subject, and message.";
            err.style.display = "block";
          }
          return false;
        }
        if (err) err.style.display = "none";
        downloadDraft(
          { Name: name, Email: email, Subject: subject, Message: message },
          "SoftLand inquiry draft",
          "softland-inquiry-draft.txt"
        );
        if (sent) {
          sent.textContent = "Draft saved locally. Nothing was sent to a server.";
          sent.style.display = "block";
          setTimeout(function () {
            sent.style.display = "none";
          }, 4000);
        }
        form.reset();
        return false;
      },
      true
    );
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bindContactDraft);
  } else {
    bindContactDraft();
  }
})();
