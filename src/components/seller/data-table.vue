<template>
    <div class="data-table-wrapper">
        <div class="table-data">
                <!-- table data sorting  -->
            <div class="table-header">
                <b-row>
                    <b-col>
                        <div class="select-products-number" v-if="perPageSelection">
                            <v-select
                            :options="[10, 25, 50, 100]"  
                            :searchable="false"
                            :clearable="false"
                            v-model="tableInfo.itemPerPage"
                            ></v-select> 
                        </div>
                    </b-col>
                    <b-col>
                        <div class="category-search">
                            <div class="select-category" v-if="category">
                                <v-select
                                :options="category"  
                                :searchable="false"
                                :clearable="false"
                                v-model="tableInfo.category"
                                ></v-select> 
                            </div>
                            <div class="search-box" v-if="searchBox">
                                <SearchBox 
                                v-model="tableInfo.searchValue"
                                />
                            </div>    
                        </div>                   
                    </b-col>
                </b-row>
            </div>
            <br>
            
            <!-- table data  -->
            <div class="data-table">
                <table>
                    <thead>
                        <tr>
                            <th v-for="head,index in tableHeads" :key="index">
                                {{head}}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <slot/>
                    </tbody>
                </table>
            </div>
            <!-- pagination  -->
            <div class="pagina-tion" v-if="pagination">
                <ul class="pagination">
                    <li class="page-item disabled">
                        <a class="page-link" href="javascript:void(0)" tabindex="-1" aria-disabled="true">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    <li 
                    :class="['page-item',{'active': index == 0}]" 
                    v-for="page,index in totalPages"
                    :key="index"
                    ref="page"
                    @click="current(index)">
                        <a class="page-link" href="javascript:void(0)"> {{index + 1}}</a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="javascript:void(0)">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>                
            </div>  
            <div class="bottom-caption" v-if="caption">
                Showing 1 to 10 of {{totalItem}} records
            </div>        
        </div>
    </div>
</template>

<script>
import SearchBox from '@/components/seller/search-data';
export default {
    name: 'data-tables',
    components: {
        SearchBox
    },
    props: {
        tableHeads: {
            type: Array,
            required: true
        },
        category: {
            type: Array,
            required: false,
        },
        totalItem: {
            type: Number,
            default: 10
        },
        pagination: {
            type: Boolean,
            default: true
        },
        caption: {
            type: Boolean,
            default: true
        },
        perPageSelection: {
            type: Boolean,
            default: true
        },
        searchBox: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            totalPages: 10,
            tableInfo: {
                itemPerPage: 10,
                category: 'All',
                currentPage: 1,
                searchValue: '',
            }
        }
    },
    mounted() {
        this.$emit('getTableInfo',this.tableInfo);
    },
    methods: {
        current(currentIndex) {
            this.currentPage = currentIndex + 1;
            let pages = this.$refs.page;
            pages.forEach((element,itemIndex) => {
                ( itemIndex === currentIndex ) ? element.classList.add('active'): element.classList.remove('active');
            });
        }
    },
    watch: {
        'tableInfo.itemPerPage': function() {
            this.$emit('getTableInfo',this.tableInfo);
        },
        'tableInfo.category': function() {
            this.$emit('getTableInfo',this.tableInfo);
        },
        'tableInfo.currentPage': function() {
            this.$emit('getTableInfo',this.tableInfo);
        },
        'tableInfo.searchValue': function() {
            this.$emit('getTableInfo',this.tableInfo);
        }
        
    }
}
</script>


<style scoped>
.table-header {
    padding: 10px 0;
}
/* data sorting css  */
.select-products-number {
    padding: 0 10px;
}
.select-products-number .v-select {
    width: 100px;
}
.select-category .v-select {
    min-width: 170px;
}
.category-search {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    grid-column-gap: 20px;
    padding: 0 10px;
}

/* table css  */
.table-data {
    width: 100%;
    min-height: 600px;
    background: white;
    border: 1px solid #D7D7D7;
    border-radius: 5px;
}
.data-table {
    border-top: 1px solid #767676;
}

table tbody tr,
table thead tr {
    border-bottom: 1px solid #767676;
}

table thead tr th {
    padding: 10px 0;
}
table tbody tr td img{
    display: block;
    margin: auto;
    width: 70px;
    height: 100px;
    object-fit: contain;
}
table thead tr th,
table tbody tr td {
    text-align: center;
}
table tr th:first-child,
table tr td:first-child {
    width: 60px;
}
table tr th:not(th:last-child),
table tr td:not(td:last-child) {
    border-right: 1px solid #767676;
}

/* pagination  */
.pagination {
    margin-top: 20px;
    display: flex;
    justify-content: center;
}
.bottom-caption {
    text-align: center;
    padding-bottom: 10px;
}

</style>