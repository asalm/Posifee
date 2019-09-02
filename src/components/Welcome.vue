<template>
<section class="hero is-fullheight is-success">
    <div class="hero-head" style="transform:translateY(2em)">
        <h1 class="title">Posifee</h1>
        <h2 class="subtitle">
            Login oder komplett Anonym fortfahren
        </h2>
    </div>
    <div class="hero-body">
        <div class="container">
            <div class="columns">
                <div class="column">
                    <div class="box">
                        <h1 class="title has-text-dark">
                            Login Informationen    
                        </h1>
                        <b-field style="text-align:left" label="Nutzername">
                            <b-input v-model="username"></b-input>
                        </b-field>
                        <b-field style="text-align:left" label="Passwort">
                            <b-input type="password"
                                password-reveal>
                                
                            </b-input>
                        </b-field>
                        <router-link to="/q"><b-button class="button-magic" type="is-primary" size="is-large">Anmelden</b-button></router-link>
                    </div>
                </div>
                <div class="column">
                    <div class="box">
                        <h1 class="title has-text-dark">
                            Anonym
                        </h1>
                        <p style="text-align:left">
                            <b>Hinweis:<br></b>
                            Durch das Verwenden der Anonoymitätsfunktion wird eine NutzerID in einem Browsercache angelegt. Wird dieser gelöscht, verlierst du den Zugriff zu deinem Account.
                        </p>

                        <router-link to="/q"><b-button class="button-magic" type="is-primary" size="is-large">Beitreten</b-button></router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>

</section>
</template>
<script>
export default {
    name:'welcome',
    data(){
        return {
            name: ''
        }
    },
    props: {
        text: String
    }
}
</script>
<style scoped>
.box{
    min-height:350px;
    max-width:400px;
}

.button-magic{
    position:absolute;
    transform:translate(-3em,-0.5em);
    bottom:0;
}
</style>

