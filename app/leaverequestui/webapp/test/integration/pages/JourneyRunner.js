sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"leaverequestui/test/integration/pages/LeaveRequestsList",
	"leaverequestui/test/integration/pages/LeaveRequestsObjectPage"
], function (JourneyRunner, LeaveRequestsList, LeaveRequestsObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('leaverequestui') + '/test/flp.html#app-preview',
        pages: {
			onTheLeaveRequestsList: LeaveRequestsList,
			onTheLeaveRequestsObjectPage: LeaveRequestsObjectPage
        },
        async: true
    });

    return runner;
});

