import { useNavigate } from "react-router-dom"
import document from "../assets/document.png";

function Hero() {
    const navigate = useNavigate();

    return (
        <div className="px-4 pt-5 mt-5 text-center border-bottom">
            <h1 className="display-4 fw-bold text-body-emphasis">
                Análise de Candidatos
            </h1>
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">
                    O Sistema Vitae é um acrônimo de Verificação InTeligente de Adequação a Experiência.
                    Realize o envio de arquivos PDF com uma separata detalhada
                    de Necessidades Conhecimento Específicas de para análise de
                    candidatos
                </p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                    <button
                        type="button"
                        className="btn btn-success btn-lg px-4 me-sm-3 rounded-5"
                        onClick={() => navigate("/upload")}
                    >
                        Enviar
                    </button>
                </div>
            </div>
            <div className="overflow-hidden">
                <div className="container px-5">
                    <img
                        src={document}
                        className="img-fluid border rounded-top-3 shadow-lg"
                        alt="Example image"
                        width="700"
                        height="500"
                        loading="lazy"
                    />
                </div>
            </div>
        </div>
    );
}

export default Hero;
