<script>
export default {

    props: {
        books: Object
    }

}

</script>

<template>
    <div>
        <ul>
            <li class="card" v-for="book in books" :key="book.id">{{ book.title }}</li>
        </ul>
    </div>
</template>

<style scoped>
ul {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
}

.card {
    background-color: rgb(4, 109, 127);
    margin: 10px;
    color: white;
    height: 300px;
    width: calc(100% / 11);
    text-align: center;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;


}
</style>
