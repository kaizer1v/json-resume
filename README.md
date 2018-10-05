# Markdown Resume

This app helps you generate your resume using [markdown syntax](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

## Installation

```bash
npm install showdown -g
```

this app depends on [showdown](https://github.com/showdownjs/)

## Steps

- make changes in `sample.md` file
- run `~/.npm-global/bin/showdown makehtml -i sample.md -o sample.html` command
- view `fromhtml.html` in the browser for output

## CSS

css changes are provided inside `css/` folder, uses `theme1.css`

## Ref Link

- for downloading as PDF from html [jsPDF](https://github.com/MrRio/jsPDF)