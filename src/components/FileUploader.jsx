import { useState } from "react"

function FileUploader() {
    const [file, setFile] = useState("")
    const [pages, setPages] = useState("")

    function handleSubmission(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        
        fetch("/api/nce/submit", {
            method: "POST",
            body: formData,
        }).then(res => res.json())
          .then(data => console.log(data))
          .catch(error => console.log(error))
    }
    
    return (
        <>
            <h1>Upload de Arquivo</h1>
            <form method="POST" onSubmit={handleSubmission}>
                <fieldset>
                    <div>
                        <label htmlFor="file">Anexos</label>
                        <input 
                            type="file" 
                            id="file" 
                            name="file" 
                            value={file} 
                            onChange={e => setFile(e.target.value)} 
                        />
                    </div>
                    <div>
                        <label htmlFor="pages">Páginas</label>
                        <input 
                            type="text" 
                            id="pages" 
                            name="pages" 
                            placeholder="exemplo: 5-17" 
                            value={pages} 
                            onChange={e => setPages(e.target.value)} 
                        />
                    </div>
                </fieldset>
                <button type="submit" value="Upload" />
            </form>
        </>
    );
}

export default FileUploader;