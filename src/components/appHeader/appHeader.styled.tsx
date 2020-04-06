import styled from "styled-components";
import { ArrowLeftOutlined } from "@ant-design/icons";

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;

  div {
    width: 100%;
    text-align: center;
  }
`;

export const HeaderIcon = styled(ArrowLeftOutlined)`
  cursor: pointer;
`;

export const MenuWrapper = styled.div`
  padding: 20px 0;
  position: absolute;
  width: 100%;
  height: 100%;
  background: white;
  z-index: 1;
`;
