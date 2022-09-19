function destinationMapper(str) {
  let points = 0;
  let destinations = [];
  const regex = /([=\/])[A-Z][A-Za-z]{2,}\1/g;
  const foundDestinations = str.match(regex);

  if (foundDestinations) {
    foundDestinations.forEach((el) => {
      el = el.substr(1, el.length - 2);
      points += el.length;
      destinations.push(el);
    });
  }

  console.log(`Destinations: ${destinations.join(", ")}`);
  console.log(`Travel Points: ${points}`);
}
// destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
destinationMapper("ThisIs some InvalidInput");
