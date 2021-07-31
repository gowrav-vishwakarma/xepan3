module.exports = {
    xEpan: {
        tools: [
            { name: 'Block', component: 'div', icon: "cogs" },
            { name: 'Header', component: 'xEpanWebHeader', icon: "H1 icon", props: { options: {}, defaultcontent: "I am header" } },
            { name: 'Medium Editor', component: 'xEpanWebRichEditor', props: { options: {}, defaultcontent: "" }, icon: "TextEditor" },
        ]
    }
}