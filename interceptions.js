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

function lineInterception(x1, x2, x3, x4, y1, y2, y3, y4){
    a = y2 - y1 
    b = x2 - x1
    c = y4 - y3
    d = x4 - x3

    m1 = a /b
    m2 = c/d

    if(m1 === 0 || m2 === 0){
        console.log("FALSE" + (`${m1}`) + (`${m2}`))
    } else if(m1 === m2){
        console.log ((`${m1}`) + (`${m2}`))
    } else {
        console.log(" FALSE " + ((`${m1}`) + " , " +  (`${m2}`)))
    }
    //return (a,b)
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

console.log(lineInterception(0, 5, 5, 2, 0, 6, 6, 2)) // false
console.log(lineInterception(0, 5, 5, 2, 0, 6, 6, 2))



