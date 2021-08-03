module.exports = {
    basic: {
        tools: [
            { name: 'Block', tag: 'div', icon: "cogs" },
            { name: 'Header', component: 'WebHeader', icon: "H1 icon", props: { defaultcontent: "I am header" }, toolbarOptions: { defaultcontent: { type: 'text' } } },
            { name: 'Medium Editor', component: 'WebRichEditor', props: { defaultcontent: "" }, icon: "TextEditor" },
            { name: 'Row', component: 'WebRow', isDroppable: true, items: [], props: { defaultcontent: "" }, icon: "Row" },
            { name: 'Column', component: 'WebColumn', isDroppable: true, items: [], props: { defaultcontent: "" }, icon: "Col" },
        ]
    }
}