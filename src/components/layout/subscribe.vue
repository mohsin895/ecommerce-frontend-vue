<template>
    <div class="subscribe">
        <form @submit.prevent action="">
            <input type="text" placeholder="Email Address" class="form-control" required>
            <button class="search-button">
                Subscribe
            </button>
        </form>
    </div>
</template>

<script>

export default {
    name:'subscribe',
    data() {
        return {
            msg:'search',
        }
    }
}
</script>

<style scoped>
.search-button{
    height:38px;
    width:95px;
    border:0;
    position: absolute;
    right:0px;
    top:0px;
    background: #F12323;
    color:white;
    border-radius: 4px;
}
input{
    font-size: 13px;
    padding:8px;
}
input:focus{
    outline: 0;
    box-shadow: none;
}
</style>