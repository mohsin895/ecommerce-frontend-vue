<template>
    <div class="product-create loyel-seller-box">
        <br>
        <div class="loyel-admin-container">
            <div class="product-create-steps">
                <a-steps progress-dot :current="current"  @change="onChange">
                    <a-step v-for="item in steps" :key="item.title" :title="item.title" />
                </a-steps>
            </div>
            <br>
            <br>
            <div class="product-create-body">
                <div class="product-information" v-if="current === 0">
                    <!-- first step  -->
                    <div class="loyel-box-style">
                        <div class="product-info-head">
                            Product Category Select
                        </div>
                        <div class="product-info-body">
                            <b-row cols="1" cols-sm="1" cols-md="2" cols-lg="3" cols-xl="3">
                                <b-col>
                                    <div class="category-selection-div custom-scrollbar">
                                        <ul>
                                            <li ref="categoryList" v-for="(megaCategory,megaIndex) in categoryList" :key="megaIndex" @click="changeSelect(megaIndex,megaCategory.id,'categoryList',megaCategory.title);subCategoryList=megaCategory.sub_category;">{{megaCategory.title}}</li>
                                            <!-- <li v-for="(megaCategory,megaIndex) in categoryList" :key="megaIndex">a</li> -->
                                        </ul>
                                    </div>
                                </b-col>
                                <b-col>
                                    <div class="sub-category-selection-div custom-scrollbar" 
                                    v-if="selectedCategory.category"
                                    >
                                        <ul>
                                            <li ref="subCategoryList" v-for="(subCategory,subCategoryIndex) in subCategoryList" :key="subCategoryIndex" @click="changeSelect(subCategoryIndex,subCategory.id,'subCategoryList',subCategory.title);normalCategoryList=subCategory.sub_category">{{subCategory.title}}</li>
                                        </ul>
                                    </div>
                                </b-col>
                                <b-col>
                                    <div class="sub-sub-category-selection-div custom-scrollbar"
                                    v-if="selectedCategory.subCategory"
                                    >
                                        <ul>
                                            <li ref="subSubCategoryList" v-for="(normalCategory,normalCategoryIndex) in normalCategoryList" :key="normalCategoryIndex" @click="changeSelect(normalCategoryIndex,normalCategory.id,'subSubCategoryList',normalCategory.title)">{{normalCategory.title}}</li>
                                        </ul>
                                    </div>
                                </b-col>
                            </b-row>
                        </div>
                        <div class="product-info-footer">
                            *Categories Selected  
                            <span 
                            v-if="selectedCategory.category"
                            >
                            {{": "+selectedCategory.category}} >>
                            </span> 
                            <span 
                            v-if="selectedCategory.subCategory"
                            >
                                {{selectedCategory.subCategory}} >>
                            </span>
                            <span 
                            v-if="selectedCategory.subSubCategory"
                            >
                                {{selectedCategory.subSubCategory}} 
                                <span>
                                    <b-icon icon="check-circle" style="color:green;"/>
                                </span>
                            </span>
                        </div>
                    </div>
                    <br>
                    


                    <b-row cols="1" cols-sm="1" cols-md="2" cols-lg="2">
                        <b-col>
                            <div class="loyel-box-style">
                                <div class="box-wrapper">
                                    <div class="product-name">
                                        <label for="">Product Name*:</label>
                                        <a-input placeholder="Enter product name" v-model="name"/>
                                    </div>
                                    <br>
                                    <div class="brand-select">
                                        <label for="">Product Brand*:</label>
                                        <div class="select-with-btn">
                                            <a-select show-search placeholder="Select Brand" v-model="brand_id">
                                                <a-select-option :value="brandInfo.id" v-for="brandInfo,brandIndex in brandList" :key="brandIndex">
                                                    {{brandInfo.name}}
                                                </a-select-option>
                                            </a-select>
                                            <a-button type="primary" @click="modalvalue = true">
                                                +
                                            </a-button>
                                        </div>
                                    </div>
                                    <br>
                                    <div class="Product-unit">
                                        <label for="">Product Unit:</label>
                                        <div class="select-with-btn">
                                            <a-select show-search placeholder="Select Unit" v-model="unit_id">
                                                <a-select-option :value="unitInfo.id" v-for="unitInfo,unitIndex in unitList" :key="unitIndex">
                                                    {{unitInfo.label}}
                                                </a-select-option>
                                            </a-select>    
                                            <a-button type="primary" @click="modalvalue2 = true">
                                                +
                                            </a-button>                            
                                        </div>
                                    </div>
                                    <br>
                                    <div class="refundable">
                                        Refundable:  
                                        <a-switch v-model="refundable">
                                            <span slot="checkedChildren">Yes</span>
                                            <span slot="unCheckedChildren">No</span>
                                        </a-switch>                        
                                    </div>
                                </div>
                            </div>
                        </b-col>
                        <b-col>
                            <div class="loyel-box-style">
                                <div class="box-wrapper">
                                    <div class="product-weight">
                                        <label for="">Product Weight: </label>
                                        <a-input-search 
                                        type="number"
                                        placeholder="input search text" 
                                        v-model="weight"
                                        >
                                            <a-button slot="enterButton">
                                                KG
                                            </a-button>
                                        </a-input-search>
                                    </div>
                                    <br>
                                    <div class="tags">
                                        <label for="">Tags: </label>
                                        <b-form-tags input-id="tags-basic" placeholder="Enter product tags.." v-model="tags"></b-form-tags>
                                    </div>
                                    <br>
                                    <div class="product-dimension">
                                        <label for="">Product Dimension: </label>
                                        <input type="text" class="ant-input"
                                        v-model="productDimension" placeholder="Height X Width X Length">
                                    </div>
                                    <br>
                                    <div class="product-type">
                                        <div class="ptitle">
                                            Product Type:
                                        </div> 
                                        <a-radio-group name="radioGroup" v-model="product_type" default-value="New">
                                            <a-radio value="1">
                                                New
                                            </a-radio>
                                            <a-radio value="2">
                                                Used
                                            </a-radio>
                                        </a-radio-group>
                                    </div>
                                </div>
                            </div>
                        </b-col>
                    </b-row>
                    <br>


                   <!--  <b-row>
                        <b-col>
                            <div class="loyel-box-style">
                                <div class="last-div">
                                    <div class="top-div">
                                        <div class="top-left">
                                            <h6>Product Attributes</h6>
                                            <p>Boost your item's searchability by 
                                                filling-up the Key Product Information marked with KEY. 
                                                The more you fill-up, the easier
                                                for buyers to find your product.
                                            </p>
                                        </div>
                                        <div class="top-right-but">
                                            <a-tooltip placement="topRight">
                                                <template slot="title" v-if="!selectedCategory.subSubCategory">
                                                    <span>To active this button please select the category first.</span>
                                                </template>
                                                <a-switch 
                                                v-model="attribute"
                                                :disabled="!selectedCategory.subSubCategory" 
                                                >
                                                    <span slot="checkedChildren">Yes</span>
                                                    <span slot="unCheckedChildren">No</span>
                                                </a-switch>
                                            </a-tooltip>
                                        </div>
                                    </div>
                                    <div class="btn-with-hr" v-if="attribute">
                                        <hr>
                                        <div class="botto-attribute">
                                            <a-button type="primary" size="small" @click="modalvalue3 = true">
                                                Add New Attribute
                                            </a-button>
                                        </div>
                                    </div>                   
                                </div>
                            </div>
                        </b-col>
                    </b-row> -->

                    <!-- first step end  -->
                </div>
                <div class="product-description" v-if="current === 1">

                    <!-- second step start  -->

                    <div class="product-color">
                            <div class="loyel-box-style">
                                <div class="head">
                                    <b-row>
                                        <b-col cols="10">
                                            <h6>Product Color: </h6>
                                            <p>If your product has multiple colour, you can select all the color and also you can upload image with color..</p>
                                        </b-col>
                                        <b-col cols="2">
                                            <div class="switch">
                                                <a-switch v-model="has_color">
                                                    <span slot="checkedChildren">Yes</span>
                                                    <span slot="unCheckedChildren">No</span>
                                                </a-switch>    
                                            </div>                            
                                        </b-col>
                                    </b-row>
                                </div>
                                <hr>
                                <div class="input-field">
                                    <div class="select-with-btn">
                                        <a-select mode="multiple" show-search placeholder="Select Color" v-model="selectedColor" >
                                            <a-select-option :value="colorInfo.id" v-for="colorInfo,colorIndex in colorList" :key="colorIndex">
                                                {{colorInfo.color}}
                                            </a-select-option>
                                        </a-select>
                                        <a-button type="primary" @click="modalvalue4 = true">
                                            +
                                        </a-button>
                                    </div>
                                </div>
                            </div>            
                        </div>
                        <br>
                        <div class="product-color">
                            <div class="loyel-box-style">
                                <div class="head">
                                    <b-row>
                                        <b-col cols="10">
                                            <h6>Product Size: </h6>
                                            <p>If your product has multiple size, you can select all the size.</p>
                                        </b-col>
                                        <b-col cols="2">
                                            <div class="switch">
                                                <a-switch v-model="has_size">
                                                    <span slot="checkedChildren">Yes</span>
                                                    <span slot="unCheckedChildren">No</span>
                                                </a-switch>    
                                            </div>                            
                                        </b-col>
                                    </b-row>
                                </div>
                                <hr>
                                <div class="input-field">
                                    <div class="select-with-btn">
                                        <a-select mode="multiple" show-search placeholder="Select Size" v-model="selectedSize">
                                            <a-select-option :value="sizeInfo.id" v-for="sizeInfo,sizeIndex in sizeList" :key="sizeIndex">
                                                {{sizeInfo.label}}
                                            </a-select-option>
                                        </a-select>
                                        <a-button type="primary" @click="modalvalue5 = true">
                                            +
                                        </a-button>
                                    </div>
                                </div>
                            </div>            
                        </div>



                    <br>
                    <div class="product-description">
                        <div class="product-photo">
                            <div class="loyel-box-style">
                                <div class="head">
                                    <h6>Product Photos*</h6>
                                    <p>You can upload multiple product image in here</p>
                                </div>
                                <hr>
                                <div class="input-field">
                                    <ImgUpload  v-model="pro_imgs"/>
                                </div>
                            </div>
                        </div>
                        <br>
                        <b-row cols="1" cols-md="2" cols-lg="2">
                            <b-col>
                                <div class="loyel-box-style">
                                    <div class="head">
                                        <h6>Product Video Url: </h6>
                                    </div>
                                    <hr>
                                    <div class="input-field">
                                        <a-input ref="userNameInput" v-model="video_link" placeholder="https://youtu.be/OEFkHHK0o8s">
                                            <a-tooltip slot="suffix" title="You can just input Youtube / Vimeo / DailyMotion video url">
                                            <a-icon type="info-circle" style="color: rgba(0,0,0,.45)"/>
                                            </a-tooltip>
                                        </a-input>
                                    </div>
                                </div>
                            </b-col>
                            <b-col>
                                <div class="loyel-box-style">
                                    <div class="head">
                                        <h6>Product Thumbnail Image: </h6>
                                    </div>
                                    <hr>
                                    <div class="input-field">
                                        <ImgsingleUpload v-model="thumbnail_img" name="Click to Upload"/>
                                    </div>
                                </div>
                            </b-col>
                        </b-row>
                        <br>

                        <br>
                        <div class="product-description">
                            <div class="loyel-box-style">
                                <div class="head">
                                    <h6>Product Description:</h6>
                                </div>
                                <hr>
                                <div class="input-field">
                                    <VueEditor v-model="description"/>
                                </div>
                            </div>  
                        </div>
                    </div>
                    <!-- second step end -->

                </div>
                <div class="product-price-and-stock" v-if="current === 2">
                    <!-- third step start  -->
                    <div class="product-color">
                        <div class="loyel-box-style">
                            <div class="head">
                                <b-row>
                                    <b-col cols="10">
                                        <h6>Product Order Quantity Limitation: </h6>
                                        <p>You can manage minimum and maximum quantity limitation.</p>
                                    </b-col>
                                   <!--  <b-col cols="2">
                                        <div class="switch">
                                            <a-tooltip placement="topRight">
                                                <template slot="title">
                                                    <span>
                                                        To active this switch you can manage quantity limitation.
                                                    </span>
                                                </template>
                                                <a-switch v-model="quantityLimitation.available">
                                                    <span slot="checkedChildren">Yes</span>
                                                    <span slot="unCheckedChildren">No</span>
                                                </a-switch> 
                                            </a-tooltip>
                                        </div>                            
                                    </b-col> -->
                                </b-row>
                            </div>
                            <div class="wrap-with-hr" >
                                <hr>
                                <div class="input-field">
                                    <b-row cols="1" cols-md="2" cols-lg="2">
                                        <b-col>
                                            <label for="">Product minimum order quantity: </label>
                                            <br>
                                            <a-input-number size="large" :min="1" :max="100000" v-model="min_qty"/>
                                        </b-col>
                                        <b-col>
                                            <label for="">Product maximum order quantity: </label>
                                            <br>
                                            <a-input-number size="large" :min="1" :max="100000" v-model="max_qty"/>
                                        </b-col>
                                    </b-row>                                   
                                </div>
                            </div>
                        </div>            
                    </div>
                    <br>
                    <div class="product-price">
                        <div class="loyel-box-style">
                            <div class="head">
                                <h6>Product price and stock: </h6>
                            </div>
                            <hr>
                            <div class="input-field">
                                <!-- <a-form-model-item :label-col="{lg: {span: 4}, sm: {span: 7}}" labelAlign="left"
                                                    :wrapper-col="{lg: {span: 20}, sm: {span: 17}}" label="Price Type: ">
                                    <a-radio-group name="radioGroup" v-model="price_type">
                                    <a-radio :value="1">Simple Product</a-radio>
                                    <a-radio :value="2">Variable Product</a-radio>
                                    <a-radio :value="3">Volume tier Pricing</a-radio>
                                    </a-radio-group>
                                </a-form-model-item>

                                <a-checkbox @change="stockManage" :checked="stock_manage === 2">
                                    Stock management
                                </a-checkbox>

                                <div v-if="price_type === 1">
                                    <div class="my-4" v-if="stock_manage === 2">
                                    <div md="6">
                                        <a-form-model-item class="mb-0" :label-col="{lg: {span: 7}, sm: {span: 7}}" labelAlign="left"
                                                        :wrapper-col="{lg: {span: 17}, sm: {span: 17}}" label="Quantity : ">
                                        <a-input-number style="width: 100%" v-model="quantity" :min="0"/>
                                        </a-form-model-item>
                                    </div>
                                    </div>
                                    <div class="my-4">
                                    <div md="6">
                                        <a-form-model-item class="mb-0" :label-col="{lg: {span: 7}, sm: {span: 7}}" labelAlign="left"
                                                        :wrapper-col="{lg: {span: 17}, sm: {span: 17}}" label="Price : ">
                                        <a-input-number step=".02" :formatter="value => `৳ ${value}`"
                                                        :parser="value => value.replace('৳', '')" style="width: 100%" v-model="price"
                                                        :min="1"/>
                                        </a-form-model-item>
                                    </div>
                                    </div>
                                </div>
                                <div v-if="price_type === 2">
                                    
                                    <table class="table table-bordered my-4">
                                    <a-empty v-if="price_option.length === 0"/>
                                    <tbody v-else>
                                    <tr v-for="(volume, f) in price_option" :key="f">
                                        <td>
                                        <a-tag v-for="(tag, k) in volume.variant" :key="k">{{ tag }}</a-tag>
                                        </td>
                                        <td>
                                        <a-input-number step=".02" :formatter="value => `৳ ${value}`"
                                                        :parser="value => value.replace('৳', '')" style="width: 100%"
                                                        v-model="volume.variant_price"
                                                        :min="1"/>
                                        </td>
                                        <td>
                                        <a-input-number 
                                        :disabled="stock_manage === 1" 
                                        style="width: 100%" 
                                        v-model="volume.quantity" 
                                        :min="0"/>
                                        </td>
                                    </tr>
                                    </tbody>
                                    </table>
                                    
                                </div> -->
                               <!--  <div v-if="price_type === 3"> -->
                                <div >
                                    <!-- <div class="my-4" v-if="stock_manage === 2">
                                    <div md="6">
                                        <a-form-model-item class="mb-0" :label-col="{lg: {span: 7}, sm: {span: 7}}" labelAlign="left"
                                                        :wrapper-col="{lg: {span: 17}, sm: {span: 17}}" label="Quantity : ">
                                        <a-input-number style="width: 100%" v-model="quantity" :min="0"/>
                                        </a-form-model-item>
                                    </div>
                                    </div> -->
                                    <!-- <p class="text-right text-info font-weight-bold mt-4 mb-0" style="font-size: 12px;cursor: pointer"
                                    @click="addTierPrice">
                                    + ADD VOLUME TIER</p> -->
                                    <!-- Table -->
                                    <table class="table table-bordered">
                                    <thead>
                                    <tr>
                                        <th>Color</th>
                                        <th>Size</th>
                                        <th>Quantity</th>
                                        <th>Purchase Price</th>
                                        <th>Sell Price</th>
                                        <!-- <th>Action</th> -->
                                    </tr>
                                    </thead>

                                    <tbody>
                                    <!-- <tr v-if="tier_price.length === 0">
                                        <td colspan="4">
                                        <a-empty/>
                                        </td>
                                    </tr> -->
                                    <!-- <pre>{{selectedColorList}}</pre>
                                    <pre>{{selectedSizeList}}</pre> -->
                                    <slot v-for="selectedColor in selectedColorList" >
                                        <slot v-for="selectedSize in selectedSizeList">
                                            <tr >
                                                <td>
                                                    {{selectedColor.color+selectedColor.id}}
                                                </td>
                                                <td>
                                                    {{selectedSize.label+selectedSize.id}}
                                                </td>
                                                <td>
                                                    <!-- <a-input-number style="width: 100%"  :min="1" :ref="'quantity_'+selectedColor.id+selectedSize.id"/> -->
                                                    <input type="number" :min="1" class="form-control"  v-model="quantity[selectedColor.id+selectedSize.id]">
                                                </td>
                                                <td>
                                                <!-- <a-input-number step=".02" :formatter="value => `৳ ${value}`"
                                                                :parser="value => value.replace('৳', '')" style="width: 100%" 
                                                                :min="1" :ref="'pruchase_price_'+selectedColor.id+selectedSize.id"/> -->
                                                    <input type="number" step="0.01" :min="1"  class="form-control"  v-model="purchasePrice[selectedColor.id+selectedSize.id]">
                                                </td>
                                                <td>
                                                <!-- <a-input-number step=".02" :formatter="value => `৳ ${value}`"
                                                                :parser="value => value.replace('৳', '')" style="width: 100%" 
                                                                :min="1" :ref="'sell_price_'+selectedColor.id+selectedSize.id"/> -->
                                                 <input type="number" step="0.01" :min="1"  class="form-control" v-model="sellPrice[selectedColor.id+selectedSize.id]"  >
                                                </td>
                                                <!-- <td>
                                                <a-button type="primary" @click="removeTierPrice(f, volume)" icon="delete"/>
                                                </td> -->
                                            </tr>
                                        </slot>
                                    </slot>
                                    </tbody>
                                    </table>
                                    <!-- End Table -->
                                </div>

                            </div>
                        </div>            
                    </div>
                    <br>
                    <div class="product-discount">
                        <div class="loyel-box-style">
                            <div class="head">
                                <b-row>
                                    <b-col cols="10">
                                        <h6>Product Discount: </h6>
                                        <!-- <p>You can set fixed discount and variation discount.</p> -->
                                    </b-col>
                                    <b-col cols="2">
                                        <div class="switch">
                                            <a-tooltip placement="topRight">
                                                <template slot="title">
                                                    <span>To active this switch you can set the discount rate.</span>
                                                </template>
                                                <a-switch 
                                                v-model="has_discount"
                                                >
                                                    <span slot="checkedChildren">Yes</span>
                                                    <span slot="unCheckedChildren">No</span>
                                                </a-switch>
                                            </a-tooltip>   
                                        </div>                            
                                    </b-col>
                                </b-row>
                            </div>
                            <div class="btn-with-hr" v-if="has_discount">
                                <hr>
                                <div class="input-field">
                                    <div>
                                        <a-form-model-item  class="mb-0" :label-col="{lg: {span: 3}, sm: {span: 7}}"
                                                            labelAlign="left"
                                                            :wrapper-col="{lg: {span: 15}, sm: {span: 17}}" label="Discount : ">
                                            <a-input-group compact>
                                            <a-input-number step=".2" style="width: 80%" v-model="discount" :min="1"/>
                                            <a-select v-model="discount_type" style="width: 20%">
                                                <a-select-option value="Percent">
                                                Percent
                                                </a-select-option>
                                                <!-- <a-select-option value="Flat">
                                                Flat
                                                </a-select-option> -->
                                            </a-select>
                                            </a-input-group>
                                        </a-form-model-item>
                                        <a-form-model-item  class="mb-0" :label-col="{lg: {span: 3}, sm: {span: 7}}"
                                                            labelAlign="left"
                                                            :wrapper-col="{lg: {span: 15}, sm: {span: 17}}" label="Start Date : ">
                                            <a-input-group compact>
                                            <input type="date"  class="form-control" v-model="discount_start_date">
                                            </a-input-group>
                                        </a-form-model-item>
                                        <a-form-model-item  class="mb-0" :label-col="{lg: {span: 3}, sm: {span: 7}}"
                                                            labelAlign="left"
                                                            :wrapper-col="{lg: {span: 15}, sm: {span: 17}}" label="Start Time : ">
                                            <a-input-group compact>
                                            <input type="time"  class="form-control" v-model="discount_start_time">
                                            </a-input-group>
                                        </a-form-model-item>
                                        <a-form-model-item  class="mb-0" :label-col="{lg: {span: 3}, sm: {span: 7}}"
                                                            labelAlign="left"
                                                            :wrapper-col="{lg: {span: 15}, sm: {span: 17}}" label="End Date : ">
                                            <a-input-group compact>
                                            <input type="date"  class="form-control" v-model="discount_end_date">
                                            </a-input-group>
                                        </a-form-model-item>
                                        <a-form-model-item  class="mb-0" :label-col="{lg: {span: 3}, sm: {span: 7}}"
                                                            labelAlign="left"
                                                            :wrapper-col="{lg: {span: 15}, sm: {span: 17}}" label="End Time : ">
                                            <a-input-group compact>
                                            <input type="time"  class="form-control" v-model="discount_end_time">
                                            </a-input-group>
                                        </a-form-model-item>
                                        
                                        <!-- <a-checkbox @change="discountManage" class="my-4" :checked="discount_method === 2">
                                            Enable volume tier Discount
                                        </a-checkbox> -->
                                        <!-- <div v-if="discount_method == 2" class="my-4">
                                            <div col="12" sm="12" md="8" class="mb-3 mb-xl-0">
                                            <p class="text-right text-info font-weight-bold my-0" style="font-size: 12px;cursor: pointer"
                                                @click="addTierDiscount">
                                                + ADD VOLUME TIER</p>
                                            <table class="table table-bordered">
                                                <thead>
                                                <tr>
                                                <th>Minimum Quantity</th>
                                                <th></th>
                                                <th>Additional % off</th>
                                                <th>Action</th>
                                                </tr>
                                                </thead>

                                                <tbody>
                                                <tr v-if="tier_discount.length === 0">
                                                <td colspan="4">
                                                    <a-empty/>
                                                </td>
                                                </tr>
                                                <tr v-for="(volume, f) in tier_discount" :key="f">
                                                <td>
                                                    <a-input-number style="width: 100%" v-model="volume.unit" :min="1"/>
                                                </td>
                                                <td>
                                                    or more
                                                </td>
                                                <td>
                                                    <a-input type="number" suffix="%" step="1" style="width: 100%" v-model="volume.value"
                                                            :min="1"/>
                                                </td>
                                                <td>
                                                    <a-button type="primary" @click="removeTierDiscount(f, volume)" icon="delete"/>
                                                </td>
                                                </tr>
                                                </tbody>
                                            </table>

                                            </div>
                                        </div>-->
                                    </div>
                                </div>
                            </div>                            
                        </div>            
                    </div>



                    <!-- third step end  -->
                </div>
                <div class="product-service-and-delivery" v-if="current === 3">
                    <!-- four step start  -->
                    <div class="service-and-delivery">
                        <b-row>
                            <b-col>
                                <div class="loyel-box-style extrap-padding">
                                    <a-form-model-item :label-col="{lg: {span: 7}, sm: {span: 7}}" labelAlign="left"
                                    :wrapper-col="{lg: {span: 17}, sm: {span: 17}}" label="Has Warranty">
                                        <a-switch checked-children="Yes" un-checked-children="No" v-model="shipping"/>
                                    </a-form-model-item>
                                    <a-form-model-item label="Warranty Type : " :label-col="{lg: {span: 7}, sm: {span: 7}}" labelAlign="left"
                                                    :wrapper-col="{lg: {span: 17}, sm: {span: 17}}">
                                    <a-select style="width: 100%" v-model="warranty_type">
                                    <a-select-option :value="0">
                                        No Warranty
                                    </a-select-option>
                                    <a-select-option :value="1">
                                        International Manufacturer Warranty
                                    </a-select-option>
                                    <a-select-option :value="2">
                                        Non-local warranty
                                    </a-select-option>
                                    <a-select-option :value="3">
                                        Local seller warranty
                                    </a-select-option>
                                    <a-select-option :value="4">
                                        International seller warranty
                                    </a-select-option>
                                    </a-select>
                                </a-form-model-item>
                                <a-form-model-item class="mb-0" label="Warranty Period : " :label-col="{lg: {span: 7}, sm: {span: 7}}"
                                                    labelAlign="left"
                                                    :wrapper-col="{lg: {span: 17}, sm: {span: 17}}">
                                    <a-input v-model="warranty_period" placeholder="Warranty Period Ex-(1 Month)"/>
                                </a-form-model-item>


                                </div>
                            </b-col>
                        </b-row>
                        <b-row class="mt-3">
                            <!-- <b-col>
                                <div class="loyel-box-style extrap-padding">
                                    <a-form-model-item :label-col="{lg: {span: 7}, sm: {span: 7}}" labelAlign="left"
                                    :wrapper-col="{lg: {span: 17}, sm: {span: 17}}" label="Free Shipping">
                                        <a-switch checked-children="Yes" un-checked-children="No" v-model="shipping"/>
                                    </a-form-model-item>
                                    <a-form-model-item class="mb-0" :label-col="{lg: {span: 7}, sm: {span: 7}}" labelAlign="left"
                                    :wrapper-col="{lg: {span: 17}, sm: {span: 17}}" label="Shipping cost : ">
                                        <a-input-number step=".02" :formatter="value => `৳ ${value}`" :disabled="shipping"
                                        :parser="value => value.replace('৳', '')" style="width: 100%"
                                        v-model="shipping_cost" :min="1"/>
                                    </a-form-model-item>
                                </div>
                            </b-col> -->

                            <!-- <b-col>
                                <div class="loyel-box-style extrap-padding">
                                    <div class="input-field">
                                        <div class="select-with-btn">
                                            <label class="h6">Select Area </label>
                                            <a-select mode="multiple" show-search placeholder="Select Area" @click="getSelectedAreaList" >
                                                <a-select-option :value="thanaInfo.id" v-for="thanaInfo,thanaIndex in thanaList" :key="thanaIndex">
                                                    {{thanaInfo.name}}
                                                </a-select-option>
                                            </a-select>
                                        </div>
                                    </div>
                                </div>
                            </b-col> -->
                        </b-row>

                        <b-row class="mt-3">
                            <b-col>
                            <div class="loyel-box-style extrap-padding">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>Sl No</th>
                                            <th>Area</th>
                                            <th>Delivery Charge</th>
                                            <th>For Maximum Qty</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                       
                                        <!-- <tr v-for="areaInfo,areaIndex in selectedAreaList" :key="areaIndex">
                                            <th>{{++areaIndex}}</th>
                                            <td>{{areaInfo.name}}</td>
                                            <td>
                                                <input type="number" min="0"  placeholder="Delivery Charge" class="form-control">
                                            </td>
                                            <td>
                                                <input type="number" min="1"  placeholder="Maximum Quantity" class="form-control">
                                            </td>
                                        </tr> --> 
                                        <tr>
                                            <th>#</th>
                                            <td>Inter City</td>
                                            <td>
                                                <input type="number" min="0"  placeholder="Delivery Charge" class="form-control" v-model="interCityDeliveryCharge">
                                            </td>
                                            <td>
                                                <input type="number" min="1"  placeholder="Maximum Quantity" class="form-control" v-model="interCityDeliveryChargeMax">
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>#</th>
                                            <td>Out City</td>
                                            <td>
                                                <input type="number" min="0"  placeholder="Delivery Charge" class="form-control" v-model="outCityDeliveryCharge">
                                            </td>
                                            <td>
                                                <input type="number" min="1"  placeholder="Maximum Quantity" class="form-control" v-model="outCityDeliveryChargeMax">
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            </b-col>
                        </b-row>

                    </div>
                    <!-- four step end  -->
                </div>
            </div>

            <div class="steps-action">
                <div class="prev-btn">
                    <a-button v-if="current > 0" @click="prev">
                        Previous
                    </a-button>
                </div>
                <div class="next-btn">
                    <a-button v-if="current < steps.length - 1" type="primary" @click="next">
                        Next
                    </a-button>
                    <a-button
                        v-if="current == steps.length - 1"
                        type="primary"
                        @click="finalSubmit()"
                    >
                        Add Product
                    </a-button>
                </div>
            </div>            
        </div>






