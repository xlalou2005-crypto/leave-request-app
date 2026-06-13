sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    "use strict";

    return {
        approveRequest: function(oContext) {
            const oModel = oContext.getModel();
            const oAction = oModel.bindContext(
                "LeaveService.approveRequest(...)",
                oContext,
                { $$inheritExpandSelect: true }
            );
            oAction.execute().then(function() {
                MessageToast.show("✅ Request Approved!");
                oContext.refresh();
            }).catch(function(oError) {
                MessageToast.show("Error: " + oError.message);
            });
        },

        rejectRequest: function(oContext) {
            const oModel = oContext.getModel();
            const oAction = oModel.bindContext(
                "LeaveService.rejectRequest(...)",
                oContext,
                { $$inheritExpandSelect: true }
            );
            oAction.execute().then(function() {
                MessageToast.show("❌ Request Rejected!");
                oContext.refresh();
            }).catch(function(oError) {
                MessageToast.show("Error: " + oError.message);
            });
        }
    };
});