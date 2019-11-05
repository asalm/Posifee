<template>
<div>
    <div class="floating-button">
        <b-button v-on:click="back">
            <font-awesome-icon icon="arrow-left"/>
        </b-button> 
    </div>
<div class="qContainer">
    <vuescroll>
        <div class="container" style="margin-bottom:3em">
            <h1 class="title">Frage:</h1>
            <div class="notification is-warning">
            <p>{{ question }}</p>
            </div>
        </div>
        <div class="container" style="margin-bottom:2em">
            <h1 class="title">Deine Antwort:</h1>
            <b-field>
            <b-input v-if="!submitted" type="textarea"
                v-model="inputText"
                minlength="10"
                maxlength="500"
                @submit.prevent
                placeholder="Maxlength automatically counts characters">
            </b-input>
            </b-field>
            <div class="notification is-warning">
                <p>{{inputText}}</p>
            </div>
        </div>
        <div class="container" style="margin-bottom:2em">
            <b-button v-if="!staged" v-on:click="submit()">Antworten</b-button>
            <b-button v-if="staged" v-on:click="submit()">Abschicken</b-button>
            <b-button v-else v-on:click="back()">Zurück</b-button>
        </div>
    </vuescroll>
    <!-- SUBMIT REVIEW -->
</div>
</div>
</template>
<script>
import Question from '@/components/Question';
import vuescroll from 'vuescroll';

export default {
    name:'giveanswer',
    props:{
        qid:Number,
        question:String
    },
    components:{
        Question,
        vuescroll
    },
    data(){
        return{
            inputText:"",
            staged: false,
            submitted: false,
        }
    },
    methods:{
        back: function(){
            const self = this

            self.$router.go(-1);
        },
        enter: function(){
            //e.preventDefaults();
        },
        submit: async function(){

            if(this.staged){
                console.log("ANSWERING TO: ",this.$props.qid);
                var submission = await this.$api.db.answer.insert({
                "qID":this.$props.qid,
                "userID":this.$api.usr.id,
                "text": this.inputText,
                "positive":false,
                "negative":false
                },this.$tkn);     
                if(submission.response === "transmission accepted"){
                    this.submitted = true;
                }
            }else{
                this.staged = true;
            }
            
        }
    },
    watch: {
        inputText: function(){
            //es-disable next-line
            console.log(this.inputText);
        }
    }
}
</script>
<style scoped>
.floating-button{
    position:fixed;
    z-index:9999;
    top:5%;
    left:5%;
}

@media only screen and (min-width:1200px){
    .qContainer{
        width:30em;
    }
}
.qContainer {
    /*width:30em;*/
    height:40em;
    padding: 1em;
    top: 20%;
    left: 50%;
    margin-right: auto;
    margin-left: auto;
}
.title{
  z-index:4;
  padding-top:0.56em;
    text-shadow: 0px 2px rgba(0,0,0,0.3);
    font-weight:200;
    
}
</style>
