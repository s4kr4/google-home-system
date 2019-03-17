import GoogleHomeNotifier from '@shooontan/google-home-notifier'

const notifier = GoogleHomeNotifier({
  device: 'Home',
  lang: 'ja-JP',
})
notifier.create()

export default notifier
