const months = [31,28,31,30,31,30,31,31,30,31,30,31];
//my birth date
let birthDay = document.getElementById('Day');
let birthMonth = document.getElementById('Month');
let birthYear = document.getElementById('Year');
let Inputs = document.getElementById('input');

let todayDate = new Date();//the today's date

//the today's year,month,day
let todayDay = todayDate.getDate();
let todayMonth = 1 + todayDate.getMonth();
let todayYear = todayDate.getFullYear();

//the result
let myBirthInYears = document.getElementById('yearDash');
let myBirthInMonths = document.getElementById('monthDash');
let myBirthInDays = document.getElementById('dayDash');

let bday;
let bmonth;
let byear;


button.addEventListener('click',check);

function check(){
if(birthDay.value===''||birthMonth.value===''||birthYear.value===''||birthDay.value>31||birthMonth.value>12||birthYear.value>2023){
    if(birthDay.value===''){
      showError(birthDay,'This field is required');
    } 
    else{
       anotherError(birthDay);
    }

    if(birthMonth.value==='' ){
       showError(birthMonth ,'This field is required');
    }
    else{
      anotherError(birthMonth);
    }
 
    if(birthYear.value===''){
      showError(birthYear,'This field is required');
    }
    else{
      anotherError(birthYear);
    }

    if(birthDay.value>31){
      isValid(birthDay ,'Must be a valid day');
    }
    if(birthMonth.value>12){
      isValid(birthMonth ,'Must be a valid month');
    }
 
    if(birthYear.value>2023){
       isValid(birthYear ,'Must be in the past');
    }
}
else{
     success(birthDay,birthMonth,birthYear);
    ageCalc();
}
}

function anotherError(input){
    const InputAge = input.parentElement;
    InputAge.className = 'inputAge error';
    const errorMessage = InputAge.querySelector('small');
    errorMessage.innerText = '';
}

function showError(input , message){
    const InputAge = input.parentElement;
    InputAge.className = 'inputAge error';
    const errorMessage = InputAge.querySelector('small');
    errorMessage.innerText = message;

    }

function isValid(input,message){
    const InputAge = input.parentElement;
    InputAge.className = 'inputAge error';
    const errorMessage = InputAge.querySelector('small');
    errorMessage.innerText = message;
}

function success(input1,input2,input3){
    const InputAge1 = input1.parentElement;
    InputAge1.className = 'inputAge success';
    const successMessage1 = InputAge1.querySelector('small');
    successMessage1.innerText = '';

    const InputAge2 = input2.parentElement;
    InputAge2.className = 'inputAge success';
    const successMessage2 = InputAge2.querySelector('small');
    successMessage2.innerText = '';

    const InputAge3 = input3.parentElement;
    InputAge3.className = 'inputAge success';
    const successMessage3 = InputAge3.querySelector('small');
    successMessage3.innerText = '';
}

function ageCalc(){

    checkingYear(todayYear);


    byear = Number(todayYear) - Number(birthYear.value);
    if(todayMonth>=birthMonth.value){
        bmonth = Number(todayMonth) - Number(birthMonth.value);
    }
    else{
        byear--;
        bmonth = 12 + Number(todayMonth) - Number(birthMonth.value);
    }
    if(todayDay>=birthDay.value){
        bday = Number(todayDay) - Number(birthDay.value);
    }
    else{
        bmonth--;
        bday = months[Number(todayMonth) - 2] + Number(todayDay) - Number(birthDay.value);
        if(bmonth < 0){
            bmonth = 11;
            byear --;
        }
    }
    displayTheResult(byear,bmonth,bday);
}

function checkingYear(year){
    if(year % 4==0 || (year % 100 == 0 && year % 400 == 0)){
        months[1] = 29;
    }
    else{
        months[1] = 28;
    }
}

function displayTheResult(Byear,Bmonth,Bday) {
    myBirthInYears.textContent = Byear;
    myBirthInMonths.textContent = Bmonth;
    myBirthInDays.textContent = Bday;
}