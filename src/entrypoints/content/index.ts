import '@/assets/css/tailwind.css'
import App from './App.vue'

export default defineContentScript({
  matches: ['<all_urls>'],

  main(ctx) {
    const ui = createIntegratedUi(ctx, {
      position: 'inline',
      anchor: 'body',
      onMount: container => {
        createApp(App).mount(container)
      },
    })

    // Call mount to add the UI to the DOM
    ui.mount()
  },
})
