const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path')
const bodyParser = require('body-parser')
const execSync = require("child_process").execSync;

const PORT = 4000;

const fs = require('fs')
const app = express();


app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './images/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }

}

var upload = multer({
    storage: storage,
    fileFilter: fileFilter
});


app.post("/uploadForm",
    upload.single('myImg'),
    async (req, res, next) => {
        console.log('hi')
        if (req.file) {
            const pathName = req.file.path;
            const pathModel = './my_model.h5'
            const result = execSync(`python -W ignore predict.py ${pathName} ${pathModel}`);
            const resultTest = result.toString("utf-8");
            console.log('result:' + resultTest)
            res.send({ message: resultTest })
        } else {
            res.send({ message: -1 })
        }
    });

app.get("/", (req, res) => {
    res.send("Hello peeps!")
})

app.listen(PORT, () => {
    console.log("Server running");
})