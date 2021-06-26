// Width variable
var width = 12;
// Height vatibale
var height = "test";
function calculateArea(width, height)
{
  try
  {
    // Try to calculate area
    var area = width * height;
    // If it is a number return the area
    if (!isNaN(area))
    {
      return area;
    }
    // otherwise throw an error.
    else
    {
      throw new Error("CalculateArea() received invalid number");
    }
  }
  // If there was an error
  catch (e)
  {
    // Show error in console
    console.log(e.name + e.message);

    // Show users a message
    return "We were unable to calculate the area.";
  }
}
  // Try to show the area on the page
  document.getElementById("area").innerHTML = calculateArea(width, height);
