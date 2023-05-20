const plus = document.querySelectorAll('.fa-square-plus')
const minus = document.querySelectorAll('.fa-square-minus')
const countValue = document.querySelectorAll('.counter')
const deleteBtn = document.querySelectorAll('.remove button')
const items = document.querySelectorAll('.cart')

plus.forEach(function(plus,index){
    plus.addEventListener('click', ()=>{
        countValue[index].textContent = Number(countValue[index].textContent) + 1;
    })
})
minus.forEach(function(minus,index){
    minus.addEventListener('click', ()=>{
        // countValue[index].textContent = Number(countValue[index].textContent) - 1;
        countValue[index].textContent =  countValue[index].textContent <= 1 ? 1 : Number(countValue[index].textContent) - 1;
    })
})
// minus.addEventListener('click', ()=>{
//     console.log('joy')
//     count--
//     countValue.textContent = count
// })

// deleteBtn.forEach(function(delete, ){
//     delete.addEventListener('click', function(){

//     })
// })

deleteBtn.forEach(function(deletebtn , index) {
    deletebtn.addEventListener('click', function() {
        console.log('remove')
        if (confirm("Are you sure you want to remove the item")){
            items[index].remove();
        }
    })
})