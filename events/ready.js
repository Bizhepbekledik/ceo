//READY CODE
const Moment = require('moment')
const Discord = require('discord.js')
let prefix = 'bot prefix'
module.exports = client => {
  
  const aktiviteListesi = [
    `Tekrardan hizmette! 🥳`,
    'Ha evet sürekli değişiyor 😝',
    '7/24 aktif diyorum yaa 🥰',
    ''
  ]

  client.user.setStatus('idle')
  
  setInterval(() => {
    const Aktivite = Math.floor(Math.random() * (aktiviteListesi.length - 1))
    client.user.setActivity(aktiviteListesi[Aktivite])
  }, 5000)
}