console.log(`JS connected`);

function main(){
    let message = document.querySelector("#message");
    let sbmit = document.querySelector("#sbmit");
    let show_result_box = document.querySelector(".show_result_box");

    sbmit.addEventListener('click', ()=>{
       
        if(message.value===''){
            show_result_box.textContent = 'empty';
            
        }else{
            show_result_box.textContent = message.value;
            message.value = "";
        }

        console.log("subed")
    })


    console.log(show_result_box)
};
main();