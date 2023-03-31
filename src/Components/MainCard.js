import ContentCard from './ContentCard.js';
import { StyledLoading } from './Loader-style.js';

const MainCard = ({className, isLoading, data, numberQuestions, userId, surveyId, restartFunction}) => {

    return ( 
        <div className={className}>
            {!isLoading && <h1>MicroSurvey</h1>}
            {!isLoading && <p>Details about the survey (optional)</p>}
            <span>
                {isLoading && <StyledLoading></StyledLoading>}
            </span>
            {!isLoading && <ContentCard data={data} numberQuestions={numberQuestions} userId={userId} surveyId={surveyId} restartFunction={restartFunction}></ContentCard>}
        </div>
     );
}

export default MainCard;