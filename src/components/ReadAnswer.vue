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
            <Answer v-for="a in answers" :key="a.id" :aid="a.aid" :id="$id(a.aid)" :userid="a.userid" :text="a.text" :pos="a.positive" :neg="a.negative" interactive/> 
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
        qid:Number,
        question:String
    },
    components:{
        Answer,
        vuescroll
    },
    data(){
        return {
            answers:[],
            loading:false,
        }
    },
    created(){
        this.getAnswers();
    },
    methods:{
        back: function(){
            const self = this

            self.$router.go(-1);
        },
        getAnswers: async function(){
            this.loading = true;
            var _response = await this.$api.db.answer.get({
                "qid":this.$props.qid
            },this.$tkn);
            var a = _response.data;
            console.log(a[i]);
            for(var i = 0; i < a.length; i++){
                        console.log(a[i]);
                this.answers.push({
                    "aid":a[i].aid,
                    "userid":a[i].userid,
                    "text":a[i].text,
                    "positive":a[i].positive,
                    "negative":a[i].negative
                })
            }
 
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
