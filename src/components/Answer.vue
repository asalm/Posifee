<template>
<div class="container" v-dragged="onDragged">
    <!-- Swipe Right for Positive Vote -->
    <!-- Swipe Left for Negative Vote -->
    <div v-on:dblclick="reset()" class="notification" :id="id">
    <p>{{ text }}</p>
    </div>
</div>    
</template>
<script>
import _ from 'lodash';

export default {
    name:'answer',
    props: {
        text: String,
        id: String,
        aid: Number,
        userid: Number,
        pos: Boolean,
        neg: Boolean,
        interactive: Boolean
    },
    data: function(){
        return {
            positive: false,
            negative: false,
        }
    },
    created(){
        var s = this.$props;
        //eslint-disable-next-line
        //console.log("im number " + s.aid + " from " + s.userid + ".",s.text,"im"+ s.pos +" and " +s.neg);
        
        if(s.pos){
            console.log
            this.$data.positive = true;
        }
        if(s.neg){
            this.$data.negative = true;
        }
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
        if(this.$props.interactive){
            //Handle Swipe Upvote
            if(offsetX > 240){
                //console.log("CONTAINER",this.id + "pulled Right { cX: " + clientX + ";; oX: " + offsetX)
                this.upvote();

            //Handle Swipe Downvote
            }else if(offsetX < -240){
                console.log("CONTAINER",this.id + "pulled Left")
               this.downvote();
            }
        }
                deltaX = 0;
                deltaY = 0;
                offsetX = 0;
                offsetY = 0;
                clientX = 0;
                clientY = 0;
                this.dragged = false;
            
            },

            upvote: async function(){
                console.log("attemping upvote");

                var _response = await this.$api.db.answer.update({
                    row:{
                        "aid": [parseInt(this.$props.aid)]
                    },
                    update:{
                        positive: "true",
                        negative: "false"
                    }
                },this.$tkn);
                //console.log(_response);
                if(_response){
                    this.$data.negative = false;
                    this.$data.positive = true;
                }
            },
            downvote: async function(){
                var _response = await this.$api.db.answer.update({
                    row:{
                        "aid": [parseInt(this.$props.aid)]
                    },
                    update:{
                        positive:"false",
                        negative:"true"
                    }
                },this.$tkn);
                if(_response){
                    this.$data.negative = true;
                    this.$data.positive = false;
                }
            },
            reset(){
                this.$data.negative = false;
                this.$data.positive = false;
                document.getElementById(this.id).classList.remove("is-success");
                document.getElementById(this.id).classList.remove("is-danger");
            }
           

        },
        watch: {
            positive: function(){
                document.getElementById(this.id).classList.add('is-success');
                document.getElementById(this.id).classList.remove("is-danger");
            },
            negative: function(){
                document.getElementById(this.id).classList.add('is-danger');
                document.getElementById(this.id).classList.remove("is-success");
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