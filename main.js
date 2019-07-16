/*****
 * Renders a selected json file along with a selected theme name
 *  
 * @param<path> - the path to the json file for the resume 
 * @param<str>. - the name of the theme for the resume
 * @return - nothing is returned
 */
function render(json, theme_name) {
  Resume.json('resume/' + json).then((resume) => {
    Resume
      .template('themes/'+ theme_name +'/'+ theme_name +'.html', { resume: resume }, '.output')
      .theme('themes/node_modules/bootstrap/dist/css/bootstrap.min.css')
      // .theme('themes/node_modules/font-awesome/css/font-awesome.min.css')
      .theme('https://use.fontawesome.com/releases/v5.5.0/css/all.css')
      .theme('themes/'+ theme_name +'/'+ theme_name +'.css', false)
    
    // update hash in url
    document.location.hash = '#' + theme_name
  })
}

if(document.location.hash !== "") {
  var theme = document.location.hash.split('#')[1]
  render('resume.json', theme)
  document.getElementById('select-theme').value = theme
} else {
  render('resume.json', 'first')
}

// save resume as pdf button
document.getElementById('print-pdf').onclick = Resume.topdf

// update theme from dropdown
var theme_dd = document.getElementById('select-theme')
theme_dd.onchange = function() {
  var sel_theme = this.value.toLowerCase()
  render('resume.json', sel_theme)
}