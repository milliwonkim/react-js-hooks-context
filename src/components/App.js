import React from "react";
import ColorProvider from "./ColorProvider/ColorProvider.component";
import Red from "./Red";
const App = () => {
  return (
//사용하고자 하는 자식들 컴포넌트들 가장 밖에서 <Provider>로 감싸줍니다.
    <ColorProvider>
      <Red />
    </ColorProvider>
  );
};
export default App;
