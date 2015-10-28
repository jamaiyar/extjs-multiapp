/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('FirstApp.view.main.Main', {
    extend: 'Ext.container.Container',
    alias : 'widget.FirstAppMainView',
    cls: 'firstapp-mainview',
    requires: [
        'FirstApp.view.main.FirstAppMainController',
        'FirstApp.view.main.MainModel'
    ],

    controller: 'FirstAppMainController',

    viewModel: {
        type: 'main'
    },

    title: 'First app title',

    items: [{
        // title: 'FirstApp Title 1',
        html: '<h2>Content for FirstApp Tab 1</h2>'
    },
    {
        xtype: 'textfield',
        fieldLabel: 'Enter App Name',
    }
    ]
});
