<template>
<section class="bg">
    <niceModal v-bind:text='dstext' title="Datenschutz" ref="infoModal"/>
    <div class="container">
        <div class="column title-row">
            <h1 class="title"><b>posi</b>fee</h1>
            <h3 class="subtitle"><i>"das etwas andere soziale Netzwerk"</i></h3>
        </div>
        <div class="columns join-row">
            <div class="column is-9">
                <router-link to="/q">
                    <b-button type="is-success" size="is-large">
                        Beitreten
                    </b-button>
                </router-link>
            </div>
            <div class="column is-1">
                <b-button type="is-info" size="is-large" outlined @click="toggleInfoModal">
                    info
                </b-button>
            </div>
        </div>
        <div class="column info-row">
            <p><i>v0.1</i> - created with <b>❤︎</b> </p>
        </div>
    </div>
</section>
</template>
<script>
import niceModal from '@/components/components/niceModal'

export default {
    name:'welcome',
    components:{
        niceModal
    },
    data(){
        return {
            dstext: 'Im Posifee Netzwerk wird dein Nutzer anhand eines bei dir hinterlegtem Schlüssels authentifiziert. Ist der Schlüssel gelöscht, kannst auch du nicht mehr auf deine Nutzerinformationen zugreifen. Es werden nirgendwo Namen festgehalten oder ähnliches.'
        }
    },
    props: {
        text: String
    },
    mounted(){
        window.addEventListener('keyup',function(event){
            event.preventDefault();
            if(event.keyCode === 13){
                this.$router.push({path:'/q'});
            }
        }.bind(this));
    },
    methods: {
        toggleInfoModal:function(){
            this.$refs.infoModal.toggleVisibility(); 
        }
    }
}
</script>
<style scoped>
.bg{
    position:absolute;
    top:0;
    left:0;
    width:100vw;
    height:100vh;
    background-image: linear-gradient(336deg, rgb(216,216,216),rgb(255,255,255));
}

.title{
    font-size:8em;
    text-shadow: 0px 2px rgba(0,0,0,0.3);
    font-weight:200;}

.title-row{
    margin-top:8em;
    position:relative;}
.join-row{
    margin-left:auto;
    margin-right:auto;
    width:14em;
    margin-top:12em;
    position:relative;}
.info-row{
    bottom:0;
    position:relative;
    margin-top:16em;}

i{
    font-size:0.8em;}
b{
    font-weight:200;
    color:hsl(141, 71%, 48%);}
</style>

