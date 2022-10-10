const mix = require('laravel-mix');
const {copy} = require("laravel-mix");

mix.webpackConfig(webpack => {
    return {
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery',
                Popper: ['popper.js', 'default'],
            })
        ]
    };
});

mix.autoload({
    jquery: ['$', 'jQuery', 'window.jQuery'],
});

mix
    //css
    .copy('resources/style/src/plugins/src/highlight/styles/monokai-sublime.css', 'public/css')

    //main
    .copy('resources/style/src/assets/css/light/main.css', 'public/css/light')
    .copy('resources/style/src/assets/css/dark/main.css', 'public/css/dark')

    //perfect-scrollbar
    .copy('resources/style/src/plugins/css/light/perfect-scrollbar/perfect-scrollbar.css', 'public/css/light')
    .copy('resources/style/src/plugins/css/dark/perfect-scrollbar/perfect-scrollbar.css', 'public/css/dark')

    //structure
    .copy('resources/style/layouts/vertical-light-menu/css/light/structure.css', 'public/css/light')
    .copy('resources/style/layouts/vertical-light-menu/css/dark/structure.css', 'public/css/dark')

    //loder
    .copy('resources/style/layouts/vertical-light-menu/css/light/loader.css', 'public/css/light')
    .copy('resources/style/layouts/vertical-light-menu/css/dark/loader.css', 'public/css/dark')

    .copy('resources/style/layouts/vertical-light-menu/loader.js', 'public/js')

    //bootstrap
    .copy('resources/style/src/bootstrap/css/bootstrap.min.css', 'public/css')
    .copy('resources/style/src/bootstrap/js/bootstrap.bundle.min.js', 'public/js')

    //plugins
    .copy('resources/style/layouts/vertical-light-menu/css/light/plugins.css', 'public/css/light')
    .copy('resources/style/layouts/vertical-light-menu/css/dark/plugins.css', 'public/css/dark')


    //modal
    .copy('resources/style/src/assets/css/light/components/modal.css', 'public/css/light')
    .copy('resources/style/src/assets/css/dark/components/modal.css', 'public/css/dark')

    //notes
    .copy('resources/style/src/assets/css/light/apps/notes.css', 'public/css/light')
    .copy('resources/style/src/assets/css/dark/apps/notes.css', 'public/css/dark')

    .copy('resources/style/src/assets/js/apps/notes.js', 'public/js')

    //scrumboard
    .copy('resources/style/src/assets/css/light/apps/scrumboard.css', 'public/css/light')
    .copy('resources/style/src/assets/css/dark/apps/scrumboard.css', 'public/css/dark')

    .copy('resources/style/src/assets/js/apps/scrumboard.js', 'public/js')

    //jquery
    .copy('resources/style/src/plugins/src/jquery-ui/jquery-ui.min.js', 'public/js')

    //js
    .copy('resources/style/src/plugins/src/global/vendors.min.js', 'public/js')

    .copy('resources/style/src/plugins/src/perfect-scrollbar/perfect-scrollbar.min.js', 'public/js')

    .copy('resources/style/src/plugins/src/mousetrap/mousetrap.min.js', 'public/js')

    .copy('resources/style/layouts/vertical-light-menu/app.js', 'public/js')


    .version();

