const robot = require("robotjs")
const ask = require("./getInput")

robot.setMouseDelay(2);

const main = async() => {

    await ask("Enter to get start position :")
    let startPosition = robot.getMousePos()

    await ask("Enter to get end position :")
    let endPosition = robot.getMousePos()

    await ask("Enter to get start Block position :")
    let startBlock = robot.getMousePos()

    await ask("Enter to get end Block position :")
    let endBlock = robot.getMousePos()

    let blockWidth = endBlock.x - startBlock.x
    let blockHeight = endBlock.y - startBlock.y

    console.log(blockHeight, blockWidth);

    console.log("startPosition is at x:" + startPosition.x + " y:" + startPosition.y)
    console.log("endPosition is at x:" + endPosition.x + " y:" + endPosition.y)

    const numbers = 50

    for (let number = 0; number < numbers; number++) {
        
        for (let y = 0; y < 5; y++) {
        
            let positionY = ( startPosition.y + blockHeight / 2 ) + (blockHeight * y)
    
            for (let x = 0; x < 5 ; x++){
    
                let positionX = (startPosition.x + blockWidth / 2) + ( blockWidth * x )
                robot.moveMouse(positionX, positionY)
                robot.mouseClick()
    
            }
            
        }

        console.log("round", number + 1)
        
    }

}

main()