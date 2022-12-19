const isTaskValid = ({resume, description}) => {
    return resume !== "" && description !== "";
}

module.exports = {
    isTaskValid
}