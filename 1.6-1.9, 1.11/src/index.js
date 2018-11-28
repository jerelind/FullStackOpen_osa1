import React from 'react'
import ReactDOM from 'react-dom'


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hyva: 0,
            neutraali: 0,
            huono: 0
        }
    }

    klikHyva = () => {
        this.setState({
            hyva: this.state.hyva + 1
        })
    }

    klikNeutraali = () => {
        this.setState({
            neutraali: this.state.neutraali + 1
        })
    }

    klikHuono = () => {
        this.setState({
            huono: this.state.huono + 1
        })
    }

    render() {
        const Button = ({handleClick, text}) => (
            <button onClick={handleClick}>
            {text}
            </button>
        )
        const Statistic = (props) => {
            return (
                <div>
                    <p>{props.name} {props.state} {props.percent}</p>
                </div>
            )
        }
        const Statistics = () => {
            if(this.state.hyva === 0 && this.state.neutraali === 0 && this.state.huono === 0) {
                return (
                    <div>
                        <h2>Statistiikka</h2>
                        <p>Ei yhtään palautetta annettu</p>
                    </div>
                )
            }
            return (
                <div>
                    <h2>Statistiikka</h2>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                <Statistic
                                    name="Hyvä"
                                />
                                </td>
                                <td>
                                <Statistic
                                    state={this.state.hyva}
                                />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                <Statistic
                                    name="Neutraali"
                                /> 
                                </td>
                                <td>
                                <Statistic
                                    state={this.state.neutraali}
                                />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                <Statistic
                                    name="Huono"
                                />  
                                </td>
                                <td>
                                <Statistic
                                    state={this.state.huono}
                                />    
                                </td>
                            </tr>
                            <tr>
                                <td>
                                <Statistic
                                    name="Keskiarvo"
                                />
                                </td>
                                <td>
                                    <Statistic
                                        state={(this.state.hyva * 1 + this.state.neutraali * 0 + this.state.huono * -1) / (this.state.hyva + this.state.neutraali + this.state.huono)}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                <Statistic
                                    name="Positiivisia"
                                />
                                </td>
                                <td>
                                <Statistic
                                    state={100 * this.state.hyva / (this.state.hyva + this.state.neutraali + this.state.huono)}
                                    percent="%"
                                />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )
        }

        return (
            <div>
                <h1>Anna palautetta</h1>
                <Button
                    handleClick={this.klikHyva}
                    text="Hyvä"
                    />
                <Button
                    handleClick={this.klikNeutraali}
                    text="Neutraali"
                    />
                <Button
                    handleClick={this.klikHuono}
                    text="Huono"
                    />
                <Statistics/>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))
