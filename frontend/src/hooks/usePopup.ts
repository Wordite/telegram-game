import { setPopup } from "@app/store/slices/popup";
import { useDispatch } from "react-redux";
import { Popups } from "@app/types/popups";


export const usePopup = (popup: Popups) => {
    const dispatch = useDispatch()

    return {
        openPopup: () => dispatch(setPopup(popup)),
        closePopup: () => dispatch(setPopup('')),
    }
}
