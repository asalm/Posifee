<template>
<div>
    <div class="floating-button">
        <b-button v-on:click="back">
            <font-awesome-icon icon="arrow-left"/>
        </b-button>
    </div>
<div class="qContainer">
        <div class="container" style="margin-bottom:3em">
            <h1 class="title">Frage:</h1>
            <div class="notification is-warning">
            <p>{{ question }}</p>
            </div>
        </div>
        <div class="container">
        <h1 class="title">Antworten:</h1>
        <vuescroll>
        <div class="AWScontainer" style="margin-bottom:2em">
            <Answer :id="$id('a1')" text="fünününününün" />
            <Answer :id="$id('a2')" text="füfüfüfüf" />
            <Answer :id="$id('a3')" text="fünününününün" />
            <Answer :id="$id('a4')" text="    <Answer text='fünününününün'" />
            <Answer :id="$id('a5')" text="Die USA drohen der EU mit Konsequenzen, sollte dies" />
            <Answer :id="$id('a6')" text="Eliten, Bürokraten, Migranten: Europas Rechte haben gemeinsame Gegner. Am liebsten würden AfD, Lega und Co. die EU von innen umkrempeln. Doch einer echten Allianz stehen gravierende Unterschiede im Weg. " />
            <Answer :id="$id('a7')" text="Die Rolle des Verteidigungsministeriums bei der Sanierung der 'Gorch Fock' hat womöglich ein juristisches Nachspiel. Nach SPIEGEL-Informationen geht es um ein Papier, das Ursula von der Leyen abgezeichnet hat" />
        </div>
        </vuescroll>
        </div>
</div>
</div>
</template>
<script>
import Answer from '@/components/Answer'
import vuescroll from 'vuescroll';

export default {
    name:'giveanswer',
    props:{
        question:String
    },
    components:{
        Answer,
        vuescroll
    },
    methods:{
        back: function(){
            const self = this

            self.$router.go(-1);
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
.AWScontainer{
    height:18em !important;
    margin-bottom:2em;
}
.qContainer {
    overflow:hidden;
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
