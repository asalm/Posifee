<template>
<section class="bg">
    <niceModal v-bind:text='dstext' title="Datenschutz" ref="infoModal"/>
    <div class="container">
        <div class="column title-row">
            <h1 class="title"><b>posi</b>fee</h1>
            <h3 class="subtitle"><i>"das etwas andere soziale Netzwerk"</i></h3>
        </div>
        <div class="columns join-row is-centered">
            <!--
            <div class="column is-12">
                <h4 class="subtitle">Nehm teil!</h4>
                <p class="has-text-left">Posifee funktioniert ohne Nutzeranmeldungen. Dein Profil wird anhand deines Browsercache ermittelt und verfällt, sobald dieser geleert wird.</p>
            </div>-->
            <div class="column is-12">
                <div class="buttons">
                        <b-button
                            @click="trackLogin"
                            type="is-light" 
                            size="is-large">
                            Beitreten
                        </b-button>
                    <b-button type="is-light" size="is-large" @click="toggleInfoModal">
                        info
                    </b-button>
                </div>
            </div>
        </div>
        <div class="column info-row">
            <p><i>v0.4</i> - created with <b>❤︎</b> </p>
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
        /*
            window.addEventListener('keyup',function(event){
            event.preventDefault();
            if(event.keyCode === 13){
                
                window.removeEventListener('keyup',false);

            }
        }.bind(this)); */
    },
    methods: {
        toggleInfoModal:function(){
            this.$refs.infoModal.toggleVisibility(); 
        },
        enter: function(){
            this.$router.push({path:'/q'});
        },
        trackLogin: async function(){
            var today = new Date();
            var date  = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            var time = today.getHours() + ":" + today.getMinutes();

            console.log(this.$api.usr.id + " logged in at " + time + "/" + date);
            
            var submission = await this.$api.db.login.insert({
                "userid":this.$api.usr.id,
                "date": date,
                "time": time,
            },this.$tkn);
            
            console.log(submission.response);
            
            if(submission.response === "transmission accepted"){
                console.log("login tracked");
                this.enter();
            }else{
                this.enter();
            }
            
           this.enter();
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
h4.subtitle{
    font-size:3.2em;
}
@media screen and (min-width:1200px){
    .title{
    font-size:8em;
    text-shadow: 0px 2px rgba(0,0,0,0.3);
    font-weight:200;}

    .join-row{
        padding:1.3em 1.3em;
        background-color: hsl(141, 71%, 48%);

    }
}
.title{
    font-size:4em;
    text-shadow: 0px 2px rgba(0,0,0,0.3);
    font-weight:200;
}

.title-row{
    margin-top:8em;
    position:relative;}
.join-row{
    margin-left:auto;
    margin-right:auto;
    max-width:18em;
    /*background-color: rgba(255,255,255,0.3);*/
    border-radius:1.2em;
    margin-top:6em;
    position:relative;
    padding-left:1em;
    padding:auto 0.3em;
}
.info-row{    
    bottom:0;
    position:relative;
    margin-top:16em;}

i{
    font-size:0.8em;}
b{
    font-weight:200;
    color:hsl(141, 71%, 48%);}

a.button{
    color:black !important;
}
</style>

