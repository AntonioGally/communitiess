import React from "react";
import Like from "../../assets/Svgs/Notifications/Like.svg";
import Chat from "../../assets/Svgs/Notifications/Chat.svg";
import {
  Container,
  Header,
  Title,
  NotificationsContent,
  Card,
  Text,
} from "./styles";

const Notifications = () => {
  const list = [
    { action: "like", text: "Antônio" },
    { action: "like", text: "David" },
    { action: "comment", text: "Antônio" },
    { action: "like", text: "Antônio" },
    { action: "comment", text: "Shake" },
    { action: "like", text: "Antônio" },
    { action: "like", text: "David" },
    { action: "comment", text: "Antônio" },
    { action: "like", text: "Antônio" },
    { action: "comment", text: "Shake" },
    { action: "like", text: "Antônio" },
    { action: "like", text: "David" },
    { action: "comment", text: "Antônio" },
    { action: "like", text: "Antônio" },
    { action: "comment", text: "Shake" },
  ];
  return (
    <>
      <Container>
        <Header>
          <Title>Notificações</Title>
        </Header>
        <NotificationsContent showsVerticalScrollIndicator={false}>
          {list.map((information, index) => (
            <Card key={index}>
              {information.action === "like" && (
                <>
                  <Like />
                  <Text>{information.text} curtiu seu post</Text>
                </>
              )}
              {information.action === "comment" && (
                <>
                  <Chat />
                  <Text>{information.text} comentou seu post</Text>
                </>
              )}
            </Card>
          ))}
        </NotificationsContent>
      </Container>
    </>
  );
};

export default Notifications;
