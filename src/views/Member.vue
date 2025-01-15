<script lang="ts" setup>
import { firebaseApp } from '@/plugins/firebase';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { computed, onMounted, ref } from 'vue';
import { getCurrentUser } from 'vuefire';
import arrowIcon from '@/assets/icons/chevron-right-solid.svg';
import { useI18n } from 'vue-i18n';

const db = getFirestore(firebaseApp);
const userInfo = ref();

const getUserInfo = async() => {
  const user = await getCurrentUser();
    if(user) {
      try {
        const userDoc = doc(db, 'UserInfo', user.uid); // 指定集合和 Document ID
        const userSnapshot = await getDoc(userDoc);

        if (userSnapshot.exists()) {
          userInfo.value = userSnapshot.data(); // 將數據存入 userInfo
        } else {
          console.error('No such document!');
        }
      } catch(err) {
        console.log(err);
      }
    }
}

const orderList = [
  {
    id: 12345678,
    date: "2024/12/01",
    state: "已出貨",
    quantity: 12,
    total: 675,
    detail: [
      { id: 45361130776, name: "家用瑜伽墊", price: 35, quantity: 3 },
      { id: 29387493874, name: "運動水壺", price: 25, quantity: 2 },
      { id: 12983749823, name: "人體工學椅", price: 50, quantity: 3 },
      { id: 23874658234, name: "多功能筆記本", price: 20, quantity: 4 }
    ]
  },
  {
    id: 23456789,
    date: "2024/11/20",
    state: "已出貨",
    quantity: 8,
    total: 480,
    detail: [
      { id: 12345678901, name: "智能手機保護殼", price: 30, quantity: 4 },
      { id: 23456789012, name: "抗風雨傘", price: 40, quantity: 2 },
      { id: 34567890123, name: "無線耳機", price: 50, quantity: 2 }
    ]
  },
  {
    id: 34567890,
    date: "2024/10/15",
    state: "已出貨",
    quantity: 15,
    total: 1050,
    detail: [
      { id: 98765432101, name: "高效吸塵器", price: 70, quantity: 5 },
      { id: 87654321098, name: "自動咖啡機", price: 80, quantity: 6 },
      { id: 76543210987, name: "家用瑜伽墊", price: 50, quantity: 4 }
    ]
  },
  {
    id: 45678901,
    date: "2024/09/10",
    state: "已出貨",
    quantity: 10,
    total: 800,
    detail: [
      { id: 11223344556, name: "運動水壺", price: 40, quantity: 5 },
      { id: 22334455667, name: "多功能筆記本", price: 60, quantity: 3 },
      { id: 33445566778, name: "人體工學椅", price: 80, quantity: 2 }
    ]
  },
  {
    id: 56789012,
    date: "2024/08/05",
    state: "已出貨",
    quantity: 6,
    total: 360,
    detail: [
      { id: 99887766554, name: "智能手機保護殼", price: 60, quantity: 3 },
      { id: 88776655443, name: "抗風雨傘", price: 40, quantity: 3 }
    ]
  }
];

const { t } = useI18n();


// UI
const expandedIndex = ref<null | number>(null);

const clickMore = (index: null | number) => {
  expandedIndex.value = expandedIndex.value === index ? null : index;
}

