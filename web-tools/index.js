module.exports = {
    basic: {
        tools: [
            { name: 'Block', component: 'div', tag: 'div', icon: "cogs" },
            {
                name: 'Header', component: 'xEpanWebHeader', icon: "H1 icon",
                props: {
                    headerType: "h1",
                    defaultcontent: "I am header"
                },
                toolbarOptions: {
                    group: {
                        type: "wrap",
                        title: 'Title Haha',
                        col: 12,
                        schema: {
                            huhu: { type: 'text', label: 'Huhu' },
                            haha: { type: 'text', label: 'label me' },
                            defaultcontent: { type: 'text' },
                            headerType: { type: 'select', items: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }
                        }
                    }
                }
            },
            { name: 'RichText Editor', component: 'WebRichEditor', props: { defaultcontent: "" }, icon: "TextEditor" },
            { name: 'Row', component: 'WebRow', isDroppable: true, items: [], props: { defaultcontent: "" }, icon: "Row" },
            { name: 'Column', component: 'WebColumn', isDroppable: true, items: [], props: { defaultcontent: "" }, icon: "Col" },
        ]
    }
}