<!-- all modals here  -->
        <div class="first-phase-all-modals">
            <!-- brand modal  -->
            <div class="modal-one">
                <a-modal
                v-model="modalvalue"
                title="Add new brand"
                centered
                @ok="addBrand()"
                @cancel="closebrandModal()"
                >
                    <b-row cols="1" cols-md="2">
                        <b-col>
                            <div class="brand-name">
                                <label for="">Brand Name:</label>
                                <a-input
                                id="brand"
                                v-model="brandName" 
                                placeholder="Enter brand name..." 
                                />
                                <!-- <div class="helper-text" v-if="helper.name">
                                    {{helper.name}}
                                </div> -->
                            </div>                            
                        </b-col>
                        <b-col>
                            <div class="division-name">
                                <label for="">Bangla Name:</label>
                                <a-input 
                                id="bn_name"
                                v-model="brandBanglaName" 
                                placeholder="Enter Bangla Name..." 
                                />
                               <!--  <div class="helper-text" v-if="helper.bn_name">
                                    {{helper.bn_name}}
                                </div> -->
                            </div>
                        </b-col>
                    </b-row>
                    <br>
                    <b-row>
                        <b-col>
                            <div class="upload-img">
                                <label for="">Brand Logo:</label>
                                <div class="fil-upload">
                                    <label for="file-upload">
                                        <div class="ant-btn" id="uploaded"> <a-icon type="upload" /> Click to Upload </div>
                                    </label>
                                    <input id="file-upload" type="file" @change="loadBrandLogo" ref="brand" name="fileUpload" accept="image/*"   />
                                </div>
                                <div class="show-img-name" v-if="showImgName">
                                    <img v-lazy="brandLogo" height="150" width="150">
                                    {{showImgName}}
                                </div>
                            </div>                            
                        </b-col>
                    </b-row>
                </a-modal>
            </div>
            <!-- unit modal  -->
            <div class="modal-two">
                <a-modal
                v-model="modalvalue2"
                title="Add new Unit"
                centered
                @ok="addUnit()"
                @cancel="closeUnitModel()"
                >
                    <label for="">Unit Name:</label>
                    <input ref="unit" v-model="unitLabel" class="ant-input" type="text">
                    <!-- <div class="helper-text" v-if="helper.unit">
                        {{helper.unit}}
                    </div> -->
                </a-modal>
            </div>
            <!-- attribute modal  -->
            <div class="modal-three">
                <a-modal
                v-model="modalvalue3"
                title="Add new Attribute"
                centered
                @ok="closeAttributeModel()"
                >
                    <div class="attr-name">
                        <label for="">Attribute Name: </label>
                        <input v-model="attributeName" ref="attrName" type="text" class="ant-input" placeholder="Enter attribute name...">
                        <div class="helper-text" v-if="helper.attributeName">
                            {{helper.attributeName}}
                        </div>
                    </div>      
                    <br>
                    <div class="attr-value">
                        <label for="">Attribute Value: </label>
                        <b-form-tags input-id="tags-basic" placeholder="Enter attribute value..." 
                        v-model="attributeValue"></b-form-tags>
                    </div>              
                </a-modal>
            </div>
            <!-- color modal  -->
            <div class="modal-four">
                <a-modal
                v-model="modalvalue4"
                title="Add new Color"
                centered
                @ok="addColor()"
                @cancel="resetColorForm()"
                >
                    <b-row cols="1" cols-md="2" cols-lg="2">
                        <b-col>
                            <label for="">Color Name: </label>
                            <input ref="colorName" type="text" class="ant-input" v-model="colorName">
                            <!-- <div class="helper-text" v-if="helper.colorName">
                                {{helper.colorName}}
                            </div> -->
                        </b-col>
                        <b-col>
                            <label for="">Color Code: </label>
                            <input ref="colorCode" type="color" class="ant-input" v-model="colorCode">
                            <!-- <div class="helper-text" v-if="helper.colorCode">
                                {{helper.colorCode}}
                            </div>  -->                          
                        </b-col>
                    </b-row>              
                </a-modal>
            </div>
             <!-- /color modal  -->
              <!-- size modal  -->
            <div class="modal-four">
                <a-modal
                v-model="modalvalue5"
                title="Add new size"
                centered
                @ok="addSize()"
                @cancel="resetSizeForm()"
                >
                    <b-row cols="1" cols-md="1" cols-lg="1">
                        <b-col>
                            <label for="">Size Label: </label>
                            <input  type="text" class="ant-input" v-model="sizeLabel">
                            <!-- <div class="helper-text" v-if="helper.colorName">
                                {{helper.colorName}}
                            </div> -->
                        </b-col>
                        
                    </b-row>              
                </a-modal>
            </div>
        </div>
        <br>
        <br>
        <br>
    </div>
