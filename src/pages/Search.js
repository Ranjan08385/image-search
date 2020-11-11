import React, { Component } from 'react'
import './Style.css'

export class Search extends Component {
    state = { text: '' }

    onSubmitForm(event) {
        event.preventDefault();
        this.props.onSubmit(this.state.text);
    }

    render() {
        return (
            <div className="ui segment" style={{ position: 'sticky', top: 10, zIndex: 999 }}>
                <form className="ui form" onSubmit={(e) => this.onSubmitForm(e)}>
                    <div className="field">
                        <label>Image Search</label>
                        <input 
                            type="text" 
                            value={this.state.text}
                            onChange={e => this.setState({ text: e.target.value })} 
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default Search


