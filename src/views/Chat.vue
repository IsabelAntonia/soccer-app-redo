<template>



<div class="chat">

<div style="margin: 40px;" class="bubble"></div>


   <div class="fixed-bottom" style='height: 60px; width: 100%; background-color: white; display: flex; align-items: center'>
        <input style='border: 3px solid orange; width: 75%; height: 40px; margin-left: 10px; border-radius: 20px; padding: 10px; overflow: scroll' placeholder="Write your message" type="text">
        <v-icon large color='blue' style='margin-left: 20px;'>send</v-icon>

        </div>
   
</div>
    
</template>

<script>
export default {
  

}
</script>

<style>

.bubble 
{
position: relative;
width: 200px;
height: 55px;
padding: 0px;
background: #FFFFFF;
-webkit-border-radius: 9px;
-moz-border-radius: 9px;
border-radius: 9px;
}

.bubble:after 
{
content: '';
position: absolute;
border-style: solid;
border-width: 9px 15px 9px 0;
border-color: transparent #FFFFFF;
display: block;
width: 0;
z-index: 1;
left: -15px;
top: 18px;
}
   
</style>

 