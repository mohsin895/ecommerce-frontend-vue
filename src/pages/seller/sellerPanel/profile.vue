<template>
    <div class="loyel-seller-box">
        <div class="profile-wrapper">
            <div class="profile-firstPart">
                <div class="profile-img-ful-part">
                    <div class="profile-img">
                        <img src="@/assets/images/profile-img.png" alt="">
                        <div class="upload-img">
                            <label for="upload-img" class="upload">
                                <input type="file" id="upload-img">
                                Change Profile
                            </label>
                        </div>
                    </div>
                    <div class="verified-status">
                        Not verified profile ?
                    </div>
                </div>

                <div class="profile-table">
                    <div class="profile-info">
                        Profile Information
                    </div>
                    <table>
                        <tbody>
                            <tr>
                                <td>First Name</td>
                                <td>Shakil</td>
                                <td>Last Name</td>
                                <td>Ahamed</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>useritsolution@gmail.com <span class="verified">Verified</span></td>
                                <td>Contact No</td>
                                <td>+8801769367392 <span class="not-verified">Not Verified</span></td>
                            </tr>
                            <tr>
                                <td>Address</td>
                                <td>Hemayetpur, Savar, Dhaka</td>
                                <td>Country</td>
                                <td>Bangladesh</td>
                            </tr>
                            <tr>
                                <td>State</td>
                                <td>Tn</td>
                                <td>City</td>
                                <td>Dhaka</td>
                            </tr>
                            <tr>
                                <td>Default Currency</td>
                                <td>BDT</td>
                                <td>Pakage</td>
                                <td class="platinum-color">Platinum</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>


<script>

export default {
    data() {
        return {
            msg: 'profile is coming'
        }
    }
}
</script>


<style scoped>

table tr:last-of-type {
  border-bottom: none;
}

.verified {
    padding: 2px 5px;
    color: white;
    font-size: 0.8rem;
    background: #00C708;
    border-radius: 6px;
}
.not-verified {
    padding: 2px 5px;
    color: white;
    font-size: 0.8rem;
    background: #FF1E1E;
    border-radius: 6px;
}
</style>