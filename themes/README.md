# Themes

This folder contains all the themes developed for md-resume.

## Installation

```javascript
npm install
```

will install all the dependencies required for the themes within this folder. You can go through a sample theme folder, for example the `headshot` theme and view it's source code to understand how a theme is written.

## Themes

Once you have cloned this repository and installed the dependencies, you are ready to start. This repository has three themes in built with them, called **first**, **headshot** and **newave**. If you open these folders, there are two files in each, one is the `.html` file which is the template and the `.css` file which is the styling for that theme.

### Creating a Theme

Navigate into the `themes` folder and create a new folder called `cyclops` or whatever you would like to, but make sure you it is small-case and has no spaces, so you can have `a_really_long_name` titled theme having underscores instead of the spaces.

Once you have the folder ready, create two files with the exact same name as the folder, in our case it would be `cyclops.html` and `cyclops.css` inside the folder you just created.

#### The HTML

The `cyclops.html` file you just created, will essentially be only the template section that will be ouputted into the `index.html` in the root directory of this repository. Go ahead, open the `index.html` and you'll see a `<div class="output">` [in the file](https://github.com/kaizer1v/json-resume/blob/master/index.html#L12). This is where your template will be rendered. Which means, you don't have to write the **head**, **title**, **link** tags as well as the end **body** and **html** tags - these have already been included in your `index.html`. You can simply focus on writing your template bit inside your `cyclops.html` theme file.

Go ahead and copy the below content into your `cyclops.html` file

```html
<div id="cv">
  <div class="mainDetails">
    <div id="name">
      <h1><%= resume['name'] %></h1>
      <h2><%= resume['title'] %></h2>
    </div>
    <div id="contactDetails">
      <ul>
        <li><address><i class="fas fa-envelope"></i> <a href="mailto:<%= resume['email'] %>" target="_blank"><%= resume['email'] %></a></address></li>
        <li><i class="fab fa-github"></i> <%= resume['github'] %></li>
        <li><i class="fas fa-phone-square"></i> <%= resume['mobile'] %></li>
      </ul>
    </div>
    <div class="clear"></div>
  </div>
```

The themes automatically provides you with [lodash templating](https://lodash.com/docs/4.17.11#template) features. The template also provides you with an object called `resume` within which you will have access to all the key value pairs that you will defined inside your `resume/resume.json` [file](https://github.com/kaizer1v/json-resume/blob/master/resume/resume.json) located inside the `resume` folder in the root directory. We will see later, how to add new data into the json and make it reflect on your resume.

Once you have added the html section bit, now you need to tell the application to use this new theme. We will also add some styling later once we have updated the app to point to the new theme.

Open the `index.html` file from your root directory and write below the end of the body tag (`</body>`), add a script tag, and enter the following javascript code inside.

```javascript
(function(json, theme_name){
  Resume.json('resume/' + json).then(function(resume) {
    Resume
      .template('themes/'+ theme_name +'/'+ theme_name +'.html', { resume: resume }, '.output')
      .theme('themes/node_modules/bootstrap/dist/css/bootstrap.min.css')
      .theme('https://use.fontawesome.com/releases/v5.5.0/css/all.css')
      .theme('themes/'+ theme_name +'/'+ theme_name +'.css', false)
  })
})('resume.json', 'cyclops');
```

This tells the app to use the `resume.json` file for the data part and use the `cyclops` theme that you just created to render your resume.

#### The CSS

Now that you have added the templating and also pointed the app to your new theme, you can add some style to the `cyclops.css` inside your theme folder. Go ahead and copy the css directly from [this file over here](https://github.com/kaizer1v/json-resume/blob/master/themes/newave/newave.css).

### Run

All set, you can now run the following command, from your shell or command prompt, from the root directory of this project, like

```bash
md-resume$ python -m http.server 8998
```

Now go ahead and view [127.0.0.1:8998](127.0.0.1:8998) from your browser and you can see the theme you just created.
