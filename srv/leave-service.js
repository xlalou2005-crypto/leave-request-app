const cds = require('@sap/cds')

module.exports = cds.service.impl(async function() {
    const { LeaveRequests } = this.entities

    this.on('approveRequest', async (req) => {
        const ID = req.params[0].ID
        await UPDATE(LeaveRequests)
            .set({ status: 'Approved' })
            .where({ ID })
        return SELECT.one(LeaveRequests).where({ ID })
    })

    this.on('rejectRequest', async (req) => {
        const ID = req.params[0].ID
        await UPDATE(LeaveRequests)
            .set({ status: 'Rejected' })
            .where({ ID })
        return SELECT.one(LeaveRequests).where({ ID })
    })
})