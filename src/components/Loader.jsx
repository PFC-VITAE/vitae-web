function Loader() {
    return (
        <div className="d-flex gap-2 justify-content-center py-5 my-5">
            <button className="btn btn-lg btn-success rounded-5 my-5" type="button" disabled>
                <span
                    className="spinner-border spinner-border-sm"
                    aria-hidden="true"
                ></span>
                <span role="status">Processando...</span>
            </button>
        </div>
    );
}

export default Loader