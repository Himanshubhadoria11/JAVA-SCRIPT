const userNameTextField = document.getElementById('username')
const addUserBtn =document.getElementById('addbtn')
const recordsDisplay =document.getElementById('records')

//data store
let useArray=[]

//data get localstorage
let data =localStorage.getItem('users')   //string
if(data != null)
{
    useArray=JSON.parse(data)  //string to object
}
console.log(useArray)


addUserBtn.onclick=()=>{
    const name =userNameTextField.value
   // alert(name)
   if(edit_id !=null)
   {
    useArray.splice(edit_id,1,{
       'name' :name
    })
    edit_id=null;
   }else{
   // data push
 useArray.push({'name':name}) //keyvalue
// console.log(useArray)
    }
  //data push
//useArray.push({'name':name}) //keyvalue
//console.log(useArray) 



saveData(useArray)
userNameTextField.value=''
}

function saveData(useArray)
{
    let str =JSON.stringify(useArray) // convert to string
   // console.log(str)
   localStorage.setItem('users',str)   //set data
   displayData()

   function deletedata(id)
   {
    alert(id)
   }

}

function displayData()
{
    let data1 ="";
    useArray.forEach((item,i)=>{
      //  console.log(item)
      data1 += `<tr>
      <td>${i+1}</td>
      <td>${item.name}</td>
      <td>
         <a href="#" onclick='editdata(${i})'>Edit</a>
         <a href="#" onclick='deletedata(${i})'>Delete</a>
      </td>
      </tr>`

    })
   // console.log(data1)
   recordsDisplay.innerHTML =data1
}
displayData() 

function editdata(id)
{
    //alert(id)
    edit_id=id
    userNameTextField.value=useArray[id].name
}
function deletedata(id)
{
 //alert(id)
 useArray.splice(id,1)
 saveData(useArray)
}


