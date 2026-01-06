console.log("script loaded");

const bg = document.body;

const toolsBtn = document.getElementById("button");
if (toolsBtn) {
  toolsBtn.addEventListener("click", () => {
    window.location.href = "tools.html";
  });
}

const accountsBtn = document.getElementById("button1");
if (accountsBtn) {
  accountsBtn.addEventListener("click", () => {
    window.location.href = "acc.html";
  });
}
