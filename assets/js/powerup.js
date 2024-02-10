new Vue({
    el: '#powerup',
    data: {
        whoseTurn: 1,
        gameOver: false,
        charData: [
            ["1009381", "1009262", "1010808", "1009277"],
            ["1010763", "1009313", "1016181", "1009220"],
            ["1009465", "1009368", "1009546", "1009718"],
            ["1009629", "1009583", "1009664", "1010338"],
            ["1009685", "1009562", "1010354", "1009327"]
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
                        ally.push(charData[i][r1]);
                        this.p1Characters.push(ally);

                        console.log(enemyUrl);
                        let enemyResponse = await axios.get(enemyUrl);
                        let enemy = enemyResponse.data.data.results[0];
                        enemy.push(charData[i][r2]);
                        this.p2Characters.push(enemy);
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
