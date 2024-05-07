import { useState } from "react";
import MissionTable from "../components/MissionTable";
import FileUploader from "../components/FileUploader";
import Loader from "../components/Loader";

function UploadFilePage() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    return (
        <>
            {data.length === 0 ? (
                loading ? (
                    <Loader />
                ) : (
                    <FileUploader setData={setData} setLoading={setLoading} />
                )
            ) : (
                <MissionTable data={data} />
            )}
        </>
    );
}

export default UploadFilePage;
