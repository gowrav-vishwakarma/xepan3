module.exports = {
    drawer: {
        xEpan: {
            title: 'xEpan',
            icon: 'cogs',
            items: [
                { path: '/admin/epans', title: 'EpansManagement', icon: 'mdi-cogs' }
            ]
        },

    },
    topmenu: {
        xEpan: {
            title: 'xEpan',
            icon: 'cogs',
            items: [
                { path: '/admin/epans', title: 'EpansManagement', icon: 'cogs' }
            ]
        },
        xEpan1: {
            title: 'xEpan1',
            icon: 'cogs',
            items: [
                { path: '/admin/epans', title: 'EpansManagement', icon: 'cogs' }
            ]
        }
    },
    usermenu: {
        items: [
            { path: '/epans', caption: 'EpansManagement', icon: 'cogs' }
        ]
    },

}