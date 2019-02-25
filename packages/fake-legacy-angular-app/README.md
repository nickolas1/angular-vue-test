# FakeLegacyAngularApp
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.3.

## Changes to cli defaults to get this working 
### package.json
Manually enter a dependency to the vue component project
``` 
"dependencies": {
    "new-vue-stuff": "^0.1.0",
}
```
After this running
``` 
npx lerna link
```
from the main project level will add a symlink in the Angular project's `node_modules` to the Vue project.

### src/app/app.module.ts
Enable custom elements by adding a `schemas` section to the module options
``` 
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

@NgModule({
  ...etc. etc.
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
```

### index.html
The Vue component requires Vue as a global variable. Add a this as a script tag. If using vuex, add that too, after the vue dependency.
```
<head>
  ...etc. etc.
  <script src="https://unpkg.com/vue"></script> 
  <script src="https://unpkg.com/vuex"></script>
</head>
```

### angular.json
Add the vue script to the build definition. If supporting IE11, add the webcomponentsjs polyfill as well.
(If the vue project is published to an npm repo, could use `node_modules/new-vue-stuff` instead of `../new-vue-stuff`.)
``` 
"projects": {
  "architect": {
    "build": {
      "options": {
        "scripts": [
           "node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js",
           "../new-vue-stuff/dist/vue-app.min.js"
        ]
      }
    }
  }
}    
```

If the Vue project uses assets that get webpacked and dumped into the Vue dist's `img` directory, that needs to be made available to the Angular app. Create a symlink to `path/to/the/vue/project/dist/img` as `src/img`.

### Use the Vue component
pass things into it, react to events etc.
``` 
<vue-app [message]="messageForVue" (count-changed)="onCountChanged($event)"></vue-app>
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
