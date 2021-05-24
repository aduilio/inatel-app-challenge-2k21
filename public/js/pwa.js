window.addEventListener('load', () => {
  registerServiceWorker()
})

async function registerServiceWorker() {
  if('serviceWorker' in navigator){
    try{
      await navigator.serviceWorker.register('./service_worker.js')
    } catch(e) {
      console.log(`ServiceWorker registration failed: ` + e)
    }
  }
}