<template>
    <div class="search-data">
        <input type="text" 
        :value="value" 
        @input="backvalue($event.target.value)" 
        placeholder="Search"
        >
        <div class="search-icon">
            <b-icon icon="search"/>
        </div>
    </div>
</template>

<script>

export default {
    name:'search',
    props: {
        value: {
            type: String,
            required: false
        }
    },
    data() {
        return {

        }
    },
    methods: {
        backvalue(inputValue) {
            this.$emit('input', inputValue);
        }
    }
}
</script>

<style scoped>
.search-data {
    display: inline-block;
    position: relative;
}

.search-data input {
    width: 150px;
    padding: 6px 35px 7px 10px;
    border: 1px solid #adadaf;
    border-radius: 5px;
    outline: none;
}
.search-data input:focus {
    outline: none;
}
.search-icon {
    height: 100%;
    width: 35px;
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
