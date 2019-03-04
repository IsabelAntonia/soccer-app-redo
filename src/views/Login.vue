<template>
    
       <v-container style="height: 100%; display: flex; align-items: center; justify-content: center">
      

       
               <v-card style="height: 450px; width: 270px; padding: 15px">

               
                  <v-card-text>
                      
             
                                   <v-text-field 
                                     name="email" 
                                     label="Mail" 
                                     id="email" 
                                     v-model="email">
                                     <!-- type="email" required> -->
                                   </v-text-field>
                                   
                          
                            
                                   <v-text-field 
                                     name="password" 
                                     label="Password" 
                                     id="password" 
                                     v-model="password">
                                     <!-- type="password" required> -->
                                   </v-text-field>
                            
                         
                      
                  </v-card-text>



                   <v-card-actions style="display: flex; justify-content: center">
          <v-btn flat outline color="orange">Login</v-btn>
          
         
        </v-card-actions>
        <v-divider></v-divider>
        <!-- <br> -->
<div style="display: flex; justify-content: center; text-align: center">
         <router-link to="/signup">You don't have an account? Click here to create one</router-link>
</div>

<v-divider></v-divider>
      <!-- <br> -->
<div style="display: flex; justify-content: center">
    <v-btn flat outline color="orange" to="/schedule">Continue without Login</v-btn>
</div>

    <br>
<div style="display: flex; justify-content: center; text-align: center">
    <small>You can always login later. Only the use of the chat requires you to be logged in.</small>
</div>


      
             
                   
               </v-card>

             
               
          
      

         
         
         
     </v-container>
   
</template>

<script>
export default {

    data(){
        return {
            email: '',
            password: ''
        }
    }

}
</script>

<style>

</style>
