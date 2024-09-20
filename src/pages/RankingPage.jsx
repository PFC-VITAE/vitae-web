import { useLocation } from 'react-router-dom';
import CandidateTable from "../components/CandidateTable";

function RankingPage() {
    const location = useLocation(); 
    const data = location.state?.evaluation;

    return (
        <>
            <CandidateTable data={data} />
        </>
    );
}

export default RankingPage;
