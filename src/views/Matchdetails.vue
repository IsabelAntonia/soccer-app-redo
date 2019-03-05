<template>      
   <div class="matchdetails">
   
                   
                      <h3>{{CurrentMatch}}</h3>
          
      </div>
    
</template>


<script>
export default {
    props: ['id'],

    computed: {
        CurrentMatch(){
            return this.$store.state.matches[this.id].name
        }
    }

}
</script>

<style>

</style>
