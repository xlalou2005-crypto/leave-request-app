using leave.request as db from '../db/schema';

@odata.draft.enabled
service LeaveService {
    entity LeaveRequests as projection on db.LeaveRequest
        actions {
            action approveRequest() returns LeaveRequests;
            action rejextRequest()  returns LeaveRequests;
        }


}
