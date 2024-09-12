function MissionTable({ data }) {
    function fillRows(data) {
        return data.map((row) => (
            <>
                <tr data-bs-toggle="collapse" data-bs-target={`#${row['NCE (Prio)'].substring(0, 7)}`}>
                    <td className="p-4">{row['NCE (Prio)']}</td>
                    <td className="p-4">{row['OM Solicitante']}</td>
                    <td className="p-4">{row['Posto']}</td>
                    <td className="p-4">{row['Perfil']}</td>
                    <td className="p-4">{row['Conhecimento Específico']}</td>
                </tr>
                <tr>
                    <td colSpan="6" className="p-0">
                        <div
                            id={`${row['NCE (Prio)'].substring(0, 7)}`}
                            className="p-0 collapse"
                            style={{
                                color: "white",
                            }}
                        >
                            <ul className="list-group rounded-0">
                                <li className="list-group-item">
                                    <h6>Aplicação</h6>
                                    <span>{row['Aplicação']}</span>
                                </li>
                                <li className="list-group-item">
                                    <h6>Instituição/Local</h6>
                                    <span>{row['Instituição/ Local']}</span>
                                </li>
                                <li className="list-group-item">
                                    <h6>Programa</h6>
                                    <span>{row['Programa']}</span>
                                </li>
                                <li className="list-group-item">
                                    <h6>OM PACE</h6>
                                    <span>{row['OM PACE']}</span>
                                </li>
                            </ul>
                            <button className="btn w-100 rounded-0 btn-success">
                                Avaliar
                            </button>
                        </div>
                    </td>
                </tr>
            </>
        ));
    }

    return (
        <div className="container my-5">
            <div className="bg-white rounded-4 shadow">
                <div className="py-4 px-5 border-bottom border-secondary-light">
                    <h2>Resultado</h2>
                </div>
                <div className="px-4 table-responsive">
                    <table className="table my-4 table-borderless table-bordered small">
                        <thead>
                            <tr className="text-secondary">
                                <th className="py-3 px-4">Código</th>
                                <th className="py-3 px-4">Solicitante</th>
                                <th className="py-3 px-4">Posto</th>
                                <th className="py-3 px-4">Perfil</th>
                                <th className="py-3 px-4">
                                    Conhecimento Específico
                                </th>
                            </tr>
                        </thead>
                        <tbody>{fillRows(data)}</tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default MissionTable;
