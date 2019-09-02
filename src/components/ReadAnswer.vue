<template>
<div style="margin-bottom:10em">
    <div class="floating-button">
        <button v-on:click="back">bbb</button>
    </div>
<div class="qContainer">
        <div class="container" style="margin-bottom:3em">
            <h1 class="title">Frage:</h1>
            <div class="notification is-warning">
            <p>{{ question }}</p>
            </div>
        </div>
        <div class="container" style="margin-bottom:2em">
            <h1 class="title">Antworten:</h1>
            <Answer :id="$id('a1')" text="fünününününün" />
            <Answer :id="$id('a2')" text="füfüfüfüf" />
            <Answer :id="$id('a3')" text="fünününününün" />
            <Answer :id="$id('a4')" text="    <Answer text='fünününününün'" />
            <Answer :id="$id('a5')" text="Die USA drohen der EU mit Konsequenzen, sollte dies" />
            <Answer :id="$id('a6')" text="Eliten, Bürokraten, Migranten: Europas Rechte haben gemeinsame Gegner. Am liebsten würden AfD, Lega und Co. die EU von innen umkrempeln. Doch einer echten Allianz stehen gravierende Unterschiede im Weg. " />
            <Answer :id="$id('a7')" text="Die Rolle des Verteidigungsministeriums bei der Sanierung der 'Gorch Fock' hat womöglich ein juristisches Nachspiel. Nach SPIEGEL-Informationen geht es um ein Papier, das Ursula von der Leyen abgezeichnet hat" />

        </div>
        <div class="container" style="margin-bottom:4em">
            <router-link to="/a"><b-button class="button-magic" type="is-primary" size="is-large">zurück</b-button></router-link>
        </div>
</div>
</div>
</template>
<script>
import Question from '@/components/Question'
import Answer from '@/components/Answer'

export default {
    name:'giveanswer',
    props:{
        question:String
    },
    components:{
        Question,
        Answer
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
.qContainer {
    width:30em;
    min-height:40em;
    border: 1px solid rgba(0,0,0,0.2);
    border-radius: 1em;
    padding: 1em;
    position: absolute;
    top: 20%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -20%);
}
</style>
