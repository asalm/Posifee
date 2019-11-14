<template>
<div>
    <div class="floating-button">
        <b-button v-on:click="back">
            <font-awesome-icon icon="arrow-left"/>
        </b-button> 
    </div>
<div class="qContainer">
        <div class="container" style="margin-bottom:3em">
            <h1 class="title">Frag etwas!</h1>
            <p>Stell eine Frage an die Community! Nur du kannst die Antworten dieser Frage lesen.</p>
        </div>
        <div class="container" style="margin-bottom:2em">
            <h1 class="title">Deine Frage:</h1>
            <b-field v-if="!submitted">
            <b-input type="textarea"
                v-model="inputText"
                minlength="10"
                maxlength="500"
<<<<<<< HEAD
                @submit.prevent="enter()"
=======
                @keypress.prevent
>>>>>>> 252871a3be463ab2fcc7e0b46c9b8f2f5e86c5e1
                placeholder="Maximal 500 Zeichen.">
            </b-input>
            </b-field>
            <div v-else class="column">
                <Question :text="this.inputText"/>
            </div>
        </div>
        <div class="container">
            <b-button v-if="!submitted" v-on:click="submit()">Abschicken</b-button>
            <b-button v-else v-on:click="back()">Zurück</b-button>
        </div>
        <!-- FIX ERROR WITH ENTER SUBMIT -->
</div>
</div>
</template>
<script>
import Question from '../components/Question.vue'
export default {
    name:'writequestion',
    components:{
        Question,
    },
    props:{
    },
    data(){
        return{
            inputText: "",
            submitted: false
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
            var submission = await this.$api.db.question.insert({
                "userID": parseInt(this.$api.usr.id),
                "text": this.inputText
            }, this.$tkn)

            if(submission.response === "transmission accepted"){
                this.submitted = true;
            }
        }
    },
    watch: {
        inputText: function(){
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
