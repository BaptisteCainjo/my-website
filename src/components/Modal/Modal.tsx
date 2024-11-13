import ModalStyle from "./Modal.module.scss";

interface ModalPros {
  responseMessage: string;
  isError: boolean;
}

export default function Modal({ responseMessage, isError }: ModalPros) {
  return (
    <>
      {responseMessage && (
        <div
          className={`${ModalStyle.popup}${
            isError ? ` ${ModalStyle.error}` : ""
          }`}
        >
          <p>{responseMessage}</p>
        </div>
      )}
    </>
  );
}
