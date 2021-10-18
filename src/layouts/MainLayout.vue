<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          Crew Rest Calculator
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  setup () {
    return {
    }
  }
})
</script>

<style lang='sass'>
  .platform-ios
    .q-toolbar
      // for your app's header
      padding-top: constant(safe-area-inset-top) // for iOS 11.0
      padding-top: env(safe-area-inset-top) // for iOS 11.2 +
</style>