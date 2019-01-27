var express = require('express')
var body = require('body-parser')
var port = process.env.PORT || 5000;

var app= express()
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
app.use(allowCrossDomain,body())
app.get('/api',(req,res)=>{
    res.end(JSON.stringify({"type":"อุจจาระร่วงเฉียบพลัน มากกว่า 14 วัน","conut":"qwe"}))
})

app.post('/api',(req,res)=>{
    console.log(req.method,req.body.symptom)
    if(req.body.symptom == "อุจจาระร่วงเฉียบพลัน มากกว่า 14 วัน"){
        res.end(JSON.stringify({
            "type":"choose",
            "conut":"2",
            "titile":"อาการแสดงเด่น",
            "symptom1":"อาเจียนเด่น",
            "stmptom2":"อุจจาระร่วงเด่น"
        }))
    }
    else if(req.body.symptom == "อาเจียนเด่น"){
        res.end(JSON.stringify({
            "type":"summit",
            "comment":"รักษาตามอาการ และ ป้องกันและรักษาภาวะขาดน้ำและเกลือแร่ด้วย ORT/ORS/IVS"
           
        }))
    }
    else if(req.body.symptom == "อุจจาระร่วงเด่น"){
        res.end(JSON.stringify({
            "type":"choose",
            "conut":"2",
            "titile":"ลักษณะของอุจจาระ",
            "symptom1":"ถ่ายเป็นน้ำ",
            "stmptom2":"ถ่ายเป็นมูกเลือด"
           
        }))
    }
    else if(req.body.symptom == "ถ่ายเป็นน้ำ"){
        res.end(JSON.stringify({
            "type":"choose",
            "conut":"2",
            "titile":"อาการแสดงของการขาดน้ำและเกลือแร่",
            "symptom1":"ปานกลาง/รุงแรง",
            "stmptom2":"ไม่มี/น้อย"
           
        }))
    }
    else if(req.body.symptom == "ปานกลาง/รุงแรง"){
        res.end(JSON.stringify({
            "type":"choose",
            "conut":"2",
            "titile":"ตรวจอุจจาระ",
            "symptom1":"ผลเพาะเชื้อพบเชื้ออหิวาต์",
            "stmptom2":"ไม่พบเชื้ออหิวาต์"
           
        }))
    }
    else if(req.body.symptom == "ผลเพาะเชื้อพบเชื้ออหิวาต์"){
        res.end(JSON.stringify({
            "type":"summit",
            "comment" : "Trtracycline 2g ต่อวัน นาน 3วัน"
           
        }))
    }
    // else if(req.body.symptom == "ไม่พบเชื้ออหิวาต์"){
    //     res.writeHead(200,{'Content-Type':'text/plain'});
    //     res.end("Helloworld");
    // }
        else if(req.body.symptom == "ไม่พบเชื้ออหิวาต์"){
        res.end(JSON.stringify({
            "type":"summit",
            "comment" : "พิจารณาให้ยาปฏิชีวนะ"
           
        }))
    }
    else if(req.body.symptom == "ไม่มี/น้อย"){
        res.end(JSON.stringify({
            "type":"summit",
            "comment" : "ป้องกันการขาดน้ำและเกลือแร่ด้วย ORT"
           
        }))
    }
    else if(req.body.symptom == "ถ่ายเป็นมูกเลือด"){
        res.end(JSON.stringify({
            "type":"summit",
            "comment" : "Norfloxacin 400มก วันละ 2 ครั้ง นาน 3วัน"
           
        }))
    }
    
})

app.listen(port, () => {
    console.log("application is listening on:", port);
 });

//{"type":"asd","conut":"asd"}
//{"type":"qwe","conut":"qwe"}