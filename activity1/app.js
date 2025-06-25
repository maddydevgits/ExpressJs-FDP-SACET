// import the module

const express=require('express');

// create an object

const app=express();

// basic http method - server is called through req, and server will provide res

app.get('/',(req,res)=>{
    res.send('Server is running');
});

app.get('/department',(req,res)=>{
    res.send('Our department is CSE');
})

app.get('/college',(req,res)=>{
    res.send('Our college is SACET');
})

// example to demonstrate the basic query parameters
app.get('/student',(req,res)=>{
    const rollnumber=req.query.rollnumber; // from the request, (query param - key=value) (10211A0578)
    const department=req.query.department; // the value is been assigned to department varible (CSE)

    res.send(`you are searching for a student with this ${rollnumber}, ${department}`);

})

// To run the server (ip address, port) - SACET (ip address), CSE(port)

const port=3000;

// start the server
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});
