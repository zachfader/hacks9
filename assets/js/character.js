Vue.component('character', {
    props: {
        char: {
            type: Object
        }
    }
    ,template:
        /*html*/
        `<div>
            <div :class="char.type">
                <div class="portraitRegion">
                    <div class="portraitHolder">
                        <img :src="getImg()">
                    </div>
                    <div class="portraitType"> 
                        <img :src="char.icon">
                    </div>
                    <h3 class="portraitCost">{{tier}}</h3>
                </div>
                <div class="infoRegion">
                    <div class="flavorRegion">
                        <div class="flavorBox"></div>
                        <div class="flavorText">{{name}}</div>
                    </div>
                    <div class="strikeRegion">
                        <div class="strikeBox"></div>
                        <div class="strikeText">{{strike}}</div>
                    </div>
                </div>
                <div class="healthRegion">
                    <div class="healthIcon">
                        <img class="healthJPEG" src="assets/images/heart.png" />
                        <div class="healthInt">{{curHealth}}</div>
                    </div>
                    <div class="healthBar"></div>
                    <div class="healthCrt"></div>
                </div>
            </div>
        </div>`,
    data() {
        return {
            name: "",
            img: "",
            flv: "",
            strike: "",
            type: "",
            dmg: 0,
            maxHealth: 0,
            curHealth: 0,
            selected: false,
            tier: 0
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
                this.strike = this.char.strike;
                this.type = this.char.type;
                this.dmg = this.char.dmg;
                this.maxHealth = this.char.maxHealth;
                this.curHealth = this.char.curHealth;
                this.selected = this.char.selected;
                this.tier = this.char.tier;
            } catch (err) {
                console.log(err)
            }
        },
        getImg() {
            return this.char.thumbnail.path + '.' + this.char.thumbnail.extension;
        }
    }
})