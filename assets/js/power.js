Vue.component('power', {
    props: {
        power: {
            type: Object
        }
    }
    ,template:
        /*html*/
        `<div id="power">
            <p>{{name}}</p>
        </div>`,
    data() {
        return {
            name: "",
            }
    },
    created() {
        this.loadPower(this.idno);
    },
    methods: {
        async loadPower(id) {
            try {
                this.name = this.power.name;
            } catch (err) {
                console.log(err)
            }
    },
}
})