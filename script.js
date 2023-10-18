const endDate="20 Oct 2023 10:00 AM"
// document.getElementById("endDate").innerText=endDate;
const inputs=document.querySelectorAll("input")
const clock=()=>{
    const end=new Date(endDate)
    const now=new Date();
    // console.log(end,now);
    const diff=(end-now)/1000; //difference in seconds
    // console.log(diff);
    //convert to days
    inputs[0].value=Math.floor(diff/3600/24);
    //convert to hours after the days
    inputs[1].value=Math.floor((diff/3600)%24);
    //to minutes
    inputs[2].value=Math.floor((diff/60)%60);
    //to seconds
    inputs[3].value=Math.floor((diff)%60);
}
clock();
setInterval(() => {
    clock();
}, 1000);

// 1 day=24hours
// 1hr=60minutes
// 60min=3600sec