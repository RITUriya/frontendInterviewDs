//Coding Ques: There is a bus station. tell me how many min number of bus lanes will be there if there is scheduledId (unique), inTime of bus, outTime of bus already given.

//sol1:
const numOfRows = (arr) => {
  let arrayOfTrainStation = [];
  let activebuses = 0;
  let maxbus = 0;

  for (let i = 0; i < arr.length; i++) {
    arrayOfTrainStation.push({ time: arr[i].inTime, type: "arrive" });
    arrayOfTrainStation.push({ time: arr[i].outTime, type: "depart" });
  }
  arrayOfTrainStation.sort((a, b) => {
    if (a.time == b.time) {
      return a.type == "depart" ? -1 : 1;
    }
    return a.time - b.time;
  });
  console.log(arrayOfTrainStation);

  for (const e of arrayOfTrainStation) {
    if (e.type == "arrive") {
      activebuses++;
      console.log("21 ", activebuses, maxbus);
      maxbus = Math.max(maxbus, activebuses);
    } else {
      activebuses--;
      console.log("25", activebuses, maxbus);
    }
  }
  console.log(maxbus);
};
numOfRows([
  { scheduledId: 1, inTime: 9.0, outTime: 9.3 },
  { scheduledId: 2, inTime: 9.4, outTime: 10.3 },
  { scheduledId: 3, inTime: 9.1, outTime: 11.4 },
  { scheduledId: 4, inTime: 10.2, outTime: 11.3 },
]);
