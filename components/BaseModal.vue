<template>
  <Teleport to="body">
    <Transition name="modal-outer">
      <div v-show="modalActive" class="modal-overlay">
        <Transition name="modal-inner">
          <div v-if="modalActive" class="modal-container w-75">
            <slot />
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup="ts">
defineEmits(["close-modal"]);
defineProps({
  modalActive: {
    type: Boolean,
    default: false,
  },
});
</script>