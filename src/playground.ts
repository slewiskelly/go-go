chrome.runtime.onMessage.addListener((message) => {
    const code = document.getElementById("code") as HTMLTextAreaElement;
    const imports = document.getElementById("importsBox") as HTMLInputElement;
    const fmt = document.getElementById("fmt") as HTMLInputElement;

    // TODO(slewiskelly): Improve this to include the following requirements, if
    // not already in the provided message:
    // - package main
    // - func main() { }

    code.value = message;
    imports.checked = true;
    fmt.click();
});
