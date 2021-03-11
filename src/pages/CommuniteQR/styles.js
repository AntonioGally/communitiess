import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex: 1;
  background: #fff;
  flex-direction: column;
  position: relative;
  padding-left: 5%;
  padding-right: 5%;
`;

export const Header = styled.View`
  padding-top: 12%;
`;

export const QrContent = styled.View`
  margin-top: 90px;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const QrImage = styled.Image`
  width: 300px;
  height: 300px;
`;
export const TextContent = styled.View`
  margin-top: 30px;
`;
export const Title = styled.Text`
  font-family: "WorkSans_600SemiBold";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 16px;
  color: rgba(0, 0, 0, 0.85);
  text-align: center;
`;
export const Text = styled.Text`
  font-family: "WorkSans_400Regular";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.8);
  text-align: center;
`;
