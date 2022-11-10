/*
                x1  y1   x1 y1  x1 y1  x1 y1
//let lineOne = [(0,8), (5,8), (5,3), (2,3)]

                x2  y1   x1 y1  x1 y1  x1 y1
//let lineTwo = [(7,0), (7,6), (3,6), (3,2)]

y1 = m1x + b1
y2 = m2x + b2

want to find when y1 = y2
so m1x+b1 === m2x+ b2

solve for x

m2x - m1x = b1 - b2
    x (m2 - m1 ) = b1 - b2
    x = b1 - b2 / m2 - m1 
                A           B
where    m1 = y2 - y1 / x2 - x1
                C           D
and      m2 = y4 - y3 / x4 - x3 


 */

/*
Given 2 line segments 
Line 1 (x1,y1), (x2,y2)
Line 2 (x3,y3), (x4,y4)
If they intersect Tell me the point (x,y)
at which they intersect 
 */
function lineInterception(x1, x2, x3, x4, y1, y2, y3, y4){
 // different points
    a = (x1 - x3)
    b = (y3 - y4)
    c = (y1 - y3)
    d = (x3 - x4)
    e = (x1 - x2)
    f = (y1 - y2)

    // line segment one
    t = ((a * b) - (c * d)) / ((e * d) - (f * d))

    //lien segment two
    u = ((a * f) - (c * e)) / ((e * b) - (f * d))

   //(a1, b1)
    a1 = (x1 + t *(x2 - x1))
    b1 = (y1 + t * (y2 - y1))

    // OR 
    // (a2, b2)
    a2 = (x3 + u * (x4 - x3))
    b2 = (y3 + u * (y4 - y3))

    if (t === 0 || u === 0) {
        console.log("Nope try again " + `${ t}` + `${ u}`)
    }else if (0 < t <= 1 && 0 < u <= 1){
        console.log("INTERSECTION " + `${ t}` + `${ u}`)
    } else {
        console.log("Nope try again " + `${ t}` + `${ u}`)
    }
    /*
    c = y4 - y3
    d = x4 - x3

    m1 = a /b
    m2 = c/d

    if(m1 === 0 || m2 === 0){
        //determines if it is parallel
        console.log("PARALLEL" + (`${m1}`) + (`${m2}`))
    } else if(m1 * m2 === -1){
        //perpendicular
        console.log (" PERPENDICULAR " + (`${m1}`) + (`${m2}`))
    } else if(){
        console.log(" FALSE " + ((`${m1}`) + " , " +  (`${m2}`)))
    }
    //return (a,b)
    */
}
/*
x1 y1   x2  y2        
[0,8]   [5,8] 

x3 y3   x4  y4  
[7,0]   [7,6]  


x1 y1     x2, y2
[5,3]      [2,3]

x3 y3     x4, y4
[3,6]     [3,2]    
*/

console.log(lineInterception(0, 5, 5, 2, 0, 6, 6, 2)) // false 0.6 0 
console.log(lineInterception(8, 3, 6, 6, 5, 5, 7, 3)) // true infinty 0.5
console.log(lineInterception(0, 8, 0, 0, 0, 0, 0, 7)) // 

/**
 * Resources: https://en.wikipedia.org/wiki/Line%E2%80%93line_intersection 
 */

