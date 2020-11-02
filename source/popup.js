chrome.storage.local.get(function(items) {
    const historyList = document.getElementById("historyList");
    const emptyElement = document.getElementById("emptyElement");

    if (!items.histories) {
        // No histories    
        return;
    } else {
        emptyElement.style.display = "none";
    }

    items.histories.forEach(element => {
        // Create date text
        let dateText = document.createElement("td");
        let date = new Date(element.date);
        dateText.innerHTML = date.toLocaleDateString() + "&nbsp;" + date.toLocaleTimeString();
        dateText.style.fontSize = "13px";
        dateText.style.width = "130px";

        // Create link text
        let linkText = document.createElement("td");
        linkText.innerHTML = `<a href="${element.url}" target="_blank">${element.title}</a>`;
        linkText.style.width = "470px";
        linkText.style.display = "block";
        linkText.style.fontSize = "13px";
        linkText.style.textOverflow = "ellipsis";
        linkText.style.overflow = "hidden";
        linkText.style.whiteSpace = "nowrap";

        // Append child to history item
        let historyListItem = document.createElement("tr");
        historyListItem.appendChild(dateText);
        historyListItem.appendChild(linkText);

        // Append history item to history list
        historyList.appendChild(historyListItem);
    });
});