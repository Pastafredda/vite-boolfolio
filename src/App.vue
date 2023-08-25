<script>
import HeaderBooks from './components/HeaderBooks.vue';
import IndexBooks from './pages/IndexBooks.vue';
import ShowBooks from './pages/ShowBooks.vue';

import axios from 'axios';



export default {
  name: 'app',
  components: {
    IndexBooks,
    ShowBooks,
    HeaderBooks
  },

}
</script>

<template>
  <HeaderBooks />
  <!-- <IndexBooks :books="books" :pages="pages" @page-clicked="toPage" /> -->
  <router-view></router-view>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