onMounted(async() => {
  await getUserInfo();
})
</script>
<template>
  <div class="member container pt-1">
    <div class="member__content">
      <div class="member__content__person">
        <div class="info" v-if="userInfo">
          <div class="info__img">
            <img src="../assets/icons/face-smile-wink-solid.svg" alt="">
          </div>
          <div class="info__member">
            <p>{{ t('member.name') }}: {{ userInfo.name }}</p>
            <p>{{ t('member.email') }}: {{ userInfo.email }}</p>
          </div>
          <div class="info__member">
            <p>{{ t('member.phone') }}: {{ userInfo.phone }}</p>
            <p>{{ t('member.address') }}: {{ userInfo.address }}</p>
          </div>
        </div>
      </div>
      <div class="member__content__order pt-1">
        <div class="orderList">
          <p class="more">{{ t('member.reacent') }}</p>
          <div class="orderTitle">
            <p class="w-7rem">{{ t('member.date') }}</p>
            <p class="w-6rem">{{ t('member.status') }}</p>
            <p class="w-7rem">{{ t('member.no') }}</p>
            <p class="flex-auto ellipsis">{{ t('member.total') }}</p>
          </div>
          <div class="order" v-for="(order, index) in orderList" ref="order">
            <div class="order__info">
              <div class="order__info__state">
                <p class="w-7rem">{{ order.date }}</p>
                <p class="w-6rem" :style="{color: order.state === '已出貨' ? '#00BF91' : '#FF0000'}">{{ order.state }}</p>
                <p class="w-7rem">{{ order.id }}</p>
                <p class="flex-auto">${{ order.total }}</p>
              </div>
              <div class="order__info__more" @click="clickMore(index)">
                <p class="mr-1">{{ t('member.list') }}</p>
                <arrowIcon class="icon" :class="{ expanded: expandedIndex === index }" />
              </div>
              <div class="order__info__content" :class="expandedIndex === index ? '' : 'close'" :style="{maxHeight: expandedIndex === index ? (order.detail.length * 3) + 3 + 'em' : 0}">
                <div class="order__info__content__title">
                  <p class="name">{{ t('member.pname') }}</p>
                  <p class="price">{{ t('member.price') }}</p>
                  <p class="quantity">{{ t('member.amount') }}</p>
                  <p class="quantity">{{ t('member.all') }}</p>
                </div>
                <div class="order__info__content__detail" v-for="detail in order.detail" :key="detail.id">
                  <p class="name">{{ detail.name }}</p>
                  <p class="price">${{ detail.price }}</p>
                  <p class="quantity"> x {{ detail.quantity}}</p>
                  <p class="quantity"> ${{ detail.price * detail.quantity}}</p>
                </div>
              </div>
            </div>
          </div>
          <p class="more pt-1 link">{{ t('member.more') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.member {
  background-color: $white-light;
  padding: 1rem;

  &__content {
    display: flex;
    flex-direction: column;
    padding: 2rem;

    @include RWD(tablet) {
      padding: 0;
      /* flex-direction: row; */
    }

    &__person {
      width: inherit;
    }
  }
}

.info {
  display: flex;
  flex-direction: row;
  width: inherit;
  padding-left: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #000;

  @include RWD(tablet) {
    flex-direction: column;
    margin-left: 0rem;
    padding: 0;
    @include center;
  }
  &__img {
    width: 6rem;
    height: 6rem;
    margin-right: 1rem;
    border-radius: 50%;
    overflow: hidden;
  }
  &__member {
    width: 40%;
    padding: 1rem;
    @include RWD(tablet) {
      width: 100%;
      padding: 1rem 0;
    }
  }
}



.member__content__order {
  > .orderList {
    > .more {
      padding-left: 2rem;
      @include RWD(tablet) {
        padding-left: 0;
      }
    }
    > .orderTitle {
      display: flex;
      padding-left: 2rem;
      @include RWD(tablet) {
        padding: 0;
      }
    }
    > .order {
      padding: 1rem;
      border-bottom: 1px solid $yellow-normal;
      @include RWD(tablet) {
        padding: 0;
      }
      
      > .order__info {

        > .order__info__state {
          display: flex;
          padding: .5rem 1rem;
          @include RWD(tablet) {
            padding: .5rem 0;
          }
        }
        > .order__info__more {
          display: flex;
          align-items: center;
          padding: .5rem 1rem;
          cursor: pointer;
          transition: background-color 0.3s ease;
          @include link;


          @include RWD(tablet) {
            padding: .5rem 0;
          }

          &:hover {
            background-color: $yellow-normal;
            @include RWD(tablet) {
              background-color: none;
            }
          }

          > .icon {
            fill: $violet-normal;
            height: 1rem;
            transform: rotate(0);
            transition: transform 0.3s ease;

            &.expanded {
              transform: rotate(90deg);
            }
          }
        }
        
        > .order__info__content {
          background-color: $white;
          overflow: hidden;
          max-height: 200px;
          transition: max-height 0.3s ease;

          &.close {
            max-height: 0 !important;
          }

          > .order__info__content__title, .order__info__content__detail {
            display: flex;
            &:nth-child(odd){
              background:$yellow-light-active;
            }
            p {
              padding: .5rem;
            }
  
            .name {
              width: 50%;
            }
            .price {
              width: 15%;
            }
            .quantity {
              width: 15%;
            }
          }

          .order__info__content__title {
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>
