<template>
  <v-main fluid>
    <menu-superior></menu-superior>
  </v-main>
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
