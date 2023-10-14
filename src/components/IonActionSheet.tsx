import { IonButton, useIonActionSheet } from "@ionic/react";

export function IonActionSheetComponent() {
  const [present] = useIonActionSheet();

  return (
    <div>
      <p>IonActionSheet</p>
      <IonButton
        onClick={() =>
          present({
            header: "Mi ActionSheet",
            subHeader: "SubHeader",
            buttons: [
              {
                text: "Delete",
                role: "destructive",
                data: {
                  action: "delete",
                },
              },
              {
                text: "Cancel",
                role: "cancel",
                data: {
                  action: "cancel",
                },
              },
            ],
          })
        }
      >
        Open Action Sheet
      </IonButton>
    </div>
  );
}
