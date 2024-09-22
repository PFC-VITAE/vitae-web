import { useState } from "react";

function FileUploader({ setData, setLoading }) {
    const [file, setFile] = useState("");
    const [pages, setPages] = useState("");

    function handleSubmission(e) {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.target);

        fetch("/api/nce/submit", {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                return data;
            })
            .catch((error) => alert("Erro ao se comunicar com o servidor"))
            .finally(() => setLoading(false));
    }

    return (
        <div className="container p-4 my-5">
            <div
                className="card rounded-4 shadow mx-auto my-5"
                style={{ width: "25rem" }}
            >
                <div className="p-5 pb-4 border-bottom-0">
                    <h2>Upload de Arquivo</h2>
                </div>

                <div className="card-body p-5 pt-0">
                    <form onSubmit={handleSubmission}>
                        <div className="mb-3">
                            <input
                                type="file"
                                className="form-control rounded-3"
                                accept=".pdf"
                                id="formFile"
                                name="file"
                                value={file}
                                onChange={(e) => setFile(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control rounded-3"
                                id="floatingPages"
                                name="pages"
                                value={pages}
                                onChange={(e) => setPages(e.target.value)}
                                required
                            />
                            <label htmlFor="floatingPages">Páginas</label>
                        </div>
                        <button
                            className="w-100 mb-2 btn btn-lg rounded-5 btn-success"
                            type="submit"
                        >
                            Enviar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default FileUploader;
