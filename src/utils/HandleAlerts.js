import { toast } from "react-toastify";

const handleAlerts = (response) => {
    switch (response.status) {
        case 400:
            toast.error("BAD REQUEST!");
            throw "BAD REQUEST!";
            break;
        case 401:
            toast.error("UNAUTHORIZED!");
            break;
        case 403:
            toast.error("FORBIDDEN!");
            break;
        case 404:
            toast.error("NOT FOUND!");
            break;
        case 200:
            toast.success("OPERATION SUCCESSFULL!");
            break;
        case 201:
            toast.success("ADDED SUCCESSFULLY!");
            break;
        default:
            toast.error("OOPS, SOMETHING WENT WRONG!");
    }
}

export default handleAlerts;