</template>

<script>
import ImgUpload from '@/components/re-useable/ImagesUpload'
import ImgsingleUpload from '@/components/re-useable/ImageUpload'
export default {
    name:'product-create',
    components:{
        ImgUpload,
        ImgsingleUpload,
    },
    data() {
        return {
            sellPrice:[],
            purchasePrice:[],
            quantity:[],
            name:null,
            brand_id:null,
            unit_id:null,
            refundable:null,
            weight:null,
            tags:[],
            productDimension:null,
            product_type:null,
            has_color:null,
            has_size:null,
            has_discount:null,
            selectedColor:[],
            selectedSize:[],
            pro_imgs:[],
            video_link:null,
            thumbnail_img:null,
            description:null,
            min_qty:1,
            max_qty:1,
            shipping: false,
            shipping_cost: 0,
            warranty_type:null,
            warranty_period:null,
            discount:0,
            discount_type:null,
            discount_start_date:null,
            discount_start_time:null,
            discount_end_date:null,
            discount_end_time:null,
            interCityDeliveryCharge:60,
            outCityDeliveryCharge:150,
            interCityDeliveryChargeMax:1,
            outCityDeliveryChargeMax:1,


            attributeValue:[],
            attributeName:null,
            selectedCategory: {category:'',subCategory:'',subSubCategory:''},
            selectedArea:[],
            selectedAreaList:[],
            thanaList:[],
            selectedSizeList:[],
            selectedColorList:[],
            sizeLabel:null,
            colorCode:null,
            colorName:null,
            colorList:[],
            sizeList:[],
            unitLabel:null,
            brandName:null,
            brandSlug:null,
            brandBanglaName:null,
            brandLogo:null,
            normalCategoryList:[],
            subCategoryList:[],
            categoryList:[],
            brandList:[],
            unitList:[],
            current: 0,
            steps: [
                {
                title: 'Product Information',
                },
                {
                title: 'Product Description',
                },
                {
                title: 'Price & Stock',
                },
                {
                title: 'Service & Delivery',
                },
            ],







            // first step state
            lists:['one','two','three','four','five','six','seven','eight','nine','ten','eleven','tweleve'],
            //select group
            brands: [
                'new',
                'second',
                'third'
            ],
            units: [
                'KG',
                'Piece',
                'Bundle'
            ],
            unitvalue: null,
            colors: [
                'Red',
                'Green',
                'Blue'
            ],
            showImgName: null,
            //modal group
            modalvalue: false,
            modalvalue2: false,
            modalvalue3: false,
            modalvalue4: false,
            modalvalue5: false,
            //brand create
            brandCreate: {
                name: '',
                bn_name: '',
                brandLogo: ''
            },
            helper: {
                name: '',
                division: '',
                bn_name: '',
                unit: '',
                attributeName: '',
                attributeValue: '',
                colorName: '',
                colorCode: '',
            },
            // second step 
            color: {
                name: null,
                code: null,
            },
            // final form object
            form: {
                productName: null,
                brandName: undefined,
                unitName: undefined,
                refundable: false,
                weight: null,
                tags: [],
                productDimension: null,
                productType: 'New',
                attribute: false,
                attributeName: '',
                attributeValue: [],
                selectedCategory: {category:'',subCategory:'',subSubCategory:''},
                photos: [],
                thumbnail_img: '',
                video_link: '',
                productDescription: null,
                colorSwitch: false,
                selectedColor: [],
                selectedSize: [],
                quantityLimitation:{
                    available: false,
                    minimum: null,
                    maximum: null
                },
                stock_manage: 2,
                price_type: 1,
                price_option: [],
                tier_price: [],
                discountPart: false,
                discount_value: 1,
                discount_type: 'Percent',
                discount_method: 1,
                tier_discount: [],
                warranty_type: 0,
                warranty_period: '',
                shipping: false,
                shipping_cost: 0,
            }
        }
    },
    beforeMount(){
        this.getCategoryList();
        this.getBrandList();
        this.getUnitList();
        this.getColorList();
        this.getSizeList();
        this.getThanaList();
    },
    methods: {
   
    async addProduct(){
       
        let token=window.localStorage.getItem("sellerToken");
                 let config = {
                       headers: {
                          'Content-Type': 'multipart/form-data',
                          'Authorization': 'Bearer '+token
                      }   
                  }; 
        let formData=new FormData();
            formData.append("category_id",this.category_id);
            formData.append("subcategory_id",this.subcategory_id);
            formData.append("sub_subcategory_id",this.sub_subcategory_id);
            formData.append("name",this.name);
            formData.append("brand_id",this.brand_id);
            formData.append("unit_id",this.unit_id);
            formData.append("refundable",this.refundable);
            formData.append("tags",this.tags);
            formData.append("product_type",this.product_type);
            formData.append("has_color",this.has_color);
            formData.append("has_size",this.has_size);
            formData.append("thumbnail_img",this.thumbnail_img);
            formData.append("video_link",this.video_link);
            formData.append("description",this.description);
            formData.append("min_qty",this.min_qty);
            formData.append("max_qty",this.max_qty);
            // formData.append("quantity",this.quantity);
            formData.append("warranty_type",this.warranty_type);
            formData.append("warranty_period",this.warranty_period);
            formData.append("slug",this.slug);
            formData.append("sku",this.sku);
            formData.append("has_discount",this.has_discount);
            formData.append("discount",this.discount);
            formData.append("discount_start_date",this.discount_start_date);
            formData.append("discount_start_time",this.discount_start_time);
            formData.append("discount_end_date",this.discount_end_date);
            formData.append("discount_end_time",this.discount_end_time);

            formData.append("interCityDeliveryCharge",this.interCityDeliveryCharge);
            formData.append("outCityDeliveryCharge",this.outCityDeliveryCharge);
            formData.append("outCityDeliveryChargeMax",this.outCityDeliveryChargeMax);
            formData.append("interCityDeliveryChargeMax",this.interCityDeliveryChargeMax);
            
            this.selectedColorList.forEach(colorInfo=>{
                this.selectedSizeList.forEach(sizeInfo=>{
                   
                    formData.append("color_id[]",colorInfo.id);
                    formData.append("size_id[]",sizeInfo.id);
                    formData.append("quantity[]",this.quantity[colorInfo.id+sizeInfo.id]);
                    formData.append("purchase_price[]",this.purchasePrice[colorInfo.id+sizeInfo.id]);
                    formData.append("sell_price[]",this.sellPrice[colorInfo.id+sizeInfo.id]);
                });
            });


        if(this.thumbnail_img!=null)
            formData.append("thumbnail_img",this.thumbnail_img);
        if(this.pro_imgs!=null)
            formData.append("pro_imgs[]",this.pro_imgs);

        
        await  this.$http.post("seller/product/add",formData,config)
             .then(response=>{
                this.msgFlag=response.data.msgFlag;
                this.msg=response.data.msg;
                this.errMsg=response.data.errMsg;
                this.errMsgFlag=response.data.errMsgFlag;
            
                if(this.errMsgFlag==true)
                    this.$toaster.warning(this.errMsg);
                if(this.msgFlag==true){
                    this.$toaster.success(this.msg);
                }
             })
             .catch(error=>{console.dir()})
             .finally();
    },
    getSelectedAreaList(){
        if(this.selectedArea.length>0){
        this.thanaList.forEach(thanaInfo=>{   
                this.selectedArea.forEach(selectedArea=>{
                    if(selectedArea==thanaInfo.id)
                        this.selectedAreaList.push(thanaInfo);
                })
            })
         }
        else{
                this.selectedAreaList=[];
        }
    },
    getThanaList(){
         let token=window.localStorage.getItem("sellerToken");
         let config = {
               headers: {
                  'Content-Type': 'multipart/form-data',
                  'Authorization': 'Bearer '+token
              }   
          }; 
        this.$http.get("get/thana/list",config)
         .then(response=>{
           this.thanaList=response.data;
         })
         .catch(error=>{console.dir()})
         .finally();
    },
    getSelectedColorAndSize(){
        // console.dir(this.photos);
       this.selectedColorList=[];
       this.selectedSizeList=[];
       // console.dir(this.selectedColor);
       if(this.selectedColor.length>0){
        this.colorList.forEach(colorInfo=>{   
                this.selectedColor.forEach(selectedColor=>{
                    if(selectedColor==colorInfo.id)
                        this.selectedColorList.push(colorInfo);
                })
            })
         }
        else{
                this.selectedColorList.push({id:0,color:'No Color'});
        }

        if(this.selectedSize.length>0){
            this.sizeList.forEach(sizeInfo=>{
                this.selectedSize.forEach(selectedSize=>{
                    if(selectedSize==sizeInfo.id)
                        this.selectedSizeList.push(sizeInfo);
                })
            })
        }
        else{
            this.selectedSizeList.push({id:0,size:'No Size',label:'No Size'});
        }
        // return selectedColorList;
    },
    async addSize(){
            if(this.sizeFormValidation()){
                let token=window.localStorage.getItem("sellerToken");
                 let config = {
                       headers: {
                          'Content-Type': 'multipart/form-data',
                          'Authorization': 'Bearer '+token
                      }   
                  }; 
                let formData=new FormData();
                formData.append("sizeLabel",this.sizeLabel);
                this.$http.post("seller/size/add",formData,config)
                 .then(response=>{
                    this.msgFlag=response.data.msgFlag;
                    this.msg=response.data.msg;
                    this.errMsg=response.data.errMsg;
                    this.errMsgFlag=response.data.errMsgFlag;
                
                    if(this.errMsgFlag==true)
                        this.$toaster.warning(this.errMsg);
                    if(this.msgFlag==true){
                        this.$toaster.success(this.msg);
                        this.resetSizeForm();
                        this.getSizeList();
                    }
                 })
                 .catch(error=>{console.dir()})
                 .finally();
            }
        },
        
        sizeFormValidation(){
            if(this.sizeLabel!=null ){
                return true;
            }
            else{
                if(this.sizeLabel==null){
                    this.errMsg="Please Write Size Label.";
                    this.$toaster.warning(this.errMsg);
                }
                this.errMsgFlag=true;
                return false;
            }
        },
        
        resetSizeForm(){
            this.sizeLabel=null;
        },
    async addColor(){
            if(this.colorFormValidation()){
                let token=window.localStorage.getItem("sellerToken");
                 let config = {
                       headers: {
                          'Content-Type': 'multipart/form-data',
                          'Authorization': 'Bearer '+token
                      }   
                  }; 
                let formData=new FormData();
                formData.append("colorName",this.colorName);
                formData.append("colorCode",this.colorCode);
            await  this.$http.post("seller/color/add",formData,config)
                 .then(response=>{
                    this.msgFlag=response.data.msgFlag;
                    this.msg=response.data.msg;
                    this.errMsg=response.data.errMsg;
                    this.errMsgFlag=response.data.errMsgFlag;
                
                    if(this.errMsgFlag==true)
                        this.$toaster.warning(this.errMsg);
                    if(this.msgFlag==true){
                        this.$toaster.success(this.msg);
                        this.resetColorForm();
                        this.getColorList();
                    }
                 })
                 .catch(error=>{console.dir()})
                 .finally();
            }
        },
        
        colorFormValidation(){
            if(this.colorName!=null && this.colorCode!=null){
                return true;
            }
            else{
                if(this.colorName==null){
                    this.errMsg="Please Write Color Name.";
                    this.$toaster.warning(this.errMsg);
                }
                if(this.colorCode==null){
                    this.errMsg="Please Select Color Code.";
                    this.$toaster.warning(this.errMsg);
                }
                this.errMsgFlag=true;
                return false;
            }
        },
        
        resetColorForm(){
            this.colorCode=null;
            this.colorName=null;
        },
    async addUnit(){
      if(this.unitFormValidation()){
        let token=window.localStorage.getItem("sellerToken");
         let config = {
                     headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization': 'Bearer '+token
                    }   
                }; 
        let formData=new FormData();
        formData.append("unitLabel",this.unitLabel);
        await this.$http.post("seller/unit/add",formData,config)
         .then(response=>{
          this.msgFlag=response.data.msgFlag;
              this.msg=response.data.msg;
              this.errMsg=response.data.errMsg;
              this.errMsgFlag=response.data.errMsgFlag;
        
          if(this.errMsgFlag==true)
            this.$toaster.warning(this.errMsg);
              if(this.msgFlag==true){
                this.$toaster.success(this.msg);
                this.resetUnitForm();
                this.getUnitList();
              }
         })
         .catch(error=>{console.dir()})
         .finally();
      }
    },
    
    unitFormValidation(){
      if(this.unitLabel!=null ){
        return true;
      }
      else{
        if(this.unitLabel==null){
          this.errMsg="Please Write Unit Label.";
          this.$toaster.warning(this.errMsg);
        }
        this.errMsgFlag=true;
        return false;
      }
    },
    
    resetUnitForm(){
      this.unitLabel=null;
    },
        async addBrand()
        {
            if(this.brandFormValidation())
            {
                this.errMsgFlag=false;
                this.msgFlag=false;
                let token=window.localStorage.getItem("sellerToken");
                     let config = {
                           headers: {
                              'Content-Type': 'multipart/form-data',
                               'Authorization': 'Bearer '+token
                          }   
                      }; 
                        let formData=new FormData();
                            formData.append("name",this.brandName);
                            formData.append("name_bd",this.brandBanglaName);
                            formData.append("slug",this.brandName.split(' ').join('-'));
                        if(this.$refs.brand.files[0]!=null)
                            formData.append("brandLogo",this.$refs.brand.files[0]);
                        
                        
                    await this.$http.post("seller/brand/add",formData,config)
                            .then(response=>{
                                this.errMsgFlag=response.data.errMsgFlag;
                                this.msgFlag=response.data.msgFlag;
                                this.msg=response.data.msg;
                                this.errMsg=response.data.errMsg;
                                this.errMsg=response.data.errMsgFlag;

                            if(this.errMsgFlag==true)
                                this.$toaster.warning(this.errMsg);
                        
                                if(this.msgFlag==true){
                                    this.$toaster.success(this.msg);
                                    this.resetBrandForm();
                                    this.getBrandList();
                                }
                                
                                
                            })
                            .catch(error=>{})
                            .finally();
            }
        },
        brandFormValidation()
        {
            if(this.$refs.brand.files[0]!=null && this.brandName!=null  )
            {
                return true;
            }
            else
            {
                if(this.$refs.brand.files[0]==null )
                {
                    this.errMsg="Please Choose An Logo First.";
                    this.$toaster.warning(this.errMsg);
                }
                if(this.brandName==null)
                {
                    this.errMsg="Please Enter Brand Name.";
                    this.$toaster.warning(this.errMsg);
                }
                
                
                this.errMsgFlag=true;
                this.msgFlag=false;
                return false;
            }
        },
        resetBrandForm()
        {
            this.brandName=null;
            this.brandBanglaName=null;
            this.brandSlug=null;
            this.$refs.brand.files[0]=null;
            this.brandLogo=null;
        },
        async getSizeList(){
            let token=window.localStorage.getItem("sellerToken");
           
            let config = {
                   headers: {
                      'Authorization': 'Bearer '+token
                  }   
              };
                // let formData=new FormData();
            await this.$http.get('/seller/get/size/list',config)
             .then(response=>{
                    this.sizeList=response.data;
             })
             .catch(error=>{console.dir(error)})
             .finally();
        },
        async getColorList(){
            let token=window.localStorage.getItem("sellerToken");
           
            let config = {
                   headers: {
                      'Authorization': 'Bearer '+token
                  }   
              };
                // let formData=new FormData();
            await this.$http.get('/seller/get/color/list',config)
             .then(response=>{
                    this.colorList=response.data;
             })
             .catch(error=>{console.dir(error)})
             .finally();
        },
        async getUnitList(){
            let token=window.localStorage.getItem("sellerToken");
           
            let config = {
                   headers: {
                      'Authorization': 'Bearer '+token
                  }   
              };
                // let formData=new FormData();
            await this.$http.get('/seller/get/unit/list',config)
             .then(response=>{
                    this.unitList=response.data;
             })
             .catch(error=>{console.dir(error)})
             .finally();
        },
        async getBrandList(){
            let token=window.localStorage.getItem("sellerToken");
           
            let config = {
                   headers: {
                      'Authorization': 'Bearer '+token
                  }   
              };
                // let formData=new FormData();
            await this.$http.get('/seller/get/brand/list',config)
             .then(response=>{
                    this.brandList=response.data;
             })
             .catch(error=>{console.dir(error)})
             .finally();
        },
        async getCategoryList(){
            let token=window.localStorage.getItem("sellerToken");
           
            let config = {
                   headers: {
                      'Authorization': 'Bearer '+token
                  }   
              };
                // let formData=new FormData();
            await this.$http.get('/seller/get/category/list',config)
             .then(response=>{
                    this.categoryList=response.data;
             })
             .catch(error=>{console.dir(error)})
             .finally();
        },
        next() {
            this.current++;
            if(this.current==2)
                this.getSelectedColorAndSize();
        },
        prev() {
            this.current--;
            if(this.current==2)
                this.getSelectedColorAndSize();
        },    
        onChange(current) {
            console.log('onChange:', current);
            this.current = current;
        },
        //first step
        changeSelect(currentIndex,itemId,currentRef,itemText) {

            let categoryList = this.$refs.categoryList;
            let subCategoryList = this.$refs.subCategoryList;
            let subSubCategoryList = this.$refs.subSubCategoryList;
            if ( currentRef == 'categoryList' ) {
                this.selectedCategory.category = itemText;
                this.category_id = itemId;
                categoryList.forEach((item,index) => {
                    (currentIndex == index) ? item.classList.add('active') : item.classList.remove('active');
                });
            }
            else if( currentRef =='subCategoryList' ) {
                this.selectedCategory.subCategory = itemText;
                this.subcategory_id = itemId;
                subCategoryList.forEach((item,index) => {
                    (currentIndex == index) ? item.classList.add('active') : item.classList.remove('active');
                });
            } 
            else if( currentRef =='subSubCategoryList' ) {
                this.selectedCategory.subSubCategory = itemText;
                this.sub_subcategory_id= itemId;
                subSubCategoryList.forEach((item,index) => {
                    (currentIndex == index) ? item.classList.add('active') : item.classList.remove('active');
                });
            }
        }, 
        // getFile(event) {
        //         this.brandCreate.brandLogo = event.target.files[0];
        //         this.showImgName = event.target.files[0].name;
        //         let logo = document.getElementById('uploaded');
        //         logo.style.border = '1px solid #D9D9D9';
        //         // imgURL = URL.createObjectURL(event.target.files[0]);
        // },
         loadBrandLogo(e){
            this.errMsgFlag=false;
            this.msgFlag=false;
            const file= e.target.files[0];
            let Extension = file.name.substring(file.name.lastIndexOf('.') + 1).toLowerCase();
            if ( Extension == "png" || Extension == "bmp" || Extension == "jpeg" || Extension == "jpg" || Extension=='gif') {
                this.brandLogo = URL.createObjectURL(file);
                this.brandCreate.brandLogo = event.target.files[0];
                this.showImgName = event.target.files[0].name;
                let logo = document.getElementById('uploaded');
                logo.style.border = '1px solid #D9D9D9';
               // this.sliderImage=this.$refs.slider.files[0];
               
            }
            else
            {
                this.errMsg="Logo only allows file types of  PNG, JPG, JPEG , GIF and BMP.";
                this.errMsgFlag=true;
                this.msgFlag=false;
                this.$toaster.warning(this.errMsg);
            }
        },
        //close modal one
        closebrandModal() {
            let brandName = document.getElementById('brand');
            let division = document.getElementById('division');
            let logo = document.getElementById('uploaded');
            if (this.brandCreate.name == '') {
                brandName.style.border = '1px solid red';
                brandName.style.boxShadow = 'none';
                this.helper.name = 'Brand can\'t be empty';
            } else if(this.brandCreate.division == '') {
                division.style.border = '1px solid red';
                division.style.boxShadow = 'none';
                this.helper.division = 'Division can\'t be empty';
            } else if (this.brandCreate.brandLogo == '') {
                logo.style.border = '1px solid red';
            } else {
                console.log('Brand Details: ',this.brandCreate);
                this.brandCreate = {};
                this.modalvalue = false;
            }
        },
        //close modal two
        closeUnitModel() {
            let unitInput = this.$refs.unit;
            if (this.unitvalue === null || this.unitvalue == '') {
                unitInput.style.border = '1px solid red';
                this.helper.unit = 'Unit can\'t be empty';
            } else {
                console.log(this.unitvalue);
                this.modalvalue2 = false;
            }
        },
        //close modal three
        closeAttributeModel() {
            let attName = this.$refs.attrName;
            if (this.attributeName === null) {
                attName.style.border = '1px solid red';
                this.helper.attributeName = 'Attribute name is required'
            } else {
                attName.style.border = '1px solid #D9D9D9';
                this.helper = {};
                this.modalvalue3 = false;
            }
        },
        //close modal four
        closeColorModel() {
            let colorName = this.$refs.colorName;
            let colorCode = this.$refs.colorCode;
            if (this.color.name === null || this.color.name == '') {
                colorName.style.border = '1px solid red';
                this.helper.colorName = 'Color name is required'
            } else if(this.color.code === null || this.color.code == '') {
                colorCode.style.border = '1px solid red';
                this.helper.colorCode = 'Color code is required'
            } else {
                colorName.style.border = '1px solid #D9D9D9';
                colorCode.style.border = '1px solid #D9D9D9';
                this.helper = {};
                this.color = {};
                console.log(this.color);
                this.modalvalue4 = false;
            }
        },
        closeSizeModel() {
            this.sizeLabel=null;
            this.modalvalue5=false;
        },

        // third steps methods 
        stockManage(e) {
            if (e.target.checked) this.stock_manage = 2
            else this.stock_manage = 1;
        },
        removeTierPrice(index, invoice_product) {
            let idx = this.tier_price.indexOf(invoice_product);
            if (idx > -1) {
                this.tier_price.splice(idx, 1);
            }
        },
        addTierPrice() {
            this.tier_price.push({
                min_unit: 1,
                max_unit: 1,
                value: 1,
            })
        },
        discountManage(e) {
            if (e.target.checked) this.discount_method = 2
            else this.discount_method = 1;
        },
        addTierDiscount() {
            this.tier_discount.push({
                unit: 1,
                value: 1,
            })
        },
        removeTierDiscount(index, invoice_product) {
            let idx = this.tier_discount.indexOf(invoice_product);
            if (idx > -1) {
                this.tier_discount.splice(idx, 1);
            }
        },
        // final submission 
        finalSubmit() {
            // if 
            // (
            //     this.productName &&
            //     this.brandName &&
            //     this.unitName &&
            //     this.selectedCategory.category &&                
            //     this.selectedCategory.subCategory &&                
            //     this.selectedCategory.subSubCategory
            // ) {
            //     console.log(this.form);
            //     this.$success({
            //         title: 'Congratulations!',
            //         content: 'Product uploaded successfully',
            //     });
            // } else {
            //     this.$warning({
            //         title: 'You can\'t upload product',
            //         content: 'Please fill out all required fields first!',
            //     });
            // }

            this.addProduct();

        }
    }
}
</script>

