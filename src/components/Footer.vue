<script lang="ts" setup>
import AddIcon from '@/assets/icons/plus-solid.svg';
import DecreIcon from '@/assets/icons/minus-solid.svg';
import { ref } from 'vue';

const isHomeOpen = ref(false);
const isQuickOpen = ref(false);
const isServiceOpen = ref(false);
</script>
<template>
  <div class="footer">
    <div class="container">
      <div class="footer__top">
        <div class="left">
          <p class="title">
            <span>Home</span>
          </p>
          <div class="content">
            <p>Home Ltd.</p>
            <p>Providing quality products with exceptional service since 2024.</p>
            <p>📍 Address: 1234 Commerce Avenue, Cityville, Country  </p>
            <p>📞 Phone: +1 (123) 456-7890  </p>
            <p>✉️ Email: support@shopease.com </p>
          </div>
        </div>
        <div class="right">
          <div class="right__item">
            <p class="title">
              <span>Quick Links</span>
            </p>
            <div class="content">
              <p>🏠 Home</p>
              <p>🛒 Shopping Cart</p>
              <p>👤 My Account</p>
            </div>
          </div>
          <div class="right__item">
            <p class="title">
              <span>Customer Service</span>
            </p>
            <div class="content">
              <p>🔄 Return & Refund Policy</p>
              <p>🔒 Privacy Policy</p>
              <p>📜 Terms & Conditions</p>
              <p>🚚 Shipping Information</p>
              <p>💳 Payment Methods</p>
              <p>🛠 Shopping Guide</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p class="title-s text-center">© 2024 Home Ltd. All rights reserved.</p>
      </div>
    </div>
  </div>
  <div class="footer--mobile">
    <div class="container">
      <div class="footer__top">
        <div class="left">
          <p class="title" @click="isHomeOpen = !isHomeOpen">
            <span>Home</span>
            <div class="icon" v-show="!isHomeOpen"><AddIcon /></div>
            <div class="icon" v-show="isHomeOpen"><DecreIcon /></div>
          </p>
          <Transition>
            <div class="content" v-show="isHomeOpen">
              <p>Home Ltd.</p>
              <p>Providing quality products with exceptional service since 2024.</p>
              <p>📍 1234 Commerce Avenue, Cityville, Country  </p>
              <p>📞 +1 (123) 456-7890  </p>
              <p>✉️ support@shopease.com </p>
            </div>
          </Transition>
        </div>
        <div class="right">
          <div class="right__item">
            <p class="title" @click="isQuickOpen = !isQuickOpen">
              <span>Quick Links</span>
              <div class="icon" v-show="!isQuickOpen"><AddIcon /></div>
              <div class="icon" v-show="isQuickOpen"><DecreIcon /></div>
            </p>
            <Transition>
              <div class="content" v-show="isQuickOpen">
                <p>🏠 Home</p>
                <p>🛒 Shopping Cart</p>
                <p>👤 My Account</p>
              </div>
            </Transition>
          </div>
          <div class="right__item">
            <p class="title" @click="isServiceOpen = !isServiceOpen">
              <span>Customer Service</span>
              <div class="icon" v-show="!isServiceOpen"><AddIcon /></div>
              <div class="icon" v-show="isServiceOpen"><DecreIcon /></div>
            </p>
            <Transition>
              <div class="content" v-show="isServiceOpen">
                <p>🔄 Return & Refund Policy</p>
                <p>🔒 Privacy Policy</p>
                <p>📜 Terms & Conditions</p>
                <p>🚚 Shipping Information</p>
                <p>💳 Payment Methods</p>
                <p>🛠 Shopping Guide</p>
              </div>
            </Transition>
          </div>
        </div>
      </div>
      <div>
        © 2024 **ShopEase Ltd.** All rights reserved.  
        📜 [Privacy Policy](#) | [Terms & Conditions](#)
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.v-enter-active, .v-leave-active {
  transition: height .5s;
}

.v-enter-from, .v-leave-to {
  height: 0;
}

.v-enter-to, .v-leave-from {
  height: 4em;
}

.footer, .footer--mobile {
  background-color: $white;
  padding: 1rem;

  > .container > .footer__top {
    display: flex;

    .title {
      @include title-m;
      padding: .5rem 0;
      color: $violet-normal;
    }

    .content {
      padding-top: .3rem;
    }

    > .left {
      width: 50%;
    }
    > .right {
      width: 50%;
      display: flex;

      > .right__item {
        width: 50%;
      }
    }
  }
}

.footer {
  @include RWD(tablet) {
    display: none;
  }
}

.footer--mobile {
  display: none;
  @include RWD(tablet) {
    display: block;
  }

  > .container > .footer__top {
    display: block;

    .title {
      display: flex;
      justify-content: space-between;
      
      > .icon {
        height: 1em;
        width: 1em;
        display: block;
        > svg {
          fill: $violet-normal;
        }
      }
    }

    .content {
      padding-top: .3rem;
      background-color: $white;
      overflow-y: hidden;
    }

    > .left {
      width: 100%;
    }
    > .right {
      display: block;
      width: 100%;

      > .right__item {
        width: 100%;
      }
    }
  } 
}
</style>
