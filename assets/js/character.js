Vue.component('character', {
    props: {
        char: {
            type: Object
        }
    }
    ,template:
        /*html*/
        `<div class="card">
            <div class="imgHolder">
                <img :src="getImg()">
            </div>
            <div class="nameTag">
                <p>{{name}} - {{type}}</p>
            </div>
            <div class="infoPane">
                <div class="strikePane">
                    <h3>{{strike}}</h3>
                </div>
                <div class="flavorPane">
                    <p>{{flv}}</p>
                </div>
            </div>
            <div class="healthPane">
                <h3>{{curHealth}}/{{maxHealth}}</h3>
            </div>
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