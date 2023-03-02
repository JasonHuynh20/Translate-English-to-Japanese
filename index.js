
const OpenAI = require('openai');
const  { Configuration, OpenAIApi } = OpenAI



const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3001;


const configuration = new Configuration({
    organization: "org-G3d2c4zDuGYc7UlGLB73qSwX",
    apiKey: "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",
});

const openai = new OpenAIApi(configuration);


app.use(bodyParser.json());
app.use(cors());

app.post('/', async (req, res) => {
    const response = await openai.createChatCompletion({
        model: "text-davinci-003",
        prompt: "Say this is a test",
        max_tokens: 7,
        temperature: 0
        });
        console.log(response)
        res.json({
            message: "helloWorld"
    });
});

app.get('/', (req, res) => {
    res.json({
        message: "Hello World"
});
});

app.listen(port, () => {
    console.log('example listening to port: ' + port);
});






