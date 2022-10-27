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
    //creating ipfs object
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

        //getting file having same hash as provided in request body
        let file = await ipfs.cat(req.body.h)
        console.log(file)
        let data = {}

        //get lines of files
        for await (i of file){
            console.log(i);
            console.log(Buffer.from(i).toJSON());
            data = Buffer.from(i).toString();
            console.log(data);
        }

        //resturn file content
        res.status(200).json({status: 'ok', data: data});
    }
    catch(err){
        //on error return status fail
        console.log(err);
        res.status(400).json({status: 'fail'});
    }

       
}
);

app.post('/uploadFile', async(req, res)=>{
    
    try{
        console.log(req.body)

        //creating ipfs object
        ipfs = await ipfsClient();

        //storing request body in data
        let data=req.body

        //adding file to ipfs(file having data same as request body)
        let result = await ipfs.add({path: req.body.file, content: JSON.stringify(data)})
        console.log(result);
        console.log(result.cid);
        //calculating hash of data
        const hash = await Hash.of(JSON.stringify(data));
        console.log(hash);
        //return object having info of filepath and hash
        res.status(200).json({status: 'ok', result: result, hashValue: hash})

    }
    catch(err){
        //on error return status fail
        console.log(err);
        res.status(400).json({status: 'fail'});
    }
});

app.listen(8000,()=>{
    console.log("Server started on 8000");
});

