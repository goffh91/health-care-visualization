/* eslint-disable no-extend-native */

/**
 * @prototype Number
 * 
 */
Number.prototype.format = function() {
    if (this === 0) {
        return 0;
    }
    return Number(this)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
