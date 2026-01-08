const selectors = [
  "#related",
  "ytd-rich-grid-renderer",
  "ytd-watch-next-secondary-results-renderer",
  "ytd-shorts"
];

function hideDistractions() {
  selectors.forEach(e => {
    document.querySelectorAll(e).forEach(el => {
      el.style.display = "none";
    });
  });
}

function showDistractions() {
  selectors.forEach(e => {
    document.querySelectorAll(e).forEach(el => {
      el.style.display = "";
    });
  });
}

chrome.runtime.onMessage.addListener((msg) => {
  if (msg.type === "INTENT_ON") hideDistractions();
  if (msg.type === "INTENT_OFF") showDistractions();
});
