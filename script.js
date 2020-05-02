arr=[]
// let datass = document.getElementById("arrValue").value ;
// let arrK  = document.getElementById('addNO').value
 document.getElementById('arrResult').value

function addData(){
let datass = document.getElementById("arrValue").value ;
let arrK  = document.getElementById('addNO').value

    datass = parseInt(datass)
    arrK= parseInt(arrK)

    arr.push(datass)
    arr.map((value)=>{
       let arrResult= value + arrK
        console.log(arrResult)
        document.getElementById('arrResult').value= arrResult
        return arrResult
    })
}
function clearData(){
     document.getElementById("arrValue").value= null ;
    document.getElementById('addNO').value= null
    document.getElementById('arrResult').value= null
}