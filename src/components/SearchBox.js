import React from 'react';

class SearchBox extends React.Component {

    render() {
        return (
            <div className="Search-box tc ma3">
                <input placeholder="Got friends?" type='search'
                    onChange={this.props.onChange}
                ></input>
            </div>
        );
    }
}

export default SearchBox;