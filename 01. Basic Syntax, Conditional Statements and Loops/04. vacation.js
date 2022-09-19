function vacation(number, type, day) {
  let totalPrice = 0;

  if (type === "Students") {
    switch (day) {
      case "Friday":
        totalPrice = number * 8.45;
        break;
      case "Saturday":
        totalPrice = number * 9.8;
        break;
      case "Sunday":
        totalPrice = number * 10.46;
        break;
      default:
        break;
    }

    if (number >= 30) {
      totalPrice *= 0.85;
    }
  } else if (type === "Business") {
    if (number >= 100) {
      switch (day) {
        case "Friday":
          totalPrice = (number - 10) * 10.9;
          break;
        case "Saturday":
          totalPrice = (number - 10) * 15.6;
          break;
        case "Sunday":
          totalPrice = (number - 10) * 16;
          break;
        default:
          break;
      }
    } else {
      switch (day) {
        case "Friday":
          totalPrice = number * 10.9;
          break;
        case "Saturday":
          totalPrice = number * 15.6;
          break;
        case "Sunday":
          totalPrice = number * 16;
          break;
        default:
          break;
      }
    }
  } else if (type === "Regular") {
    switch (day) {
      case "Friday":
        totalPrice = number * 15;
        break;
      case "Saturday":
        totalPrice = number * 20;
        break;
      case "Sunday":
        totalPrice = number * 22.5;
        break;
      default:
        break;
    }

    if (number >= 10 && number <= 20) {
      totalPrice *= 0.95;
    }
  }

  console.log(`Total price: ${totalPrice.toFixed(2)}`)
}

vacation(30, "Students", "Sunday");
