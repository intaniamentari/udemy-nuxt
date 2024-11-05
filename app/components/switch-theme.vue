<template>
	<div v-if="isMounted">
	  <button @click="changeTheme" id="change-theme" class="p-2 border border-solid radius-lg">{{ currentIcon }}</button>
	</div>
  </template>
  
  <script setup>
  const colorMode = useColorMode()
  const modes = ['system', 'dark', 'light', 'sepia']

  // ref is variable that we can monitor it reaktif (see comparison before and after)
  const currentIndex = ref(modes.indexOf(colorMode.preference))
  const isMounted = ref(false)

  // vue hook to check content is finished rendering from client side
  onMounted(() => {
	isMounted.value = true
  })

  const changeTheme = () => {
  	currentIndex.value = (currentIndex.value + 1) % modes.length
	colorMode.preference = modes[currentIndex.value]
  }

  const currentIcon = computed(() => {
	  switch (modes[currentIndex.value]) {
		  case "system":
			  return "🖥️"
			  break
		  case "dark":
			  return "🌙"
			  break
		  case "light":
			  return "☀️"
			  break
		  case "sepia":
			  return "☕"
			  break
		  default:
			  return "🖥️"
	  }
  })

  console.log(colorMode.preference)
  </script>
  
  <style>
  body {
	background-color: #fff;
	color: rgba(0,0,0,0.8);
  }
  .dark-mode body {
	background-color: #091a28;
	color: #ebf4f1;
  }
  .sepia-mode body {
	background-color: #f1e7d0;
	color: #433422;
  }
  .sepia-mode #change-theme {
	border-color: #433422;
	border-radius: 100%;
  }
  .dark-mode #change-theme {
	border-color: #ebf4f1;
	border-radius: 100%;
  }
  .light-mode #change-theme {
	border-color: rgb(209 213 219);
	border-radius: 100%;
  }
  </style>
  