<style scoped>

/* global css  */
.loyel-box-style{
    min-height:50px;
    border:1px solid var(--border-color,#C4C4C4);
    border-radius: 4px;
    background-color: white;
}



/* steps css start  */
.ant-steps{
    white-space: nowrap;
}
.ant-steps-item-title{
    font-weight: 400;
}
.steps-action {
  margin-top: 
  24px;
}
/* steps css end  */

.steps-action{
    display: flex;
    justify-content: space-between;
}



/* first step  */

.product-info-head{
    height: 50px;
    display: flex;
    padding-left:20px;
    align-items: center;
    border-bottom:1px solid #C4C4C4;
}
.product-info-body{
    min-height: 200px;
    padding: 15px;
}
.product-info-footer{
    height: 50px;
    display: flex;
    padding-left:20px;
    align-items: center;
    border-top:1px solid #C4C4C4;
}
.category-selection-div, .sub-category-selection-div, .sub-sub-category-selection-div {
    width:100%;
    height:256px;
    border:2px solid #C4C4C4;
    border-radius: 10px;
    overflow-y: auto;
    padding:10px;
}
/* custom-scrollbar start  */
.custom-scrollbar::-webkit-scrollbar {
  width: 10px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #888; 
  border-radius: 8px;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
/* custom-scrollbar end  */


/* ul li design start  */
ul{
    list-style: none;
    margin:0;
    padding:0;
}
ul li{
    cursor: pointer;
}
.active{
    background:#C4C4C4;
}
/* ul li design end  */


.box-wrapper {
    padding: 20px 15px;
}
.box-wrapper label,
.modal-store-div label{
    margin-bottom: 10px;
    display: block;
}
.select-with-btn {
    display: flex;
}
.ant-select {
    width: 80%;
    border-radius: 5px 0px 0px 5px;
}
.select-with-btn .ant-btn {
    width: 20%;
    border-radius: 0px 5px 5px 0px;
    margin-left: -2px;
}
.ant-switch {
    margin-left: 10px;
}
.helper-text {
    color: red;
}



.upload-btn {
    border: 1px solid rgba(0,0,0,0.4);
    border-radius: 5px;
    padding:2px 5px;
    cursor: pointer;
}
#file-upload {
    display: none;
}


.product-type {
    height: 20px;
    display: flex;
    grid-column-gap: 5px;
}

.ant-radio-group {
    display: flex;
}

/* final div  */
.last-div hr{
    margin: 0;
}
.top-div {
    display: flex;
    padding: 10px;
}
.top-div > :nth-child(1) {
    width: 80%
}
.top-div > :nth-child(2) {
    width: 20%;
}
.top-div > :nth-child(2) > button {
    display: block;
    margin-left: auto;
}
.top-div p {
    margin:0;
    padding: 0;
}

.botto-attribute {
    padding: 10px;
}
.botto-attribute button {
    display: block;
    margin-left: auto;
}
.top-right-but{
    display: flex;
    justify-content: flex-end;
}


/* first step  end*/

/* second step start  */

.loyel-box-style hr {
    margin: 0;
}
.head {
    padding: 15px;
}
.head p {
    margin: 0;
    padding: 0;
}
.input-field {
    padding: 20px;
}
.input-field label {
    display: block;
}
.input-field .ant-input-number {
    width: 100%;
}



.select-with-btn {
    display: flex;
}
.ant-select {
    width: 90%;
    border-radius: 5px 0px 0px 5px;
}
.select-with-btn .ant-btn {
    width: 10%;
    border-radius: 0px 5px 5px 0px;
    margin-left: -2px;
}
.switch .ant-switch{
    display: block;
    margin-left: auto;
}

/* second step end  */


/* third step start  */
.text-right {
    text-align: right;
}

/* third step end  */


/* four step start  */

.extrap-padding {
    padding: 25px;
}


/* four step end  */
</style>