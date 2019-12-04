<template>
  <div>
      <div class="notification" v-if="visible">
        <b>Eine Nachricht des Entwicklerteams!</b>


        <div class="columns is-mobile">
        <div class="column is-half is-offset-one-quarter">
              <div class="is-divider"></div>
            {{devnote}}
             <div class="is-divider"></div>
  </div>
</div>
        
 
        <button class="button is-success is-outlined" @click="toggle()">Schließen</button>

    </div>
  </div>
</template>

<script>
export default {
    name:'devNote',
    data: function(){
        return{
            visible: false,
            devnote: "",
            noscroll_var: false
        }
    },

    mounted(){
        var that = this;
        this.getData().then(function(){
            if(that.devnote.length > 0){
                console.log("data found!");
            that.noscroll();
            that.toggle();
            }else{
                console.log("no data found");
            }
        });
        
    },
    methods:{
        getData: async function(){
            var _response = await this.$api.db.dev_note.get({
                    //"userid":this.$api.usr.id
            },this.$tkn);
            this.devnote = _response.data[0].text.toString()
        },
        toggle: function(){
            this.visible = !this.visible;
            this.noscroll();
        },
        noscroll: function(){
            if(this.noscroll_var){
                document.getElementsByTagName("html")[0].style.overflowY = "";
                document.body.style.paddingRight = "0";
                this.$emit('no-scroll');
                this.noscroll_var = false
            }else{
                document.getElementsByTagName("html")[0].setAttribute('style', 'overflow-y: hidden !important');
                document.body.style.paddingRight = "17px";
                this.$emit('no-scroll');
                this.noscroll_var = true
            }
}
    }
}
</script>

<style scoped>
.notification{
    z-index:3000;
    min-height:80vh;
    padding-right:0.5em;
}

.notification button{
    position:absolute;
    bottom:2em;
    width:93%;
    transform:translateX(-50%);
}
</style>