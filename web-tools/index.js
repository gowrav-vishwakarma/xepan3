module.exports = {
    basic: {
        tools: [
            { name: 'Block', tag: 'div', icon: "cogs" },
            {
                name: 'Header', component: 'WebHeader', icon: "H1 icon",
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
                            defaultcontent: { type: 'text' },
                            headerType: { type: 'select', items: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }
                        }
                    }
                }
            },
            { name: 'Medium Editor', component: 'WebRichEditor', props: { defaultcontent: "" }, icon: "TextEditor" },
            { name: 'Row', component: 'WebRow', isDroppable: true, items: [], props: { defaultcontent: "" }, icon: "Row" },
            { name: 'Column', component: 'WebColumn', isDroppable: true, items: [], props: { defaultcontent: "" }, icon: "Col" },
        ]
    }
}