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

const resetTime = ()=>
{
   count = 60;
   document.querySelector("#count").textContent = '60';
   clearInterval(id);

}



let myModal = document.querySelector(".myModal");
setTimeout(()=>{
    myModal.innerHTML = `
    <div class="modal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    `
},5000);