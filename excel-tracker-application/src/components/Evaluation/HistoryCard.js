import React from 'react';
import './../../styles/EvaluationCard.css';
import './../../styles/HistoryCard.css';

/**
 * Card used to display the information about past
 * Evaluations. Used to organize evaluation history.
 * Expects information about the history to be passed in
 * 
 * (March 2020)
 *  
 */
const HistoryCard = ({day, month, year, evaluationScore, evaluator, evidence, approved}) => {

	const gotodetails = event => {

  	};

    return (
        <div className='EvaluationCard' onClick = {gotodetails}>   
            <p>Evaluation on {month}/{day}/{year} by {evaluator}</p>
            <p>Score: {evaluationScore}   Comments: {evidence}</p>
        </div>
    );
}

export default HistoryCard;