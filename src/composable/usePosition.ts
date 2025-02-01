import { reactive } from "vue";

export default function usePosition() {
  const position = reactive({top: 0, right: 0});

  const updatePosition = (element: HTMLDivElement, top: number, right: number) => {
    const rect = element.getBoundingClientRect();
    position.top = rect.top + top;
    position.right = rect.right - right;
  }

  return {
    position,
    updatePosition
  }
}