//@ts-nocheck
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    //"sap/ui/core/Fragment"
    //"sap/ui/model/json/JSONModel"
    //"dtt/SAPUI5/model/Models",
    //"sap/ui/model/resource/ResourceModel"
],
    /**
     * @param{typeof sap.ui.core.mvc.Controller} Controller
     * @param{typeof sap.m.MessageToast} MessageToast
     * @param{typeof sap.ui.model.json.JSONModel} JSONModel
     * @param{typeof sap.ui.model.resource.ResourceModel} ResourceModel
     * @param{typeof sap.ui.core.Fragment} Fragment
     */
    function (Controller, MessageToast) {
        return Controller.extend("dtt.SAPUI5.controller.helloPanel", {
            onInit: function () {
                // var i18nModel = new ResourceModel({bundleName:"dtt.SAPUI5.i18n.i18n"})
                // this.getView().setModel(i18nModel, "i18n")
                // this.getView().setModel(Models.createRecipient())
            },
            onShowHello: function () {
                var oBundle = this.getView().getModel("i18n").getResourceBundle()
                var sRecipient = this.getView().getModel().getProperty("/recipient/name")
                var sMSG = oBundle.getText("helloMsg", [sRecipient])
                MessageToast.show(sMSG)
            },
            onOpenDialog:function () {
                this.getOwnerComponent().openHelloDialog();
                
            }, 
            onOpenDialogHeader:function () {
                this.getOwnerComponent().openHelloDialog();
                
            }  
        })
    })