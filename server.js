const express = require('express')
const nunjucks = require('nunjucks')
const server = express()
const videos = require('./data-videos')
const courses = require('./data-courses')

server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure('views', {
  express: server,
  autoescape: false,
  noCache: true
})

server.get('/', function (req, res) {
  const about = {
    avatar_url: "https://avatars2.githubusercontent.com/u/36744423?s=400&u=1e0a1f1801b4ac2a2441f9301dfcbc03151de0e9&v=4",
    name: "Gabriel Araujo",
    role: "Desenvolvedor Web - Nordil",
    description: `Programador web e analista de BI, focado em aprender e expandir meu networking. Colaborador da <a href="https://www.nordil.com.br" target="_blank">Nordil</a>.`,
    links: [
      { name: "Github", url: "https://github.com/gabrielaraujr/" },
      { name: "Twitter", url: "https://twitter.com/gabrielaraujr/" },
      { name: "Linkedin", url: "https://www.linkedin.com/in/gabrielaraujr/" }
    ]
  }

  return res.render('about', { about })
})

server.get('/portfolio', function (req, res) {
  return res.render('portfolio', { items: videos })
})

server.get('/courses', function (req, res) {
  return res.render('courses', { items: courses })
})

server.get('/video', function (req, res) {
  const id = req.query.id
  
  const video = videos.find(function (video) {
    return video.id == id
  })

  if (!video) {
    return res.send("Video not found!")
  }

  return res.render("video", { item: video })
})

server.use(function (req, res) {
  res.status(404).render("not-found");
});

server.listen(5000, function () {
  console.log('server is running')
})

