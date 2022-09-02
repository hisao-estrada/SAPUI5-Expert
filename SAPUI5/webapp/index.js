//eslint-disable-next-line no-undef
sap.ui.define([
    //'sap/ui/core/mvc/XMLView'
    'sap/ui/core/ComponentContainer'
],
    /**
     *@param{typeof sap.ui.core.mvc.XMLView} XMLView
     */
    function (ComponentContainer) {
        //eslint-disable-next-line no-undef
        //alert("UI5 is ready");
        "use strict";
        new ComponentContainer({
            name: "dtt.SAPUI5",
            settings:{id:"SAPUI5"},
            async: true
        }).placeAt("Contenido")
        // XMLView.create({
        //     viewName: "dtt.SAPUI5.view.App"
        // }).then(function (oView) {
        //     oView.placeAt("Contenido")
        // })
    })

