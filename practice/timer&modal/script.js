let count = document.querySelector("#count").textContent;
let id;

const startTime = ()=>{
    id = setInterval(()=>{
        if(count == 0)
        {
            clearInterval(id);
            return;
        }
        else
        {
            count--;
            document.querySelector("#count").textContent = count>9 ? count: '0'+count;
        }
    },1000);
}

const StopTime = ()=>
{
   clearInterval(id);
}