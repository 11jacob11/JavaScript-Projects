function Ride_Function() {
    var height, can_ride;
    height = document.getElementById("height").value;
    can_ride = (height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("ride").innerHTML = can_ride + " to ride.";
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + erik.Vehicle_Color + "-colored " + erik.Vehicle_Model + " manufactured in " + erik.Vehicle_Year;
}

function Hat(Style, Color, Material) {
    this.Hat_Style = Style;
    this.Hat_Color = Color;
    this.Hat_Material = Material;
    document.getElementById("New_and_This").innerHTML = "New hat registered!"
}

function addTwo(x, y) {
    result = x + y;
    return result;
}

function addThree(x, y, z) {
    result = addTwo(x, y) + z;
    document.getElementById("Nested_Function").innerHTML = "5 + 7 + 8 = " + result;
}