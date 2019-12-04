<template>
<div class="container app">
    <section>
        <nav class="navbar is-fixed-bottom level is-mobile"><!-- class="is-fixed-bottom"-->
            <div class="level-item has-text-centered has-text-light">
                    <router-link to="/q">Fragen</router-link>
                </div>
                <div class="level-item has-text-centered has-text-light">
                    <router-link to="/a">Deine Fragen</router-link>
                </div>
                <div class="level-item has-text-centered has-text-light">
                    <router-link to="/p">Profil</router-link>
                </div>
        </nav>
    </section>
    <section style="margin-bottom:2em" class="has-text-dark list">
            <router-view></router-view>
    </section>
    <!-- Scroll to Top -->
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
.container{
    overflow:hidden;
}
@media only screen and (max-height:899px){
    .list{
        transform:translateY(0em);
    }
    .app{
        min-height:52em;
    }
}
@media only screen and (min-height:900px){

    .list{
        transform:translateY(4em);
        border-radius:0.6em;
        border-left: 2px solid rgba(0,0,0,0.1);
        border-right: 2px solid rgba(0,0,0,0.1);
        background-image: linear-gradient(336deg, rgb(216,216,216),rgb(255,255,255));
        padding-bottom:4em;
    }
    .app{
        min-height:58em;
    }

}
.app{
    max-width:36em;
    max-height:58em;
    overflow-y:hidden;
}
.body {
    overflow-y:hidden;
    margin-top:3em;
    display:flex;
    align-items:center;

}
body{
  overflow-y:hidden;
}
b-tabs{
    /*transform:translateY(4em);*/
    z-index:4444;
    background-color:white;
    border-left: 2px solid rgba(0,0,0,0.1);
    border-right: 2px solid rgba(0,0,0,0.1);
    border-top: 2px solid rgba(0,0,0,0.1);
    box-shadow: 15px 0px 16px 16px rgba(3,3,3,0.1);
}
.navbar{
    box-shadow:0px -2px 8px rgba(3,3,3,0.3);
background-color:rgb(255, 255, 255);
    max-width:36em;
    margin-left:auto;
    margin-right:auto;
}
b-tab-item{
border-left:1px solid gray;
border-right:1px solid gray;
border-bottom:1px solid gray;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>