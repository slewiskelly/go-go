# Go Go (Web Extension)

The web extension provides context menus specific to the
[Go programming language](https://golang.org/):

*   Search highlighted text in [go.dev](https://go.dev)
*   Run highlighted text in the [Go Playground](https://play.golang.org/)

The extension is currently being reviewed, but will be available on the
[Chrome Web Store](https://chrome.google.com/webstore/category/extensions/)
in the near future.

In the meantime, an "unpacked" version can be used. Instructions follow.

## Developing

1. Clone the repository.

```sh
git clone https://github.com/slewiskelly/go-go && cd go-go
```

2. Install dependencies:

```sh
npm install
```

3. Hack. 

4. Build:

```sh
npm run-script build
```

**Note**: Other scripts include: `clean`, `lint`, and `zip`. All of which are
self-explanatory.

5. In a Chrome/Chromium browser, navigate to `chrome://extensions`. Click
   "Load unpacked" in the top left-hand corner; or to update, the refresh button
   in the extension's card.

**Note**: Ensure developer mode is enabled, via the toggle in the top right-hand
corner.
