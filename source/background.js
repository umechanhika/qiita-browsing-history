chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.local.clear();
    chrome.webNavigation.onCompleted.addListener(function(details) {
        chrome.tabs.get(details.tabId, function(tab) {
            // Create new history
            const history = {
                date: Date.now(),
                title: tab.title,
                url: tab.url
            };

            // Get current histories
            chrome.storage.local.get(function(items) {
                if (!items.histories) {
                    // if current histories are empty, create histories array
                    items.histories = [];
                }

                // Add new history to current histories
                items.histories.unshift(history);

                // Save to strorage
                chrome.storage.local.set(items);
            });
        });
    },
    {
        url: [
            {
                hostEquals: "qiita.com",
                pathContains: "items"
            },
        ]
    });
});