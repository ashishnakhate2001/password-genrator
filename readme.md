# Password Generator

This is a Chrome extension that generates a random password.

## Features

- Generate a random password with a single click
- Copy the generated password to the clipboard
- Toggle dark mode

## How to Use

1. Click on the extension icon to open the popup.
2. Click on the "Generate Random" button to generate a new random password.
3. The generated password will be displayed in the text box.
4. Click on the "Copy to Clipboard" button to copy the password to the clipboard.

## Development

This extension is built with HTML, CSS, and JavaScript.

The main logic for generating the password and copying it to the clipboard is in [popup.js](password genrator/popup.js).

The extension's UI is defined in [popup.html](password genrator/popup.html) and styled with [style.css](password genrator/style.css).

The extension's configuration is in the [manifest.json](password genrator/manifest.json) file.

## Permissions

This extension requires the `clipboardWrite` permission to copy the password to the clipboard.

## Installation

Follow these steps to add this extension to your Chrome browser:

1. Open the Chrome browser and navigate to `chrome://extensions`.
2. Enable Developer mode by clicking the toggle switch at the top right.
3. Click the "Load unpacked" button and select the directory for this extension.
4. The extension should now be added to your browser. You can access it by clicking the extension icon in the toolbar.
