
function runPlugin() {
    let selectedElements = figma.currentPage.selection
    if (selectedElements === 0) {
        figma.closePlugin("No element selected")
        return
    }
    if (selectedElements > 1) {
        figma.closePlugin("Selected multiple elements. please select one element")
        return
    }
    console.log(selectedElements)

    // figma.showUI(__html__)
    figma.showUI(__html__);
    figma.ui.resize(500, 700);

    // figma.closePlugin()
}

runPlugin()


figma.ui.onmessage = message => {
    console.log(message)
}