<template>
  <div>
      <div class="notification" v-if="visible">
        <b>Eine Nachricht des Entwicklerteams!</b>


        <div class="columns is-mobile">
        <div class="column is-half is-offset-one-quarter">
            <div v-for="d in devnote" :key="d.id">
              <div class="is-divider"></div>
                {{d.text}}
             <div class="is-divider"></div>
            </div>
        </div>
</div>
        
 
        <button class="button is-success is-outlined" @click="close()">Schließen</button>

    </div>
  </div>
</template>

<script>
export default {
    name:'devNote',
    data: function(){
        return{
            visible: false,
            devnote: [],
            noscroll_var: false
        }
    },

    mounted(){
        var that = this;
        this.getData().then(function(){
            if(that.devnote.length > 0){
                if(!that.$cookies.isKey('visited')){
                    that.open();
                }else{
                    //eslint-disable-next-line no-console
                    console.log("already seen");
                }
            }else{
                // eslint-disable-next-line no-console
                console.log("no data found");
            }
        });
        
    },
    methods:{
        getData: async function(){
            var _response = await this.$api.db.dev_note.get({},this.$tkn);

            var d = _response.data.reverse();
            for(var i = 0; i < d.length; i++){
                this.devnote.push({text:d[i].text.toString(),id:parseInt(d[i].id)});
            }
        },
        open: function(){
            this.visible = !this.visible;
            this.noscroll();
        },
        close: function(){
            this.visible = false;
            this.noscroll();
            this.$cookies.set('visited',true,"1d");
        },
        noscroll: function(){
            if(this.noscroll_var){
                document.getElementsByTagName("html")[0].style.overflowY = "";
                this.$emit('no-scroll');
                this.noscroll_var = false
            }else{
                document.getElementsByTagName("html")[0].setAttribute('style', 'overflow-y: hidden !important');
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
    min-height:78vh;
    padding-right:0.5em;
}

.notification button{
    position:absolute;
    bottom:2em;
    width:93%;
    transform:translateX(-50%);
}
</style>