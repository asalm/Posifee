<template>
<div>
    <div class="floating-button">
        <b-button v-on:click="back">
            <font-awesome-icon icon="arrow-left"/>
        </b-button> 
    </div>
<div class="qContainer">
        <div class="container" style="margin-bottom:3em">
            <h1 class="title">Feedback einreichen!</h1>
            <p>Wie gefällt dir die Anwendung? Was hat dich überrascht, was dir gefehlt? Gib Feedback zurück an die Entwickler um die Anwendung zu verbessern.</p>
        </div>
        <div class="container" style="margin-bottom:2em">
            <h1 class="title">Dein Feedback:</h1>
            <b-field v-if="!submitted">
            <b-input type="textarea"
                v-model="inputText"
                minlength="10"
                maxlength="500"
                @keydown.native.enter="enter($event)"
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
    name:'writefeedback',
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
        enter: function($event){
            $event.preventDefault();
        },
        submit: async function(){
            if(this.inputText.length > 10){
                // eslint-disable-next-line
                //console.log("text contains " + this.inputText.length + " characters");
                var today = new Date();
                var currentDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
                var submission = await this.$api.db.feedback.insert({
                    "text": this.inputText,
                    "date": currentDate,
                }, this.$tkn)

                if(submission.response === "transmission accepted"){
                    this.submitted = true;
                    this.$toast.open({
                        duration: 5000,
                        message: 'Dein Feedback wurde eingereicht!',
                        position: 'is-bottom',
                        type:'is-success'
                    });
                }
            }else{
                this.$toast.open({
                    duration: 5000,
                    message: `Dein Feedback sollte mindestens 10 Zeichen beinhalten.`,
                    position: 'is-bottom',
                    type: 'is-danger'
                })
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
