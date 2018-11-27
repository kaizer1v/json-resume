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

clone this repo and run the following command

```bash
npm install
```

will install the dependencies required for the `md-resume` app.

**NOTE** This installation step is NOT the same as installing dependencies for the themes. In order to do that, kindly read through the [themes README file](themes/README.md)