import React from "react"

export default function Column() {
    const items = [
        {
            id: 1,
            name: 'Car',
            description: '4x4'
        },
        {
            id: 2,
            name: 'Bike',
            description: 'Mountain'
        },
        {
            id: 3,
            name: 'Plane',
            description: 'Single Engine'
        },
    ]
    return (
        <>
            <td>Name</td>
            <td>Andreas</td>
        </>
    )
}