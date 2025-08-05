

        let inputbox=document.querySelector("#passwordInput");
        let eyeButton=document.querySelector("#eye");
        let eyeicon=document.querySelector("#eyeicon");

        eyeButton.addEventListener("click",()=>{

            if(inputbox.type=="password"){
                inputbox.type="text";
                // eyeButton.innerText="Hide";
                eyeicon.className="fa-solid fa-eye-slash";
            }else if(inputbox.type=="text"){
                inputbox.type="password";
                eyeicon.className="fa-solid fa-eye";
            }
            
        })



