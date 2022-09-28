
let selectedElements = figma.currentPage.selection

function runPlugin(): void {
    var selectedElements: readonly SceneNode[] = figma.currentPage.selection
    if (selectedElements.length === 0) {
        figma.closePlugin("No element selected")
        return
    }
    if (selectedElements.length > 1) {
        figma.closePlugin("Selected multiple elements. please select one element")
        return
    }
    for (const element of selectedElements) {
        const id: number = element.id ? element.id : 0
        const name: string = element.name ? element.name : ""
        const type: string = element.type ? element.type : ""
        const leftPosition: number = element.x ? element.x : 0
        const topPosition: number = element.y ? element.y : 0
        const width: number = element.width ? element.width : 0
        const height: number = element.height ? element.height : 0
        const cornerRadius: number = element?.cornerRadius ? element.cornerRadius : 0
        const opacity: number = element?.opacity ? element.opacity : 1
        const fills: number = element?.fills ? element.fills : []
        // console.log(`fills:- ${fills} `)
        // console.log(`fills:- ${element?.cornerRadius} `)
        console.log(element.type)
        console.log(fills)
        console.log(element)
    }
    // console.log(selectedElements)

    figma.showUI(__html__)
    figma.ui.resize(500, 700)
    
    // figma.closePlugin()

}

runPlugin()


figma.ui.onmessage = message => {
    console.log(message)
}