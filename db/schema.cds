namespace leave.request;

entity LeaveRequest {
    key ID           : UUID;
        employeeName : String(100);
        leaveType    : String(50); // Annual, Sick, Unpaid
        startDate    : Date;
        endDate      : Date;
        status       : String(20); // Pending, Approved, Rejected
        comments     : String(500);
        criticality  : Integer = case
                                     status
                                     when 'Approved'
                                          then 3
                                     when 'Rejected'
                                          then 1
                                     else 2
                                 end;
}
