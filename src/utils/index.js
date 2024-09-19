/**
 * esta funcion calcula el precio total de la orden
 * @param {array} product cartProduct:Array de objetos  
 * @returns {number} precio total
 */

export const totalPrice = (products) => {
    let sum = 0
    products.forEach(product => sum += product.price)
    return sum
}