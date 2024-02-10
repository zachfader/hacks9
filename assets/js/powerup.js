new Vue({
    el: '#powerup',
    data: {
        charData: [
            // Tier 1
            [
                {
                    //Jubilee
                    id: "1009381",
                    type: "Weird",
                    strike: "Fireworks",
                    dmg: 0,
                    health: 0
                }, {
                    //Hawkeye
                    id: "1009262",
                    type: "Tech",
                    strike: "Skillshot",
                    dmg: 0,
                    health: 0
                 },{
                    //Daredevil
                    id: "1010808",
                    type: "Strength",
                    strike: "",
                    dmg: 0,
                    health: 0
                 }, { 
                    //Domino
                    id: "1009277",
                    type: "Tech",
                    strike: "",
                    dmg: 0,
                    health: 0,
                }
            ],
            //Tier 2
            [
                {
                    //Gamora
                    id: "1010763",
                    type: "",
                    strike: "",
                    dmg: 0,
                    health: 0
                },{ 
                    //Gambit
                    id: "1009313",
                    type: "Weird",
                    strike: "",
                    dmg: 0,
                    health: 0
                },{ 
                    //Spider-Man
                    id: "1016181",
                    type: "Tech",
                    strike: "",
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
                    strike: "",
                    dmg: 0,
                    health: 0
            },{ 
                    // Iron Man
                    id: "1009368",
                    type: "Tech",
                    strike: "",
                    dmg: 0,
                    health: 0
            },{ 
                    // Rogue 
                    id: "1009546",
                    type: "Strength",
                    strike: "",
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
                    stike: "",
                    dmg: 0,
                    health: 0
                },{
                    //She-Hulk
                    id: "1009583", 
                    type: "Strength",
                    strike: "",
                    dmg: 0,
                    health: 0
                },{
                    //Thor
                    id: "1009664",
                    type: "Cosmic",
                    strike: "",
                    dmg: 0,
                    health: 0
                },{
                    //Captain Marvel
                    id: "1010338",
                    type: "Cosmic",
                    strike: "",
                    dmg: 0,
                    health: 0        
            }
            ],
            // Tier 5
            [{
                //Ultron
                id: "1009685", 
                type: "Tech",
                strike: "",
                dmg: 0,
                health: 0
            },{
                //Scarlet Witch
                id: "1009562", 
                type: "Weird",
                strike: "",
                dmg:0,
                health: 0
            },{
                //Adam Warlock
                id: "1010354", 
                type: "Cosmic",
                strike: "",
                dmg:0,
                health:0
            },{
                //Jean Grey
                id: "1009327",
                type: "Cosmic",
                strike: "",
                dmg:0,
                health:0
            }
        ]
        ],
        allyData: [],
        enemyData: [], 
        powerData: []
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
                    const allyUrl = 'http://gateway.marvel.com/v1/public/characters/' + this.charData[i][Math.floor(Math.random() * 4)] + '?ts=' +timestamp + '&apikey=' +publicKey + '&hash=' + hash;
                    const enemyUrl = 'http://gateway.marvel.com/v1/public/characters/' + this.charData[i][Math.floor(Math.random() * 4)] + '?ts=' +timestamp + '&apikey=' +publicKey + '&hash=' + hash;
                    try {
                    console.log(allyUrl);
                    let allyResponse = await axios.get(allyUrl)
                    let allies = allyResponse.data.data.results[0];
                    this.allyData.push(allies);

                    console.log(enemyUrl);
                    let enemyResponse = await axios.get(enemyUrl);
                    let enemies = enemyResponse.data.data.results[0];
                    this.enemyData.push(enemies);
                    } catch (err) {
                        console.log(err)
                    }
            }
        },
        async loadPowers() {
            try {
                let response = await axios.get(/*power mongoDB*/);
                let data = response.data;
                this.powerData = data[this.date];
            } catch (err) {
                console.log(err)
            }
        }
    }
})
