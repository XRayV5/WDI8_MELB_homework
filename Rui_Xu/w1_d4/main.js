//The Alamein line has the following stops: Flinders Street, Richmond, East Richmond, Burnley, Hawthorn, and Glenferrie.

//The Glen Waverly line has the following stops: Flagstaff, Melbourne Central, Parliament, Richmond, Kooyong and Tooronga.

//The Sandringham line has the following stops: Southern Cross, Richmond, South Yarra, Prahran, and Windsor.

//All 3 train lines intersect at Richmond, but there are NO other intersection points as trains run express.


var alamein = ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie'];
var glen_waverly = ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga'];
var sandringham = ['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor'];


//----------    Solution 1: The Cumbersome Way    -----------
//  Search orgin&destina1,in all 3 lines (check for richmond(multiple lines returned))
//    return the line contains Origin, the line contains destination
//      if line_Ori === line_destin then line_picked:Section(Oir,destin)
//         else if line_Ori !== line_destin then lineOri:Origin_to_richmond, lineDestin:richmond_to_Destin
//    !! Order: Compare the index to decide the order: if index_ori > index_destin: reverse, else sequencial
//              do this to every new sub_array
//      if same line: print out; if diff line: merge
//
//and return the line that contains origin and the section:seq
//

var stationMap = {
    "Alamein" : ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie'],
    "GlenWaverly" : ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga'],
    "Sandringham" : ['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor']
};
var intersection = 'Richmond';
var btns = ["origin","destin"];
/**Dropdown Menu Population**/
function dropDownInit(str){
  var drpDwns = $("#"+str);
    for(var k in stationMap){
      drpDwns.append("<div class='dropdown-content'><div class='lineDiv' name="+k+">"+k+"</div><div class='subdrpdwn'name="+k+"></div></div>");
      var line = stationMap[k];
      var stps = "";
      for(var i=0;i<line.length;i++){
        stps+="<div class='stpDiv' name="+str+">"+line[i]+"</div>";
        }
      $("#"+str+" .subdrpdwn[name="+k+"]").append(stps);
    }
}

function addEvents(str1,str2){
  $(".stpDiv[name="+str2+"]").on("click", function() {
    $("#"+str1).text($(this).text());
  });
}

dropDownInit("oriDrp");
dropDownInit("desDrp");
addEvents("origin","oriDrp");
addEvents("destin","desDrp");




$(".gobtn").on("click",function(){
//console.log($(".dropbtn")[0].textContent);
//console.log($(".dropbtn")[1].textContent);
//$(".dropbtn")[1].textContent
  var jpObj = journeyPlanner($(".dropbtn")[0].textContent,$(".dropbtn")[1].textContent,'Richmond');
  metroChick(jpObj);
});
/**journeyPlanner implementation**/
// SearchStation fucntion
function searchStation(station){
  //search for a station and return which line it's on.
  var query = RegExp(station);
  for(var k in stationMap){
      for(var i=0;i<stationMap[k].length;i++){
        var stp = stationMap[k];
        if(query.test(stp[i])){
          var line = k;
          //Flaw: The Great Richmond delima: when search Richmond, it will always
          //return Sandringham, as it is in the last iteration...
          //Have to mitigate it by if conditions: if(Richmond).
        }
      }
  }
  return line;
}
//singleJourney function
function singleJourney(ori,des,line){
  var stps = stationMap[line];
  var idxOri = stps.indexOf(ori);
  //console.log(idxOri);
  var idxDes = stps.indexOf(des);
  //console.log(idxDes);
  if(idxOri>idxDes){
      var journey = (stps.slice(idxDes,idxOri+1)).reverse();
  }else{
      var journey = stps.slice(idxOri,idxDes+1);
  }
  return journey;
}
//merge trip
function mergeTrip(tripA,tripB){
  //merge array tripA with tripB at the transfer station.
  tripA.pop();
  route = tripA.concat(tripB);
  return route;
}

//the winning shot
function journeyPlanner(origin,destination,intersection){
  var journey;
  var lineA;
  var lineB;
  var route;
  // the following conditions are the hot fix for The Great Richmond delima...
  if(origin===intersection){//destination===intersection
    lineB = searchStation(destination);
    lineA = lineB;
  }else if(destination===intersection){
    lineB = searchStation(origin);
    lineA = lineB;
  }else{
   lineA = searchStation(origin);
  //console.log(lineA);
   lineB = searchStation(destination);
  //console.log(lineB);
  }
  if(lineA===lineB){
    route = singleJourney(origin,destination,lineA);
  }else{
    var tripA = singleJourney(origin,intersection,lineA);
    var tripB = singleJourney(intersection,destination,lineB);
    console.log("A: "+tripA);
    console.log("B: "+tripB);
    route = mergeTrip(tripA,tripB);
  }
    journey = {'trip_1':lineA,'trip_2':lineB,'trip_route':route};
  return journey;
}



