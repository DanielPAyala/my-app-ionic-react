import { IonBadge } from "@ionic/react";

export function IonBadgeComponent() {
  return (
    <div>
      <p>IonBadge</p>
      <IonBadge>601</IonBadge>
      <br />
      <IonBadge>Nuevo Curso</IonBadge>
      <br />
      <br />
      <p>IonBadge - Color</p>
      <IonBadge color={"danger"}>23k</IonBadge>
      <br />
      <IonBadge color="secondary">20k</IonBadge>
      <br />
      <IonBadge color="tertiary">210k</IonBadge>
      <br />
      <IonBadge color="success">208k</IonBadge>
    </div>
  );
}
