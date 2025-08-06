import { BrowserRouter, Route, Routes } from "react-router-dom";

import { PATH } from "@/constants";
import Main from "@/pages/Main";

export const BrowserProvider = () => {

  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Routes>
        <Route path={PATH.BASE} element={<Main/>}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
