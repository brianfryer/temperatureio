requirejs.config({
    paths: {
        app: 'app',
//        jquery: 'jquery-2.0.0.min.js',
        angular: 'lib/angular/angular',
        angularResource: 'lib/angular/angular-resource',
        text: 'lib/require/text'
    },
    shim: {
        'angular' : { 'exports' : 'angular' },
        'angular-resource' : { deps : ['angular'] }
    },
    priority: [
        'angular'
    ]
});

require(['angular', 'app/app'], function(angular,  app) {

    angular.element(document).ready(function () {
        angular.bootstrap(document, ['temperatureio']);
    });

});
