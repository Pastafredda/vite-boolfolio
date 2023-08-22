<script>
import BookCard from './components/BookCard.vue';
import axios from 'axios';


export default {
  name: 'app',
  components: {
    BookCard
  },
  data() {
    return {
      books: [],
      pages: []
    }
  },
  mounted() {
    axios.get('http://127.0.0.1:8000/api/v1/book-index')
      .then(response => {
        const data = response.data.books
        this.books = data.data
        this.pages = data.links
        console.log(this.pages);

      })
      .catch(error => {
        console.log(error);
      })
  },
  methods: {
    toPage(url) {
      axios.get(url)
        .then(response => {
          const data = response.data.books
          this.books = data.data
          this.pages = data.links

        })
        .catch(error => {
          console.log(error);
        })
    }
  }
}
</script>

<template>
  <BookCard :books="books" :pages="pages" @page-clicked="toPage" />
</template>

<style scoped></style>
