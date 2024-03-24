// Function to calculate NHIF deduction 
function nhif(salary) { 
    
    if (salary <= 5999) {
        return 150; 
    } else if (salary >= 6000 && salary <= 7999) {
        return 300; 
    } else if (salary >= 8000 && salary <= 11999) {
        return 400; 
    } else if (salary >= 12000 && salary <= 14999) {
        return 500; 
    } else if (salary >= 15000 && salary <= 19999) {
        return 600; 
    } else if (salary >= 20000 && salary <= 24999) {
        return 750; 
    } else if (salary >= 25000 && salary <= 29999) {
        return 850;
    } else {
        return 1700; 
    }
}

// Function to calculate PAYE 
function payeDeduction(salary) {
    let paye;

    
    if (salary <= 24000) {
        paye = salary * (10 / 100); 
    } else if (salary >= 24001 && salary <= 32333) {
        paye = salary * (25 / 100);
    } else if (salary >= 32334 && salary <= 500000) {
        paye = salary * (30 / 100); 
    } else if (salary > 500000 && salary <= 800000) { 
        paye = salary * (32.5 / 100);
    } else {
        paye = salary * (35 / 100); 
    }

    return paye; // calculated PAYE deduction
}

// Function to calculate net salary
function netsalary(salary) {
    const nssf = salary * (6 / 100); 
    console.log("NSSF:", nssf);

    const levy = salary * (1.5 / 100); 
    console.log("Levy:", levy);

    const paye = payeDeduction(salary); 
    console.log("PAYE:", paye);

    const nhifDeduction = nhif(salary); 
    console.log("NHIF:", nhifDeduction);
    
    // Calculate net salary after deducting NSSF, PAYE, levy, and NHIF
    const netSalary = salary - nssf - paye - levy - nhifDeduction;
    console.log("Net Salary:", netSalary);
}

// Example
netsalary(100000); // Calculate net salary for a given salary amount
