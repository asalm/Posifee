<template>
<div class="container app">
    <section>
        <nav class="navbar is-fixed-bottom level is-mobile">
            <div class="level-item has-text-centered">
                    <router-link to="/q">Fragen</router-link>
                </div>
                <div class="level-item has-text-centered">
                    <router-link to="/a">Antworten</router-link>
                </div>
                <div class="level-item has-text-centered">
                    <router-link to="/p">Profil</router-link>
                </div>
        </nav>
    </section>
    <section style="margin-bottom:6em" class="has-text-dark">
            <router-view></router-view>
    </section>
</div>
</template>
<script>
/*
import QuestionView from '../components/QuestionView.vue';
import AnswerView from '../components/AnswerView.vue';
import ProfileView from '../components/ProfileView.vue';
*/
export default {
  name: 'TabScreen',
}
</script>
<style scoped>
nav.tabs.is-toggle.is-fullwith {
    background-color:blueviolet;
    position:fixed;
    }

li{
    margin-left:2px;
}
.app{
    height:100vh;
}

.body {
    margin-top:3em;
    display:flex;
    align-items:center;

}
b-tabs{
    transform:translateY(4em);
    z-index:4444;
    background-color:white;
    border-left: 2px solid rgba(0,0,0,0.1);
    border-right: 2px solid rgba(0,0,0,0.1);
    border-top: 2px solid rgba(0,0,0,0.1);
    box-shadow: 15px 0px 16px 16px rgba(3,3,3,0.1);
}

b-tab-item{
border-left:1px solid gray;
border-right:1px solid gray;
border-bottom:1px solid gray;
}

</style>