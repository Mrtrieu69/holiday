const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

const getDate = () => {
    const date = new Date()
    let year = date.getFullYear()
    let day = date.getDate()
    let month = date.getMonth()
    let hour = date.getHours()
    let minute = date.getMinutes()

    return `${months[month]} ${day}, ${year} at ${hour < 12 ?  `${hour}:${minute} am` : `${hour % 12}:${minute} pm`}`
}

export default getDate