<template>
  <v-app>
    <HomeToolbar />    
    <LoadingGeneral :isLoading='isLoading' />
    <nuxt />
    <AlertError ref="errorModal" />
  </v-app>
</template>
<script>
import { mapState } from "vuex";
import HomeToolbar from "~/components/shared/toolbar/HomeToolbar.vue";
import LoadingGeneral from '@/components/shared/loading/LoadingGeneral'
import AlertError from '@/components/modals/AlertError';
import { eventBus } from '~/event-bus'
export default {
  name: "defaultMain",
  components: {
    HomeToolbar,
    LoadingGeneral,
    AlertError
  },
  computed: {
    ...mapState(["isLoadingPage", "isLoadingDemoraPage"]),
    isLoading() {
      return this.$store.state.isLoading;
    }
  },
  mounted() {
    this.$nextTick(() => {
      eventBus.$on('openModalError', (data) => {
        this.$refs.errorModal.open(data)
      })
    })
  },
  destroyed() {
    eventBus.$off('openModalError')
  }

};
</script>
