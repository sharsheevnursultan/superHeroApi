import React, {Component} from 'react';

class Success extends Component {
    state = {
        name: undefined,
        gender: undefined,
        image: undefined,

    };

    getData = async (e) => {
        e.preventDefault();
        const superId = e.target.elements.id.value;
        try {
            const api_call = await fetch(`https://superheroapi.com/api.php/177086220095146/search/${superId}`);
            const superData = await api_call.json();
            console.log(superData.results[0]);
            console.log(superData.results[0].name);
            console.log(superData.results[0].appearance.gender);
            if (superId) {

                this.setState({
                    name: superData.results[0].name,
                    gender: superData.results[0].appearance.gender,
                    image: superData.results[0].image.url,

                });
            } else {
                this.setState({
                    name: undefined,
                    gender: undefined,
                    image: undefined,
                });
            }

        } catch {
            const api_call = await fetch(`https://superheroapi.com/api.php/177086220095146/search/${superId}`);
            const superData = await api_call.json();
            console.log(superData);
            if (superId) {
                this.setState({
                    name: undefined,
                    gender: undefined,
                    image: undefined,
                });
            } else {
                this.setState({
                    name: undefined,
                    gender: undefined,
                    image: undefined,
                });
            }
        }
    };
    myWaiter = {
        render() {
            return (
                <div>

                </div>
            )
        }
    };

    render() {
        return (
            <div className='firstDiv'>
                <form onSubmit={this.getData}>
                    <input className='form-input-name' type="text" name="id" placeholder="Type SuperHero name"
                           title="Type hero name"/>
                    <button className='form-input-submit'>
                        search
                    </button>
                </form>
                <h1>Name: {this.state.name}</h1>
                <h3>Gender: {this.state.gender}</h3>
                <img className='heroImage' src={this.state.image} alt={this.myWaiter[0]}/>
            </div>
        )
    }

}

export default Success;