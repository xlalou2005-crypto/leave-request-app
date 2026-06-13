namespace leave.request;

@odata.draft.enabled
entity LeaveRequest {
    key ID           : UUID;
        employeeName : String(100);
        leaveType    : String(50); // Annual, Sick, Unpaid
        startDate    : Date;
        endDate      : Date;
        status       : String(20); // Pending, Approved, Rejected
        comments     : String(500);
}
