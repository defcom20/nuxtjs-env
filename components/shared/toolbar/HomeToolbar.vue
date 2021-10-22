<template>
  <div>
    <v-app-bar app fixed hide-on-scroll>
      <section class="mainToolbar">        
          <img src="@/assets/encuesta/logo_header.svg" class="imageToolbar" />       
        <v-spacer />
        <h4 v-if="isMobil" class="mr-2 hidden-sm-and-up acceso--text">       
        </h4>   
      </section>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  name: "HomeToolbar",
  computed: {
    isMobil() {
      if (
        this.isCreated &&
        this.promotor.state &&
        this.$vuetify.breakpoint.name === "xs"
      ) {
        return true;
      } else {
        return false;
      }
    },
    isDesktop() {
      if (
        this.isCreated &&
        this.promotor.state &&
        this.$vuetify.breakpoint.name != "xs"
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
  mounted() {
    this.isCreated = true;
  },
};
</script>
<style>
button.buttonLayout {
  width: 100%;
  text-decoration: none !important;
  border: none !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center;
}

.titleItem {
  height: 56px;
  background-color: #fff;
  color: #005489;
  display: flex;
  padding-left: 24px;
  align-items: center;
  font-size: 14px;
  line-height: 20px;
  font-weight: 600 !important;
}

.listItem {
  height: 56px;
  background-color: #005489;
  
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  border-bottom: 1px solid #fff;

  line-height: 36px;
}

.theme--light.v-list {
  border-radius: 4px !important;
  border: 1px solid #ffffff !important;
}

.theme--light.v-list.listToolbar {
  /*color: #fff;*/
  border-radius: 4px !important;
  border: 1px solid #005489 !important;
}

.mainList {
  background-color: #fff;
}

.icon-perm {
  color: rgb(255, 255, 255);
  font-size: 25px;
  font-weight: normal;
  opacity: 0.6;
}

.v-icon-center {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
}

.user {
  height: 22px !important;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background: transparent !important;
  box-shadow: 0px 0px 0px transparent !important;
  padding: 0px !important;
  margin: 0px !important;
}
.transparent {
  background-color: transparent !important;
  box-shadow: 0px 0px 0px !important ;
}

@media only screen and (max-width: 768px) {
  .v-sheet.theme--light.v-toolbar.v-app-bar.v-app-bar--fixed {
    margin: 8px 12px 0 12px !important;
    border-radius: 20px;
  }
  .v-navigation-drawer {
    background-color: #005489 !important;
  }

  .home-icon-toggle {
    color: #fff !important;
    width: 40px;
    border-radius: 80%;

    background-color: #eb7531;
  }

  .home-icon-toggle i {
    color: #fff !important;
    font-size: 28px !important;
    border-radius: 80%;

    background-color: #eb7531;
  }

  .v-toolbar {
    background: #fff !important;
    display: block !important;
  }

  .mainToolbar {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100% !important;
    max-width: 1024px !important;
  }

  .imageToolbar {
    height: 40px;
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) {
  .v-navigation-drawer {
    background-color: #005489 !important;
  }

  .home-icon-toggle i {
    color: #eb7531 !important;
    font-size: 35px !important;
  }

  .imageToolbar {
    height: 56px;
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .v-toolbar {
    background: rgba(0, 0, 0, 0) !important;
  }

  .mainToolbar {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100% !important;
    max-width: 1024px !important;
  }

  .v-toolbar__content {
    width: 100%;
    color: #555555;
    border: 0;
    z-index: 1029;
    position: fixed;
    transition: all 150ms ease 0s;

    box-shadow: none;
    padding-top: 0px;
    margin-bottom: 0;
    border-bottom: 0;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom 1px center;
    background-color: #fff;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
  }
}

@media only screen and (min-width: 1025px) {
  .home-icon-toggle i {
    color: #eb7531 !important;
    font-size: 35px !important;
    display: none;
  }

  .imageToolbar {
    height: 56px;
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .v-toolbar {
    background: rgba(0, 0, 0, 0) !important;
    height: 0px !important;
  }

  .mainToolbar {
    display: flex !important;
    justify-content: center !important;
    width: 100% !important;
    padding: 24px;
    max-width: 1024px !important;
  }

  .v-toolbar__content {
    width: 100%;
    color: #555555;
    border: 0;
    z-index: 1029;
    position: fixed;
    transition: all 150ms ease 0s;
    box-shadow: none;
    padding-top: 0px;
    margin-bottom: 0;
    border-bottom: 0;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom 1px center;
    background-image: url("~assets/encuesta/header-oficinavirtual-main.svg") !important;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
  }
}
</style>
