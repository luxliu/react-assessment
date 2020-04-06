import React from "react";

import * as Styled from "./layout.styled";
import AppHeader from "src/components/appHeader";

export default ({ children }: { children?: React.ReactNode }) => (
  <Styled.AppWrapper>
    <AppHeader />
    {children}
  </Styled.AppWrapper>
);
