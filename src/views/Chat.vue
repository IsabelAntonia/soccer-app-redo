<template>



    <div class="chat" style='height: 100%;'>

        <div id="scrollDiv" style='display: flex; flex-direction: column; align-items: flex-start; overflow: scroll;'>

            <div v-for="(key,i) in messages" :key="i" class="bubble" :class="{right: key.name === loggedInUser, left: key.name !== loggedInUser }">
                <!-- the presence of the right class will be determined by whether key.name is the loggedInUser -->
                <small v-if="key.name === loggedInUser">You</small>
                <small v-if="key.name !== loggedInUser">{{key.name}}</small>
                <p>{{key.message}}</p>
            </div>
        </div>





        <div class="fixed-bottom" style='height: 60px; width: 100%; background-color: white; display: flex; align-items: center'>
            <textarea id='textInput' cols="5" rows="1"></textarea>


            <v-icon large color='blue' style='margin-left: 20px;' @click="sendMessagesToFirebase">send</v-icon>

        </div>

    </div>

</template>

<script>
    import firebase from 'firebase'
    export default {

        data() {

            return {
                messages: {},
                loggedInUser: {},



            }
        },

        mounted() {
            this.calculateHeight();
          
        },


        created() {
            this.getMessagesFromFirebase();



        },

        updated() {
            document.getElementById('scrollDiv').scrollTop = document.getElementById('scrollDiv').scrollHeight;

        },


        methods: {
            calculateHeight() {

                var screenHeight = window.screen.height;

                var calculatedHeight = screenHeight - (56 + 60);

                calculatedHeight = calculatedHeight + 'px'

                document.querySelector('#scrollDiv').style.height = calculatedHeight;


            },



            sendMessagesToFirebase() {

                let text = document.getElementById("textInput").value;
                let message = {
                    message: text,
                    name: firebase.auth().currentUser.email
                };


                firebase.database().ref('chat').push(message); //push the message to firebase
                document.getElementById('textInput').value = " "; //empty the text input field again


            },
            getMessagesFromFirebase() {

                this.loggedInUser = firebase.auth().currentUser.email;

                firebase.database().ref('chat').on('value', (data) => {
                    this.messages = data.val();


                })
            }


        }


    }
</script>

<style scoped>
  

    p {

        margin-bottom: 0;
        font-size: 12px;
    }


    #textInput {

        border: 3px solid orange;
        width: 75vw;
        height: 40px;
        margin-left: 10px;
        border-radius: 20px;
        padding: 10px;
        overflow: scroll;


    }


    .bubble {

        margin-top: 10px;
        margin-bottom: 10px;
        display: inline-block !important;
        max-width: 75vw;
        height: auto;
        text-align: center;
        padding: 14px;
        background: #FFFFFF;
        border-radius: 10px;
        position: relative;
        word-break: break-word;

    }

     .left:after {
        content: '';
        position: absolute;
        border-style: solid;
        border-width: 10px 10px 10px 0;
        border-color: transparent #FFFFFF;
        display: block;
        width: 0;
       
        z-index: 1;
        left: -10px;
        top: calc(50% - 10px);
    }

      .right:after {
        content: '';
        position: absolute;
        border-style: solid;
        border-width: 10px 0px 10px 10px;
        border-color: transparent #E3F2FD;
        display: block;
        width: 0;
        z-index: 1;
        right: -10px;
        top: calc(50% - 10px);
    }


      .right {
       margin-right: 20px;
        background-color: #E3F2FD;
        align-self: flex-end;
        
    }

    .left {
 margin-left: 20px;
 

    }

 

</style>