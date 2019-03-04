<template>
    
       <v-container style="height: 100%; display: flex; align-items: center; justify-content: center">
      

       
               <v-card style="height: 350px; width: 250px; padding: 20px">

               
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
          <v-btn flat outline color="orange">Signup</v-btn>
        
         
        </v-card-actions>
        <br>
<div style="display: flex; justify-content: center">
         <router-link to="/login">Or go back to Login</router-link>
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
