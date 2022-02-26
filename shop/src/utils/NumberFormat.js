
export const NumberFormat = {
    formatMoney
}
function formatMoney(data) {
    return data.toLocaleString('vi-VN', {
        style: 'currency',
        currency: 'VND'
    })
};