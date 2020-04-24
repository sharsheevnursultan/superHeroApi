import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SuperImg from "../../images/superhero.png";
import InputHeader from "./InputHeader/InputHeader";
import MainInfo from "./MainInfo/MainInfo";
import BigInfo from "./BigInfo/BigInfo";
import Status from "./Status/Status";


class MainFetcher extends Component {
    state = {
        connection: 'Not connected',
        length: 0,
        relatives: undefined,
        group_affiliation: undefined,
        occupation: undefined,
        base: undefined,
        gender: undefined,
        race: undefined,
        height: undefined,
        weight: undefined,
        eye_color: undefined,
        hair_color: undefined,
        full_name: undefined,
        alter_egos: undefined,
        aliases: undefined,
        place_of_birth: undefined,
        first_appearance: undefined,
        publisher: undefined,
        alignment: undefined,
        intelligence: undefined,
        strength: undefined,
        speed: undefined,
        durability: undefined,
        power: undefined,
        combat: undefined,
        id: undefined,
        name: undefined,
        image: SuperImg,
        itemHero: 0,
    };

    itemHeroChanger = () => {
        this.setState(state => {
            return {itemHero: state.itemHero + 1}
        })
    }


    getData = async (e) => {
        e.preventDefault();
        const superId = e.target.elements.id.value;
        try {
            const api_call = await fetch(`https://superheroapi.com/api.php/177086220095146/search/${superId}`);
            const superData = await api_call.json();
            console.log(api_call.status);
            console.log('Elements found: ' + superData.results.length);
            console.log(superData.results);
            console.log(superData.results[0]);

            if (superId) {
                this.setState({
                    connection: api_call.status,
                    length: superData.results.length,
                    // work
                    occupation: superData.results[this.state.itemHero].work.occupation,
                    base: superData.results[this.state.itemHero].work.base,
                    // work end
                    // appearance
                    gender: superData.results[this.state.itemHero].appearance.gender,
                    race: superData.results[this.state.itemHero].appearance.race,
                    height: superData.results[this.state.itemHero].appearance.height[1],
                    weight: superData.results[this.state.itemHero].appearance.weight[1],
                    eye_color: superData.results[this.state.itemHero].appearance['eye-color'],
                    hair_color: superData.results[this.state.itemHero].appearance['hair-color'],
                    // appearance end
                    // biography
                    full_name: superData.results[this.state.itemHero].biography['full-name'],
                    alter_egos: superData.results[this.state.itemHero].biography['alter-egos'],
                    aliases: superData.results[this.state.itemHero].biography.aliases,
                    place_of_birth: superData.results[this.state.itemHero].biography["place-of-birth"],
                    first_appearance: superData.results[this.state.itemHero].biography['first-appearance'],
                    publisher: superData.results[this.state.itemHero].biography.publisher,
                    alignment: superData.results[this.state.itemHero].biography.alignment,
                    // biography end
                    // power stats
                    intelligence: superData.results[this.state.itemHero].powerstats.intelligence,
                    strength: superData.results[this.state.itemHero].powerstats.strength,
                    speed: superData.results[this.state.itemHero].powerstats.speed,
                    durability: superData.results[this.state.itemHero].powerstats.durability,
                    power: superData.results[this.state.itemHero].powerstats.power,
                    combat: superData.results[this.state.itemHero].powerstats.combat,
                    // power stats end
                    // connections
                    relatives: superData.results[this.state.itemHero].connections.relatives,
                    group_affiliation: superData.results[this.state.itemHero].connections['group-affiliation'],
                    // connection end
                    id: superData.results[this.state.itemHero].id,
                    name: superData.results[this.state.itemHero].name,
                    image: superData.results[this.state.itemHero].image.url,
                });
            } else {
                this.setState({
                    connection: undefined,
                    length: 0,
                    relatives: undefined,
                    group_affiliation: undefined,
                    occupation: undefined,
                    base: undefined,
                    gender: undefined,
                    race: undefined,
                    height: undefined,
                    weight: undefined,
                    eye_color: undefined,
                    hair_color: undefined,
                    full_name: undefined,
                    alter_egos: undefined,
                    aliases: undefined,
                    place_of_birth: undefined,
                    first_appearance: undefined,
                    publisher: undefined,
                    alignment: undefined,
                    intelligence: undefined,
                    strength: undefined,
                    speed: undefined,
                    durability: undefined,
                    power: undefined,
                    combat: undefined,
                    id: undefined,
                    name: undefined,
                    image: SuperImg,
                    itemHero: 0,
                });
            }
        } catch {
            const api_call = await fetch(`https://superheroapi.com/api.php/177086220095146/search/${superId}`);
            const superData = await api_call.json();
            console.log(superData);
            console.log(superData.response);
            console.log(superData.error);
            if (superId) {
                this.setState({
                    connection: superData.error,
                    length: 0,
                    relatives: undefined,
                    group_affiliation: undefined,
                    occupation: undefined,
                    base: undefined,
                    gender: undefined,
                    race: undefined,
                    height: undefined,
                    weight: undefined,
                    eye_color: undefined,
                    hair_color: undefined,
                    full_name: undefined,
                    alter_egos: undefined,
                    aliases: undefined,
                    place_of_birth: undefined,
                    first_appearance: undefined,
                    publisher: undefined,
                    alignment: undefined,
                    intelligence: undefined,
                    strength: undefined,
                    speed: undefined,
                    durability: undefined,
                    power: undefined,
                    combat: undefined,
                    id: undefined,
                    name: undefined,
                    image: SuperImg,
                    itemHero: 0,
                });
            } else {
                this.setState({
                    connection: undefined,
                    length: 0,
                    relatives: undefined,
                    group_affiliation: undefined,
                    occupation: undefined,
                    base: undefined,
                    gender: undefined,
                    race: undefined,
                    height: undefined,
                    weight: undefined,
                    eye_color: undefined,
                    hair_color: undefined,
                    full_name: undefined,
                    alter_egos: undefined,
                    aliases: undefined,
                    place_of_birth: undefined,
                    first_appearance: undefined,
                    publisher: undefined,
                    alignment: undefined,
                    intelligence: undefined,
                    strength: undefined,
                    speed: undefined,
                    durability: undefined,
                    power: undefined,
                    combat: undefined,
                    id: undefined,
                    name: undefined,
                    image: SuperImg,
                    itemHero: 0,
                });
            }
        }
    };

    render() {
        return (
            <div className='container'>
                <div>
                    <InputHeader itemHeroChanger={this.itemHeroChanger} getData={this.getData}/>
                    <Status state={this.state} />
                </div>
                <div>
                    <div className='firstDiv'>
                        <div className='row'>
                            <MainInfo state={this.state}/>
                            <BigInfo state={this.state}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainFetcher;