<script>
import BookCard from './components/BookCard.vue';
import axios from 'axios';


export default {
  components: {
    BookCard
  },
  data() {
    return {
      books: []
    }
  },
  mounted() {
    axios.get('http://127.0.0.1:8000/api/v1/book-index')
      .then(response => {
        const data = response.data
        this.books = data.books
        console.log(this.books);
      })
      .catch(error => {
        console.log(error);
      })
  }
}
</script>

<template>
  <BookCard :books="books" />
</template>

<style scoped></style>
