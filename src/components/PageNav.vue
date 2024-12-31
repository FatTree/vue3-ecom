<script lang="ts" setup>
import arrowIcon from '@/assets/icons/caret-right-solid.svg';
import { useRouter } from 'vue-router';

const router = useRouter();

type Props = {
    layer1?: string;
    layer2?: string;
}
const props = withDefaults(defineProps<Props>(), {
    layer1: '',
    layer2: ''
})

const clickLayer1 = () => {
    router.push(`/${props.layer1}`)
}
</script>
<template>
    <div class="pageNav">
        <div class="pageNav__head">
            <a class="link ellipsis" href="/">首頁</a>
        </div>
        <arrowIcon class="icon" />
        <div class="pageNav__item" @click="clickLayer1">
            <span class="ellipsis" :class="layer2 ? 'link' : ''">{{ layer1 }}</span>
        </div>
        <div v-if="layer2" class="d-flex align-item-center">
            <arrowIcon class="icon" />
            <div class="pageNav__item">
                <span class="ellipsis">{{ layer2 }}</span>
            </div>
        </div>
        
    </div>
</template>

<style lang="scss" scoped>
.pageNav {
    padding: .5rem 0 !important;
    display: flex;
    align-items: center;

    &__item {
        @include text-m;
        color: $white-dark;
        &::after {
            content: '';
            background-image: url();
        }
    }

    .link {
        color: $violet-normal;
        text-decoration: underline;
        cursor: pointer;
    }
}
.icon {
    height: 1rem;
    fill: $white-hover-active;
    text-align: center;
    width: 2rem;
}
</style>
