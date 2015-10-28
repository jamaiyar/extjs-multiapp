/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('FirstApp.view.main.FirstAppMainController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'Ext.MessageBox'
    ],

    alias: 'controller.FirstAppMainController',

    // init: function() {
    //     console.log("----------");

    //     if (FirstApp.thisAppLoaded) return;

    //     window.postMessage({
    //         'SUBAPP_LOADED': 'FirstApp' 
    //     }, '*');
    //     FirstApp.thisAppLoaded = true;
    // },

    onClickButton: function () {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    }
});
