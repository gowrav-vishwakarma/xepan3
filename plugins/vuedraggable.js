import Draggable from 'vuedraggable';
import { Drag, Drop, DropMask, DropList } from "vue-easy-dnd";
import Vue from 'vue';

Vue.component('draggable', Draggable);
Vue.component('drag', Drag);
Vue.component('drop', Drop);
Vue.component('drop-mask', DropMask);
Vue.component('drop-list', DropList);