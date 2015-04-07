# Simple Profile Widget Application

## Overview

This is a simple profile widget application.

### Get Started

The application relies upon various node.js tools. To install these, run:

```
npm install
```

### Running the app during development

- Run `npm start`
- navigate your browser to `http://localhost:8000/index.html` to see the app running in your browser.

### compiling less files to css

- Run `grunt` or `grunt dev` (to have watcher task)

## Application Directory Layout

    profile-widget/     --> all of the files to be used
      assets-src/         --> dev files located
        css/              --> less files
          app.less        --> less version of the app stylsheet
      assets/             --> final assets files
        css/              --> css files
          app.css         --> default stylesheet
        images/           --> image files
        js/               --> javascript files
          app.js          --> main application module
          controllers.js  --> application controllers
          directives.js   --> application directives
          services.js     --> custom angular services
          libs/			--> 3rd party js libraries
            angular.js
            angular-resource.js
            jquery.js
      index.html        --> main html template
      partials/         --> partial html templates
        posts-box.html  --> Posts box html template
      data/             --> json data used in the app