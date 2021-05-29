import './Pokecard.css';

// const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

const generateId = (number) =>

		number <= 999 ? `00${number}`.slice(-3) :
		number;

const Pokecard = (props) => {
	const { id, name, type, exp } = props;
	let imgSrc = `${POKE_API}${generateId(id)}.png`;
	return (
		<div className="Pokecard">
			<h1 className="Pokecard-title">{name}</h1>
			<img src={imgSrc} alt={name} />
			<div className="Pokecard-data">Type : {type}</div>
			<div className="Pokecard-data">Exp : {exp}</div>
		</div>
	);
};

export default Pokecard;
