function ageGroup(age) {
    if (age >= 60) {
        return "senior adaults"  
    } 
    else if (age >= 40) {
        return "middle age adaults"
    }
    else if (age >= 20) {
        return "Young Adult"
    } 
    else if (age >= 13) {
        return "Teenager"
    }     
    else if (age >= 5) {
        return "child"
    }     
    else if (age >= 2) {
        return "Todler"
    }     
    else {
        return "Infant"
    }     
}

console.log (ageGroup(4));
  
