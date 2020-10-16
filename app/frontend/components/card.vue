<template>
  <div>
    <div class="card" @click="editing=true">
      {{card.name}}
    </div>
    <div v-if="editing" class="dialog">
      <div class="inner">
        <a href="#" class="closeButton" @click="editing=false" >
          <i class="fas fa-times"></i>
        </a>
        <textarea v-model="card_name" class="content"></textarea>
        <button class="updateButton" @click="update">更新</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Card', 
  props: ["card"],
  data: function(){
    return {
      card_name: this.card.name,
      editing: false
    }
  },
  methods: {
    update(event){
      event.preventDefault();
      this.$store.dispatch("updateCard", {id: this.card.id, name: this.card_name });
      this.editing = false;
    }
  }
}
</script>
<style lang="scss" scoped>
  .card {
    @apply .bg-gray-100 .mb-2 .px-2 .py-2 .rounded-sm;
  }

  .dialog{
    background-color: rgba(0,0,0,0.7);
    @apply .fixed .w-full .h-full .top-0 .left-0 .flex .items-center .justify-center;

    .inner{
      width: 700px;
      @apply .bg-white .flex .flex-col .px-6 .py-2;
    }

    .closeButton{
      @apply .text-right .text-gray-800;
    }
    
    .content{
      @apply .border .border-gray-300 .mt-2 .p-2;

      &:focus{
        @apply .outline-none;
      }
    }
    .updateButton{
      @apply .p-2 .mt-2 .bg-gray-400 .rounded;
    }
  }

</style>