/*
Given 2 line segments 
Line 1 (x1,y1), (x2,y2)
Line 2 (x3,y3), (x4,y4)
If they intersect Tell me the point (x,y)
at which they intersect 
 */
function lineInterception(x1, x2, x3, x4, y1, y2, y3, y4){
    //Points x & y
    a = (x1 - x2)
    b = (x3 - x4)
    c = (y1 - y2)
    d = (y3 - y4)

    //advnace math points lol 
    e = ((x1 * y2) - (y1 * x2))
    f = ((x3 * y4) - (y3 * x4))

    //ax = ((e * b) - (a * f)) / ((a * d) - (c * b))
    //by = ((e * d) - (c * f)) / ((a * d) - (c * b))
    a1 = ((e * b) - (a * f))
    b1 = ((e * d) - (c * f))
    c1 = ((a * d) - (c * b))

    ax = a1/c1
    b2 = b1/c1

   console.log(ax)
   console.log(b2)

}

//console.log(lineInterception(0, 5, 5, 2, 0, 6, 6, 2)) // True 6
//console.log(lineInterception(8, 3, 6, 6, 5, 5, 7, 3)) // true 6,5
console.log(lineInterception(0, 8, 0, 0, 0, 0, 0, 7)) // 

/**
 * Resources: https://en.wikipedia.org/wiki/Line%E2%80%93line_intersection 
 */

