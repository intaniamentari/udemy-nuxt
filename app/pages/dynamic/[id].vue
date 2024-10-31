<template>
    <NuxtLayout>
        <p>
            this is dynamic page {{ route.params.id }}
        </p>
    </NuxtLayout>
</template>

<script setup>
    const route = useRoute();
    definePageMeta({
        layout: 'dynamic'
    })
</script>