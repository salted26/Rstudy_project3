import React, {Component} from 'react';

class BoxClass extends Component {

    imageUrl = () => {
        console.log(this.props)
        if(this.props.item === undefined || this.props.item === '') {
            return (
                <div className="content">가위 바위 보!!</div>
            )
        } else {
            return (
                <img src={this.props.item && this.props.item.url} alt={this.props.item?.name} className="content"/>
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