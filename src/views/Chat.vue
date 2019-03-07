<template>



<div class="chat" style='height: 100%;'>

<!-- <div class="bubble">Lorem ipsum dolor sit amet
   </div> -->

   <div id="whiteDiv" style='display: flex; flex-direction: column; align-items: flex-start; overflow: scroll;'>

    <div v-for="(key,i) in messages" :key="i" class="bubble" :class="{right: key.name === loggedInUser}">
          <!-- the presence of the right class will be determined by whether key.name is the loggedInUser -->
           <small v-if="key.name === loggedInUser">You</small>
           <small v-if="key.name !== loggedInUser">{{key.name}}</small>
            <p>{{key.message}}</p>
        </div>
</div>

   <div class="fixed-bottom" style='height: 60px; width: 100%; background-color: white; display: flex; align-items: center'>
        <input id='textInput' style='border: 3px solid orange; width: 75%; height: 40px; margin-left: 10px; border-radius: 20px; padding: 10px; overflow: scroll' placeholder="Write your message" type="text">
        <v-icon large color='blue' style='margin-left: 20px;' @click="sendMessagesToFirebase" >send</v-icon>

        </div>
   
</div>
    
</template>

<script>
 import firebase from 'firebase'
export default {

    data(){

        return {
            messages: {},
            loggedInUser: {},
           
           

        }
    },

   mounted(){
 this.calculateHeight();
   },


    created(){
        this.getMessagesFromFirebase();
       

    },


    methods: {
          calculateHeight(){

         document.querySelector('#whiteDiv').style.height = '200px'
         
         },

    
              sendMessagesToFirebase() {

                let text = document.getElementById("textInput").value;
                let message = {
                    message: text,
                    name: firebase.auth().currentUser.email
                };
                let userName = firebase.auth().currentUser.email;

                firebase.database().ref('chat').push(message); //push the message to firebase
                document.getElementById('textInput').value ="";//empty the text input field again

            },
            getMessagesFromFirebase() {
                
                this.loggedInUser= firebase.auth().currentUser.email;

                firebase.database().ref('chat').on('value', (data) => {
                    this.messages = data.val();
                })
            }


    }
  

}
</script>

<style scoped>

.bubble 
{
position: relative;
margin: 10px;
width: auto;
height: auto;
padding: 20px;
display: flex;
flex-direction: column;
text-align:center;
align-items: center;
justify-content: center;
background: #FFFFFF;
/* -webkit-border-radius: 10px;
-moz-border-radius: 10px; */
border-radius: 10px;
}

/* .bubble:after 
{
content: '';
position: absolute;
border-style: solid;
border-width: 7px 22px 7px 0;
border-color: transparent #FFFFFF;
display: block;
width: 0;
z-index: 1;
left: -22px;
top: 13px;
} */

 .right {
        background-color: #E3F2FD;
        align-self: flex-end;
        
       } 


       p {

           margin-bottom: 0;
       }
   
</style>

 