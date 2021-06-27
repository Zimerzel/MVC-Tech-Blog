var searchbtn = document.getElementById('search');
var titlebtn = document.getElementById('title');
var bodybtn = document.getElementById('body');

searchbtn.addEventListener('click',async function(){
    const data = await fetch('/api/post/',{
        method: 'POST',
        body: JSON.stringify({
            title: titlebtn.value,
            post_content: bodybtn.value,
        }),
        headers: { 'Content-Type': 'application/json' },
        
    });
    if(data.ok){
        console.log('post bin has been created');
    }
    else{
        console.log('not created')
    }

})