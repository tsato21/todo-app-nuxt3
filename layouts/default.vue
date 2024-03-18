<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4 d-flex justify-content-between align-items-center">
                <h4>
                    <NuxtLink to="/" class="text-xl font-bold text-primary text-decoration-none text-black">
                        <font-awesome-icon icon="check-square" /> Todo App Nuxt3
                    </NuxtLink>
                    
                </h4>
                    
               
                <ul class="nav">
                    <li class="nav-item">
                        <NuxtLink to="/" class="nav-link active">
                            <i class="fas fa-home mr-2"></i>Home
                        </NuxtLink>
                    </li>
                    <li class="nav-item">
                    </li>
                </ul>
            </nav>
        </header>

        <!-- output the page content -->
        <div class="container w-75">
            <slot />
        </div>
        
    </div>
</template>

<style scoped>
.router-link-exact-active {
  color: rgb(62, 143, 118);
}
</style>