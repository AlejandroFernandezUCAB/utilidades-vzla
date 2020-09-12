<template>
  <v-content>
    <menu-superior></menu-superior>
    <v-container>
        <v-row>
            <v-col
                offset="4"
                lg="4"
                xl="4"
            >
                <v-card>
                    <v-card-title>Convertidor BTC a Bs</v-card-title>
                    <v-form
                        class="mx-5 pb-5"
                        ref="form"
                        v-model="valid"
                        lazy-validation
                    >
                        <v-text-field
                            v-model="name"
                            :counter="10"
                            :rules="nameRules"
                            label="BTC"
                            required
                        ></v-text-field>

                        <v-text-field
                            v-model="email"
                            :rules="emailRules"
                            label="E-mail"
                            required
                        ></v-text-field>

                        <v-select
                            v-model="select"
                            :items="items"
                            :rules="[v => !!v || 'Item is required']"
                            label="Item"
                            required
                         ></v-select>

                        <v-checkbox
                            v-model="checkbox"
                            :rules="[v => !!v || 'You must agree to continue!']"
                            label="Do you agree?"
                            required
                        ></v-checkbox>

                        <v-btn
                            :disabled="!valid"
                            color="success"
                            class="mr-4"
                            @click="validate"
                        >
                            Validate
                        </v-btn>

                        <v-btn
                            color="error"
                            class="mr-4"
                            @click="reset"
                        >
                            Reset Form
                        </v-btn>

                        <v-btn
                            color="warning"
                            @click="resetValidation"
                        >
                            Reset Validation
                        </v-btn>
                    </v-form>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
  </v-content>
</template>

<script>
// @ is an alias to /src
import MenuSuperior from '@/components/MenuSuperior.vue'

export default {
  name: 'Home',
  components: {
    MenuSuperior
  },
      data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      select: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
      ],
      checkbox: false,
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
}
</script>
