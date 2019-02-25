# new-vue-stuff
## Changes to cli defaults to get this working 
### package.json
Add a script with a web-component build target pointing to the main App entry point.
```
"scripts": {
    "build:wc": "vue-cli-service build --target wc --name vue-app src/App.vue"
}
```
To build the project for embedding in Angular run 
``` 
npm run build:wc
```

### src/vue.config.js (If supporting IE11 only, or if you really love css modules)
This is set up to use css modules for full IE11 compatability. If you're instead only targeting realistic browsers, skip this and just use scoped css in your Vue components.
``` 
module.exports = {
    css: {
        loaderOptions: {
            css: {
                // enable CSS Modules
                modules: true,
                // customize generated class names
                localIdentName: '[local]_[hash:base64:8]'
            }
        }
    }
};
```


### If using vuex
#### src/main.js
This file is not going to be part of the web component, so instead of registering vuex at the app bootstrap phase, we need to register it with the main wrapper component. Remove vuex stuff from here:
``` 
import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
    render: h => h(App)
}).$mount('#app');
```

#### src/App.vue
and add it here:
``` 
import store from './store';

export default {
        name: 'app',
        store, // if using a vuex store, initialize it here rather than in main.js
        ...etc. etc.
```
*`App.vue` is the communication layer between Angular and Vue*. Any properties that are passed in go through this component's props list, and any outbound communication is emitted here. Examples of each are included.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
