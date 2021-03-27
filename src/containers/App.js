import React from 'react';
import Card from '../components/Card';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';


function sleep(ms) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now()
    } while (currentDate - date < ms);
}

const USER_LINK = 'https://jsonplaceholder.typicode.com/users';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            robots: [],
            searchText: ''
        };
    }

    toCardArray(inputs) {
        return inputs.map((r) => {
            return (<Card
                key={r.id} id={r.id}
                name={r.name}
                email={r.email}
                username={r.username}
            />);
        });
    }

    // Custom methods must use this syntax
    // so that `this` refers to App
    handleChange = (event) => {
        this.setState({ searchText: event.target.value });
    }

    componentDidMount = () => {
        fetch(USER_LINK)
            .then(response => {
                sleep(1000);
                return response.json();
            })
            .then(users => this.setState({ robots: users }))
    }

    render() {
        const { robots, searchText} = this.state;

        var filteredArray = robots.filter(x =>
            (x.name.toLowerCase().includes(searchText.toLowerCase()))
        );
        var comp = filteredArray.length ? 
            (
                <div className="card-list">
                    {this.toCardArray(filteredArray)}
                </div>
            ) : 
            (
                <h1 className="grow tc br3 ma3">Loading</h1>
            );



        return (
            <div className="App">
                <nav className="nav-bar tc">
                    <h1 className="dib br3 ma3 pa1">RoboFriends</h1>
                </nav>
                <br></br>
                <div>
                    <SearchBox
                        onChange={(x) => this.handleChange(x)}
                    />
                </div>
                <br></br>
                <Scroll>
                    {/* everything inside here is passed to scroll as props.children */}
                    <ErrorBoundary>
                        {comp}
                        {this.throwError()}
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
    }

    throwError(){
        // throw new Error('NOOOO');
        return ;
    }
}

export default App;