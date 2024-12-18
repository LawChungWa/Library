<template>
    <v-sheet class="bg-deep-purple pa-12" rounded>
      <v-card class="mx-auto px-6 py-8" max-width="344">
        <v-form
          v-model="form"
          @submit.prevent="onSubmit"
        >
          <v-text-field
            v-model="email"
            :readonly="loading"
            :rules="[required]"
            class="mb-2"
            label="Email"
            clearable
          ></v-text-field>
  
          <!-- <v-text-field
            v-model="password"
            :readonly="loading"
            :rules="[required]"
            label="Password"
            placeholder="Enter your password"
            clearable
          ></v-text-field> -->
    <v-text-field
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            
            :rules="[required]"
            :type="show1 ? 'text' : 'password'"
            hint="At least 8 characters"
            label="Password"
            name="input-10-1"
            counter
            @click:append="show1 = !show1"
          ></v-text-field>
          <br>
  
          <v-btn
            :disabled="!form"
            :loading="loading"
            color="success"
            size="large"
            type="submit"
            variant="elevated"
            block
          >
            Sign In
          </v-btn>
        </v-form>
      </v-card>
    </v-sheet>
  </template>
 <script lang="ts">
 import { defineComponent, ref } from 'vue';
 
 export default defineComponent({
   setup() {
     const show1 = ref(false);
     const show2 = ref(true);
     const form = ref(false);
     const email = ref<string | null>(null);
     const password = ref<string | null>(null);
     const loading = ref(false);
 
     const onSubmit = () => {
       if (!form.value) return;
 
       loading.value = true;
 
       setTimeout(() => (loading.value = false), 2000);
       console.log('a');
     };
 
     const required = (v: any) => {
       return !!v || 'Field is required';
     };

 
     return {
       show1,
       show2,
       form,
       email,
       password,
       loading,
       onSubmit,
       required,
     };
   },
 });
 </script>