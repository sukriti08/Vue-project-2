<template>
    <form name="myForm">
        <div class="pt-2">
            <marquee behavior="scroll" direction="right" scrollamount="12">Emergency Contact: 99999999</marquee>
        </div>
        <div class="heading">
            <h1><b>MJN Hospital</b></h1>
            <p class="address">Address: 8CCW+PGF, Vivekananda Rd, Khagrabari, Cooch Behar, West Bengal 736101</p>
        </div>
        <hr>

        <div class="myform d-flex justify-content-center pt-2">
            <div class="container px-2">
                <div class="">
                    <div class="row pt-2 ps-4">
                        <div>
                            <h2> <b> Hospital Registration Form </b></h2>
                            <div class="below-heading">Patients are required to register their information on this form
                            </div>
                        </div>

                        <div class="row pt-4">
                            <div class="col-4">
                                <label for="name">Patients Name:</label>
                            </div>
                        </div>
                        <div class="row pt-0">
                            <div class="col-6 ps-0 pb-2">
                                <input type="text" class="form-control" placeholder="First Name" name="Patient-name: "
                                    required id="pFname" v-model="pFname">
                            </div>
                            <div class="col-6 ps-0">
                                <input type="text" class="form-control" placeholder="Last Name" name="Patient-surname:"
                                    required id="pLname" v-model="pLname">
                            </div>
                        </div>

                        <div class="row pt-4 ">
                            <div class="col-4">
                                <label for="name">Guardian Name:</label>
                            </div>
                        </div>
                        <div class="row pt-0">
                            <div class="col-6 ps-0 pb-2">
                                <input type="text" class="form-control" placeholder="First Name" name="Guardian-name:"
                                    required id="gFname" v-model="gFname">
                            </div>
                            <div class="col-6 ps-0">
                                <input type="text" class="form-control" placeholder="Last Name" name="Guardian-surname:"
                                    required id="gLname" v-model="gLname">
                            </div>
                        </div>

                        <div class="row pt-4">
                            <div class="col-4 ">
                                <label for="PhoneNumber">Phone Number:</label>
                            </div>
                        </div>
                        <div class="row pt-0">
                            <div class="col-6 ps-0 pb-2">
                                <input type="tel" class="form-control" placeholder="+91-123-45-678" name="phone-number"
                                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" id="phone" v-model="phone" required>
                            </div>
                            <div class="col-6 ps-0">
                                <input type="tel" class="form-control" placeholder="Landline" name="landline-number"
                                    required id="telPhn" v-model="telPhn">
                            </div>
                        </div>

                        <!-- Patient's Address -->
                        <div class="row pt-4">
                            <div class="col-4">
                                <label for="name">Patient's Address:</label>
                            </div>
                        </div>
                        <div class="row pt-0">
                            <div class="col-12 ps-0 pb-2">
                                <textarea name="address" id="pAddress" class="form-control" rows="1"
                                    v-model="pAddress"></textarea>
                            </div>
                            <div class="col-6 ps-0">
                                <div class="ps-2 pt-2 pb-2">
                                    <label for="ZipCode">Zip-Code:</label>
                                </div>
                                <input type="tel" class="form-control" placeholder="Zip Code" name="Zip-Code" id="pZipCode"
                                    v-model="pZipCode">
                            </div>
                            <div class="col-6 ps-0 pt-2 pb-2">
                                <div class="ps-2 pb-2">
                                    State:
                                </div>
                                <select class="form-control" placeholder="State" name="State" id="pState" v-model="pState">
                                    <option selected>Select State</option>
                                    <option>West Bengal</option>
                                    <option>Meghalaya</option>
                                    <option>Assam</option>
                                    <option>Manipur</option>
                                    <option>Nagaland</option>
                                </select>
                            </div>
                        </div>

                        <div class="row pt-4">
                            <div class="col-6 ps-0 pb-2">
                                <div class="ps-2">
                                    City:
                                </div>
                                <select class="form-control" placeholder="City" name="City" id="pCity" v-model="pCity">
                                    <option selected>Select City</option>
                                    <option>Kolkata</option>
                                    <option>Cooch Behar</option>
                                    <option>Malda</option>
                                    <option>Jalpaiguri</option>
                                    <option>Santiniketan</option>
                                </select>
                            </div>
                            <div class="col-6 ps-0 pb-2">
                                <div class="ps-2">
                                    Country:
                                </div>
                                <select class="form-control" placeholder="Country" name="Country" id="pCountry"
                                    v-model="pCountry">
                                    <option selected>Select Country</option>
                                    <option>India</option>
                                    <option>USA</option>
                                    <option>Canada</option>
                                    <option>UK</option>
                                    <option>Bangladesh</option>
                                </select>
                            </div>
                        </div>

                        <!-- Guardian's Address -->
                        <div class="form-group row pt-5">
                            <div class="col-6 ps-2 pb-2">
                                <label for="address">Same as Patient's address</label>
                                <input type="checkbox" id="checkBox" @click="autoFilAddress">
                            </div>
                        </div>
                        <div class="row pt-0">
                            <div class="col-4">
                                <label for="name">Guardian's Address:</label>
                            </div>
                            <div class="col-12 ps-0 pb-2">
                                <textarea name="gaddress" id="gAddress" class="form-control" rows="1"
                                    v-model="gAddress"></textarea>
                            </div>
                            <div class="col-6 ps-0">
                                <div class="ps-2 pt-2 pb-2">
                                    <label for="ZipCode">Zip-Code:</label>
                                </div>
                                <input type="tel" class="form-control" placeholder="Zip Code" name="Zip-Code" id="gZipCode"
                                    v-model="gZipCode">
                            </div>
                            <div class="col-6 ps-0 pt-2 pb-2">
                                <div class="ps-2 pb-2">
                                    State:
                                </div>
                                <select class="form-control" placeholder="State" name="gState" id="gState" v-model="gState">
                                    <option selected>Select State</option>
                                    <option>West Bengal</option>
                                    <option>Meghalaya</option>
                                    <option>Assam</option>
                                    <option>Manipur</option>
                                    <option>Nagaland</option>
                                </select>
                            </div>
                        </div>

                        <div class="row pt-4">
                            <div class="col-6 ps-0 pb-2">
                                <div class="ps-2">
                                    City:
                                </div>
                                <select class="form-control" placeholder="City" name="guardian-City" id="gCity"
                                    v-model="gCity">
                                    <option selected>Select City</option>
                                    <option>Kolkata</option>
                                    <option>Cooch Behar</option>
                                    <option>Malda</option>
                                    <option>Jalpaiguri</option>
                                    <option>Santiniketan</option>
                                </select>
                            </div>
                            <div class="col-6 ps-0 pb-2">
                                <div class="ps-2">
                                    Country:
                                </div>
                                <select class="form-control" placeholder="Country" name="guardian-Country" id="gCountry"
                                    v-model="gCountry">
                                    <option selected>Select Country</option>
                                    <option>India</option>
                                    <option>USA</option>
                                    <option>Canada</option>
                                    <option>UK</option>
                                    <option>Bangladesh</option>
                                </select>
                            </div>
                        </div>

                        <div class="row pt-4">
                            <div class="col-4 pb-2">
                                <label for="name">Patient's Age:</label>
                            </div>
                        </div>
                        <div class="row pt-0 pb-2">
                            <div class="col-6 ps-0">
                                <input type="number" class="form-control" placeholder="Age" name="patient-Age" id="age"
                                    v-model="age">
                            </div>
                            <div class="col-6 ps-0">
                                <input type="date" class="form-control" name="Patient-DOB" id="dob" v-model="dob">
                            </div>
                        </div>

                        <div class="row pt-4">
                            <div class="col-6 pb-0">
                                <label for="name">Gender:</label>
                            </div>
                        </div>
                        <div class="row pt-0">
                            <div class="form-group col-6 ps-0">
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="option1" value="option1"
                                        v-model="option1">
                                    <label class="form-check-label" for="exampleRadios2">
                                        Male
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="option2" value="option2"
                                        v-model="option2">
                                    <label class="form-check-label" for="exampleRadios2">
                                        Female
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="option3" value="option3"
                                        v-model="option3">
                                    <label class="form-check-label" for="exampleRadios2">
                                        Others
                                    </label>
                                </div>
                            </div>
                            <div class="col-6 ps-0">
                                <div class="col">
                                    <label for="Maritalstatus">Marital Status:</label>
                                </div>
                                <div class="pt-2">
                                    <select class="form-control" id="Marital-status" name="Marital-status"
                                        v-model="maritalStatus">
                                        <option selected>Marital Status</option>
                                        <option>Single</option>
                                        <option>Married</option>
                                        <option>Widowed</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="row pt-4">
                            <div class="col-6 ps-0">
                                <div class="col pb-2">
                                    <label for="Height">Patient's Height(Cm):</label>
                                </div>
                                <input type="number" class="form-control" placeholder="Height in cm" name="pHeight"
                                    id="pHeight" v-model="pHeight">
                            </div>
                            <div class="col-6 ps-0">
                                <div class="pb-2">
                                    <label for="Weight">Patient's Weight(Kg):</label>
                                </div>
                                <input type="number" class="form-control" placeholder="Weight in Kg" name="pWeight"
                                    id="pWeight" v-model="pWeight">
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <!-- Patients History Container -->
            <div class="container px-2">
                <div class="row pt-2 ps-4">

                    <div class="col">
                        <h2> <b>Patients Medical History</b> </h2>
                        <div class="below-heading">Fill the Patient's Medical history in this form</div>
                    </div>


                    <div class="row pt-4">
                        <div class="col pb-2">
                            <div class="pb-2">
                                <label for="name">Reason for seeing the doctor:</label>
                            </div>
                            <div class="pb-2">
                                <textarea class="form-control" id="Textarea1" rows="2" maxlength="100" name="textarea1"
                                    v-model="Textarea1"></textarea>
                            </div>
                            <label for="textarea">Max limit: 100 words</label>
                        </div>
                    </div>

                    <div class="row pt-4">
                        <div class="col pb-2">
                            <div class="pb-2">
                                <label for="name">Other illness:</label>
                            </div>
                            <div class="pb-2">
                                <textarea class="form-control" id="Textarea2" rows="2" maxlength="100" name="textarea2"
                                    v-model="Textarea2"></textarea>
                            </div>
                            <label for="textarea">Max limit: 100 words</label>
                        </div>
                    </div>

                    <!-- <div class="row pt-4">
                        <div class="col pb-2">
                            <div class="pb-2">
                                <label for="name">Have you ever had(Please check all that apply):</label>
                            </div>
                            <select class="select" multiple>
                                <option value="1">One</option>
                                <option value="2">two</option>
                                <option value="3">three</option>
                                <option value="4">four</option>
                                <option value="5">five</option>
                            </select>
                        </div>
                    </div> -->

                    <div class="row pt-4">
                        <div class="col pb-2">
                            <div class="pb-2">
                                <label for="name">Please list any drug allergies:</label>
                            </div>
                            <div class="pb-2">
                                <textarea class="form-control" id="Textarea3" rows="2" maxlength="100" name="Textarea4"
                                    v-model="Textarea3"></textarea>
                            </div>
                            <label for="textarea">Max limit: 100 words</label>
                        </div>
                    </div>

                    <div class="row pt-4">
                        <div class="col pb-2">
                            <div class="pb-2">
                                <label for="name">Please list any Operations and Dates of:</label>
                            </div>
                            <div class="pb-2">
                                <textarea class="form-control" id="Textarea4" rows="2" maxlength="100" name="textarea5"
                                    v-model="Textarea4"></textarea>
                            </div>
                            <label for="textarea">Max limit: 100 words</label>
                        </div>
                    </div>

                    <div class="row pt-4">
                        <div class="col pb-2">
                            <div class="pb-2">
                                <label for="name">Please list your current Medication:</label>
                            </div>
                            <div class="pb-2">
                                <textarea class="form-control" id="Textarea5" rows="2" maxlength="100" name="textarea6"
                                    v-model="Textarea5"></textarea>
                            </div>
                            <label for="textarea">Max limit: 100 words</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-center pb-2 pt-5 ps-5 d-flex justify-content-center">
            <div class="me-3">
                <button type="button" class="btn btn-lg btn-success" name="back">
                    <RouterLink to="/home" class="link">Back</RouterLink>
                </button>
            </div>
            <div class="me-3 ms-3">
                <button type="button" class="btn btn-lg btn-primary" name="Submit" value="Submit" @click="submit">
                    <RouterLink to="/home" class="link">Submit</RouterLink>
                </button>
            </div>
            <div class="ms-3">
                <button type="reset" class="btn btn-lg btn-warning">Reset</button>
            </div>
        </div>
    </form>
