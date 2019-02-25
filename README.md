# angular-vue-test
This repo is to test out embedding new vue components in a legacy angular app.

I began by generating two separate projects using the [Angular](https://github.com/angular/angular-cli) and [Vue](https://cli.vuejs.org/) CLIs. I merged them into a single repo using [Lerna](https://lernajs.io/).

The basic story is to package the Vue app as a custom web component that can be used in the Angular app. There are a handful of changes to the projects generated by the CLIs that are detailed in the READMEs in each project in the `packages` directory.

## Demo
[See it in action here](https://nickolas1.github.io/angular-vue-test/)

## Installing

Each project can be developed in isolation using the standard tooling setup by the CLIs. 
The Angular app consumes the built version of the Vue app, so the order to test this out should be:

```
> # get the repo
> git clone git@github.com:nickolas1/angular-vue-test.git
> cd angular-vue-test
> # install lerna and link projects. only really need do this one if the projects are published to an npm repo
> npm install
> npx lerna link
> # build the vue dependency
> cd packages/new-vue-stuff
> npm install
> npm run build:wc
> # serve the angular app
> cd ../fake-legacy-angular-app
> npm install
> npm run start
```
