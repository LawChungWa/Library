<template>
  <div class="main-page">
    <div class="side left"> <!-- Left Sidebar 15% vh-->
      <p></p> 
    </div>
    <v-container class="content">
      <h1 class="border-bottom border-black border-2 ">Contact Me</h1>
      <v-form ref="form" lazy-validation @submit.prevent="submitForm()">
        <v-text-field
          v-model="firstName"
          :rules="firstNameRules"
          label="First Name"
          required
        ></v-text-field>

        <v-text-field
          v-model="lastName"
          :rules="lastNameRules"
          label="Last Name"
          required
        ></v-text-field>

        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="Email"
          required
        ></v-text-field>

        <v-text-field
          v-model="phoneNumber"
          :rules="phoneRules"
          label="Phone Number"
          required
        ></v-text-field>

        <!-- <v-textarea
          v-model="detail"
          :rules="detailRules"
          label="Detail"
          required
          auto-grow
        ></v-textarea> -->
        <div>
        <label for="detail" class="w-full " >Detail</label>
        <textarea name="detail"
          v-model="detail"
          id="detail" 
          cols="30" 
          rows="5"
          class="border border-black border-bottom " 
          style="width: 100%; 
          background-color: #f0f0f0;"
          :rules="detailRules"
          required
        ></textarea>
        
        <h4 v-if="!detail" class="text-red">detail can't be empty</h4>
        </div>

        <v-btn type="submit" color="primary">Submit</v-btn>
      </v-form>
    </v-container>
    
    <div class="side right"> <!-- Right Sidebar 15% vh-->
      <p></p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const firstName = ref('');
const lastName = ref('');
const email = ref('');
const phoneNumber = ref('');
const detail = ref('');

const firstNameRules = [(v: string) => !!v || 'First Name is required'];
const lastNameRules = [(v: string) => !!v || 'Last Name is required'];
const emailRules = [
  (v: string) => !!v || 'Email is required',
  (v: string) => /.+@.+/.test(v) || 'E-mail must be valid',
];
const phoneRules = [
  (v: string) => !!v || 'Phone Number is required',
  (v: string) => /^\d{8}$/.test(v) || 'Phone Number must be 8 digits',
];
const detailRules = [(v: string) => !!v || 'Detail is required'];

const valid = computed(() => {
  return [
    ...firstNameRules.map(rule => rule(firstName.value)),
    ...lastNameRules.map(rule => rule(lastName.value)),
    ...emailRules.map(rule => rule(email.value)),
    ...phoneRules.map(rule => rule(phoneNumber.value)),
    ...detailRules.map(rule => rule(detail.value)),
  ].every(result => result === true);
});

const submitForm = () => {
  if (valid.value) {
    console.log({
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      phoneNumber: phoneNumber.value,
      detail: detail.value,
    });
    
    // Clear the form
    firstName.value = '';
    lastName.value = '';
    email.value = '';
    phoneNumber.value = '';
    detail.value = '';
    
  window.alert('Form submitted successfully!');
  }
};
</script>

<style scoped>
.main-page {
  display: flex;
  width: 100%;
  height: 100vh;
}
.side {
  flex: 0 0 15%;
  background-color: #f0f0f0;
  padding: 20px;
}
.content {
  flex: 0 0 70%;
  background-color: #fff;
  padding: 20px;
  width:100%;
  height:100%;
}
</style>