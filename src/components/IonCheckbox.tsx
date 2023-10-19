import { IonCheckbox, IonItem } from "@ionic/react";

export function IonCheckboxComponent() {
  return (
    <div>
      <p>IonCheckbox</p>
      <IonItem>
        <IonCheckbox indeterminate={true} labelPlacement="end">
          Acepto terminos y condiciones
        </IonCheckbox>
      </IonItem>
    </div>
  );
}
