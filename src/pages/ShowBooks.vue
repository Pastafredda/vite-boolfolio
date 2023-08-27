<script>
import axios from 'axios';

export default {
    name: 'ShowBooks',
    data() {
        return {
            book: {},
            isLoading: true
        }
    },
    mounted() {
        const bookId = this.$route.params.id;
        console.log(bookId);
        axios.get('http://127.0.0.1:8000/api/v1/book-show/' + bookId)
            .then(response => {
                this.book = response.data.books
                this.isLoading = false

            })
            .catch(error => {
                console.log(error);
                this.isLoading = false
            })
    },

}

</script>

<template>
    <div class="container">
        <div class="card" v-if="!isLoading">
            <div class="info">
                <div class="imaage">
                    <img :src="'http://127.0.0.1:8000/storage/' + book.main_picture" :alt="book.title">
                </div>
                <h2>Titolo: {{ book.title }}</h2>
                <p>Autore: {{ book.author }}</p>
                <p>Codice: {{ book.code }}</p>
                <p>Disponibilità: {{ book.is_available }}</p>
            </div>
        </div>
        <div class="container-spinner" v-else>
            <div class="custom-spinner"></div>
        </div>
    </div>
</template>

<style scoped>
.card {
    display: flex;
    justify-content: center;
    margin-top: 50px;

}

.container-spinner {
    display: flex;
    justify-content: center;
    padding-top: 100px;
}

.custom-spinner {
    width: 40px;
    height: 40px;
    border: 4px solid #000000;
    border-top: 4px solid #3498db;
    border-radius: 50%;
    animation: spin 2s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

.info {
    background-color: brown;
    color: white;
    width: 400px;
    padding: 20px;
    border-radius: 20px;
}

.image {
    width: 80%;
}

img {
    max-width: 100%;
}



h2 {
    margin: 20px;
    text-align: center;
    font-size: 24px;
}

p {
    font-size: 18px;
    line-height: 30px;
}
</style>
