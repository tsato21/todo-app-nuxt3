<template>
    <Teleport to="body">
      <div
        v-show="modalActiveTest"
        class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      >
        <div class="bg-white p-4 rounded-lg shadow-lg">
          <slot /> <!-- This is where your form will be injected -->
          <button class="btn-close" @click="close">Close</button>
        </div>
      </div>
    </Teleport>
  </template>
  
  <script setup>
  defineProps({
    modalActiveTest: Boolean,
  });
  
  const emit = defineEmits(['update:modalActiveTest']);
  
  function close() {
    emit('update:modalActiveTest', false);
  }
  </script>
  
  <style scoped>
  .btn-close {
    /* Your button-close styles */
  }
  </style>
  