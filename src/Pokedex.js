import Pokecard from './Pokecard';
import './Pokedex.css';
const Pokedex = (props) => {
	const { pokemon, isWinner } = props;
	return (
		<div className="Pokedex">
			<p>
				{
					isWinner ? 'Winner' :
					'Loser'}
			</p>
			<div className="Pokedex-cards">
				{pokemon.map((poke) => (
					<Pokecard key={poke.id} id={poke.id} name={poke.name} type={poke.type} exp={poke.base_experience} />
				))}
			</div>
		</div>
	);
};

export default Pokedex;
