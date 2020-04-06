import React, { useState } from "react";
import * as Styled from "./appHeader.styled";

export default () => {
  const [isMenuOpen, serIsMenuOpen] = useState(false);

  return (
    <nav>
      {isMenuOpen ? (
        <>
          <Styled.HeaderWrapper>
            <Styled.HeaderIcon onClick={() => serIsMenuOpen(false)} />
            <div>Menu</div>
          </Styled.HeaderWrapper>
          <Styled.MenuWrapper>This is menu content</Styled.MenuWrapper>
        </>
      ) : (
        <Styled.HeaderWrapper>
          <Styled.HeaderIcon type="menu" onClick={() => serIsMenuOpen(true)} />
          <div>Register card form</div>
        </Styled.HeaderWrapper>
      )}
    </nav>
  );
};
