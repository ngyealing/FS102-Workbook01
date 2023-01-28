function doStuff(number) {

    let halfOf = number / 2;
    let squareOf = halfOf * halfOf;
    let areaOf = Math.PI * squareOf;
    let percentageOf = (squareOf / areaOf) * 100;

    console.log(`Half: ${halfOf}`);
    console.log(`Square: ${squareOf}`);
    console.log(`Area: ${areaOf}`);
    console.log(`Percentage: ${percentageOf}%`);
}

// Test doStuff function 
doStuff(10);
doStuff(5);
