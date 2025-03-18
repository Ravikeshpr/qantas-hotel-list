export const sortArrayOfObjects = (data = [], order, propertyPath) => {
    const getNestedValue = (obj, path) => {
        return path.split(".").reduce((acc, part) => acc && acc[part], obj);
    };

    return data.sort((a, b) => {
        const aValue = getNestedValue(a, propertyPath);
        const bValue = getNestedValue(b, propertyPath);

        if (order === "asc") {
            return aValue - bValue;
        } else {
            return bValue - aValue;
        }
    });
};
