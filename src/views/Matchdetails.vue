<template>      
   <div style='height: 100%; display: flex; align-items: center; justify-content: center' class="matchdetails">
   
                  <v-card style="height: 480px; width: 300px; margin-bottom: 55px; padding: 20px; display: flex; flex-direction: column; align-items: center; justify-content: center;">

                       <!-- <div style="text-align: center; color: orange" id="myGrid">
                      <p id="t1name">{{CurrentMatch.t1name}}</p>
                      <p id="t2name">{{CurrentMatch.t2name}}</p>
                      <p id="vs">vs.</p>
                      <p id="date">Date:</p>
                      <p id='CMdate'>{{CurrentMatch.date}}</p>
                      <p id='stadium'>Stadium:</p>
                      <p id='CMstadium'>{{CurrentMatch.field}}</p>
                      <p id='CMtime'>{{CurrentMatch.time}}</p>
                      <p id='time'>Time:</p>
                      <p id='address'>Address:</p>
                      <p style='font-size: 10px' id='CMaddress'>{{CurrentMatch.fieldDirecction}}</p>
</div> -->


                      <div style="text-align: center; color: orange" id="myGrid">
                      <p id="t1name">{{CurrentMatch.t1name}}</p>
                      <p id="t2name">{{CurrentMatch.t2name}}</p>
                      <p id="vs">vs.</p>
                      <p id="date">Date:</p>
                      <p id='CMdate'>{{CurrentMatch.date}}</p>
                      <p id='stadium'>Stadium:</p>
                      <p id='CMstadium'>{{CurrentMatch.field}}</p>
                      <p id='CMtime'>{{CurrentMatch.time}}</p>
                      <p id='time'>Time:</p>
                      <p id='address'>Address:</p>
                      <p style='font-size: 10px' id='CMaddress'>{{CurrentMatch.fieldDirecction}}</p>
</div>









<p class="blue lighten-5" style="text-align: center;font-size: 12px; padding: 10px; border: 3px solid orange !important; color: orange;">Please note that smoking is not permitted during any of our matches.</p>
                      </v-card>
          
      </div>
    
</template>


<script>
export default {
    props: ['id'],

    computed: {
        CurrentMatch(){
            return this.$store.state.matches[this.id]
        }
    }

}
</script>

<style scoped>

#myGrid {

    display: grid;
    grid-template-columns: 125px 25px 125px; 
    grid-template-rows: 50px 50px 50px 50px 100px; 
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

#date{

grid-column-start: 1;
grid-row-start: 2;

}

#CMdate{

    grid-column-start: 1;
    grid-row-start: 3;
}

/* #stadium {

       grid-column-start: 1;
    grid-row-start: 4;
}

#CMstadium {

     grid-column-start: 1;
    grid-row-start: 5;
} */

#time {

    grid-column-start: 3;
    grid-row-start: 2;
}

#CMtime {

    grid-column-start: 3;
    grid-row-start: 3;
}

/* #address {

    grid-column-start: 3;
    grid-row-start: 4;
}

#CMaddress {

    grid-column-start: 3;
    grid-row-start: 5;
} */








p {
    font-size: 12px;
}

</style>
