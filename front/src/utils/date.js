export function toDate(d){
    const date = new Date(d)
    const yyyy = date.getFullYear().toString()
    const mm = (date.getMonth() + 1).toString()
    const dd = date.getDate().toString()
    const hh = date.getHours().toString()
    const min = date.getMinutes().toString()
    return dd + '-' + mm + '-' + yyyy + ' ' + hh + ':' + min
}