browser.browserAction.onClicked.addListener(function(tab){
	browser.tabs.executeScript(null, {file: "klixFilter.js"});
});
