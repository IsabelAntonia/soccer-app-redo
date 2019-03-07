<template>
    <div style='height: 100%; display: flex; align-items: center; justify-content: center; font-weight: bold; ' class="matchdetails">

        <v-card style="height: 480px; width: 300px; margin-bottom: 55px; padding: 20px; display: flex; flex-direction: column; align-items: center; justify-content: center;">




            <div style="color: orange" id="myGrid">
                <p style="text-align: left" id="t1name">{{CurrentMatch.t1name}}</p>
                <p style="text-align: right" id="t2name">{{CurrentMatch.t2name}}</p>
                <p style='text-align: center;' id="vs">vs.</p>
                <p id="date">Date:</p>
                <p style="text-align: right" id='CMdate'>{{CurrentMatch.date}}</p>
                <p style="text-align: right" id='CMtime'>{{CurrentMatch.time}}</p>
                <p style="text-align: left" id='time'>Time:</p>

            </div>




            <div style="text-align: center; color: orange" id="myGrid2">

                <p style="text-align: left" id='address'>Address:</p>
                <p style="text-align: left" id='stadium'>Stadium:</p>


                <p style="text-align: right !important" id='CMaddress'>{{CurrentMatch.fieldDirecction}}</p>
                <p style="text-align: right !important" id='CMstadium'>{{CurrentMatch.field}}</p>


            </div>







            <p class="blue lighten-5" style="text-align: center;font-size: 12px; padding: 10px; border: 3px solid orange !important; color: orange;">If deemed necessary by NYSL, games may be shortened or cancelled due to extreme weather conditions.</p>
        </v-card>

    </div>

</template>


<script>
    export default {
        props: ['id'],

        computed: {
            CurrentMatch() {
                return this.$store.state.matches[this.id]
            }
        }

    }
</script>

<style scoped>
    #myGrid {

        display: grid;
        grid-template-columns: 120px 25px 105px;
        grid-template-rows: 50px 15px 50px 50px;
        grid-column-gap: 5px;

    }

    #myGrid2 {

        margin-top: 15px;
        margin-bottom: 40px;
        display: grid;
        grid-template-columns: 75px 175px;
        grid-template-rows: 40px 40px;
        grid-column-gap: 5px;

    }


    #t1name {

        grid-column-start: 1;
    }

    #t2name {

        grid-column-start: 3;
    }

    #vs {

        grid-column-start: 2;
        grid-row-start: 1;
    }

    #date {

        grid-column-start: 1;
        grid-row-start: 3;

    }

    #CMdate {

        grid-column-start: 3;
        grid-row-start: 3;
    }


    #time {

        grid-column-start: 1;
        grid-row-start: 4;
    }

    #CMtime {

        grid-column-start: 3;
        grid-row-start: 4;
    }





    #address {

        grid-column-start: 1;
        grid-row-start: 2;
    }

    #CMaddress {

        grid-column-start: 2;
        grid-row-start: 2 !important;
        margin-bottom: 0;
    }

    #stadium {

        grid-column-start: 1;
        grid-row-start: 1;
    }

    #CMstadium {

        grid-column-start: 2;
        grid-row-start: 1 !important;
    }






    p {
        font-size: 12px;
    }
</style>