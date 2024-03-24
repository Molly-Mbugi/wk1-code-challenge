function nhif(salary){ 
    if(salary <= 5999){
        return 150;
    }
    else if(salary >= 6000 && salary <= 7999){
        return 300;
    }
    else if(salary >= 8000 && salary <= 11999){
        return 400;
    }
    else if(salary >=12000 && salary<= 14999){
        return 500;
    }
    else if(salary >=15000 && salary<= 19999){
        return 600;
    }
    else if(salary >=20000 && salary<= 24999){
        return 750; 
    }    
    else if(salary >=25000 && salary<= 29999){
            return 850;
    }

  else {
    return 1700;
  }
    
}
function payeDeduction(salary) {
    let paye;

    if (salary <= 24000) {
        paye = salary * (10 / 100);
    } else if (salary >= 24001 && salary <= 32333) {
        paye = salary * (25 / 100);
    } else if (salary >= 32334 && salary <= 500000) {
        paye = salary * (30 / 100);
    }else if(salary <=500001 && salary<=800000){
        paye = salary*(32.5/100);
    
    } else {
     paye=salary*(35/100)
    }
}


function netsalary(salary) {
    const nssf = salary * (6/100); 
    console.log(nssf);
    const levy = salary * (1.5/100);
    console.log(levy);
    const netSalary = salary - nssf - payeDeduction(salary)- levy - nhif(salary);
    console.log(nhif(salary));
    console.log(netSalary);
}

netsalary(100000);
