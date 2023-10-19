import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonButton,
} from "@ionic/react";

export function IonCardComponent() {
  return (
    <div>
      <p>IonCard</p>
      <IonCard>
        <img
          alt="Silhouette of mountains"
          src="https://ionicframework.com/docs/img/demos/card-media.png"
        />
        <IonCardHeader>
          <IonCardTitle>Carlos Porras</IonCardTitle>
          <IonCardSubtitle>Frontend Developer</IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo odit
          esse nihil obcaecati, voluptates quos enim animi a ipsa labore minus?
          Saepe consequuntur, ipsa eum sunt non voluptatum nemo delectus.
        </IonCardContent>
      </IonCard>

      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Carlos Porras</IonCardTitle>
          <IonCardSubtitle>Frontend Developer</IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo odit
          esse nihil obcaecati, voluptates quos enim animi a ipsa labore minus?
          Saepe consequuntur, ipsa eum sunt non voluptatum nemo delectus.
        </IonCardContent>
        <IonButton fill="clear">Like</IonButton>
        <IonButton fill="clear">Redes Sociales</IonButton>
      </IonCard>
    </div>
  );
}
