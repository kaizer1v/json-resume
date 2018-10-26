# JSON Resume

This app helps you generate your resume using a json object, apply themes to it and save it as a PDF. A quick way to edit and update resumes.

## Usage

Loading resume data from an external `json` file. 

```javascript
Resume.load('resume.json', function(resume) {
  // ... do something
})
```

`Resume.js` internally uses lodash templating that allows the user to customize templates themselves. You can use the `jqRender` or the `render` method to render templates.

```html
<h1 class="title"><%= name %></h1>
```

```javascript
Resume.jqRender('.title', { name: 'Vivek Shrinivasan' })
```


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


## Resume Format

This app is designed to help you fill the elements in a pre-templated foramt. Thus, you need to fill in the values for the following which already exist in the template.

### Intro

- Name
- Date of Birth
- Email
- Github link

- Experience
- Education
- Skills