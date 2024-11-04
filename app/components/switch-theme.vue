<template>
	<div>
	  <button @click="changeTheme" class="p-3 dark: border-solid radius-lg">{{ currentIcon }}</button>
	</div>
  </template>
  
  <script setup>
  const colorMode = useColorMode()
  const modes = ['system', 'dark', 'light', 'sepia']
  const currentIndex = ref(modes.indexOf(colorMode.preference))


  const changeTheme = () => {
  	currentIndex.value = (currentIndex.value + 1) % modes.length
	colorMode.preference = modes[currentIndex.value]
  }

  const currentIcon = computed(() => {
	  switch (modes[currentIndex.value]) {
		  case "system":
			  return "System 🖥️"
			  break
		  case "dark":
			  return "Dark 🌙"
			  break
		  case "light":
			  return "Light ☀️"
			  break
		  case "sepia":
			  return "Coffee ☕"
			  break
		  default:
			  return "System 🖥️"
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
  </style>
  