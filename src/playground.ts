chrome.runtime.onMessage.addListener((message) => {
    const code = document.getElementById("code") as HTMLTextAreaElement;
    const imports = document.getElementById("importsBox") as HTMLInputElement;
    const fmt = document.getElementById("fmt") as HTMLInputElement;

    let blockComment = false;

    for (const line of message.split("\n")) {
        if (line.startsWith("/*")) {
            blockComment = true;
        }

        if (line.endsWith("*/")) {
            blockComment = false;
            continue;
        }

        if (line.length < 1 || line.startsWith("//") || blockComment) {
            continue;
        }

        if (!line.startsWith("package")) {
            message = "package main\n\n" + message;
        }

        break;
    }

    code.value = message;
    imports.checked = true;
    fmt.click();
});
