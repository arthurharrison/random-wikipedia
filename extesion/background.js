chrome.browserAction.onClicked.addListener(function(activeTab) {
    chrome.tabs.update({ url: "https://en.wikipedia.org/wiki/special:random" });   
});
chrome.commands.onCommand.addListener(function(command) {
    chrome.tabs.update({ url: "https://en.wikipedia.org/wiki/special:random" });
});