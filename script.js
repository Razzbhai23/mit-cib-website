const translations = { en: "नेपाली", ne: "English" };
let currentLanguage = "en";
const langSwitch = document.getElementById("langSwitch");

function setLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language;
  document.querySelectorAll("[data-en][data-ne]").forEach((element) => {
    element.innerHTML = element.dataset[language];
  });
  langSwitch.textContent = translations[language];
}

langSwitch.addEventListener("click", () => {
  setLanguage(currentLanguage === "en" ? "ne" : "en");
});

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
menuToggle.addEventListener("click", () => {
  const open = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});
mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

function showPreview(event, resultId, fields) {
  event.preventDefault();
  const result = document.getElementById(resultId);
  const lines = fields.map(([label, value]) => `${label}: ${value}`);
  result.textContent = "Preview only — nothing has been sent or saved.\\n" + lines.join("\\n");
}

document.getElementById("reportForm").addEventListener("submit", (event) => {
  const category = document.getElementById("reportType").value;
  const details = document.getElementById("reportDetails").value.trim();
  const consent = document.getElementById("reportConsent").checked;
  if (!category || !details || !consent) return;
  showPreview(event, "reportResult", [["Category", category], ["Description", details]]);
});

document.getElementById("contactForm").addEventListener("submit", (event) => {
  const name = document.getElementById("contactName").value.trim();
  const topic = document.getElementById("contactTopic").value;
  const message = document.getElementById("contactMessage").value.trim();
  if (!name || !message) return;
  showPreview(event, "contactResult", [["Name", name], ["Topic", topic], ["Message", message]]);
});
