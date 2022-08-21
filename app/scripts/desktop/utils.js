const flattenMessage = (data) => {
    let output = undefined;
    
    try {
        const stream = data.name;
        const multiplexData = data.data;
        const nestedStream = multiplexData?.name;
        const nestedData = multiplexData?.data;
        const id = nestedData?.id;
        const method = nestedData?.method;
        const result = nestedData?.result;
        
        output = {};
        output = {...output, ...(stream ? { stream } : {})};
        output = {...output, ...(nestedStream ? { type: nestedStream } : {})};
        output = {...output, ...(method ? { method: method } : {})};
        output = {...output, ...(result ? { isResult: true } : {})};
    } catch {
        output = data;
    }
    
    return output;
};

module.exports = {
    flattenMessage
};