new Vue({
    el: '#powerup',
    data: {
        whoseTurn: 1,
        gameOver: false,
        charData: [
            // Tier 1
            [
                {
                    //Jubilee
                    id: "1009381",
                    type: "Weird",
                    strike: "Fireworks",
                    dmg: 0,
                    health: 100
                }, {
                    //Hawkeye
                    id: "1009262",
                    type: "Tech",
                    strike: "Skillshot",
                    dmg: 0,
                    health: 100
                 },{
                    //Daredevil
                    id: "1010808",
                    type: "Strength",
                    strike: "Billy Club Bash",
                    dmg: 0,
                    health: 0
                 }, { 
                    //Domino
                    id: "1009277",
                    type: "Tech",
                    strike: "Lucky Shot",
                    dmg: 0,
                    health: 0,
                }
            ],
            //Tier 2
            [
                {
                    //Gamora
                    id: "1010763",
                    type: "Cosmic",
                    strike: "",
                    dmg: 0,
                    health: 0
                },{ 
                    //Gambit
                    id: "1009313",
                    type: "Weird",
                    strike: "Kinetic Cards",
                    dmg: 0,
                    health: 0
                },{ 
                    //Spider-Man
                    id: "1016181",
                    type: "Tech",
                    strike: "Venom Blast",
                    dmg: 0,
                    health: 0
                },{ 
                    //Mystique
                    id:"1009465",
                    type: "Weird",
                    strike: "",
                    dmg: 0,
                    health: 0
                }
            ],
            // Tier 3
            [
                { 
                    //Captain America
                    id: "1009220", 
                    type: "Strength",
                    strike: "Shield Throw",
                    dmg: 0,
                    health: 0
            },{ 
                    // Iron Man
                    id: "1009368",
                    type: "Tech",
                    strike: "Repulsor Blast",
                    dmg: 0,
                    health: 0
            },{ 
                    // Rogue 
                    id: "1009546",
                    type: "Strength",
                    strike: "Power Drain",
                    dmg: 0,
                    health: 0 
            },{ 
                    //Wolverine
                    id: "1009718",
                    type: "Strength",
                    strike: "Claw Slash",
                    dmg: 0,
                    health: 0
            }
            ],
            // Tier 4
            [
                {
                    //Storm
                    id: "1009629", 
                    type: "Weird",
                    stike: "Lightning Bolt",
                    dmg: 0,
                    health: 0
                },{
                    //She-Hulk
                    id: "1009583", 
                    type: "Strength",
                    strike: "Smash",
                    dmg: 0,
                    health: 0
                },{
                    //Thor
                    id: "1009664",
                    type: "Cosmic",
                    strike: "Mjolnir Strike",
                    dmg: 0,
                    health: 0
                },{
                    //Captain Marvel
                    id: "1010338",
                    type: "Cosmic",
                    strike: "Photon Blast",
                    dmg: 0,
                    health: 0        
            }
            ],
            // Tier 5
            [{
                //Ultron
                id: "1009685", 
                type: "Tech",
                strike: "Bot Swarm",
                dmg: 0,
                health: 0
            },{
                //Scarlet Witch
                id: "1009562", 
                type: "Weird",
                strike: "Chaos Magic",
                dmg:0,
                health: 0
            },{
                //Adam Warlock
                id: "1010354", 
                type: "Cosmic",
                strike: "Quantum Surge",
                dmg:0,
                health:0
            },{
                //Jean Grey
                id: "1009327",
                type: "Cosmic",
                strike: "Phoenix Flame",
                dmg:0,
                health:0
            }
        ]
        ],
        p1Characters: [],
        p2Characters: [], 
    },
    created() {
        this.loadChars();
    },
    methods: {
        async loadChars() {

            const publicKey = '044a96a9f1fb46edb7605ba331cccf4d';
            const privateKey = '3c5994b84cd1776f0bf0d74c353ee3145edc7416';
            const timestamp = new Date().getTime().toString();
            const hash = md5(timestamp + privateKey + publicKey);

            for (i = 0; i < 5; i ++) {

                    r1 = Math.floor(Math.random() * 4)
                    r2 = Math.floor(Math.random() * 4) 
                    const allyUrl = 'http://gateway.marvel.com/v1/public/characters/' + this.charData[i][r1].id + '?ts=' +timestamp + '&apikey=' +publicKey + '&hash=' + hash;
                    const enemyUrl = 'http://gateway.marvel.com/v1/public/characters/' + this.charData[i][r2].id + '?ts=' +timestamp + '&apikey=' +publicKey + '&hash=' + hash;

                    try {
                        console.log(allyUrl);
                        let allyResponse = await axios.get(allyUrl)
                        let ally = allyResponse.data.data.results[0];
                        newAlly = Object.assign(ally, this.charData[i][r1]);
                        console.log(newAlly);
                        this.p1Characters.push(newAlly);

                        console.log(enemyUrl);
                        let enemyResponse = await axios.get(enemyUrl);
                        let enemy = enemyResponse.data.data.results[0];
                        newEnemy = Object.assign(enemy, this.charData[i][r2]);
                        console.log(newEnemy);
                        this.p2Characters.push(newEnemy);
                    } catch (err) {
                        console.log(err)
                    }
            }
        },
        /**async loadPowers() {
            try {
                let response = await axios.get();
                let data = response.data;
                this.powerData = data[this.date];
            } catch (err) {
                console.log(err)
            }
        }**/
        async playMove(player, activeId, targetId) {

        },
        async isOver() {}
    }
})
