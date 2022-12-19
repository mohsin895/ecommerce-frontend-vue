<template>
    <div class="cateogry">
        <div class="heading">Categories</div>

        <ul>
            <li v-for="category,index in categories" :key="index">
                <input type="checkbox" :id="'id'+index" v-if="index == 1" checked>
                <input type="checkbox" :id="'id'+index" v-else>
                <label :for="'id'+index">{{category}}</label>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    name: 'cateogry',
    props: {
        categories: Array
    },
    data() {
        return {
            msg:'cateogry'
        }
    }
}
</script>

<style scoped>
.heading {
    width: 95%;
    padding: 8px;
    background: #E1E1E1;
    font-weight: 600;
    font-size: 1.2rem;
}
ul {
    padding:0;
    list-style: none;    
}
ul li {
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
}
ul li label {
    cursor: pointer;
}
</style>