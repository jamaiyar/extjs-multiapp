/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('CloudBase.Application', {
    extend: 'Ext.app.Application',
    
    name: 'CloudBase',

    stores: [
        // TODO: add global / shared stores here
    ],
    
    launch: function () {
        window.addEventListener('message', function(e) {
            var params = e.data;

            if (params.SUBAPP_LOADED) {
                CloudBase.app.appendSubapp(params.SUBAPP_LOADED);
            }
        });

        // NOTE: Comment off following paths in dev mode
        Ext.Loader.loadScript('..\\FirstApp\\app.js');
        Ext.Loader.loadScript('..\\SecondApp\\app.js');
    },

    appendSubapp: function(appNameSpace) {
        var subappMainComponent = 'widget.' + appNameSpace + 'MainView';
        var subappMainview = Ext.create(subappMainComponent);
        var mainAppMainView = Ext.ComponentQuery.query('tabpanel')[0];
        mainAppMainView.add({
            xtype: subappMainview
        });
    }

});
