const winPercentage = (wins, losses) => {
    const games = wins + losses;
    const percentage = (wins / games) * 100;
    return percentage;
}

console.log(winPercentage(5, 5));