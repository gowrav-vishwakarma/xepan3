<template>
  <div>
    <client-only>
      <!-- https://github.com/motla/vue-file-toolbar-menu -->
      <!-- <vue-file-toolbar-menu :content="developer_menus" /> -->
      <vue-file-toolbar-menu
        v-for="(content, index) in developer_menus"
        :key="'bar-' + index"
        :content="content"
        fixed
        app
      />
    </client-only>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: ['A'],
      happy: false,
      isMacLike: true,
    }
  },
  computed: {
    developer_menus() {
      return [
        [
          {
            text: 'Project',
            menu: [
              { text: 'New...', click: () => alert('Action 1') },
              { text: 'Configure...', click: () => alert('Action2') },
            ],
          },
          {
            text: 'My Button',
            active: this.happy,
            icon: this.happy
              ? 'sentiment_very_satisfied'
              : 'sentiment_satisfied',
            click: () => {
              this.happy = !this.happy
            },
          },
        ],
        [
          {
            icon: 'format_align_left',
            title: 'Align left',
            hotkey: this.isMacLike ? 'shift+command+l' : 'ctrl+shift+l',
            click: () => document.execCommand('justifyLeft'),
          },
          {
            icon: 'format_align_center',
            title: 'Align center',
            hotkey: this.isMacLike ? 'shift+command+e' : 'ctrl+shift+e',
            click: () => document.execCommand('justifyCenter'),
          },
          {
            icon: 'format_align_right',
            title: 'Align right',
            hotkey: this.isMacLike ? 'shift+command+r' : 'ctrl+shift+r',
            click: () => document.execCommand('justifyRight'),
          },
          {
            icon: 'format_align_justify',
            title: 'Justify content',
            hotkey: this.isMacLike ? 'shift+command+j' : 'ctrl+shift+j',
            click: () => document.execCommand('justifyFull'),
          },
          { is: 'separator' },
          {
            icon: 'format_bold',
            title: 'Bold',
            hotkey: this.isMacLike ? 'command+b' : 'ctrl+b',
            click: () => document.execCommand('bold'),
          },
        ],
      ]
    },
  },
}
</script>
