using LeaveService as service from '../../srv/leave-service';

annotate service.LeaveRequests with @(
    UI.LineItem               : [
        {
            Value: employeeName,
            Label: 'Employee Name'
        },
        {
            Value: leaveType,
            Label: 'Leave Type'
        },
        {
            Value: startDate,
            Label: 'Start Date'
        },
        {
            Value: endDate,
            Label: 'End Date'
        },
        {
            Value      : status,
            Label      : 'Status',
            Criticality: criticality
        }
    ],
    UI.FieldGroup #GeneralInfo: {
        $Type: 'UI.FieldGroupType',
        Data : [
            {
                Value: employeeName,
                Label: 'Employee Name'
            },
            {
                Value: leaveType,
                Label: 'Leave Type'
            },
            {
                Value: startDate,
                Label: 'Start Date'
            },
            {
                Value: endDate,
                Label: 'End Date'
            },
            {
                Value: status,
                Label: 'Status'
            },
            {
                Value: comments,
                Label: 'Comments'
            }
        ]
    },
    UI.Facets                 : [{
        $Type : 'UI.ReferenceFacet',
        ID    : 'GeneralInfo',
        Label : 'Request Details',
        Target: '@UI.FieldGroup#GeneralInfo'
    }],
    UI.HeaderInfo             : {
        TypeName      : 'Leave Request',
        TypeNamePlural: 'Leave Requests',
        Title         : {Value: employeeName},
        Description   : {Value: leaveType}
    }
);

annotate service.LeaveRequests with @(Capabilities.InsertRestrictions: {Insertable: true});
