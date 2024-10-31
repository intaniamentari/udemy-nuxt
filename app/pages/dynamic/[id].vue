<template>
    this is dynamic page {{ route.params.id }}
</template>

<script setup>
    const route = useRoute();
</script>