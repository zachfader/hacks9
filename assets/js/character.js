Vue.component('character', {
    props: {
        char: {
            type: Object
        }
    }
    ,template:
        /*html*/
        `<div id="character">
            <h1>{{name}}</h1>
            <img :src="getImg()">
            <label :span="char.type">
            <p>{{flv}}</p>
            <h2>{{strike}}</h2>
            <h3>{{curHealth}}/{{maxHeath}}</h3>
        </div>`,
    data() {
        return {
            name: "",
            img: "",
            flv: "",
            first: "",
            strike: "",
            type: "",
            dmg: 0,
            maxHealth: 0,
            curHealth: 0
            }
    },
    created() {
        this.loadCharacter();
    },
    methods: {
        async loadCharacter() {
            try {
                this.name = this.char.name;
                this.img = this.char.thumbnail.path + this.char.thumbnail.extension;
                this.flv = this.char.desc;
                //this.first = ;
                this.strike = this.char.strike;
                this.type = this.char.type;
                this.dmg = this.char.dmg;
                this.maxHealth = this.char.health;
                this.curHealth = this.char.health;
            } catch (err) {
                console.log(err)
            }
        },
        getImg() {
            return this.char.thumbnail.path + '.' + this.char.thumbnail.extension;
        }
    }
})