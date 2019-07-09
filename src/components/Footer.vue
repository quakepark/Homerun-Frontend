<template>
  <main id="footer-bottom" class="text-center"> 
		<p class="text-white">
			<span class="text-bold">Home_Run</span> {{current_date}}. All Rights Reserved.
		</p>
	</main>
</template>

<script>
export default {
  name: "footer-bottom",
  data() {
    return {
      current_date: new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
#footer-bottom {
	width: 100%;
  padding-bottom: 16px;
  font-size: 8px !important;
  background: transparent !important;
}

#footer-bottom p {
  font-size: 16px !important;
  color:#f3f6fd;
  margin-bottom: 0;
} 
/* @media only screen and (max-width: 640px) {
  
} */
</style>
