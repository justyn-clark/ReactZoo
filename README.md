# React Zoo

You are adding animals to a zoo.  Create a React application to support this.

  Show a list of animals with the ability to add, edit, and remove them easily.  

Create the 'perfect form component' to add new animals.
   
* Text (Name)   
* Select (Species)   
* Date (Entry Date)   
* Checkbox (Bigger than a breadbox?)  If true show the following:     
* Text w/ money validation (Maintenance Cost)  

The form should feature all micro interactions you would expect from an AWESOME form:   
* Labels   
* Placeholders   
* Limits or input masks as appropriate   
* Highlighting   Validation - client AND server validation messages.   
* Button animations while waiting on all requests (slow down response to see them).   
* Disable form while requests are being made.   
* Ability to reset and clear form.   And more - your pick.  

It is important to pay attention to detail.  
Use Redux to have full CRUD for one entity.  
Custom middleware?  Sagas?  Your pick. 
  Use a mock REST service or even local json to represent different responses as you see fit.  
You are not required to persist data outside of your Redux store.   
Display elegant messages for both success and errors.  Have a clean UI.  
Use a UI kit of your choice.  
Bonuses:   Create tests using Enzyme or other UI test library.
 Incorporate some advanced animations or transitions. 
 Add animal images.    
You can leverage whatever libraries, boilerplates, etc that will help you get the job done.

* Source: [github.com/justyn-clark/modernfrontend.io](https://github.com/justyn-clark/modernfrontend.io)
* Author: [Justyn Clark](http://justynclark.com)
* Homepage: [modernfrontend.io](http://www.modernfrontend.io)

## Run the site

1. **Clone the project**. `git clone http://github.com/justyn-clark/initiator.git`.
2. **Install local dependancies**. run `[sudo] yarn install` (first time users)
3. **Run the project**. `yarn start`
This will run the automated build process, start up a webserver, and open the application in your default browser. When doing development with this kit, this command will continue watching all your files.


## Features

Made using Initiator THE modern front-end boilerplate and workflow.
* Source: [github.com/justyn-clark/initiator](http://github.com/justyn-clark/initiator)
* Author: [Justyn Clark](http://justynclark.com)
* Homepage: [initiator.justynclark.com](http://initiator.justynclark.com)

These are some of the main features and modern technologies used:
* Built-in npm build scripts for auto-compilation and auto-minification of CSS and JavaScript files for production
* BEM - Block Element Modifier method as style convention for CSS naming  
* ES6 Module Pattern setup with Browerify module bundling
* ES6 newest features including: fetch and promises, etc...     
* CSS Grid display for page layouts
* HTML5 framework and HTML5 semantics
* Baseline HTML5 features, DNS prefetching, responsive meta
* Encourages one-file CSS/JS in the view (HTML) for performance
* Browsersync live reloading the browser upon changes
* Includes .editorconfig for consistent coding styles in IDEs
* Standard .gitignore to ignore minified files and standard ignorables such as .DS_Store
* JSHint .jshintrc file for configuring JavaScript linting
* Extremely lightweight footprint

## Project Structure

````
├── app
│   ├── img
│   ├── js
|   |   └── eventemitter2.js
│   ├── app.css
|   ├── bundle.js
│   |   ├── bundle.min.js
│   |   └── bundle.min.js.map
|   └── scripts.js
|       ├── scripts.min.js
│       └── scripts.min.js.map
├── src
│   └── js
│   │   ├── modules
│   │   └── scripts
│   ├── app.js
│   └── scss
│       ├── base
│       ├── mixins
│       ├── modules
│       ├── partials
│       └── style.scss
├── .babelrc
├── .editoronfig
├── .gitignore
├── favicon.ico
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── .jshintrc
````
