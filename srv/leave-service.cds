using leave.request as db from '../db/schema';


service LeaveService {
    entity LeaveRequests as projection on db.LeaveRequest
        actions {
            action approveRequest() returns LeaveRequests;
            action rejectRequest()  returns LeaveRequests;
        }


}
