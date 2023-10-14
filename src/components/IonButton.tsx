import { IonButton, IonIcon } from "@ionic/react";
import { star } from "ionicons/icons";

export function IonButtonComponent() {
  const onClickBtn = () => {
    console.log("Ir a la web");
  };

  return (
    <div>
      <IonButton onClick={onClickBtn}>Ir a la web</IonButton>
      <IonButton disabled>Disabled</IonButton>
      <IonButton expand="block">Block</IonButton>
      <IonButton expand="full">Full</IonButton>

      <p>Shape</p>
      <IonButton shape="round">Round</IonButton>

      <p>Fill</p>
      <IonButton fill="clear">Clear</IonButton>
      <IonButton fill="outline">Outline</IonButton>
      <IonButton fill="solid">Solid</IonButton>

      <p>Size</p>
      <IonButton size="small">Small</IonButton>
      <IonButton size="default">Default</IonButton>
      <IonButton size="large">Large</IonButton>

      <p>Icon</p>
      <IonButton>
        <IonIcon slot="start" icon={star} />
        Left Item
      </IonButton>
      <IonButton>
        <IonIcon slot="end" icon={star} />
        Left Item
      </IonButton>
      <IonButton size="default">
        <IonIcon slot="icon-only" icon={star} />
      </IonButton>
    </div>
  );
}
