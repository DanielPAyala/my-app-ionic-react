import { IonButton, useIonAlert } from "@ionic/react";

export function IonAlertComponent() {
  const [presentAlert] = useIonAlert();

  const deleteUser = () => {
    console.log("Usuario Eliminado");
  };

  const openAlert = () => {
    presentAlert({
      header: "¡Cuidado!",
      subHeader: "Eliminar cuenta",
      message: "¿Estas seguro de eliminar la cuenta?",
      buttons: [
        {
          text: "Cancelar",
          role: "cancel",
        },
        {
          text: "Eliminar",
          role: "confirm",
          handler: () => {
            deleteUser();
          },
        },
      ],
    });
  };
  return (
    <div>
      <p>IonAlert</p>
      <IonButton onClick={openAlert}>Abrir Alerta</IonButton>
    </div>
  );
}
