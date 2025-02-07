<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue';
import { useInfoStore } from '@/stores/infoStore';
import { type InfoViewModel, InfoEnum } from '@/models/viewModel';
import addIcon from '@/assets/icons/plus-solid.svg';2

type Props = {
    infoObj: InfoViewModel;
}

const props = withDefaults(defineProps<Props>(), {
    infoObj: () => ({} as InfoViewModel)
});

const {
    removeFromInfoList
} = useInfoStore();

const isShowInfo = ref<boolean>(true);
const progress = ref<HTMLDivElement|null>(null);

onMounted(() => {
    setTimeout(() => {
        if (progress.value!==null) {
            progress.value.style.width = '0%';
        }
    }, 10)
    setTimeout(() => {
        isShowInfo.value = false;
        removeFromInfoList(props.infoObj.id)
    }, 5010);
})

</script>
<template>
    <div class="infoCard" :class="props.infoObj.type==='info' ? 'info' : 'error'" v-if="isShowInfo">
        <div class="infoCard__content">
            <p>{{ props.infoObj.message }}</p>
            <div class="close" @click="removeFromInfoList(props.infoObj.id)">
                <addIcon />
            </div>
        </div>
        <div class="infoCard__progressBar">
            <div class="progress" ref="progress"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.infoCard {
    border-radius: .5rem;
    padding: 1rem;
    width: 20rem;
    @include shadow;

    &.info {
        background-color: $green-light;
        border: 1px solid $success;
        color: $green-dark;

        > .infoCard__content > .close > svg {
            fill: $green-dark;
        }

        > .infoCard__progressBar > .progress {
            background-color: $success;
        }
    }

    &.error {
        background-color: $red-light;
        border: 1px solid $red;
        color: $red-dark;

        > .infoCard__content > .close > svg {
            fill: $red-dark;
        }

        > .infoCard__progressBar > .progress {
            background-color: $red;
        }
    }
    
    > .infoCard__content {
        display: flex;
        justify-content: space-between;

        > .close {
            cursor: pointer;
            width: 1rem;
            > svg {
                rotate: 45deg;
            }
        }
    }

    > .infoCard__progressBar {
        width: 100%;
        height: 5px;
        background-color: #eee;
        border-radius: 10px;
        overflow: hidden;
        position: relative;
        
        > .progress {
            width: 100%;
            height: 100%;
            transition: width 5s linear;
        }
    }
}
</style>