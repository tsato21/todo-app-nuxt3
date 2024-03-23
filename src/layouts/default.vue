<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav
        class="container mx-auto p-4 d-flex justify-content-between align-items-center"
      >
        <h4>
          <NuxtLink
            to="/"
            class="text-xl font-bold text-primary text-decoration-none text-black"
          >
            <font-awesome-icon icon="check-square" /> {{ $t("navTitle") }}
          </NuxtLink>
        </h4>

        <ul class="nav">
          <li class="nav-item">
            <NuxtLink to="/manage-staff-list" class="nav-link">
              <i class="fas fa-home mr-2"></i>{{ $t("staffList") }}
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/" class="nav-link">
              <i class="fas fa-home mr-2"></i> {{ $t("home") }}
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link d-flex align-items-center">
              <form>
                <select
                  v-model="locale"
                  class="bg-white border text-black"
                  style="width: 120px"
                >
                  <option value="ja">日本語</option>
                  <option value="en">English</option>
                </select>
              </form>
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </header>

    <!-- output the page content -->
    <div class="container-lg">
      <slot />
    </div>
  </div>
</template>

<script setup="ts">
// Import necessary functions from Vue and vue-i18n
import { useI18n } from 'vue-i18n'
import { ref, watch, onMounted } from 'vue';

// Initialize the i18n plugin
const i18n = useI18n();

// Create a reactive reference for the locale, defaulting to 'ja'
const locale = ref('ja');

// When the component is mounted
onMounted(() => {
  // If the code is running on the client side (in the browser)
  if (process.client) {
    // Get the stored locale from the local storage
    const storedLocale = localStorage.getItem('locale');
    // If there is a stored locale
    if (storedLocale) {
      // Update the locale reactive reference with the stored locale
      locale.value = storedLocale;
      // Update the i18n locale with the stored locale
      i18n.locale.value = storedLocale;
    }
  }
});

// Watch for changes in the locale reactive reference
watch(locale, (newLocale) => {
  // If the code is running on the client side (in the browser)
  if (process.client) {
    // Store the new locale in the local storage
    localStorage.setItem('locale', newLocale);
  }
  // Update the i18n locale with the new locale
  i18n.locale.value = newLocale;
});
</script>

<style scoped>
/* 
.nav-link class:
This class is used when the style navigation links but the route is not accessed. The color of the text for these links is set to light gray.
*/
.nav-link {
  color: lightgray;
}
/* 
.router-link-exact-active class:
This class is automatically added by Vue Router to the active route. The color of the text for the active link is set to blue.
*/
.router-link-exact-active {
  color: blue;
}
</style>
