/*
https://en.wikipedia.org/wiki/Line%E2%80%93line_intersection#Given_two_points_on_each_line

*/


function segments(x1, x2, x3, x4, y1, y2, y3, y4){     
    /* 
    t = (( x1 - x3) (y3 - y4) - (y1 - y3) (x3 - x4)) 
                        / 
         (x1 - x2) (y3 - y4) - (y1 - y2) (x3 - x4)
     
    u = (( x1 - x3) (y1 - y2) - (y1 - y3) (x1 - x2)) 
                        / 
        (x1 - x2) (y3 - y4) - (y1 - y2) (x3 - x4)
    */


    //equation above split up
    tNumerator = (x1 - x3)*(y3 - y4) - (y1 - y3)*(x3 - x4)
    uNumerator = (x1 - x3)*(y1 - y2) - (y1 - y3)*(x1 - x2)

    denominator = (x1 - x2)*(y3 - y4) - (y1 - y2)*(x3 - x4)

    //equaiton put together
    t = tNumerator/denominator
    u = uNumerator/denominator

    //points given point1x = x1, x2  point1y = y1, y2
    
    
    //points given point2x = x3, x4  point2y = y3, y4   
    point2x = (x3 + u*(x4 - x3))
    point2y = (y3 + u*(y4 - y3))

    if(denominator === 0){
        return null
    } else if(0 < t <= 1 && 0 <u<=1){
        point1x = (x1 + t*(x2 - x1))
        point1y = (y1 + t*(y2 - y1))
        return(point1x, point1y)
    } else {
        console.log("IDK BRO")
    }
}

segments(0, 5, 5, 2, 0, 6, 6, 2)
segments(8, 3, 6, 6, 5, 5, 7, 3)
segments(0, 8, 0, 0, 0, 0, 0, 7)