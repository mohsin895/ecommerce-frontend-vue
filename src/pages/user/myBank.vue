<template>
    <div class="my-bank">
        <div class="my-bank-wrapper">
            <div class="header">
                <div class="details">
                    Financial Details
                </div>
                <div class="details-edit pointer">
                    <b-icon icon="pencil-square"/>
                </div>
            </div>
            <hr>
            <div class="bnk-inner-part">
                <b-row cols="1" cols-md="2" cols-lg="3">
                    <b-col>
                        <p>Type of ID: Voter ID</p>
                        <p>Branch Name: Agent Banking</p>
                        <p>Bank Routing Number: 12564</p>
                    </b-col>
                    <b-col>
                        <p>ID Code: 284126449</p>
                        <p>Bank Account Name: Anower Hossen</p>
                        <p>TIN Number: 12455657</p>
                    </b-col>
                    <b-col>
                        <p>Bank Name: Bank Asia</p>
                        <p>Bank Account Number: 1083426036551</p>
                    </b-col>
                </b-row>
            </div>
            <br>
            <div class="header">
                <div class="details">
                    Mobile Banking Details
                </div>
                <div class="details-edit pointer">
                    <b-icon icon="pencil-square"/>
                </div>
            </div>
            <hr>
            <br>
            <b-row cols="1" cols-md="2" cols-lg="2">
                <b-col>
                    <p>Account Name: <span class="name-span">Anower Hossen</span></p>
                    <p>Account Number: <span class="number-span">0177508266</span></p>
                </b-col>     
                <b-col>
                    <div class="bank-wrapper">
                        <div class="bank-select">
                            <div class="addBank-title">
                                Add Only One
                            </div>
                            <v-select
                            :options="bankList"  
                            :searchable="false"
                            :clearable="false"
                            v-model="user.bank"
                            ></v-select>  
                        </div>
                        <div class="image-bank">
                            <img src="@/assets/images/image 8.png" alt="">
                        </div>
                    </div>
                </b-col>         
            </b-row>
        </div>
    </div>
</template>

<script>

export default {
    name: 'myBank',
    data() {
        return {
            msg:'myBank',
            user: {
                bank:'Nogod'
            },
            bankList: [
                'Nogod',
                'Roket',
                'Bkash',
                'MyCash',
                'Tap',
                'Upay'
            ]
        }
    }
}
</script>


<style scoped>

.my-bank-wrapper {
    width: 100%;
    min-height: 400px;
    background: white;
    padding: 20px;    
}

hr {
    margin: 5px 0;
}

.header {
    font-weight: 500;
    display: flex;
    justify-content: space-between;
    font-size: 1.2rem;
}

.bnk-inner-part {
    padding: 15px 10px;
}
.name-span {
    color: #62BD5F;
}
.number-span {
    color: red;
}


.bank-wrapper {
    display: flex;
    justify-content: space-between;
}
.addBank-title {
    font-weight: 500;
}
.bank-select {
    width: 40%;
}
</style>