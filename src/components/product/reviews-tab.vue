<template>
    <div class="overview-review">
        <div class="heading">
            Ratings & Reviews of Cream Big Flower Print Linen (In Side Cotton) Frock for Girls
        </div>
        <div class="tab-body">
            <div class="tab-container">
                <b-row cols="1" cols-sm="1" cols-lg="3">
                    <b-col>
                        <div class="big-rating">
                            <div class="rating-number">
                                <span>4.9</span> <span>/5</span>
                            </div>
                            <div class="ratings">
                                <Rating 
                                size="30px"
                                :value="3"
                                />
                                <p>7 Ratings</p>
                            </div>
                        </div>
                    </b-col>
                    <b-col>
                        <div class="review-ratings">
                            <div class="rating-five">
                                <Rating 
                                size="15px"
                                :value="5"
                                />
                                <Review
                                :reviewer="6"
                                />
                            </div>
                            <div class="rating-four">
                                <Rating 
                                size="15px"
                                :value="4"
                                />
                                <Review
                                :reviewer="1"
                                />
                            </div>
                            <div class="rating-three">
                                <Rating 
                                size="15px"
                                :value="3"
                                />
                                <Review
                                :reviewer="0"
                                />
                            </div>
                            <div class="rating-two">
                                <Rating 
                                size="15px"
                                :value="2"
                                />
                                <Review
                                :reviewer="0"
                                />
                            </div>
                            <div class="rating-one">
                                <Rating 
                                size="15px"
                                :value="1"
                                />
                                <Review
                                :reviewer="0"
                                />
                            </div>
                        </div>
                    </b-col>
                    <b-col></b-col>
                </b-row>
            </div>
        </div>
        <div class="reviewer-list">
            <div class="reviewer-list-heading">
                <div class="review-list-head-left">
                    Product Reviews
                </div>
                <div class="review-list-head-right">
                    <div class="relevance">
                        <icon name="sort-amount-up" size="15px"/>
                        <label for=""> Sort:</label>
                        <span> Relevance</span>
                    </div>
                    <div class="all-star">
                        <icon name="filter" size="15px"/>
                        <label for=""> Filter: </label>
                        <span> All star</span>
                    </div>
                </div>
            </div>
            <div class="review-list-body">
                <div class="single-review" v-for="index in 5" :key="index">
                    <div class="tab-container">
                        <div class="first-step">
                            <div class="reting">
                                <Rating 
                                size="15px"
                                :value="1"
                                />
                                <br>
                                <div class="reviewer-name">
                                    by MD. Nafiz
                                    <span class="status-box bg-green">Verified Purchase</span>
                                </div>
                            </div>
                            <div class="reviewe-timer">
                                3 weeks ago
                            </div>
                        </div>
                        <div class="second-step">
                            <div class="reviewer-comment">
                                থ্যাংক ইউ লয়েল অল্প টাকায় ভালো জিনিস দেওয়ার জন্য,, মাশাল্লাহ ভালো ছিল
                            </div>
                            <div class="reviewer-images">
                                <img v-for="index in 4" :key="index" src="@/assets/images/reviewer.png" alt="">
                            </div>
                        </div>
                        <div class="third-step">
                            <div class="size">
                                <label for="">Size:
                                    <span> XL</span>
                                </label>
                                <label for="">, Color:
                                    <span>Red</span>
                                </label>
                            </div>
                            <div class="social-follow">
                                <div class="thumbs-up">
                                    <b-icon icon="hand-thumbs-up"/>
                                </div>
                                <div class="chat">
                                    <b-icon icon="chat-left"/>
                                    <span>0</span>
                                </div>
                                <div class="replay-btn">
                                    Replay
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Rating from '@/components/product/rating-view'
import Review from '@/components/product/review-amount'
export default {
    name: 'overview-tab',
    components: {
        Rating,
        Review
    },
    data() {
        return {

        }
    }
}
</script>


<style scoped>

.rating-number > :nth-child(1) {
    font-size: 3rem;
    color: black;
}
.rating-number > :nth-child(2) {
    font-size: 1.8rem;
}
.review-ratings > *{
    display: flex;
    grid-column-gap: 10px;
    height: 30px;
    align-items: center;
}
.review-ratings > * > :nth-child(1) {
    width: 80px;
}


/* reviewer list css  */

 /* review list heading css  */
.reviewer-list-heading {
    widows: 100%;
    height: 60px;
    border-top: 1px solid #c0c0c0;
    border-bottom: 1px solid #c0c0c0;
    display: flex;
    justify-content: space-between;
}
.review-list-head-left {
    width: 70%;
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: 50px;
    font-size: 1.2rem;
    font-weight: 500;
    border-right: 1px solid #c0c0c0;
}
.review-list-head-right {
    width: 30%;
    display: flex;
}

.relevance {
    border-right: 1px solid #c0c0c0;
}
.review-list-head-right > *{
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    grid-column-gap: 5px;
    cursor: pointer;
}
.review-list-head-right > * > span {
    color: black;
}

/* review list body css  */
.single-review {
    border-bottom: 1px solid #c0c0c0;
}
.review-list-body {
    height: 400px;
    overflow-y: auto;
}

.first-step {
    display: flex;
    justify-content: space-between;
}
.second-step > * {
    margin-top: 10px;
}
.second-step > :nth-child(1){
    font-weight: bold;
}
.second-step > :nth-child(2) > img {
    width: 100px;
    height: 100px;
    object-fit: contain;
    background: #E8E8E8;
}
.reviewer-images {
    display: flex;
    grid-column-gap: 10px;
    flex-flow: row wrap;
}
.third-step > * {
    margin-top: 10px;
}
.social-follow {
    display: flex;
    grid-column-gap: 30px;
}
.social-follow > * {
    cursor: pointer;
}

.bg-green {
    background: #00AB4F;
}



/* responsive part  */
@media (max-width: 700px) {
    .review-list-head-left {
        width: 40%;
        font-size: 1rem;
        padding-left: unset;
    }
    .review-list-head-right {
        width: 60%;
    }
}
</style>