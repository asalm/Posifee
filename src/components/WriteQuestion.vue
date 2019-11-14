<template>
<div>
    <div class="floating-button">
        <b-button 
            v-on:click="back"
            v-on:keydown.native.enter="enter"
        >
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
            <!--<b-field  @keydown.native.enter="enter($event)">-->
            <form  v-on:submit.prevent="enter">
                <b-input  v-if="!submitted" type="textarea"
                    id="inputForm"
                    v-on:keydown.native.enter="enter"
                    v-model="inputText"
                    minlength="10"
                    maxlength="500"
                    placeholder="Maximal 500 Zeichen."
                />
                <!--</input> -->
                <div v-else class="column">
                    <Question :text="this.inputText"/>
                </div>
                <b-button 
                    v-if="!submitted"
                    v-on:keydown.native.enter="enter"
                    v-on:click="submit()">Abschicken
                </b-button>
                <b-button 
                    v-else
                    v-on:keydown.native.enter="enter"
                    v-on:click="back()">Zurück
                </b-button>
            </form>

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
    mounted(){
        //Event Prevent Defaults Forcing by Stefan Quy @https://stackoverflow.com/questions/31070479/prevent-form-submitting-when-pressing-enter-from-a-text-input-using-vue-js
        let cb = event => {
            if (event) event.preventDefault();
            };
            if (this.$el.nodeName.toLowerCase() === "form") {
            this.$el.onsubmit = cb;
            } else {
            const forms = this.$el.getElementsByTagName("form");
            for (let i = 0; i < forms.length; i++) {
                const form = forms[i];
                if (form) form.onsubmit = cb;
            }
        }
    },
    methods:{
        back: function(){
            const self = this

            self.$router.go(-1);
        },
        enter: function(){
        },
        submit: async function(){
            if(this.inputText.length > 10){
            var submission = await this.$api.db.question.insert({
                "userID": parseInt(this.$api.usr.id),
                "text": this.inputText
            }, this.$tkn)

            if(submission.response === "transmission accepted"){
                this.submitted = true;
            }
            }else{
                this.$buefy.toast.open({
                    duration: 5000,
                    message: `Deine Frage sollte mindestens 10 Zeichen beinhalten.`,
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
