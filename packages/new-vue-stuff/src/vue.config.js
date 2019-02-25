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
