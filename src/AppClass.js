import React, {Component} from 'react';
import BoxClass from "./components/BoxClass";
import "./App.css"

class AppClass extends Component {

    choice = {
        rock: {
            name: 'rock',
            url: "https://blog.kakaocdn.net/dn/pSJwo/btqXJV1lACE/nx5XrxkCLWXh9UsnoS8vbK/img.png"
        },
        scissors: {
            name: 'scissors',
            url: "https://blog.kakaocdn.net/dn/HfURw/btqXKvOTNWK/gWTwPXEg9QzSV0ilOuwuak/img.png"
        },
        paper: {
            name: 'paper',
            url: "https://blog.kakaocdn.net/dn/bmjB2s/btqXHhp6kpG/TH14W4U612SxKo9uuR2sB0/img.png"
        },
    }

    constructor(props) {
        super(props);
        this.state = {
            select: undefined,
            comSelect: undefined,
            userResult:'',
            comResult:''
        }
    }

    play = (userSelect) => {
        this.setState({
            select: this.choice[userSelect],
        })
        let comChoice = this.random();
        this.setState({
            comSelect:comChoice,
        })
        this.setState({
            userResult: this.judgement(userSelect, comChoice)
        })
    }

    random = () => {
        let itemArray = Object.keys(this.choice); // 객체에 있는 key값만 추출해서 Array로 만들어줌
        let randomItem = Math.floor(Math.random() * itemArray.length);
        let final = itemArray[randomItem];
        return this.choice[final];
    }

    judgement = (user, computer) => {
        let result = "";
        if (user === computer.name) {
            result = 'DEFEAT'
        } else if (user === 'scissors') {
            result = (computer.name === 'rock' ? 'LOSE' : 'WIN');
        } else if (user === 'rock') {
            result = (computer.name === 'paper' ? 'LOSE' : 'WIN')
        } else if (user === 'paper') {
            result = (computer.name === 'scissors' ? 'LOSE' : 'WIN')
        }
        this.setState({
            comResult : this.comJudgeMent(result)})
        return result
    }

    comJudgeMent = (result) => {
        if (result === 'DEFEAT') { return 'DEFEAT' }
        else if (result === 'WIN') { return 'LOSE' }
        else if (result === 'LOSE') { return 'WIN' }
    }

    handleReset =()=>{
        this.setState({
            select: '',
            comSelect: '',
            userResult:'',
            comResult:''
        })
    }

    render() {
        return (
            <div>
                <div className='main'>
                    <BoxClass title="YOU" item={this.state.select} result={this.state.userResult}/>
                    <BoxClass title="COMPUTER" item={this.state.comSelect} result={this.state.comResult}/>
                </div>
                <div className='bottom-btn'>
                    <button onClick={() => this.play('scissors')} className='btn'>
                        <img src={this.choice.scissors.url} alt={this.choice.scissors.name}/></button>
                    <button onClick={() => this.play('rock')} className='btn'>
                        <img src={this.choice.rock.url} alt={this.choice.rock.name}/></button>
                    <button onClick={() => this.play('paper')} className='btn'>
                        <img src={this.choice.paper.url} alt={this.choice.paper.name}/></button>
                </div>
                <div className="bottom-btn">
                    <button onClick={this.handleReset} className='btn'>
                        <img
                            src="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fcdn4.iconfinder.com%2Fdata%2Ficons%2Farrows-directions-1%2F24%2Freset-alt-3-solid-512.png"
                            alt="reset"/>
                    </button>
                </div>
            </div>
        );
    }
}

export default AppClass;