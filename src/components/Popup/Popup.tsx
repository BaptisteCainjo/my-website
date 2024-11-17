import PopupStyle from "./Popup.module.scss";

interface PopupPros {
  responseMessage: string;
  isError: boolean;
}

export default function Popup({ responseMessage, isError }: PopupPros) {
  return (
    <>
      {responseMessage && (
        <div
          className={`${PopupStyle.popup}${
            isError ? ` ${PopupStyle.error}` : ""
          }`}
        >
          <p>{responseMessage}</p>
        </div>
      )}
    </>
  );
}
