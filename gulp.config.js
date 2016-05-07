module.exports = function () {
    var root = '';
    var app = root + 'app/';
    var test = root + 'test/';
    var testHelper = test + 'test-helpers/';
    var e2e = test + 'e2e/';
    var assets = root + 'assets/';
    var data = app + 'data/';
    var assetsPath = {
        styles: assets + 'styles/',
        images: assets + 'images/',
        fonts: assets + 'fonts/'
    };
    var index = root + 'index.html';
    var tsFiles = [
        app + '**/!(*.spec)+(.ts)'
    ];
    var tsTemplateFiles = [
        app + '*.html',
        app + '**/*.html',
    ];
    var tsTestFiles = {
        unit: [app + '**/*.spec.ts'],
        e2e: [e2e + '**/*.ts'],
        helper: [testHelper + '**/*.ts']
    };
    var build = {
        path: 'build/',
        app: 'build/app/',
        data: 'build/app/data',
        fonts: 'build/fonts',
        assetPath: 'build/assets/',
        assets: {
            lib: {
                js: 'lib.js',
                css: 'lib.css'
            }
        }
    };
    var report = {
        path: 'report/'
    };
    var liveServer = {
        dev: {
            port: 3000,
            host: "192.168.0.2",
            //host: "127.0.0.1",
            open: '/',
            file: "index.html",
            wait: 1000,
            logLevel:0
        },
        prod: {
            port: 3001,
            host: "127.0.0.1",
            root: 'build/',
            file: "index.html",
            wait: 1000,
            logLevel:0
        }
    };

    var e2eConfig = {
        seleniumTarget: 'http://127.0.0.1:3000'
    };

    var systemjsBuild = {
        map: {
            'angular2': 'node_modules/angular2',
            'rxjs': 'node_modules/rxjs'
        },
        packages: {
          app: {
            format: 'register',
            defaultExtension: 'js'
          }
        }
    };

    var config = {
        root: root,
        app: app,
        data: data,
        test: test,
        testHelper: testHelper,
        e2e: e2e,
        e2eConfig: e2eConfig,
        assets: assets,
        index: index,
        build: build,
        report: report,
        assetsPath: assetsPath,
        tsFiles: tsFiles,
        tsTemplateFiles:tsTemplateFiles,
        tsTestFiles: tsTestFiles,
        liveServer: liveServer,
        systemjsBuild: systemjsBuild
    };

    return config;
};
