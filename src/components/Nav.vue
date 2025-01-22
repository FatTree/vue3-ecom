<script lang="ts" setup>
import useApi from '@/composable/useApi';
import { useI18n } from 'vue-i18n';
import { useCategoryStore } from '@/stores/categoryStore';
import { storeToRefs } from 'pinia';
import { computed, nextTick, onBeforeMount, onMounted, onUnmounted, reactive, ref, watch, type Ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Cart from '@/components/Cart.vue';
import { useShoppingCartStore } from '@/stores/useShoppingCartStore';
import { useErrorStore } from '@/stores/errorStore';
import { useAuthUser } from '@/composable/useAuthUser';
import searchIcon from '@/assets/icons/magnifying-glass-solid.svg';
import cartIcon from '@/assets/icons/cart-shopping-solid.svg';
import memberIcon from '@/assets/icons/user-solid.svg';
import purchaseIcon from '@/assets/icons/cash-register-solid.svg';
import languageIcon from '@/assets/icons/language-solid.svg';
import MenuIcon from '@/assets/icons/bars-solid.svg';
import arrowIcon from '@/assets/icons/chevron-right-solid.svg';
import useRwd from '@/composable/useRwd';
import { debounce } from '@/utils/util';
import AdminPanel from './adminPanel.vue';

// props
type Props = {
    isLogin: boolean;
}
const props = withDefaults(defineProps<Props>(), {
    isLogin: false
})

// composables
const router = useRouter();
const route = useRoute();
const api = useApi();
const {
  callApi,
} = api;

const { 
  t,
  locale,
  availableLocales
} = useI18n();

// stores
const categoryStore = useCategoryStore();
const shoppingCartStore = useShoppingCartStore();
const errorStore = useErrorStore();

const {
  cart, 
} = storeToRefs(shoppingCartStore);

const {
  categoryNameList,
  categoryList
} = storeToRefs(categoryStore)

const {
  getCategoryNameList,
  getCategoryList
} = useCategoryStore();

const {
  errorList
} = storeToRefs(errorStore);

const categroy: Ref<string> = ref('');
watch(categroy, (n) => {
  router.push({ path: `/${locale}/${n}`});
})

const searchVal: Ref<string> = ref('');
watch(searchVal, async(n) => {
  await callApi(`/products/search?q=${n}`);
});



// UI Controller
const { isMobile } = useRwd();
const isShowOverLay = ref<boolean>(false);
const isShowCart = ref<boolean>(false);
const isShowCategory = ref<boolean>(false);
const isShowMenu = ref<boolean>(false);
const isShowMenuCatrgory = ref<boolean>(false);
const isShowSearchInput = ref<boolean>(false);
const isShowLanguage = ref<boolean>(false);

const searchInput = ref<HTMLInputElement | null>(null);
const shoppingcartIcon = ref<HTMLDivElement | null>(null);
const languageNavIcon = ref<HTMLDivElement | null>(null);

const shoppingCartPosition = reactive({top: 0, right: 0});
const languagePosition = reactive({top: 0, right: 0});
// i18n
const lang = computed(() => route.params.locale as string);

const updateCartPosition = () => {
  if(shoppingcartIcon.value) {
    const rect = shoppingcartIcon.value.getBoundingClientRect();
    shoppingCartPosition.top = rect.top + 50;
    shoppingCartPosition.right = rect.right - 300;
  }
}

const updateLauguagePosition = () => {
  if(languageNavIcon.value) {
    const rect = languageNavIcon.value.getBoundingClientRect();
    languagePosition.top = rect.top + 40;
    languagePosition.right = rect.right - 40;
  }
}

const clickCart = () => {
  isShowCart.value = true;
  isShowOverLay.value = true;
  updateCartPosition();
}

const clickLanguage = () => {
  isShowLanguage.value = true;
  isShowOverLay.value = true;
  updateLauguagePosition();
}

const clickCategory = () => {
  isShowCategory.value=true;
  isShowOverLay.value = true;
}

const clickSearch = () => {
  isShowSearchInput.value = true;
  if(searchInput.value && isShowSearchInput.value) {
    nextTick(() => {
      searchInput.value!.focus();
    })
  }
}

const blurSearchInput = () => {
  isShowSearchInput.value = false;
}

const clickOverLay = () => {
  isShowOverLay.value = false;
  isShowCart.value = false;
  isShowCategory.value = false;
  isShowMenu.value = false;
  isShowMenuCatrgory.value = false;
  isShowLanguage.value = false;
}

const clickMenu = () => {
  isShowMenu.value = true;
  isShowOverLay.value = true;
}

const clickMenuCategory = () => {
  isShowMenuCatrgory.value = !isShowMenuCatrgory.value;
}

const selectategory = (cate: string) => {
  isShowCategory.value = false;
  isShowMenu.value = false;
  isShowOverLay.value = false;
  router.push(`/${lang.value}/${cate}`)
}

const selectLanguage = (language: string) => {
  const newPath = route.fullPath.replace(`${lang.value}`, `${language}`);
  
  locale.value = language;
  isShowLanguage.value = false;
  isShowOverLay.value = false;
  router.push(newPath);
}

onMounted(async () => {
  await getCategoryNameList();
  await getCategoryList();
  window.addEventListener('resize', debounce(updateCartPosition, 1000));
})

onUnmounted(() => {
    window.removeEventListener('resize', debounce(updateCartPosition, 1000));
});

</script>
<template>
  <div class="nav">
    <AdminPanel />
    <div class="error">
      <ErrorCard v-for="error in errorList" :key="error.id" :errorObj="error" />
    </div>
    
    <div class="overlay" @click="clickOverLay" v-show="isShowOverLay"></div>
    <div class="container desktopOnly" v-if="!isMobile">
      <div class="nav__row">
        <div class="nav__row__item">
          <RouterLink to="/">
            <span class="title-l">
              Home
            </span>
          </RouterLink>
        </div>
        <div class="nav__row__item">
          <div class="item" @click="clickSearch" v-show="!isShowSearchInput">
            <div class="icon">
              <searchIcon class="icon__svg" />
            </div>
          </div>
          <div class="nav__row__item__input" v-show="isShowSearchInput">
            <div class="search">
              <searchIcon class="search__icon" />
            </div>
            <input type="text" :placeholder="t('nav.search')" 
              ref="searchInput"
              @blur="blurSearchInput"
              v-model.lazy="searchVal">
          </div>
          <div class="item" @click="clickCart" ref="shoppingcartIcon">
            <div class="icon">
              <cartIcon class="icon__svg" />
            </div>
          </div>
          <div class="item" v-if="isLogin">
            <RouterLink :to="`/${lang}/member`">
              <div class="icon">
                <memberIcon class="icon__svg" />
              </div>
            </RouterLink>
          </div>
          <div class="item" v-if="isLogin">
            <RouterLink :to="`/${lang}/purchase`">
              <div class="icon">
                <purchaseIcon class="icon__svg" />
              </div>
            </RouterLink>
          </div>
          <div class="item" v-if="!isLogin">
            <RouterLink :to="`/${lang}/login`">login</RouterLink>
          </div>
          <div class="item" ref="languageNavIcon" @click="clickLanguage">
            <div class="icon iconLan">
              <languageIcon class="icon__svg" />
            </div>
          </div>
        </div>
      </div>
      <div class="nav__row">
        <div class="nav__row__item">
          <span @click="clickCategory" class="navTitle">{{ t('nav.category') }}</span>
        </div>
        <div v-show="isShowCategory" class="dropdown">
          <div v-for="item in categoryList"
            @click="selectategory(`${item.slug}`)"
            class="dropContent">
            <span class="dropContent__text">{{ item.name }}</span>
          </div>
        </div>
      </div>
      <div v-show="isShowLanguage" class="language" 
        :style="`top: ${languagePosition.top}px; left: ${languagePosition.right}px;`">
        <div class="language__option" 
          v-for="locale in availableLocales" 
          @click="selectLanguage(locale)"
          :key="`locale-${locale}`" 
          :value="locale">
          <span>{{ locale }}</span>
        </div>
      </div>
      <Cart v-show="isShowCart"
        @clickPurchase="isShowCart = !isShowCart"
        class="nav__cart" 
        :cart-list="cart"
        :style="`top: ${shoppingCartPosition.top}px; left: ${shoppingCartPosition.right}px; max-width: 370px`" />
    </div>
    <div class="container mobileOnly" v-if="isMobile">
      <div class="menu" v-show="isShowMenu">
        <div class="menu__item">
          <div class="menu__item__icon" v-if="isLogin">
            <memberIcon class="menu__item__icon__svg" />
          </div>
          <span class="menu__item__span">登入</span>
        </div>
        <div class="menu__item">
          <div class="menu__item__icon">
            <languageIcon class="menu__item__icon__svg" />
          </div>
          <span class="menu__item__span">語言</span>
        </div>
        <div class="menu__item space-between" @click="clickMenuCategory">
          <span class="menu__item__span">商品分類</span>
          <div class="menu__item__arrow">
            <arrowIcon class="menu__item__arrow__svg" :class="isShowMenuCatrgory ? 'rotate' : ''" />
          </div>
        </div>
        <div class="menu__box" :class="isShowMenuCatrgory ? '' : 'collapse'">
          <div class="menu__box__item"
            v-for="item in categoryNameList"
            @click="selectategory(`${item}`)">
            {{ item }}
          </div>
        </div>
      </div>
      <div class="nav__row">
        <div class="nav__row__item">
          <div class="item" @click="clickMenu">
            <div class="icon p-r-1">
              <MenuIcon class="icon__svg" />
            </div>
          </div>
          <RouterLink to="/">
            <span class="title-l">
              Home
            </span>
          </RouterLink>
        </div>
        <div class="nav__row__item">
          <div class="item" @click="clickSearch">
            <div class="icon">
                <searchIcon class="icon__svg" />
            </div>
          </div>
          <div class="item" v-if="isLogin">
            <div class="icon">
              <RouterLink to="/purchase">
                <div class="icon">
                  <cartIcon class="icon__svg" />
                </div>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
      <div class="nav__row" v-show="isShowSearchInput">
        <div class="nav__row__item">
          <div class="nav__row__item__input">
            <div class="search">
              <searchIcon class="search__icon" />
            </div>
            <input type="text" placeholder="search product name" 
              ref="searchInput"
              @blur="blurSearchInput"
              v-model.lazy="searchVal">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.nav {
  background-color: $white;
  padding-top: 1rem;
  @include RWD(tablet) {
    padding-top: .5rem;
  }

  > .error {
    position: fixed;
    z-index: 100;
    bottom: 3rem;
    left: 50%;
    margin-left: -10rem;
  }

  &__cart {
    position: fixed;
    z-index: 100;
    right: 1rem;
  }

  &__row {
    display: flex;
    justify-content: space-between;

    &__item {
      cursor: pointer;
      display: flex;
      align-items: center;
    }
  }
  &__buttom {
    height: 1.5rem;
  }
}

.nav__row__item {
  &__input {
    background-color: $white-hover;
    border-radius: 2rem;
    padding: .3rem 1rem;
    display: flex;

    > .search {
      display: flex;
      justify-content: center;
      width: 1rem;
      margin-right: 1rem;

      &__icon {
        fill: $white-dark;
      }
    }

    > input {
      border: none;
      background-color: $white-hover;
      width: 8rem;
      height: 2em;
      @include RWD(mobile) {
        width: calc(100vw - 6rem);
      }
      &:focus {
        outline: none;
      }
    }
  }

  .item {
    &:not(:first-child) {
      margin-left: .5rem;
    }
  }

  .icon {
    @include center;
    width: 2rem;
    height: 2rem;
    cursor: pointer;
    border-radius: 50%;
    transition: background-color ease .5s;
    color: $white-hover-active;
    
    &:hover {
      background-color: $white-hover;
    }

    &__svg {
      width: 1rem;
      fill: $white-dark;
    }
  }

  .navTitle {
    @include text-l;
    padding: .5rem .5rem 0 0;
    line-height: 2rem;
    color: $white-dark;

    &::after {
      content: '';
      display: block;
      height: 3px;
      background-color: $violet-normal;
      width: 0;
    }

    &:hover {
      &::after {
        width: 100%;
        transition: width .3s;
      }
    }
  }
}

.dropdown {
    @include text-l;
    position: fixed;
    height: calc(100vh - 7rem);
    overflow-y: scroll;
    top: 6.2rem;
    background-color: $white;
    width: 12rem;
    cursor: pointer;
    z-index: 100;
    @include shadow;
    
    > .dropContent {
        padding: 1rem;
        display: block;

        > .dropContent__text {
            @include text-l;
        }
        
        &:hover {
            background-color: $white-hover;
            transition: background-color .5s;
        }
    }
}

.menu {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 250px;
  height: 100vh;
  z-index: 60;
  background-color: $white;
  color: $white-dark;
  @include shadow;

  &__item {
    display: flex;
    padding: .5rem 1rem;
    border-bottom: 1px solid $white-hover;

    &__icon {
      @include center;
      padding-right: 1rem;

      &__svg {
        width: 1rem;
        fill: $white-dark;
      }
    }

    &__arrow {
      height: 2rem;
      display: flex;
      align-items: center;
      &__svg {
        height: 1rem;
        fill: $white-dark;
        transition: rotate .3s;

        &.rotate {
          rotate: 90deg;
          transition: rotate .3s;
        }
      }
    }

    &__span {
      line-height: 2em;
    }
  }

  &__box {
    height: calc(100vh - 9rem);
    overflow-y: scroll;
    background-color: $white-light;
    transition: height .3s;

    &.collapse {
      height: 0;
      transition: height .3s;
    }
    
    &__item {
      padding: 1rem 2rem;

    }
  }
}

.language {
  background: $white;
  z-index: 60;
  cursor: pointer;
  position: fixed;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  border-radius: .5rem;

  &__option {
    padding: .5rem 1rem;

    &:hover {
      background-color: $white-hover;
    }
  }
}
</style>
