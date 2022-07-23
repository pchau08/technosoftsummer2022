let cityName = 'New York City iS tHe BEST CIty iN THE ENTiRe WorLD YOU can CHeck';

const cityName_split_o = cityName.split('o');
console.log(`\nsplit by "o" -> ${cityName_split_o}`);


const cityName_split_space = cityName.split(' ');
console.log(`\nsplit by " " -> ${cityName_split_space}`);

const cityName_split_nothing = cityName.split('');
console.log(`\nsplit by "" -> ${cityName_split_nothing}`);

const cityName_split_or = cityName.split('or');
console.log(`\nsplit by "or" -> ${cityName_split_or}`);

