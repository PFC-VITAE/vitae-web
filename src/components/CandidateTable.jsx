function CandidateTable({ data }) {
    function fillRows(data) {
        return data.map((row) => (
            <tr>
                <td className="p-4">{row["rank"]}</td>
                <td className="p-4">{row["qas_qms"]}</td>
                <td className="p-4">{row["war_name"]}</td>
                <td className="p-4">{row["full_name"]}</td>
            </tr>
        ));
    }

    return (
        <div className="container my-5">
            <div className="bg-white rounded-4 shadow">
                <div className="py-4 px-5 border-bottom border-secondary-light">
                    <h2>Candidatos</h2>
                </div>
                <div className="px-4 table-responsive">
                    <table className="table my-4 table-borderless table-bordered small">
                        <thead>
                            <tr className="text-secondary">
                                <th className="py-3 px-4">Posto</th>
                                <th className="py-3 px-4">Quadro</th>
                                <th className="py-3 px-4">Nome de Guerra</th>
                                <th className="py-3 px-4">Nome</th>
                            </tr>
                        </thead>
                        <tbody>{fillRows(data)}</tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default CandidateTable;
