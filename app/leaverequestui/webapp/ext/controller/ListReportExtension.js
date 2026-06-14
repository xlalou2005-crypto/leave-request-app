sap.ui.define([
    "sap/m/MessageToast",
    "sap/m/Dialog",
    "sap/m/Button",
    "sap/m/Input",
    "sap/m/DatePicker",
    "sap/m/Select",
    "sap/ui/core/Item",
    "sap/m/Label",
    "sap/m/VBox",
    "sap/ui/core/UIComponent"
], function(MessageToast, Dialog, Button, Input, DatePicker, Select, Item, Label, VBox, UIComponent) {
    "use strict";

    return {
        createRequest: function(oEvent) {
    const oModel = this.getModel ? this.getModel() : oEvent.getSource().getModel();

            const oEmployeeInput = new Input({ placeholder: "Employee Name" });
            const oLeaveTypeSelect = new Select({
                items: [
                    new Item({ key: "Annual", text: "Annual" }),
                    new Item({ key: "Sick", text: "Sick" }),
                    new Item({ key: "Unpaid", text: "Unpaid" })
                ]
            });
            const oStartDate = new DatePicker({ placeholder: "Start Date" });
            const oEndDate = new DatePicker({ placeholder: "End Date" });
            const oComments = new Input({ placeholder: "Comments" });

            const oDialog = new Dialog({
                title: "New Leave Request",
                content: new VBox({
                    items: [
                        new Label({ text: "Employee Name" }),
                        oEmployeeInput,
                        new Label({ text: "Leave Type" }),
                        oLeaveTypeSelect,
                        new Label({ text: "Start Date" }),
                        oStartDate,
                        new Label({ text: "End Date" }),
                        oEndDate,
                        new Label({ text: "Comments" }),
                        oComments
                    ]
                }).addStyleClass("sapUiSmallMargin"),
                beginButton: new Button({
                    text: "Submit",
                    type: "Emphasized",
                    press: function() {
                        const oData = {
                            employeeName: oEmployeeInput.getValue(),
                            leaveType: oLeaveTypeSelect.getSelectedKey(),
                            startDate: oStartDate.getValue() ? oStartDate.getDateValue().toISOString().split('T')[0] : null,
                            endDate: oEndDate.getValue() ? oEndDate.getDateValue().toISOString().split('T')[0] : null,
                            status: "Pending",
                            comments: oComments.getValue()
                        };
                        console.log("Sending data:", oData);

                        const oListBinding =oModel.bindList("/LeaveRequests");
                        const oNewContext = oListBinding.create(oData);

                        oNewContext.created().then(function() {
                            MessageToast.show("✅ Leave Request Created!");
                            oModel.refresh();
                        }).catch(function(oError) {
                            MessageToast.show("Error: " + oError.message);
                        });

                        oDialog.close();
                    }
                }),
                endButton: new Button({
                    text: "Cancel",
                    press: function() {
                        oDialog.close();
                    }
                })
            });

            oDialog.open();
        }
    };
});