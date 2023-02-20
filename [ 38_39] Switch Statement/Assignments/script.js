console.log("_".repeat(20) + "taskOne" + "_".repeat(20));

let day = "   friday  ";
// You Need To Remove Spaces And Make First Letter Capital => Friday

let day2 = "Friday";
let day3 = "Saturday";
let day4 = "Sunday";
// Output => "No Appointments Available"

let day5 = "Monday";
let day6 = "Thursday";
// Output => "From 10:00 AM To 5:00 PM"

let day7 = "Tuesday";
// Output => "From 10:00 AM To 6:00 PM"

let day8 = "Wednesday";
// Output => "From 10:00 AM To 7:00 PM"

// let day = "World";
// Output => "Its Not A Valid Day"

switch (day) {
  case "   friday  ":
    day = day.trim()
    console.log(day[0].toUpperCase()+day.substring(1));
    break;
  case "Friday":
  case "Saturday":
  case "Sunday":
    console.log("No Appointments Available");
    break;
  case "Monday":
  case "Thursday":
    console.log("From 10:00 AM To 5:00 PM");
    break;
    case "Tuesday":
        console.log("From 10:00 AM To 6:00 PM");
        break;
        case "Wednesday":
          console.log("From 10:00 AM To 7:00 PM");
          break;
          case "World":
            console.log("Its Not A Valid Day");
            break;
  default:
    break;
}
