<script>
import axios from 'axios';
export default {
    name: 'IndexBooks',
    data() {
        return {
            books: {},
            pages: {},

        }
    },
    mounted() {
        axios.get('http://127.0.0.1:8000/api/v1/book-index')
            .then(response => {
                const data = response.data.books
                this.books = data.data
                this.pages = data.links


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
    <div class="container">


        <div class="card" v-for="book in books" :key="book.id">
            <router-link :to="{ name: 'show', params: { id: book.id } }" class="link">

                <div class="info">
                    <h2>{{ book.title }} </h2>
                </div>


            </router-link>
        </div>
    </div>
    <div class="page">
        <div class="number-page" v-for="(page, index) in  pages " :key="index" v-html="page.label" @click="toPage(page.url)"
            :class="{
                'd-none': page.url === null,
                'active': page.active
            }">
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    justify-content: center;
}

.card {
    list-style-type: none;
    margin-top: 50px;
}

.info {
    background-color: rgb(4, 109, 127);
    margin: 20px;
    color: white;
    height: 200px;
    width: 250px;
    text-align: center;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.link {
    text-decoration: none;
    color: white;
    font-size: 18px;
}

.page {
    display: flex;
    justify-content: center;
    align-items: center;

}

.number-page {
    background-color: aquamarine;
    margin: 6px;
    padding: 8px;
    border-radius: 20px;
    font-size: 16px;
    cursor: pointer;

}

.number-page:hover {
    text-decoration: underline;
    font-weight: bold;
}

.d-none {
    display: none;
}

.active {
    background-color: rgb(4, 109, 127);
}
</style>
