const text = document.querySelector('.content textarea')
const tx = document.querySelector('.text p')
const sp = document.querySelector('.content span')
const span = document.querySelector('.text h5')
const ctn = document.querySelector('.text')
const btn = document.querySelector('.content button')
var myDate = new Date()
var mytime=myDate.toLocaleTimeString()
time = myDate.toLocaleString( )

text.addEventListener('focus',function(){
    text.style.height = '300px'
    sp.style.display = 'block'
})
text.addEventListener('blur',function(){
    text.style.height = '200px'
    ctn.style.display = 'none'
    sp.style.display = 'none'
})

text.addEventListener('input',function(){
    sp.innerHTML =`${text.value.length}/200字` 
})
text.addEventListener('keyup',function(e){
    console.log(e.key);
    if (e.key === 'Enter'){
        if (text.value !== ''){
            tx.innerHTML = text.value
            // span.style.display = 'inline-block'
            span.innerHTML = time
        }
        ctn.style.display = 'block'
        sp.innerHTML = '0/200字'
        text.value = ''
        
    }

})
btn.addEventListener('click',function(){
    btn.style.cursor = 'pointer'
    if (text.value !== ''){
        sp.innerHTML =`${text.value.length}/200字` 
        tx.innerHTML = text.value
        ctn.style.display = 'block'
        sp.innerHTML = '0/200字'
        text.value = ''
        span.innerHTML = time
    }else{
        alert('请输入正确的文字')
    }
})






