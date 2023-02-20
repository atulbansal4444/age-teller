import React, { Component } from "react";

class AgeStats extends Component {
    timeSince(date) {
        let today = new Date().getTime();
        let birthdayDate = new Date(date).getTime();
        
        let timeDiff = Math.abs(today - birthdayDate);
        
        let days = Math.floor(timeDiff / (1000 * 3600 * 24));
        let years = Math.floor(days / 365);
        days = days - years * 365;
        let months = Math.floor(days / 31);
        days -= months * 31;
        
        return `${years} years, ${months} months, and ${days} days`;
    }
    
    render() {
        return (
            <div className="fade age-stats">
                <h3>{this.props.date}</h3>
                <h4>Congrats on { this.timeSince(this.props.date) }!</h4>
            </div>
        )
    }
}

export default AgeStats;
