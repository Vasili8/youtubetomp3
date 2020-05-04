const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const ytdl = require('ytdl-core');


const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'));

app.post('/', async (req, res) => {
    try {
        const { url } = req.body;
        res.set('Content-Disposition', `attachment; filename="Song.mp3"`);
        await ytdl(url, {
            format: 'mp3',
            quality: 'highestaudio'
        }).pipe(res);
    }catch (err) {
        res.status(400).json('Error Happend!');
    }
});

app.listen(process.env.PORT || 3001, ()=> {
  console.log(`app is running on port ${process.env.PORT}`);
})