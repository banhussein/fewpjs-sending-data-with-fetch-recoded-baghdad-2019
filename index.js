// Add your code here
function submitData(name,email){
  const requestOption={
    headers: {
      'content-Type':'application/json'
      'Accept':'application/json'
    },
    method:"POST",
    body:JSON.stringfy({name:name,email:email})
    
  })
}