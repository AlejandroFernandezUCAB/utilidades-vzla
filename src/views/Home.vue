<template>
  <v-content fluid>
    <menu-superior></menu-superior>
  </v-content>
</template>

<script>
// @ is an alias to /src
import MenuSuperior from '@/components/MenuSuperior.vue'

export default {
  name: 'Home',
  components: {
    MenuSuperior
  }
}
</script>
