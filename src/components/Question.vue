<template>
<div class="container">
    <div class="notification">
    <p>{{ text }}</p>
    <button v-if="interactive" class="reply" @click="interaction">
        <h1 class="title" v-if="hasAnswer">{{ numAnswers }}</h1>
        <font-awesome-icon v-else icon="reply"/></button>

    </div>
    <!--
    <vue-modaltor  
        :visible="open" 
        @hide="hideModal"
        :bg-overlay="'white'"
        :bg-panel="'white'">
    <h1 class="title">Frage:</h1>
    <div class="notification is-warning">
        <p>{{ text }}</p>
    </div>
     Replace with Separator Element 
    <p>----------------------</p>
     Replace with Separator Element 
    <h1 class="title">Antworten</h1>

    <Answer :id="$id('a1')" text="fünününününün" />
    <Answer :id="$id('a2')" text="füfüfüfüf" />
    <Answer :id="$id('a3')" text="fünününününün" />
    <Answer :id="$id('a4')" text="    <Answer text='fünününününün'" />
    <Answer :id="$id('a5')" text="Die USA drohen der EU mit Konsequenzen, sollte dies" />
    <Answer :id="$id('a6')" text="Eliten, Bürokraten, Migranten: Europas Rechte haben gemeinsame Gegner. Am liebsten würden AfD, Lega und Co. die EU von innen umkrempeln. Doch einer echten Allianz stehen gravierende Unterschiede im Weg. " />
    <Answer :id="$id('a7')" text="Die Rolle des Verteidigungsministeriums bei der Sanierung der 'Gorch Fock' hat womöglich ein juristisches Nachspiel. Nach SPIEGEL-Informationen geht es um ein Papier, das Ursula von der Leyen abgezeichnet hat" />

  </vue-modaltor>
  -->
</div>
</template>
<script>
//import Answer from '../components/Answer.vue';
//const router = this.$router

export default {
    name:'question',
    components:{
        //Answer
    },
    props: {
        text: String,
        hasAnswer: Boolean,
        interactive: Boolean
    },
    data: function(){
        return{
        answers:'10',
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
                self.$router.push({name:'readanswer', params: {question: this.text}});
            }else{
                //I will write an Answer
                
                self.$router.push({name:'writeanswer', params: {question: this.text}});
console.log('i will write an answer!');            
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