import React, {Component} from 'react';

class BoxClass extends Component {

    imageUrl = () => {
        if(this.props.item !== undefined) {
            return (
                <img src={this.props.item && this.props.item.url} alt={this.props.item?.name}/>
            )
        }
    }

    render() {
        return (
            <div>
                <div className={`box ${this.props.result}`}>
                    <div>{this.props.title}</div>
                    <div className="img-box">
                        {this.imageUrl()}
                    </div>
                    <div>{this.props.item && this.props.item.name}</div>
                    <div className='result'>
                        {this.props.result}
                    </div>
                </div>
            </div>
        );
    }
}

export default BoxClass;