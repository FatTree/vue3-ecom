<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue';
import { useErrorStore } from '@/stores/errorStore';
import type { ErrorViewModel } from '@/models/viewModel';
import addIcon from '@/assets/icons/plus-solid.svg';2

type Props = {
    errorObj: ErrorViewModel;
}

const props = withDefaults(defineProps<Props>(), {
    errorObj: () => ({} as ErrorViewModel)
});

const {
    removeFromErrorList
} = useErrorStore();

const isShowError = ref<boolean>(true);
const progress = ref<HTMLDivElement|null>(null);

onMounted(() => {
    setTimeout(() => {
        if (progress.value!==null) {
            progress.value.style.width = '0%';
            console.log('progress', progress.value);
        }
    }, 10)
    setTimeout(() => {
        isShowError.value = false;
        removeFromErrorList(props.errorObj.id)
    }, 5010);
})

</script>
<template>
    <div class="errorCard" v-if="isShowError">
        <div class="errorCard__content">
            <p>{{ errorObj.message }}</p>
            <div class="close" @click="removeFromErrorList(errorObj.id)">
                <addIcon />
            </div>
        </div>
        <div class="errorCard__progressBar">
            <div class="progress" ref="progress"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.errorCard {
    background-color: $red-light;
    border: 1px solid $red;
    border-radius: .5rem;
    padding: 1rem;
    width: 20rem;
    color: $red-dark;
    @include shadow;
    
    > .errorCard__content {
        display: flex;
        justify-content: space-between;

        > .close {
            cursor: pointer;
            width: 1rem;
            > svg {
                fill: $red-dark;
                rotate: 45deg;
            }
        }
    }

    > .errorCard__progressBar {
        width: 100%;
        height: 5px;
        background-color: #eee;
        border-radius: 10px;
        overflow: hidden;
        position: relative;
        
        > .progress {
            width: 100%;
            height: 100%;
            background-color: $red;
            transition: width 5s linear;
        }
    }



}
</style>