<template>
<div class="container" v-dragged="onDragged">
    <!-- Swipe Right for Positive Vote -->
    <!-- Swipe Left for Negative Vote -->
    <div  class="notification" :id="id">
    <p>{{ text }}</p>
    </div>
</div>    
</template>
<script>
export default {
    name:'answer',
    props: {
        text: String,
        id: String,
    },
    methods: {
        onDragged({ el, deltaX, deltaY, offsetX, offsetY, clientX, clientY, first, last }) {
            if (first) {
                this.dragged = true
                return
            }
            if (last) {
                this.dragged = false;
                deltaX = 0;
                deltaY = 0;
                offsetX = 0;
                offsetY = 0;
                clientX = 0;
                clientY = 0;
                return
            }
            if(offsetY > 160 || offsetY < 160){
                document.getElementById(this.id).classList.remove("is-success");
                document.getElementById(this.id).classList.remove("is-danger");
            }
            //var l = +window.getComputedStyle(el)['left'].slice(0, -2) || 0
            //var t = +window.getComputedStyle(el)['top'].slice(0, -2) || 0
            if(offsetX > 240){
                document.getElementById(this.id).classList.add('is-success');
                document.getElementById(this.id).classList.remove("is-danger");
                console.log("CONTAINER",this.id + "pulled Right { cX: " + clientX + ";; oX: " + offsetX)
            }else if(offsetX < -240){
                console.log("CONTAINER",this.id + "pulled Left")

                document.getElementById(this.id).classList.add('is-danger');
                document.getElementById(this.id).classList.remove("is-success");
            }
                deltaX = 0;
                deltaY = 0;
                offsetX = 0;
                offsetY = 0;
                clientX = 0;
                clientY = 0;
                this.dragged = false;
            
            }
           

        }
}
</script>
<style scoped>
.container{
    margin-bottom:10px;
    -webkit-user-select: none;  /* Chrome all / Safari all */
    -moz-user-select: none;     /* Firefox all */
    -ms-user-select: none;      /* IE 10+ */
    user-select: none;          /* Likely future */     
}

.notification p{
    text-align:left;
}

.notification{
    box-shadow:0px 4px 8px 1px rgba(0,0,0,0.3);
    max-width:70%;
    margin:0 auto;
    transition:all 0.8s;
}
@media screen and (max-width:599px){
    .notification{
        max-width:92%;
        margin:0 auto;
        transition: all 0.8s;
    }
}
.notification:hover{
    box-shadow:0px 3px 9px 2px rgba(0,0,0,0.3);
    transition: all 0.8s;
}

.notification p{
    padding-right:10%;
}

.notification .reply{
float:right;
position:absolute;
top:0;
right:0;
width:10%;
height:100%;
border-top-right-radius:4px;
border-bottom-right-radius:4px;
border:0px solid white;
background-color:rgba(0,0,0,0.1);
color:black;
}

.notification .reply:hover{
    background-color:greenyellow;
    color:grey;
}

.notification .title{
    font-family:monospace;
    font-size:18pt;
}
</style>