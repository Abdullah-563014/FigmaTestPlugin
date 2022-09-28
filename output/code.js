"use strict";
let selectedElements = figma.currentPage.selection;
function runPlugin() {
    var selectedElements = figma.currentPage.selection;
    if (selectedElements.length === 0) {
        figma.closePlugin("No element selected");
        return;
    }
    if (selectedElements.length > 1) {
        figma.closePlugin("Selected multiple elements. please select one element");
        return;
    }
    for (const element of selectedElements) {
        const id = element.id ? element.id : 0;
        const name = element.name ? element.name : "";
        const type = element.type ? element.type : "";
        const leftPosition = element.x ? element.x : 0;
        const topPosition = element.y ? element.y : 0;
        const width = element.width ? element.width : 0;
        const height = element.height ? element.height : 0;
        const cornerRadius = (element === null || element === void 0 ? void 0 : element.cornerRadius) ? element.cornerRadius : 0;
        const opacity = (element === null || element === void 0 ? void 0 : element.opacity) ? element.opacity : 1;
        const fills = (element === null || element === void 0 ? void 0 : element.fills) ? element.fills : [];
        // console.log(`fills:- ${fills} `)
        // console.log(`fills:- ${element?.cornerRadius} `)
        console.log(cornerRadius);
        console.log(element.type);
        console.log(fills);
        console.log(element);
        const values = {
            id, name, type, leftPosition, topPosition, width, height, cornerRadius, opacity, fills
        };
        figma.ui.postMessage(values);
    }
    // figma.closePlugin()
}
figma.showUI(__html__);
figma.ui.resize(1600, 700);
runPlugin();
// figma.closePlugin()
figma.ui.onmessage = message => {
    console.log(message);
};
