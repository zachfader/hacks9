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
                    dmg: 40,
                    health: 100
                },{
                    //Hawkeye
                    id: "1009262",
                    type: "Tech",
                    strike: "Skillshot",
                    dmg: 40,
                    health: 100
                 },{
                    //Daredevil
                    id: "1010808",
                    type: "Strength",
                    strike: "Billy Club Bash",
                    dmg: 40,
                    health: 110
                 },{ 
                    //Domino
                    id: "1009277",
                    type: "Tech",
                    strike: "Lucky Shot",
                    dmg: 50,
                    health: 110
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
                    health: 130
                },{ 
                    //Gambit
                    id: "1009313",
                    type: "Weird",
                    strike: "Kinetic Cards",
                    dmg: 0,
                    health: 
                },{ 
                    //Spider-Man
                    id: "1016181",
                    type: "Tech",
                    strike: "Venom Blast",
                    dmg: 55,
                    health: 130
                },{ 
                    //Mystique
                    id:"1009465",
                    type: "Weird",
                    strike: "",
                    dmg: 50,
                    health: 140
                }
            ],
            // Tier 3
            [
                { 
                    //Captain America
                    id: "1009220", 
                    type: "Strength",
                    strike: "Shield Throw",
                    dmg: 65,
                    health: 150
            },{ 
                    // Iron Man
                    id: "1009368",
                    type: "Tech",
                    strike: "Repulsor Blast",
                    dmg: 70,
                    health: 160
            },{ 
                    // Rogue 
                    id: "1009546",
                    type: "Strength",
                    strike: "Power Drain",
                    dmg: 65,
                    health: 155
            },{ 
                    //Wolverine
                    id: "1009718",
                    type: "Strength",
                    strike: "Claw Slash",
                    dmg: 70,
                    health: 160
            }
            ],
            // Tier 4
            [
                {
                    //Storm
                    id: "1009629", 
                    type: "Weird",
                    stike: "Lightning Bolt",
                    dmg: 85,
                    health: 170
                },{
                    //She-Hulk
                    id: "1009583", 
                    type: "Strength",
                    strike: "Smash",
                    dmg: 80,
                    health: 185
                },{
                    //Thor
                    id: "1009664",
                    type: "Cosmic",
                    strike: "Mjolnir Strike",
                    dmg: 90,
                    health: 180
                },{
                    //Captain Marvel
                    id: "1010338",
                    type: "Cosmic",
                    strike: "Photon Blast",
                    dmg: 90,
                    health: 180        
            }
            ],
            // Tier 5
            [{
                //Ultron
                id: "1009685", 
                type: "Tech",
                strike: "Bot Swarm",
                dmg: 90,
                health: 200
            },{
                //Scarlet Witch
                id: "1009562", 
                type: "Weird",
                strike: "Chaos Magic",
                dmg:100,
                health: 190
            },{
                //Adam Warlock
                id: "1010354", 
                type: "Cosmic",
                strike: "Quantum Surge",
                dmg:95,
                health:200
            },{
                //Jean Grey
                id: "1009327",
                type: "Cosmic",
                strike: "Phoenix Flame",
                dmg:95,
                health:210
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
