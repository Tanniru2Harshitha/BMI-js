do{
mass=parseFloat(prompt("Enter your mass in kg?"))
height=parseFloat(prompt("Enter your height in cms"))
bmi=mass/(height/100)**2
if(bmi<18.5){
    alert("you are underweight")
}
else if(bmi<25){
    alert("you are normal bmi")
}
else if(bmi<30){
    alert("you are overwright")
}
else{
    alert("you are obese")
}
i=parseInt(prompt("Enter 1, if you want to calculate one more bmi: "))
if(i==1){
    ++i
}
else{
    break
}
}while(i==1)
