
function age() {
    let btn= document.getElementById('btn');
    let sum=Math.floor(80+(25)*Math.random());
    btn.style.backgroundColor = "green";
    return sum+" years";  
}
age()
