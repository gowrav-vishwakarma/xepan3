module.exports = {
    basic: {
        tools: [
            { name: 'Block', tag: 'div', icon: "cogs" },
            { name: 'Header', component: 'WebHeader', icon: "H1 icon", props: { options: {}, defaultcontent: "I am header" } },
            { name: 'Medium Editor', component: 'WebRichEditor', props: { options: {}, defaultcontent: "" }, icon: "TextEditor" },
            { name: 'Row', component: 'WebRow', isDroppable: true, items: [], props: { options: {}, defaultcontent: "" }, icon: "Row" },
            { name: 'Column', component: 'WebColumn', isDroppable: true, items: [], props: { options: {}, defaultcontent: "" }, icon: "Col" },
        ]
    }
}