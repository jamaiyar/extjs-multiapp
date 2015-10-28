/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('CloudBase.view.main.Main', {
    extend: 'Ext.container.Container',
    requires: [
        'CloudBase.view.main.MainController',
        'CloudBase.view.main.MainModel',
        // 'FirstApp.view.main.Main'
    ],

    xtype: 'app-main',
    
    controller: 'main',
    viewModel: {
        type: 'main'
    },

    layout: {
        type: 'border'
    },

    initComponent: function() {
        var me  = this;
        me.items = me.getChildren();
        me.callParent(arguments);
    },

    getChildren: function() {
        // NOTE: Uncomment following paths in dev mode

        // Ext.create('FirstApp.view.main.Main');
        // Ext.create('SecondApp.view.main.Main');

            return [
            {
                region: 'center',
                xtype: 'tabpanel',
                cls: 'main-tab-panel'
            }]
    }

});
