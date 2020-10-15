// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
const images = require.context('../images', true)
const imagePath = (name) => images(name, true)

import 'scripts'
import 'styles'

//vue
import Vue from 'vue/dist/vue.esm';
import List from 'components/list.vue';
import Rails from '@rails/ujs';
import draggable from 'vuedraggable';


document.addEventListener("turbolinks:load", function(event){
  let el = document.querySelector("#board");
  if (el) {
    new Vue({
      el,
      data: {
        lists: []
      },
      components: { List, draggable },
      methods: {
        listMoved(event){
          let data = new FormData();
          data.append("list[position]",event.moved.newIndex + 1 );
          Rails.ajax({
            url: `/lists/${this.lists[event.moved.newIndex].id}/move`,
            type: 'put',
            data,
            dataType: 'json',
            success: resp => {
              console.log(resp)
            },
            error: err => {
              console.log(err)
            }
          });
        }
      },
      beforeMount(){
        Rails.ajax({
          url: '/lists.json',
          type: 'get',
          dataType: 'json',
          success: resp => {
            console.log(resp)
            this.lists = resp;
          },
          error: err => {
            console.log(err)
          }
        })
      }
    });
  }
})