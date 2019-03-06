<template>      
   <div style='height: 100%; display: flex; align-items: center; justify-content: center' class="matchdetails">
   
                  <v-card style="height: 480px; width: 300px; margin-bottom: 55px; padding: 5px; display: flex; flex-direction: column; align-items: center; justify-content: center;">

                       <div style="text-align: center; color: orange" id="myGrid">
                      <p id="t1name">{{CurrentMatch.t1name}}</p>
                      <p id="t2name">{{CurrentMatch.t2name}}</p>
                      <p id="vs">vs.</p>
                      <p id="when">When:</p>
                      <p id='date'>{{CurrentMatch.date}}</p>
                      <p id='time'>{{CurrentMatch.time}}</p>
                      <p id='where'>Where:</p>
                      <p id='field'>{{CurrentMatch.field}}</p>
                      <p style='font-size: 10px' id='direction'>{{CurrentMatch.fieldDirecction}}</p>
</div>

<p style="text-align: center; padding: 10px; border: 3px solid orange; color: orange">Please note that smoking is not permitted during any of our matches.</p>
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
    grid-template-columns: 100px 75px 100px; 
    grid-template-rows: 100px 100px 100px; 
    grid-column-gap: 5px;

}

#when{

grid-column-start: 1;
grid-row-start: 2;

}

#date {

    grid-column-start: 2;
    grid-row-start: 2;
}

#time{

     grid-column-start: 3;
    grid-row-start: 2;
}

#where {

     grid-column-start: 1;
    grid-row-start: 3;
}


#field {

grid-column-start: 2;
    grid-row-start: 3;

}

#direction {

grid-column-start: 3;
    grid-row-start: 3;

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



p {
    font-size: 15px;
}

</style>
