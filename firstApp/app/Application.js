/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('FirstApp.Application', {
    extend: 'Ext.app.Application',
    
    name: 'FirstApp',

    stores: [
        // TODO: add global / shared stores here
    ],
    
    launch: function () {
        // TODO - Launch the application
        console.log('** FirstApp.Application - Launch **');
        window.postMessage({
            'SUBAPP_LOADED': 'FirstApp'
        }, '*');
		// var vp = Ext.create('FirstApp.view.main.Main');
		// vp.show();
    }
});
