import MuuriGrid from './components/MuuriGrid.vue'
import ItemLink from './components/items/ItemLink.vue'
import ItemSm from './components/items/ItemSm.vue'
import ItemMd from './components/items/ItemMd.vue'
import ItemLg from './components/items/ItemLg.vue'

var plugin = {
    install: function (Vue, store) {
        Vue.component('muuri-grid', MuuriGrid);
        Vue.component('item-sm', ItemSm);
        Vue.component('item-md', ItemMd);
        Vue.component('item-lg', ItemLg);
        Vue.component('item-ln', ItemLink);
        Vue.component('version', version);

    }
};

// Install by default if using the script tag
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(plugin)
}

export default plugin
const version = '__VERSION__';

