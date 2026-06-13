using leave.request as db from '../db/schema';

service LeaveService {
    entity LeaveRequests as projection on db.LeaveRequest;
}
