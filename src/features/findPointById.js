const findPointById = (points, id) => {
    return points.find(point => point.id === id);
}

export default findPointById;