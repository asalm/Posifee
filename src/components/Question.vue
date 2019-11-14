<template>
<div class="container">
    <div class="notification">
    <p>{{ text }}</p>
    <button v-if="interactive" class="reply" @click="interaction">
        <h1 class="title" v-if="hasAnswer">{{ answers }}</h1>
        <font-awesome-icon v-else icon="reply"/></button>

    </div>
    
</div>
</template>
<script>


export default {
    name:'question',
    components:{
    },
    props: {
        count: Number,
        id: Number,
        text: String,
        hasAnswer: Boolean,
        interactive: Boolean
    },
    data: function(){
        return{
        answers: this.$props.count,
        open:false
        };
    },
    computed: {
        numAnswers: function() {
            var num;

            num = Math.floor(Math.random() * Math.floor(99));
            return num;
        }
    },
    methods: {
        hideModal() {
            this.open = false;
        },

        interaction: function() {
            event.preventDefault();

            const self = this;
            if(this.hasAnswer){
                //Send me to the Answers!
                self.$router.push({name:'readanswer', params: {question: this.text,qid: this.id}});
            }else{
                //I will write an Answer
                
                self.$router.push({name:'writeanswer', params: {question: this.text,qid: this.id}});
            }
        }
    }
}
</script>
<style scoped>
.container{
    margin-bottom:10px;

}

.notification p{
    text-align:left;
}

@media only screen and (min-width:600px){
.notification{
    box-shadow:0px 6px 8px 1px rgba(0,0,0,0.28);
    max-width:70%;
    margin:0 auto;
    transition:all 0.8s;
    background-color:white;
}
@media screen and (max-width:599px){
    .notification{
        max-width:92%;
        margin:0 auto;
        transition: all 0.8s;
        background-color:white;
    }
}
}
.notification:hover{
    box-shadow:0px 3px 9px 2px rgba(0,0,0,0.3);
    transition: all 0.8s;
}

.notification p{
    padding-right:2.3em;
}

.notification .reply{
float:right;
position:absolute;
top:0;
right:0;
min-width:5em;
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