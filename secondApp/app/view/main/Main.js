/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('SecondApp.view.main.Main', {
    extend: 'Ext.container.Container',
    alias : 'widget.SecondAppMainView',
    requires: [
        'SecondApp.view.main.SecondAppMainController',
        'SecondApp.view.main.MainModel'
    ],
    cls: 'secondapp-mainview',
    // xtype: 'app-main',
    
    controller: 'SecondAppMainController',
    viewModel: {
        type: 'main'
    },

    title: 'SecondApp title',

    items: [{
        // title: 'SecondApp Title 1',
        html: '<h1>Content for SecondApp</h1>'
    },
    {
        xtype: 'textfield',
        fieldLabel: 'Enter App Name',
    }
    ]


});
