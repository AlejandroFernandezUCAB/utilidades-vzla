<template>
  <v-content>
    <menu-superior></menu-superior>
    <v-container>
        <v-row>
            <v-col
                offset-lg="4"
                offset-md="4"
                col="4"
                sm="4"
                md="4"
                lg="4"
                xl="4"
            >
                <v-card
                    v-if="loadingUSD == true && loadingBTC == true"
                >
                    <v-card-title>
                        Convertidor BTC a Bs
                    </v-card-title>
                    <v-card-text>
                        Tasa del BTC al día de : {{timestamp}}
                        <br>
                        1 BTC = {{Intl.NumberFormat("de-DE").format(btcObject.USD.rate_float)}} USD
                        <br>
                        1 USD = {{Intl.NumberFormat("de-DE").format(usdObject.localbitcoin_ref)}} Bs
                    </v-card-text>
                    <v-form
                        class="mx-5 pb-5"
                        ref="form"
                        v-model="valid"
                        lazy-validation
                    >
                        <v-text-field
                            v-model="btc"
                            :rules="numericRules"
                            label="BTC"
                            required
                            type="number"
                        ></v-text-field>
                        <v-text-field
                            v-model="usd"
                            label="USD"
                            required
                            disabled
                        ></v-text-field>
                        <v-text-field
                            v-model="bs"
                            label="Bs"
                            disabled
                            required
                        ></v-text-field>
                    </v-form>
                    <v-card-subtitle>
                        Las tasas de cambio fueron obtenidas de las apis de <a href="https://api.coindesk.com/v1/bpi/currentprice.json">Coindesk</a> y <a href="https://s3.amazonaws.com/dolartoday/data.json">DolarToday</a>
                    </v-card-subtitle>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
  </v-content>
</template>

<script>
// @ is an alias to /src
import MenuSuperior from '@/components/MenuSuperior.vue'
import axios from "axios"

export default {

    name: 'Home',
    components: {
        MenuSuperior
    },
    watch:{
        btc( nuevoValor ){
            this.usd = this.btcObject.USD.rate_float * nuevoValor;
            this.bs = this.usdObject.localbitcoin_ref * this.usd;
            this.usd = this.usd.toFixed(2);
            this.bs = this.bs.toFixed(2);
            this.usd = Intl.NumberFormat("de-DE").format(this.usd);
            this.bs = Intl.NumberFormat("de-DE").format(this.bs);
        },
        $route: {
            immediate: true,
            handler(to) {
                document.title = to.meta.title || 'Some Default Title';
            }
        },
    },
    mounted(){
        this.getNow();
        this.obtenerPrecioBTC();
        this.obtenerPrecioUSD();

    },
    data: () => ({
        btc:0,
        usd:0,
        bs:0,
        loadingBTC:false,
        loadingUSD:false,
        btcObject:{},
        usdObject:{},
        valid: true,
        name: '',
        numericRules: [
        v => !!v || 'Este campo es requerido',
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
        timestamp:""
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
        obtenerPrecioUSD(){
            axios.get('https://s3.amazonaws.com/dolartoday/data.json').then(
                (response) => {
                    this.usdObject = response.data.USD;
                    this.loadingUSD = true;
                }
            )
        },
        obtenerPrecioBTC(){
            axios.get('https://api.coindesk.com/v1/bpi/currentprice.json').then(
                (response) => {
                    this.btcObject = response.data.bpi;
                    this.loadingBTC = true;
                }
            )
        },
        getNow() {
            const today = new Date();
            const date = today.getDate()+"-"+(today.getMonth()+1)+"-"+today.getFullYear();
              var hours = today.getHours();
            var minutes = today.getMinutes();
            var ampm = hours >= 12 ? 'pm' : 'am';
            hours = hours % 12;
            hours = hours ? hours : 12; // the hour '0' should be '12'
            minutes = minutes < 10 ? '0'+minutes : minutes;
            var time = hours + ':' + minutes + ' ' + ampm;
            const dateTime = date +' '+ time;
            this.timestamp = dateTime;
        }
    },
}
</script>
