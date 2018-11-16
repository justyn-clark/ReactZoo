# React Zoo

Add, edit, and remove animals to a zoo easily!

Source: [github.com/justyn-clark/ReactZoo](https://github.com/justyn-clark/ReactZoo)

Author: [Justyn Clark](http://justynclark.com)

Homepage: [http://reactzoo.surge.sh/](http://reactzoo.surge.sh/)

## Form Features

* Text (Name)   
* Select (Species)   
* Date (Entry Date)   
* Checkbox for text w/ money validation (Maintenance Cost)    
* Ability to reset and clear form.
* Placeholders 
* Redux CRUD for one entity
* No UI kit. All custom styling

## Run the site

1. **Clone the project**. `git clone https://github.com/justyn-clark/ReactZoo.git`.
2. **Install local dependancies**. run `[sudo] yarn install` (first time users)
3. **Run the project**. `yarn start`
This will run the automated build process, start up a webserver, and open the application in your default browser. When doing development with this kit, this command will continue watching all your files.


## Modern Front-end Features

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
