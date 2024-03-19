import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Label from "./components/Label";
import DefaultTextField from "./components/DefaultTextField";

function App() {
  const [error, setIsError] = useState(false);
  return (
    <>
      <Label htmlFor="email">이메일</Label>
      <DefaultTextField
        id="email"
        placeholder="이메일을 입력하세요"
        value=""
        errormessage="이메일을 입력해주세요"
        isError={error}
        iconPath="/icon/ic-public-delete-dark.svg"
        iconAlt="delete"
        onChange={() => {}}
        onIconClick={() => {}}
      />
      <div className="my-20"></div>
      <Label htmlFor="address">주소</Label>
      <DefaultTextField
        id="address"
        placeholder="주소를 입력하세요"
        value=""
        errormessage="주소를 입력해주세요"
        isError={error}
        iconPath="/icon/ic-public-delete-dark.svg"
        iconAlt="delete"
        onChange={() => {}}
        onIconClick={() => {}}
      />
      <button onClick={() => setIsError((prev) => !prev)} />
    </>
  );
}

export default App;
