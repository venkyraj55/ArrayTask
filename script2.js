arr=[]
// let datass = document.getElementById("arrValue").value ;
// let arrK  = document.getElementById('addNO').value
 document.getElementById('arrResult').value

function addData(){
let datass = document.getElementById("arrValue").value ;
let arrK  = document.getElementById('addNO').value
arrK= parseInt(arrK)
    datass = datass.split(' ')
    let dat= datass
    
    for (item of dat){
        let eachItem = Number(item)
        console.log("eachItem", typeof(eachItem), eachItem)
        let addtoArray= eachItem+arrK
        arr.push(addtoArray)
        for( items of arr){
            console.log(items)
         document.getElementById('arrResult').value += items +" "
        }

    }    
}


function clearData(){
     document.getElementById("arrValue").value= null ;
    document.getElementById('addNO').value= null
    document.getElementById('arrResult').value= null
}
