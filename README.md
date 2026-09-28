# Complimenten App

A simple web app that shows a random Dutch compliment whenever you press the button.

## Features

- Generates a random compliment with one click
- Includes 1,100 Dutch compliments
- Runs entirely in the browser
- Uses plain HTML, CSS, and JavaScript with no dependencies or build step

## Getting started

Because the app loads its compliments with `fetch()`, serve the project through a local web server instead of opening `index.html` directly.

### Requirements

- A modern web browser
- Any local HTTP server

### Run locally

1. Clone the repository:

   ```bash
   git clone https://github.com/player1error/-complimenten-app.git complimenten-app
   cd complimenten-app
   ```

2. Start a local server. For example, with Python:

   ```bash
   python -m http.server 8000
   ```

3. Open [http://localhost:8000](http://localhost:8000) in your browser.
4. Select **Get compliment** to display a random compliment.

You can also use an editor extension such as Live Server to serve the project.

## Project structure

```text
.
|-- data/
|   `-- compliments.json  # Collection of Dutch compliments
|-- color.css             # Page styles
|-- index.html            # App markup
|-- srcipt.js             # Compliment loading and selection logic
|-- LICENSE
`-- README.md
```

> `srcipt.js` is the current filename used by `index.html`; keep both names in sync if you rename it.

## How it works

When the page loads, `srcipt.js` fetches `data/compliments.json`. Clicking the button selects a random entry with `Math.random()` and writes it to the output heading on the page.

## Add or edit compliments

Edit the `compliments` array in `data/compliments.json`:

```json
{
  "compliments": [
    "Je bent geweldig!",
    "Je maakt de wereld mooier!"
  ]
}
```

Keep the file valid JSON: use double quotes, separate entries with commas, and do not add a trailing comma after the final entry.

## Known limitations

- The navigation links are placeholders and do not lead to separate pages yet.
- Compliments cannot currently be copied, shared, or saved from the interface.
- A loading error is not shown in the interface if `compliments.json` cannot be fetched.

## Contributing

Contributions are welcome. Fork the repository, create a branch, make your changes, and open a pull request. When changing the compliment collection, check that `data/compliments.json` remains valid JSON.

## Author

Created by [player1error](https://github.com/player1error).

## License

This project is available under the [MIT License](LICENSE).
