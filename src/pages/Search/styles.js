import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex: 1;
  background: #fff;
  flex-direction: column;
  height: 100%;
  position: relative;
`;

export const Header = styled.View`
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 70px;
  display: flex;
  flex-direction: row;
  border-bottom-color: #eeeeee;
  border-bottom-width: 1px;
`;

export const InputContent = styled.View`
  position: relative;
  width: 100%;
  padding-bottom: 8px;
`;
export const MySvg = styled.View`
  position: absolute;
  top: 32%;
  right: 16px;
  z-index: 100;
`;
export const MySvgQr = styled.View`
  margin-left: 16px;
`;
export const AnimationContent = styled.View`
  padding-left: 5%;
  padding-right: 5%;
  height: 73.5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TextContent = styled.View`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
`;
export const Title = styled.Text`
  font-family: "WorkSans_600SemiBold";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.85);
  text-align: center;
  margin-bottom: 16px;
`;
export const Subtitle = styled.Text`
  font-family: "WorkSans_400Regular";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.8);
  text-align: center;
`;

export const BottomMenu = styled.View`
  width: 100%;
  display: flex;
  height: 90px;
  flex-direction: row;
  align-items: center;
`;

export const CardsContent = styled.ScrollView`
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 5%;
  height: 73.5%;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
`;
