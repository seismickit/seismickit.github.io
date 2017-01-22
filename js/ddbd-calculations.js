/**
 * Created by maximmillen on 23/01/17.
 */

function calculateDDBD() {
  console.log("triggered calculate roi");
  var theForm = document.forms["ddbd-calculator"];
  var stories = theForm.elements["stories"].value;
  var storeyMass = theForm.elements["storey-mass"].value;
  var storeyHeight = parseFloat(theForm.elements["storey-height"].value);
  console.log("stories: ", stories);


  document.getElementById('base-shear').innerHTML = "Base shear: " + 234 + " kN";
  document.getElementById('ductility').innerHTML = "Ductility: " + 3.2;
  document.getElementById('base-moment-over-strength').innerHTML = "Base moment over-strength: 1300kNm";

  console.log("COMPLETE");

}
