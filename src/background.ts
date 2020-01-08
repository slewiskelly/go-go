type HandlerFunc = (info: chrome.contextMenus.OnClickData, tab: chrome.tabs.Tab | undefined) => void;

let handlers = new Map<string, HandlerFunc>();

handlers.set("Run in Go Playground", () => {
  let selectionText: string;

  chrome.tabs.executeScript({
    code: "window.getSelection().toString();",
    // info.selectionText does not preserve new lines:
    //  - https://bugs.chromium.org/p/chromium/issues/detail?id=116429
    // tslint:disable-next-line: only-arrow-functions
  }, function(selection) {
    selectionText = selection[0];
  });

  chrome.tabs.create({ url: "https://play.golang.org" });
  chrome.tabs.onUpdated.addListener((tabId) => {
    chrome.tabs.sendMessage(tabId, selectionText);
  });
});

handlers.set("Search in go.dev", (info, _) => {
  chrome.tabs.create({ url: `https://pkg.go.dev/search?q=${info.selectionText}` });
});

for (const handler of handlers) {
  chrome.contextMenus.create({
    contexts: ["selection"],
    id: handler[0],
    title: handler[0],
  });
}

chrome.contextMenus.onClicked.addListener((info, tab) => {
  const handler = handlers.get(info.menuItemId);

  if (handler !== undefined) {
    handler(info, tab);
  }
});
