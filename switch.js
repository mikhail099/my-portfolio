let day = 5; // Assume 3 represents Wednesday

switch(day) {
    case 1:
//console.log("Monday");
        break;
    case 2:
       // console.log("Tuesday");
        break;
    case 3:
        //console.log("Wednesday");
        break;
    case 4:
      //  console.log("Thursday");
        break;
    case 5:
      //  console.log("Friday");
        break;
    default:
      // console.log("Weekend or Invalid day");
}

//using switch without a break
let fruit = "Apple";

switch (fruit) {
    case "apple":
        console.log("Apples are red.");
        
    case "banana":
      console.log("Bananas are yellow.");
        break;
    case "orange":
        console.log("Oranges are orange.");
        break;
    default:
        console.log("Unknown fruit.");
}


let num = 5;

switch (num) {
	case 0:
		console.log("Number is zero.");
		break;
	case 1:
		console.log("Nuber is one.");
		break;
	case 2:
		console.log("Number is two.");
		break;
	default:
		//console.log("Number is greater than 2.");
};

//break is used to stop execution after match,without it the execution falls through to the next case
let dig = 1;

switch (dig) {
    case 1:
       // console.log("Number is one.");
    case 2:
       // console.log("Number is two.");
}

//grouping cases
let grade = "B";

switch (grade) {
    case "A":
    case "B":
       // console.log("Great job!");
        break;
    case "C":
       // console.log("Good effort!");
        break;
    default:
        //console.log("Keep trying!");
}
