import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from "react-router-dom";
import FileUploader from "./components/FileUploader";

const router = createBrowserRouter(
    createRoutesFromElements(<Route index element={<FileUploader />} />)
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
