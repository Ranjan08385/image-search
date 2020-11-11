import React, { Component } from 'react'
import './Style.css'

export class ImageCard extends Component {
    constructor(props) {
        super(props);
        this.state = { span: 0 };
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const span = Math.ceil(height / 10);
        console.log('span', span);
        this.setState({ span });
    }
    render() {
        const { description, urls } = this.props.image;
        return (
            <div style={{ justifyContent: 'center', textAlign: 'center' }}>
                <img 
                    ref={this.imageRef}
                    src={urls.regular}
                    alt={description}
                />
            </div>
        )
    }
}

export default ImageCard
