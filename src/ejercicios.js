

// write and read synced files

/* const data = 'Hello world ! '

try {
    writeFileSync('myFile.txt',data)
    console.log('file created')
} catch (error) {
    console.log('failed creating the file, ', error)
}

try {
    const data2 = readFileSync('myFile.txt', 'utf-8')
    console.log('file content: ', data2)
} catch (error) {
    console.log('file not found')
} */

// updating files

/* const info = 'updated info for file'

try {
    appendFileSync('myFile.txt', info)
    console.log('file update successful');
} catch (error) {
    console.log('error while updating file');
} */


// delete files

/* try {
    unlinkSync('myFile.txt')
    console.log('file delete completed')
} catch (error) {
    console.log('not able to delete file, try again')
} */



// promises and async


async function readFileFs(){
    try {
        const data = await fs.readFile('file.txt', 'utf8')
        console.log('file content: ',data)
    } catch (error) {
        console.error('error while reading file')
    }
}

async function writeFileFs(){
    const dataInfo = 'info to include in file'
    try {
        await fs.writeFile('file.txt',dataInfo)
        console.log('file written successfully')
    } catch (error) {
        console.error('error writing file',error)
    }
} 

readFileFs()
writeFileFs()


// express

/* const app = express()
const PORT = 8080

app.use(express.urlencoded({extended:true}))

const students = [
    {id:'1' , name:'joey' , lastName:'alvarado'},
    {id:'2' , name:'sheila' , lastName:'garcia'},
    {id:'3' , name:'george' , lastName:'galvez'},
    {id:'4' , name:'camila' , lastName:'rapon'},
    {id:'5' , name:'edward' , lastName:'cullen'},
] 

app.get('/students/:idStudent',(req,res)=>{
    let idStudent = req.params.idStudent

    let student = students.find(s=> s.id === idStudent)

    !student ? res.send({error: `Cant find student ${idStudent}`}) : res.send({student})
})

app.get('/students',(req,res)=>{
    let limit = parseInt(req.query.limit)

    let limitedStudents = [...students]

    if(!isNaN(limit) && limit >0){
        limitedStudents = limitedStudents.slice(0,limit)
    }

    res.json(limitedStudents)
})

app.listen(PORT, ()=>{
    console.log(`server running on ${PORT}`)
}) */