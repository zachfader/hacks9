new Vue({
    el: '#powerup',
    data: {
        charData: [
            ["1009381", "1009262", "1010808", "1009277"],
            ["1009378", "1009313", "1016181", "1009220"],
            ["1009465", "1009368", "1009546", "1009718"],
            ["1009629", "1009583", "1009664", "1010338"],
            ["1009417", "1009562", "1010354", "1009327"]
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
            r1 = Math.floor(Math.random() * 4);
            r2 = Math.floor(Math.random() * 4);
            const publicKey = '044a96a9f1fb46edb7605ba331cccf4d';
            const privateKey = '3c5994b84cd1776f0bf0d74c353ee3145edc7416';
            const timestamp = new Date().getTime().toString();

            
            const hash = md5(timestamp + privateKey + publicKey);
            for (i = 0; i < 5; i ++) {
                const allyUrl = 'http://gateway.marvel.com/v1/public/characters/' + this.charData[i][r1] + '?ts=' +timestamp + '&apikey=' +publicKey + '&hash=' + hash;
                const enemyUrl = 'http://gateway.marvel.com/v1/public/characters/' + this.charData[i][r2] + '?ts=' +timestamp + '&apikey=' +publicKey + '&hash=' + hash;
                try {
                console.log(allyUrl);
                 let allyResponse = await axios.get(allyUrl)
                 let allies = allyResponse.data.results;
                 this.allyData(allies);

                 console.log(enemyUrl);
                 let enemyResponse = await axios.get(enemyUrl);
                 let enemies = enemyResponse.data.data.results;
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
