const suspiciousPhrases = [
  "free", "winner", "won", "prize", "claim", "urgent", "cash", "loan",
  "click here", "congratulations", "limited offer", "act now", "buy now",
  "guaranteed", "lottery", "selected", "earn money", "verify your account",
  "password", "credit card"
];

document.getElementById("detector-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("email_text").value.trim().toLowerCase();
  const signals = suspiciousPhrases.filter(phrase => email.includes(phrase));

  if (/https?:\/\/|www\./i.test(email)) signals.push("contains a link");
  if (/\b\d{10,}\b/.test(email)) signals.push("long number");

  const uniqueSignals = [...new Set(signals)];
  const isSpam = uniqueSignals.length >= 2;
  const result = document.getElementById("result");

  result.className = `result ${isSpam ? "spam" : "safe"}`;
  result.replaceChildren();

  const heading = document.createElement("h2");
  heading.textContent = `Result: ${isSpam ? "Spam" : "Not Spam"}`;
  result.appendChild(heading);

  const count = document.createElement("p");
  count.textContent = `Warning signals found: ${uniqueSignals.length}`;
  result.appendChild(count);

  if (uniqueSignals.length) {
    const label = document.createElement("p");
    label.className = "small-title";
    label.textContent = "Signals detected:";
    result.appendChild(label);

    const list = document.createElement("ul");
    uniqueSignals.forEach(signal => {
      const item = document.createElement("li");
      item.textContent = signal;
      list.appendChild(item);
    });
    result.appendChild(list);
  } else {
    const message = document.createElement("p");
    message.textContent = "No common spam signals were detected by this simple demo.";
    result.appendChild(message);
  }
});
