chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.create({ url: "https://www.google.com/?safe=active&ssui=on" });
});
