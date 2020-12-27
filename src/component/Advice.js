import React from 'react';

class Advice extends React.Component {  
    state = {
        advice: "be the best of the best",
    };
    handleClick = () => {
        this.setState({
            advice: "Loading...",
        });
        fetch("https://api.adviceslip.com/advice")
            .then((response) => response.json())
            .then((data) => data.slip)
            .then(({ advice }) => this.setState({ advice: advice }))
            .catch((err) => console.log(err));
    };
    componentDidMount = () => {
        console.log("moubted");
    };
    componentDidUpdate = () => {
        console.log("updated");
    };
    render() {
        return (
            // <!-- Advice Section -->
            <div className="copyright py-4 text-center text-white">
                <div className="container">
                    <p className="lead mt-3">{this.state.advice}</p>
                    <p>- Me.</p>
                    <button className="btn btn-primary"  onClick={this.handleClick}>
                        <i className="fas fa-sync fa-fw"></i>
                    </button>
                </div>
            </div>
        );
    }
}

export default Advice;