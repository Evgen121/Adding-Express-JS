const express = require('express')
const app = express();
const morgan = require('morgan')

app.set('view engine', 'ejs')
app.listen(3000);

/* app.use((req, res, next) => {
    console.log('new request method');
    console.log('host', req.hostname);
    console.log("path", req.path);
    console.log('method', req.method);
    next()
}) */
app.use(express.static('public'))


app.use(morgan('dev'))

app.get('/', (req, res) => {
    const blogs = [
        { title: 'Hello world', snippet: 'Lorem fse fashion love' },
        { title: 'Hello Ukraine', snippet: ' fashion love Lorem fse' },
        { title: 'Hello Netherland', snippet: 'Thanks very much' },
    ]
    res.render('index', {
        title: "Blogs home",
        blogs
    });
});
app.get('/about', (req, res) => {
    // res.send('<p> about page</p>');
    res.render('about', {
        title: "About"
    });
});
app.get('/create', (req, res) => {
    res.render('create', {
        title: "Create A NEW BLOG "
    })
})

app.use((req, res) => {
    res.status(400).render('404', {
        title: "404"
    });
})