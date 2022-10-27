const express = require('express');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const Hash = require('ipfs-only-hash')

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());
app.use(fileUpload());

const ipfsClient = async function (){
    const { create } = await import('ipfs-http-client');
    let ipfs= await create(
        {
            host: "localhost",
            port: 5001,
            protocol: "http"
        }
    )

    return ipfs;

}

app.post('/getFile', async(req, res) =>{
    try{
        console.log(req.body)

        let file = await ipfs.cat(req.body.h)
        console.log(file)
        let data = {}

        for await (i of file){
            console.log(i);
            console.log(Buffer.from(i).toJSON());
             data = Buffer.from(i).toString();
            console.log(data);
        }

        res.status(200).json({status: 'ok', data: data});
    }
    catch(err){
        console.log(err);
        res.status(400).json({status: 'fail'});
    }

       
}
);

app.post('/uploadFile', async(req, res)=>{
    
    try{
        console.log(req.body)
        ipfs = await ipfsClient();
        let data=req.body
        let result = await ipfs.add({path: req.body.file, content: JSON.stringify(data)})
        console.log(result);
        console.log(result.cid);
        const hash = await Hash.of(JSON.stringify(data));
        console.log(hash);
        res.status(200).json({status: 'ok', result: result, hashValue: hash})

    }
    catch(err){
        console.log(err);
        res.status(400).json({status: 'fail'});
    }
});

app.listen(8000,()=>{
    console.log("Server started on 8000");
});

