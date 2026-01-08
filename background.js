let intentEnabled = false;

chrome.runtime.onMessage.addListener((msg) => {
  if (msg.type === "TOGGLE_INTENT") {
    intentEnabled = !intentEnabled;

    chrome.tabs.query({ url: "*://*.youtube.com/*" }, (tabs) => {
      tabs.forEach(tab => {
        chrome.tabs.sendMessage(tab.id, {
          type: intentEnabled ? "INTENT_ON" : "INTENT_OFF"
        });
      });
    });
  }
  
});
