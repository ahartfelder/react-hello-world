import Person from "./Person"

export default function NameList() {
    // const names = ['Andreas', 'Mônika', 'Carlos']
    const persons = [
        {
            id: 1,
            name: 'Andreas',
            age: 35
        },
        {
            id: 2,
            name: 'Mônika',
            age: 35
        },
        {
            id: 3,
            name: 'Carlos',
            age: 38
        }
    ]
    const personList = persons.map(person => <Person key={person.id} person={person} />)
    return (
        <div>
            {personList}
        </div>
    )
}