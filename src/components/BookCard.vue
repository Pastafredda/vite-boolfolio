<script>
export default {
    name: 'bookcard',
    props: {
        books: Object,
        pages: Object
    },
    emits: ['page-clicked'],
    methods: {
        toPage(url) {

            this.$emit('page-clicked', url)
        }
    }

}

</script>

<template>
    <div class="card">
        <div class="info" v-for="book in books" :key="book.id">
            <h2>{{ book.title }} </h2>
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
.card {
    list-style-type: none;
    display: flex;
    justify-content: center;
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

}

.d-none {
    display: none;
}

.active {
    background-color: rgb(4, 109, 127);
}
</style>
