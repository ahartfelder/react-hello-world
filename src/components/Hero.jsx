export default function Hero({heroName}) {
    if(heroName === 'Joker') {
        throw new Error('Not a hero!')
    }
    return (
        <div>
            {heroName}
        </div>
    )
}