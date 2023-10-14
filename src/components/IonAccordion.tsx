import {
  IonTitle,
  IonAccordion,
  IonAccordionGroup,
  IonItem,
  IonLabel,
} from "@ionic/react";

export function IonAccordionComponent() {
  return (
    <div>
      <IonTitle>IonAccordion</IonTitle>

      <IonAccordionGroup>
        <IonAccordion value="first">
          <IonItem slot="header" color={"light"}>
            <IonLabel>¿Qué es React?</IonLabel>
          </IonItem>
          <div className="ion-padding" slot="content">
            Información de que es React...
          </div>
        </IonAccordion>
        <IonAccordion value="second">
          <IonItem slot="header" color={"light"}>
            <IonLabel>¿Qué es Angular?</IonLabel>
          </IonItem>
          <div className="ion-padding" slot="content">
            Información de que es Angular...
          </div>
        </IonAccordion>
        <IonAccordion value="third">
          <IonItem slot="header" color={"light"}>
            <IonLabel>¿Qué es Vue?</IonLabel>
          </IonItem>
          <div className="ion-padding" slot="content">
            Información de que es Vue...
          </div>
        </IonAccordion>
      </IonAccordionGroup>
    </div>
  );
}
