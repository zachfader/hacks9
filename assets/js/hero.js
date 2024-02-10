Vue.component('hero', {
    props: {
        hero: {
            type: Object
        }
    }
    ,template:
        /*html*/
        `<div id="hero">
            <img :src="getImg()">
            <p>{{name}}</p>
        </div>`,
    data() {
        return {
            name: "",
            img: ""
            }
    },
    created() {
        this.loadHero();
    },
    methods: {
        async loadHero() {
            try {
                this.name = this.hero.name;
                this.img = this.hero.thumbnail.path + this.hero.thumbnail.extension;
            } catch (err) {
                console.log(err)
            }
        },
        getImg() {
            return this.hero.thumbnail.path + '.' + this.hero.thumbnail.extension;
        }
    }
})