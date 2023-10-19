import { IonRippleEffect } from "@ionic/react";
import "./IonRippletEffect.css";

export function IonRippleEffectComponent() {
  return (
    <div>
      <p>IonRippleEffectComponent</p>
      <div className="ion-activatable ripple-parent rectangle">
        <IonRippleEffect />
      </div>
    </div>
  );
}
