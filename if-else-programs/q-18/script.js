// Program 18: Calculate the area based on the shape type

let shape = 'circle'
let area = 0;

if(shape === 'circle')
{
    let radius = 4;
    area = Math.PI * radius * radius;
    document.write("Area of the circle is: " + area.toFixed(2));
} else if(shape === "rectange")
{
    let length = 10;
    let width = 3;
    area = length * width;
    document.write("Area of the rectangle is: " + area);
}
else
{
    document.write("shape is not recognized.");
}