Vue.component('hero', {
    props: {
        hero: {
            type: Object
        }
    }
    ,template:
        /*html*/
        `<div id="hero">
        <p>{{name}}</p>
    </div>`,
    data() {
        return {
            name: "",
            }
    },
    created() {
        this.loadHero(this.idno);
    },
    methods: {
        async loadHero(id) {
            try {
                this.name = this.hero.name;
            } catch (err) {
                console.log(err)
            }
    },
}
})