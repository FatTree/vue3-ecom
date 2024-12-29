<script lang="ts" setup>
import arrowIcon from '@/assets/icons/caret-right-solid.svg';


type Props = {
    layer1?: string;
    layer2?: string;
}
const props = withDefaults(defineProps<Props>(), {
    layer1: '',
})
</script>
<template>
    <div class="pageNav">
        <div class="pageNav__head">
            <a href="/">首頁</a>
        </div>
        <arrowIcon class="icon" />
        <div class="pageNav__item">
            <span>{{ layer1 }}</span>
        </div>
        
    </div>
</template>

<style lang="scss">
.pageNav {
    padding: .5rem 0 !important;
    display: flex;
    align-items: center;

    &__item {
        &::after {
            content: '';
            background-image: url();
        }
    }
}
.icon {
    height: 1rem;
    fill: $white-hover-active;
    text-align: center;
    width: 2rem;
}
</style>
