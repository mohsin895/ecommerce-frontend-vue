<template>
    <div class="delivery-info">
        <div class="first-part">
            <h6>
                <b-icon icon="truck"/>
                <span> Delivery Information</span>
            </h6>
            <div class="delivery-location">
                <div>Delivered within 3-7 working days</div>
                <div>
                    <span>Savar, Dhaka </span>
                    <button class="change-btn">CHANGE</button>
                </div>
                <div>Delivery Charges may apply</div>
                <div> 100% payment protection</div>
            </div>
        </div>
        <hr>
        <div class="second-part">
            <div class="left">
                <div class="icons">
                    <div class="icon-one">
                        <icon name="ambulance"/>
                    </div>
                    <div class="icon-second">
                        <icon name="money-bill"/>
                    </div>
                </div>
                <div class="details">
                    <div class="home-delivery">
                        <h6>Home Delivery</h6>
                        <div class="recap">3-5 days delivered</div>
                    </div>
                    <div class="cash-delivery">
                        <h6>Cash on delivery available</h6>
                    </div>
                </div>
            </div>
            <div class="right">
                ৳ 45
            </div>
        </div>
        <hr>
        <div class="third-part">
            <label for="">Return & Warranty</label>
            <div class="seven-days">
                <div class="icon">
                    <icon name="undo-alt"/>
                </div>
                <div class="text">
                    <div class="main-text">
                        7 Days Returns
                    </div>
                    <div class="slog-text">
                        Terms and Condition
                    </div>
                </div>
            </div>
            <div class="warranty-status">
                <div class="icon">
                    <icon name="shield-alt"/>
                </div>
                <div class="text">
                    <div class="main-text">
                        Warranty Status
                    </div>
                    <div class="slog-text">
                        Local Seller Warranty
                    </div>
                </div>
            </div>
        </div>
        <hr>
    </div>
</template>


<script>

export default {
    data() {
        return {

        }
    }
}
</script>

<style scoped>
.first-part,
.second-part,
.third-part {
    padding: 0 10px;
}
h6 .b-icon {
    font-size: 25px;
}
.delivery-location {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}
.delivery-location > :nth-child(2) span {
    font-weight: 500;
}
.change-btn {
    border: none;
    background: transparent;
    color: #4ED77D;
}



.second-part {
    display: flex;
    justify-content: space-between;
    padding-right: 10px;
}
.left {
    display: flex;
    grid-column-gap: 5px;
}
.details,
.icons {
    height: 90px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.recap {
    font-size: 12px;
    margin-top: -7px;
}
.right {
    color: #4ED77D;
}

.seven-days,
.warranty-status {
    display: flex;
    margin-top: 10px;
    grid-column-gap: 10px;
}

.main-text {
    font-weight: 500;
    font-size: 1.3rem;
}
.slog-text {
    font-size: 0.9rem;
}
</style>