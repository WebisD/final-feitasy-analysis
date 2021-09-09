export const nodes = {
    shape: "ellipse",
    borderWidth: 2,
    borderWidthSelected: 3,
    font: {
        size: 16,
        face: "Arial",
    },
    
};

export const edges = {
    width: 2,
    color: { inherit: "from" },
    smooth: {
        type: "continuous"
    },
    font: {
        size: 16,
        face: "Arial"
    }
};

const options = { nodes, edges };

export default options;