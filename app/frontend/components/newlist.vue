<template>
  <div class="container">
    <button v-if="!creatingList" class="new_button" @click="newlist">
      <i class="fas fa-plus"></i>
      新增其他列表
    </button>
    <input v-if="creatingList" v-model="list_name" type="text" class="list_name" placeholder="列表標題">
    <button  v-if="creatingList" class="button bg-gray-400" @click="createList">建立</button>
    <button  v-if="creatingList" class="button bg-white" @click="creatingList=false">取消</button>
  </div>

</template>
<script>
export default {
  name: 'Newlist', 
  props: ["list"],
  data: function(){
    return {
      creatingList: false,
      list_name: ''
    }
  },
  methods: {
    newlist(event){
      event.preventDefault();
      this.creatingList = true;
    },
    createList(event){
      event.preventDefault();
      this.$store.dispatch("createList", this.list_name);
      this.creatingList = false;
      this.list_name = '';
    }
  }
}
</script>
<style lang="scss" scoped>
  .container{
    @apply .bg-gray-300 .px-3 .py-2 .mx-2 .h-full .flex-none .w-64 .rounded;
  }
  .new_button{
    @apply .font-bold .w-full .text-left;
    &:focus{
      @apply .outline-none;
    }

  }
  .list_name{
    @apply .px-3 .py-2 .w-full .mb-2 .rounded;
    &:focus{
      @apply .outline-none;
    }
  }
  .button{
    @apply .px-3 .py-1 .rounded .font-bold .text-sm;
    &:focus{
      @apply .outline-none;
    }
  }
</style>