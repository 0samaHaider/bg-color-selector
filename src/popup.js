document.querySelectorAll("button").forEach(button => {
  button.addEventListener("click", async () => {
    const color = button.getAttribute("data-color");

    let [tab] = await chrome.tabs.query({
      active: true,
      currentWindow: true
    });

    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      args: [color],
      function: changeBackground
    });
  });
});

function changeBackground(color) {
  document.body.style.backgroundColor = color;
}
