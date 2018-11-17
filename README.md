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
* Webpack build for auto-compilation and auto-minification of CSS and JavaScript files for production
* React
* BEM - Block Element Modifier method as style convention for CSS naming  
* ES6 
* Flexbox display for page layouts
* HTML5 framework and HTML5 semantics
* Baseline HTML5 features, DNS prefetching, responsive meta
* Encourages one-file CSS/JS in the view (HTML) for performance
* Includes .editorconfig for consistent coding styles in IDEs
* Standard .gitignore to ignore minified files and standard ignorables such as .DS_Store
* JSHint .jshintrc file for configuring JavaScript linting
* Extremely lightweight footprint

## Project Structure

```
 |-- .babelrc
 |-- .gitignore
 |-- README.md
 |-- package.json
 |-- webpack.config.js
 |-- yarn.lock
 |-- public
 |   |-- bundle.js
 |   |-- index.html
 |-- src
     |-- app.js
     |-- directoryList.md
     |-- actions
     |   |-- animals.js
     |   |-- filters.js
     |-- components
     |   |-- AddAnimal.js
     |   |-- Animal.js
     |   |-- AnimalFilter.js
     |   |-- AnimalForm.js
     |   |-- AnimalList.js
     |   |-- Animals.js
     |   |-- EditAnimal.js
     |   |-- Header.js
     |   |-- NotFound.js
     |-- reducers
     |   |-- animals.js
     |   |-- filters.js
     |-- routers
     |   |-- AppRouter.js
     |-- selectors
     |   |-- animals.js
     |-- store
     |   |-- store.js
     |-- styles
         |-- styles.scss
         |-- base
         |   |-- base.scss
         |   |-- settings.scss
         |-- components
             |-- buttons.scss
             |-- container.scss
             |-- form.scss
             |-- header.scss
```
