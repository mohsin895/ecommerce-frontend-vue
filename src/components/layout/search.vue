<template>
    <div class="search">
        <form @submit.prevent action="">
            <input type="text" placeholder="What Are You Looking For?" class="form-control" required>
            <button class="search-button">
                <b-icon icon="search"></b-icon>
                SEARCH
            </button>
        </form>
    </div>
</template>

<script>

export default {
    name:'search',
    data() {
        return {
            msg:'search',
        }
    }
}
</script>

<style scoped>
.search-button{
    height:38.2px;
    width:95px;
    border:0;
    position: absolute;
    right:0px;
    top:0px;
    background: #373737;
    color:white;
    border-radius:0 5px 5px 0;
}
input{
    font-size: 13px;
    padding:8px;
    border-radius: 5px;
}
input:focus{
    outline: 0;
    box-shadow: none;
}
</style>