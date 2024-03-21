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
                        <NuxtLink to="/manage-staff-list" class="nav-link">
                            <i class="fas fa-home mr-2"></i>Staff List
                        </NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink to="/" class="nav-link">
                            <i class="fas fa-home mr-2"></i>Home
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