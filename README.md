# Spam Email Detection

A simple GitHub Pages-friendly mini project built with HTML, CSS, and JavaScript. All files are in the repository root, so there are no nested folders.

## Files
- `index.html` — main webpage
- `style.css` — styling and responsive layout
- `script.js` — simple rule-based spam detection
- `README.md` — project description and setup

## Run locally
Download all files into the same folder, then open `index.html` in a browser.

## Publish on GitHub Pages
1. Create a GitHub repository.
2. Upload these four files directly to the repository root.
3. Open **Settings → Pages**.
4. Under the build/deployment section, choose **Deploy from a branch**.
5. Select your `main` branch and `/ (root)`, then save.
6. Wait for GitHub Pages to publish the site.

## How detection works
The script checks the text for common spam-related phrases, links, and unusually long numbers. It marks a message as Spam when two or more warning signals are found.

## Limitation
This is a basic educational demo, not a trained machine-learning model. It may misclassify messages and should not be used as a real email security system.
