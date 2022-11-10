/*
https://en.wikipedia.org/wiki/Line%E2%80%93line_intersection#Given_two_points_on_each_line
Ashley Mills 
11/10/2022
*/


function segments(x1, x2, x3, x4, y1, y2, y3, y4){     
    /* 
    Equation Logic 
    t = (( x1 - x3) (y3 - y4) - (y1 - y3) (x3 - x4)) 
                        / 
         (x1 - x2) (y3 - y4) - (y1 - y2) (x3 - x4)
     
    u = (( x1 - x3) (y1 - y2) - (y1 - y3) (x1 - x2)) 
                        / 
        (x1 - x2) (y3 - y4) - (y1 - y2) (x3 - x4)
    */


    //equation above split up
    tNumerator = ((x1 - x3)*(y3 - y4)) - ((y1 - y3)*(x3 - x4))
    tDenominator = ((x1 - x2)*(y3 - y4)) - ((y1 - y2)*(x3 - x4))

    t = tNumerator/tDenominator

    //equation above split up
    uNumerator = ((x1 - x3)*(y1 - y2)) - ((y1 - y3)*(x1 - x2))
    uDenominator = ((x1 - x2)*(y3 - y4)) - ((y1 - y2)*(x3 - x4))

    //equaiton put together
    u = uNumerator/uDenominator

    // 0 < t <= 1 && 0 < u <= 1
    if(tDenominator === 0){
        return null
    } else if (uDenominator === 0){
        return null
    } else if( 0 < t <= 1 && 0 < u <= 1){
        //points given point1x = x1, x2  point1y = y1, y2
        point1x = (x3 + u * (x3 - x4))
        point1y = (y3 + u * (y4 - y3))

        return point1x, point1y
    } else {
        console.log("IDK BRO")
    }
}


//TESTS
segments(0, 5, 5, 2, 0, 6, 6, 2) //(5,6)
segments(8, 3, 6, 6, 5, 5, 7, 3) //(6,5)
segments(0, 8, 0, 0, 0, 0, 0, 7) //(0,0)
segments(0, 0, 0, 0, 0, 0, 0, 0) //(null)
segments(0, 3, 4, 5, 7, 2, 4 ,6) //(5,2)
segments(0, 0, 0, 0, 1, 1, 1, 1) // (null)