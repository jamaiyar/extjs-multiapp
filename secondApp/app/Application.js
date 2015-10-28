/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('SecondApp.Application', {
    extend: 'Ext.app.Application',
    
    name: 'SecondApp',

    stores: [
        // TODO: add global / shared stores here
    ],
    
    launch: function () {
        // TODO - Launch the application
        console.log('** SecondApp.Application - Launch **');
        window.postMessage({
            'SUBAPP_LOADED': 'SecondApp'
        }, '*');
    }
});
