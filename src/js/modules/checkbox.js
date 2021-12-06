const checkBox = ()=>{
    const checkBox = document.querySelectorAll('.setting-main__item');

    checkBox.forEach(item=>{
        const input = item.querySelector('input');
        if(input.checked == true){
            item.classList.add('_active');
        }

        item.addEventListener('click',function(e){
            if(item.classList.contains('_active')){
                input.checked = false;
                console.log("Set fasle");
            }
            else{
                input.checked = true;
                console.log("Set true");
            }
            item.classList.toggle('_active');
        });
        
    });

};


export default checkBox;