function pathPrinter(routeArr){
  var path="";
  while(routeArr.length>0){
    if(path===""){
      path+=routeArr.shift();
    }else{
      path+="--->"+routeArr.shift();
    }
  }
  return path;
}

function metroChick(journeyPlan){
  //She talks with a sexy voice...
  var stps = (journeyPlan['trip_route']).length;
  var getOn = (journeyPlan['trip_route'])[0];
  var getOff = (journeyPlan['trip_route'])[stps-1];
  var stopMap = pathPrinter(journeyPlan['trip_route']);
  if(journeyPlan['trip_1']===journeyPlan['trip_2']){
    console.log("You need to take "+journeyPlan['trip_1']+" line at "+getOn+" and get off at "+getOff+".");
    console.log("Stops: "+stopMap);
    $(".board").append("<div>Stops: "+stopMap+"</div>");
    $(".board").append("<div>You need to take "+journeyPlan['trip_1']+" line at "+getOn+" and get off at "+getOff+".</div>");
  }else{
    console.log("You need to take "+journeyPlan['trip_1']+" line at "+getOn+" and transfer to "+journeyPlan['trip_2']+" line at Richmond and get off at "+getOff+".");
    console.log("Stops: "+stopMap);
    $(".board").append("<div>You need to take "+journeyPlan['trip_1']+" line at "+getOn+" and transfer to "+journeyPlan['trip_2']+" line at Richmond and get off at "+getOff+".</div>");
    $(".board").append("<div>Stops: "+stopMap+"<div>");
  }
}

//metroChick(journeyPlanner("Tooronga","Glenferrie","Richmond"));
console.log(journeyPlanner("Tooronga","Glenferrie","Richmond"));

/*
Test cases:
console.log(singleJourney('Burnley','Flinders Street','alamein'));
console.log(singleJourney('Richmond','Flagstaff','glen_waverly'));
var test = singleJourney('Richmond','Flagstaff','glen_waverly');

console.log(searchStation("Flinders Street"));
console.log(searchStation("Southern Cross"));
console.log(searchStation("East Richmond"));
*/


//
// //---------  Solution 2 ---------------
// var stationMapSplit = {
//   "Alamein" : ['Flinders Street', 'Richmond'],
//   "Richmond Alamein" : ['Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie'],
//   "Glen Waverly" : ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond'],
//   "Richmond Glen Waverly" : ['Richmond','Kooyong', 'Tooronga'],
//   "Sandringham" : ['Southern Cross', 'Richmond'],
//   "Richmond Sandringham" : ['Richmond','South Yarra', 'Prahran', 'Windsor']
// };
//
//
// //func that will preprocess the existing
// //
//
// function cardisianStation(lineList){
//   var routeMap;
//   var baseArr;
//   var counter=0;
//   for(var k in lineList){
//     if(counter%2){
//       baseArr.push(lineList[k]);
//     }else{
//       baseArr.push(lineList[k].reverse());
//     }
//   }
//   return routeMap;
// }
// //singleJourney()  &  mergeTrip()
// function searchStation_(station){
//   //search for a station and return which line it's on.
//   var query = RegExp(station);
//   for(var k in stationMapSplit){
//       for(var i=0;i<stationMapSplit[k].length;i++){
//         var stp = stationMapSplit[k];
//         if(query.test(stp[i])){
//           var line = k;
//           //Flaw: The Great Richmond delima: when search Richmond, it will always
//           //return Sandringham, as it is in the last iteration...
//           //Have to mitigate it by if conditions: if(Richmond).
//         }
//       }
//   }
//   return line;
// }
//
// function singleJourney_(ori,des,line){
//   var stps = stationMapSplit[line];
//   var idxOri = stps.indexOf(ori);
//   //console.log(idxOri);
//   var idxDes = stps.indexOf(des);
//   //console.log(idxDes);
//   if(idxOri>idxDes){
//       var journey = (stps.slice(idxDes,idxOri+1)).reverse();
//   }else{
//       var journey = stps.slice(idxOri,idxDes+1);
//   }
//   return journey;
// }
//
//
// console.log(searchStation_('Kooyong'));
