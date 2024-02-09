new Vue({
    el: '#powerup',
    data: {
        heroData: [],
        powerData: []
    },
    methods: {
        async loadHeroes() {
            try {
                let response = await axios.get(/*marvel api*/);
                let data = response.data;
                this.heroData = data[this.date];
            } catch (err) {
                console.log(err)
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
