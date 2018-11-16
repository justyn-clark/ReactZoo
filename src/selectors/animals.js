// getVisibleAnimals
export default (animals, { text, sortBy, startYear, endYear }) => {
    return animals.filter(animals => {
        const textMatch =
            animals.name.toLowerCase().includes(text.toLowerCase()) ||
            animals.description.toLowerCase().includes(text.toLowerCase())

        const startYearMatch = typeof startYear !== 'number' || startYear <= animals.published
        const endYearMatch = typeof endYear !== 'number' || animals.published <= endYear

        return textMatch && startYearMatch && endYearMatch
    }).sort((animals1, animals2) => {
        if (sortBy === 'name') {
            return animals1.name.localeCompare(animals2.name)
        } else if (sortBy === 'published') {
            return animals1.published < animals2.published ? -1 : 1
        }
    })
}