</template>


<script>
import axios from 'axios';
import { RouterLink } from 'vue-router';
export default {
    name: 'RegistrationForm',
    components: { RouterLink },
    data() {
        return {
            pFname: '',
            pLname: '',
            gFname: '',
            gLname: '',
            phone: '',
            telPhn: '',
            pAddress: '',
            pZipCode: '',
            pState: '',
            pCity: '',
            pCountry: '',
            gAddress: '',
            gZipCode: '',
            gState: '',
            gCity: '',
            gCountry: '',
            age: '',
            dob: '',
            option1: '',
            option2: '',
            option3: '',
            maritalStatus: '',
            pHeight: '',
            pWeight: '',
            Textarea1: '',
            Textarea2: '',
            Textarea3: '',
            Textarea4: '',
            Textarea5: '',
        }
    },
    methods: {
        async submit() {
            let result = await axios.post("http://localhost:3000/users", {
                pFname: this.pFname,
                pLname: this.pLname,
                gFname: this.gFname,
                gLname: this.gLname,
                phone: this.phone,
                telPhn: this.telPhn,
                pAddress: this.pAddress,
                pZipCode: this.pZipCode,
                pState: this.pState,
                pCity: this.pCity,
                pCountry: this.pCountry,
                gAddress: this.gAddress,
                gZipCode: this.gZipCode,
                gState: this.gState,
                gCity: this.gCity,
                gCountry: this.gCountry,
                age: this.age,
                dob: this.dob,
                option1: this.option1,
                option2: this.option2,
                option3: this.option3,
                maritalStatus: this.maritalStatus,
                pHeight: this.pHeight,
                pWeight: this.pWeight,
                Textarea1: this.Textarea1,
                Textarea2: this.Textarea2,
                Textarea3: this.Textarea3,
                Textarea4: this.Textarea4,
                Textarea5: this.Textarea5,
            });
            console.log(result);
            if (result.status == 200) {
                localStorage.setItem("user-info", JSON.stringify(result.data));
                this.$router.push({name: 'Home'})
            }
        }
    }
}
</script>


<style>body {
    background-color: bisque;
}

.heading {
    text-align: center;
}

marquee {
    color: red;
}</style>