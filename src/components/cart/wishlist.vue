<template>
    <div class="wishlist">
        <div class="loyel-container">
            <br>
            <h5>My Wishlist & Followed Stores</h5>
            <br>
            <br>
            <div class="wishlist-store-tabs">
                <ul ref="lists">
                    <li 
                    :class="{'active-li': wishlist}"
                    @click="wishlist = true"
                    >
                        My Wishlist (3)
                    </li>
                    <li
                    :class="{'active-li': !wishlist}"
                    @click="wishlist = false"
                    >
                        Followed Stores
                    </li>
                </ul>
            </div>
            <div class="wish-store-tab-body">
                <Wishlist v-if="wishlist"/>
                <FollowedStore v-else/>
            </div>
        </div>
        <br>
        <br>
        <br>
        <br>
    </div>
</template>

<script>
import Wishlist from '@/components/cart/wishlist'
import FollowedStore from '@/components/cart/followedStore'
export default {
    name:'wish-list',
    components: {
        Wishlist,
        FollowedStore
    },
    data() {
        return {
            wishlist: true,
        }
    },
    methods: {
        
    }
}
</script>


<style scoped>
.wishlist-store-tabs ul{
    display: flex;
    list-style: none;
    padding: 0;
    grid-column-gap: 15px;
    border-bottom: 1px solid #afacac;
}
.wishlist-store-tabs ul li {
    padding-bottom: 8px;
    cursor: pointer;
}
.active-li {
    border-bottom: 1px solid black;
}


.wish-store-tab-body {
    margin-top: 10px;
}
</style>