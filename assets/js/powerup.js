new Vue({
    el: '#powerup',
    data: {
        setup: true,
        gameOver: false,
        endMsg: "",
        enemies: [],
        allies: [], 
        charData: [
            // Tier 1
            [
                {
                    //Jubilee
                    id: "1009381",
                    type: "Weird",
                    strike: "Fireworks",
                    dmg: 45,
                    maxHealth: 100,
                    curHealth: 100,
                    selected: false,
                    tier: 1,
                    icon: "assets/images/weird.png"
                },{
                    //Hawkeye
                    id: "1010808",
                    type: "Tech",
                    strike: "Skillshot",
                    dmg: 40,
                    maxHealth: 100,
                    curHealth: 100,
                    selected: false,
                    tier: 1,
                    icon: "assets/images/tech.png"
                 },{
                    //Daredevil
                    id: "1009262",
                    type: "Strength",
                    strike: "Billy Club Bash",
                    dmg: 40,
                    maxHealth: 120,
                    curHealth: 120,
                    selected: false,
                    tier: 1,
                    icon: "assets/images/strength.png"
                 },{ 
                    //Domino
                    id: "1009277",
                    type: "Tech",
                    strike: "Lucky Shot",
                    dmg: 50,
                    maxHealth: 110,
                    curHealth: 110,
                    selected: false,
                    tier: 1,
                    icon: "assets/images/tech.png"
                }
            ],
            //Tier 2
            [
                {
                    //Gamora
                    id: "1010763",
                    type: "Cosmic",
                    strike: "Furious Slashes",
                    dmg: 45,
                    maxHealth: 130,
                    curHealth: 130,
                    selected: false,
                    tier: 2,
                    icon: "assets/images/cosmic.png"
                },{ 
                    //Gambit
                    id: "1009313",
                    type: "Weird",
                    strike: "Kinetic Cards",
                    dmg: 50,
                    maxHealth: 150,
                    curHealth: 150,
                    selected: false,
                    tier: 2,
                    icon: "assets/images/weird.png"
                },{ 
                    //Spider-Man
                    id: "1016181",
                    type: "Tech",
                    strike: "Venom Blast",
                    dmg: 55,
                    maxHealth: 140,
                    curHealth: 140,
                    selected: false,
                    tier: 2,
                    icon: "assets/images/tech.png"
                },{ 
                    //Mystique
                    id:"1009465",
                    type: "Weird",
                    strike: "Sneak Attack",
                    dmg: 50,
                    maxHealth: 160,
                    curHealth: 160,
                    selected: false,
                    tier: 2,
                    icon: "assets/images/weird.png"
                }
            ],
            // Tier 3
            [
                { 
                    //Captain America
                    id: "1009220", 
                    type: "Strength",
                    strike: "Shield Throw",
                    dmg: 60,
                    maxHealth: 210,
                    curHealth: 210,
                    selected: false,
                    tier: 3,
                    icon: "assets/images/strength.png"
            },{ 
                    // Iron Man
                    id: "1009368",
                    type: "Tech",
                    strike: "Repulsor Blast",
                    dmg: 70,
                    maxHealth: 200,
                    curHealth: 200,
                    selected: false,
                    tier: 3,
                    icon: "assets/images/tech.png"
            },{ 
                    // Rogue 
                    id: "1009546",
                    type: "Strength",
                    strike: "Power Drain",
                    dmg: 65,
                    maxHealth: 190,
                    curHealth: 190,
                    selected: false,
                    tier: 3,
                    icon: "assets/images/strength.png"
            },{ 
                    //Wolverine
                    id: "1009718",
                    type: "Strength",
                    strike: "Claw Slash",
                    dmg: 70,
                    maxHealth: 200,
                    curHealth: 200,
                    selected: false,
                    tier: 3,
                    icon: "assets/images/strength.png"
            }
            ],
            // Tier 4
            [
                {
                    //Storm
                    id: "1009629", 
                    type: "Weird",
                    strike: "Lightning Bolt",
                    dmg: 85,
                    maxHealth: 250,
                    curHealth: 250,
                    selected: false,
                    tier: 4,
                    icon: "assets/images/weird.png"
                },{
                    //She-Hulk
                    id: "1009583", 
                    type: "Strength",
                    strike: "Smash",
                    dmg: 80,
                    maxHealth: 270,
                    curHealth: 270,
                    selected: false,
                    tier: 4,
                    icon: "assets/images/strength.png"
                },{
                    //Thor
                    id: "1009664",
                    type: "Cosmic",
                    strike: "Mjolnir Strike",
                    dmg: 85,
                    maxHealth: 265,
                    curHealth: 265,
                    selected: false,
                    tier: 4,
                    icon: "assets/images/cosmic.png"
                },{
                    //Captain Marvel
                    id: "1010338",
                    type: "Cosmic",
                    strike: "Photon Blast",
                    dmg: 90,
                    maxHealth: 255,
                    curHealth: 255,
                    selected: false,
                    tier: 4,
                    icon: "assets/images/cosmic.png"
            }
            ],
            // Tier 5
            [{
                    //Ultron
                    id: "1009685", 
                    type: "Tech",
                    strike: "Bot Swarm",
                    dmg: 90,
                    maxHealth: 300,
                    curHealth: 300,
                    selected: false,
                    tier: 5,
                    icon: "assets/images/tech.png"
            },{
                    //Scarlet Witch
                    id: "1009562", 
                    type: "Weird",
                    strike: "Chaos Magic",
                    dmg: 100,
                    maxHealth: 280,
                    curHealth: 280,
                    selected: false,
                    tier: 5,
                    icon: "assets/images/weird.png"
            },{
                    //Adam Warlock
                    id: "1010354", 
                    type: "Cosmic",
                    strike: "Quantum Surge",
                    dmg: 85,
                    maxHealth: 315,
                    curHealth: 315,
                    selected: false,
                    tier: 5,
                    icon: "assets/images/cosmic.png"
            },{
                    //Jean Grey
                    id: "1009327",
                    type: "Cosmic",
                    strike: "Phoenix Flame",
                    dmg: 90,
                    maxHealth: 300,
                    curHealth: 300,
                    selected: false,
                    tier: 5,
                    icon: "assets/images/cosmic.png"
            }
        ]
        ],
        activeChar: -1,
        targetChar: -1,
    },
    methods: {
        async loadChars() {
            this.setup = false;

            const publicKey = 'a6b31fddffdba5fee604a0eaa22ccbe2';
            const privateKey = '1790cd89c66fae37b4032c334528bf0ca2c772b8';
            const timestamp = new Date().getTime().toString();
            const hash = md5(timestamp + privateKey + publicKey);

            for (i = 0; i < 5; i ++) {

                r1 = Math.floor(Math.random() * 4)
                r2 = Math.floor(Math.random() * 4) 
                const allyUrl = 'https://gateway.marvel.com/v1/public/characters/' + this.charData[i][r1].id + '?ts=' +timestamp + '&apikey=' +publicKey + '&hash=' + hash;
                const enemyUrl = 'https://gateway.marvel.com/v1/public/characters/' + this.charData[i][r2].id + '?ts=' +timestamp + '&apikey=' +publicKey + '&hash=' + hash;

                try {
                    let allyResponse = await axios.get(allyUrl)
                    let ally = allyResponse.data.data.results[0];
                    newAlly = Object.assign(ally, this.charData[i][r1]);
                    this.enemies.push(newAlly);

                    let enemyResponse = await axios.get(enemyUrl);
                    let enemy = enemyResponse.data.data.results[0];
                    newEnemy = Object.assign(enemy, this.charData[i][r2]);
                    this.allies.push(newEnemy);
                } catch (err) {
                    console.log(err)
                }
            }
        },
        
        setActive(id) {
            for (i = 0; i < this.allies.length; i ++) {
                if (this.allies[i].id == id) {
                    this.activeChar = i;
                    this.allies[i].selected = true;
                    return;
                } else {
                    this.allies[i].selected = false;
                }
            }
        },
        setTarget(id) {
            for (i = 0; i < this.enemies.length; i ++) {
                if (this.enemies[i].id == id) {
                    this.allies[i].selected = true;
                    this.targetChar = i;
                    return;
                } else {
                    this.enemies[i].selected = false;
                }
            }
        },
        playMove() {
            let baseDmg = this.allies[this.activeChar].dmg;
            let activeType = this.allies[this.activeChar].type;
            let targetType = this.enemies[this.targetChar].type;
    
            let dmg = this.calcDmg(baseDmg, activeType, targetType);

            let curHealth = this.enemies[this.targetChar].curHealth;
            curHealth = curHealth - dmg;
            if (curHealth < 1) {
                this.enemies.splice(this.targetChar, 1);
                this.allies[this.activeChar].selected = false;
            } else {
                this.enemies[this.targetChar].curHealth = curHealth;
                this.allies[this.activeChar].selected = false;
                this.enemies[this.targetChar].selected = false;
            }
            
            this.isOver();
            let temp = this.allies;
            this.allies = this.enemies;
            this.enemies = temp;
          
        },
        calcDmg(baseDmg, activeType, targetType ) {
            let dmg = baseDmg - Math.floor(Math.random() * (baseDmg/2));
            if (activeType == "Strength") {
                if (targetType == "Weird") {
                    dmg = dmg * .75;
                } else if (targetType == "Tech") {
                    dmg = dmg * 1.5;
                }
            } else if (activeType == "Tech") {
                if (targetType == "Strength") {
                    dmg = dmg * .75;
                } else if (targetType == "Cosmic") {
                    dmg = dmg * 2.5;
                }
            } else if (activeType == "Cosmic") {
                if (targetType == "Tech") {
                    dmg = dmg * .75;
                } else if (targetType == "Weird") {
                    dmg = dmg * 1.5;
                }

            } else if (activeType == "Weird") {
                if (targetType == "Cosmic") {
                    dmg = dmg * .75;
                } else if (targetType == "Tech") {
                    dmg = dmg * 1.5;
                }
            }
            dmg = Math.floor(dmg);
            return dmg;
        },
        isOver() {
            if (this.allies.length < 1 ) {
                this.gameOver = true;
                this.endMsg = "Enemies WIN!";
                console.log(endMsg);
            } else if (this.enemies.lenght < 1) {
                this.gameOver = true;
                this.endMsg = "Allies WIN!";
                console.log(endMsg);
            }
        }
    }
})
