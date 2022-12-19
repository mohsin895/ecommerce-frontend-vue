<template>
    <div class="products-stock loyel-seller-box">
        <br>
        <div class="add-product-btn">
            Add New Stock
        </div>
        <br>
        <div class="data-tables">
            <DataTables 
            :tableHeads="tableHeadList" 
            @getTableInfo="getTableDetails"
            :totalItem="tableBodyRow.length"
            >
                <tr v-for="trow,index in tableBodyRow" :key="index">
                    <td>{{index + 1}}</td>
                    <td>
                        {{trow.name}}
                    </td>
                    <td>
                        {{trow.entryType}}
                    </td>
                    <td>
                        {{trow.currentQuantity}}
                    </td>
                    <td>
                        {{trow.Note}}                          
                    </td>
                    <td>
                        <div class="button-group">
                            <div class="edit">
                                <b-icon icon="pencil-square"/>
                            </div>
                            <div class="delete">
                                <b-icon icon="trash"/>
                            </div>
                        </div>
                    </td>
                </tr>
            </DataTables>
        </div>
    </div>
</template>

<script>
import DataTables from '@/components/seller/data-table'
export default {
    name: 'product-stock',
    components: {
        DataTables
    },
    data() {
        return {
            tableInfo: null,
            tableHeadList: [
                '#',
                'Name',
                'Entry Type',
                'Current Quantity',
                'Note',
                'Action'
            ],
            tableBodyRow: [
                {
                    'name':'Women Dresses', 
                    'entryType': 'add', 
                    'currentQuantity': '100pc', 
                    'Note': 'dmmy text .....',
                },
                {
                    'name':'Women Dresses', 
                    'entryType': 'add', 
                    'currentQuantity': '140pc', 
                    'Note': 'dmmy text .....',
                },
                {
                    'name':'Women Jeants', 
                    'entryType': 'add', 
                    'currentQuantity': '290pc', 
                    'Note': 'dmmy text .....',
                },
                {
                    'name':'Men shampoo', 
                    'entryType': 'destroy', 
                    'currentQuantity': '100pc', 
                    'Note': 'dmmy text .....',
                },
                {
                    'name':'Women Dresses', 
                    'entryType': 'add', 
                    'currentQuantity': '100pc', 
                    'Note': 'dmmy text .....',
                },
                {
                    'name':'Women Dresses', 
                    'entryType': 'add', 
                    'currentQuantity': '100pc', 
                    'Note': 'dmmy text .....',
                },
                {
                    'name':'Women Dresses', 
                    'entryType': 'add', 
                    'currentQuantity': '100pc', 
                    'Note': 'dmmy text .....',
                },
                {
                    'name':'Women Dresses', 
                    'entryType': 'add', 
                    'currentQuantity': '100pc', 
                    'Note': 'dmmy text .....',
                },
                {
                    'name':'Women Dresses', 
                    'entryType': 'add', 
                    'currentQuantity': '100pc', 
                    'Note': 'dmmy text .....',
                },
                {
                    'name':'Women Dresses', 
                    'entryType': 'add', 
                    'currentQuantity': '100pc', 
                    'Note': 'dmmy text .....',
                }
            ]
        }
    },
    methods: {
        getTableDetails( info ) {
            this.tableInfo = info;
            console.log(info);
        }
    }
}
</script>

<style scoped>
.add-product-btn {
    width: 160px;
    height: 35px;
    margin-left: auto;
    color: white;
    font-weight: 500;
    cursor: pointer;
    background: #00A3FF;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
}
a {
    color: white;
    text-decoration: none;
}

.button-group {
    width: 100%;
    display: flex;
    justify-content: center;
    grid-column-gap: 5px;
}
.button-group > * {
    cursor: pointer;
    border: 1px solid #767676;
    padding: 0 3px;
}
.button-group > :nth-child(2) {
    color: rgb(197, 54, 54);
}

table tbody tr td {
    height: 60px;
}
</style>