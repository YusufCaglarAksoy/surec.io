<template>
    <header>
        <div class="header-inner wellow-container">
            <div class="header-top">
                <div class="header-top-left">
                  <router-link :to="{name:'Home'}">
                    <img src="@/front/assets/media/logo.png" alt="">
                  </router-link>
                </div>
                <div class="header-top-right">
                    <router-link :to="{name:'Example'}" class="icon-button">
                        <i class="fa-regular fa-heart"></i>
                    </router-link>
                    <accountMenu />
                    <div class="icon-button" :class="{active:langActive}">
                      <div class="language" @click="langActive=!langActive"><i class="fa-regular fa-globe"></i> TR</div>
                      <div class="accountMenu languageMenu">
                        <div @click=""><img src="@/front/assets/media/media/tr.png" alt=""><span>Türkçe</span></div>
                        <div @click=""><img src="@/front/assets/media/media/en.png" alt=""><span>English</span></div>
                      </div>
                    </div>
                </div>
            </div>
            <div class="header-bottom">
                <div class="header-bottom-left">
                    <a href="">KATALOG</a>
                    <a href="">EDİTÖRÜN SEÇİMİ</a>
                    <a href="">MARKALAR</a>
                </div>
                <div class="header-bottom-right">
                    <search-area />
                </div>
            </div>
        </div>
    </header>
  <div class="head-space"></div>
</template>
<script>
  import searchArea from './header/searchArea.vue'
  import accountMenu from './header/accountMenu.vue'

    export default{
        data() {
            return {
              langActive:false,
            };
        },
        components : {
          searchArea,
          accountMenu
        },

    }
</script>