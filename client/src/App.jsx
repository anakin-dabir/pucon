import React, { useEffect, useState } from "react";
import {
  Stack,
  useTheme,
  Box,
  MenuItem,
  TableRow,
  TableCell,
  TableBody,
  TableHead,
  Typography,
  InputLabel,
  InputAdornment,
  IconButton,
  Skeleton,
} from "@mui/material";
import XButton from "./components/XButton";
import XStack from "./components/XStack";
import XTextfield from "./components/XTextfield";
import useValidation from "./formik/useValidation";
import { FileValidationSchema, LoginValidationSchema } from "./formik/validationSchema";
import { useSelector, useDispatch } from "react-redux";
import { useHeadingStyles } from "./themes";
import dividerPng from "@/assets/dividerBottom.png";
import XFileUpload from "./components/XFileUpload";
import XMenu from "./components/XMenu";
import useSocket from "./hooks/useSocket";
import XSocket from "./components/XSocket";
import { useFileUploadMutation, useLoginMutation } from "./services/nodeApi";
import { TimePicker } from "@mui/x-date-pickers-pro";
import dayjs from "dayjs";
import toObject from "dayjs/plugin/toObject";
import bg from "@/assets/bg/bg_1.png";
import AnimatedCursor from "react-animated-cursor";
import XLoading from "./components/XLoading";
import XLoader from "./components/XLoader";

const App = () => {
  const [open, openSet] = useState(false);
  const [loading, loadingSet] = useState(false);
  const [selectedDate, selectedDateSet] = useState("");
  const initialValues = { file: null };

  const [fileUpload] = useFileUploadMutation();
  const [file, fileSet] = useState(null);
  const [login] = useLoginMutation();
  const handleSubmit = (values) => {
    console.log(values);
    const formData = new FormData();
    formData.append("file", file);
    fileUpload(formData);
  };
  const formik = useValidation({
    initialValues,
    validationSchema: FileValidationSchema,
    handleSubmit,
  });
  return (
    <>
      <XButton onClick={() => login({ id: 123 })}>Click</XButton>
    </>
  );
};

export default App;

//  const element = useRoutes([
//    {
//      path: "/",
//      element: !token ? <Navigate to='/login' /> : <Layout sidebar />,
//      children: [
//        { path: "/", element: <Navigate to='/dashboard' /> },
//        { path: "/dashboard", element: <DashBoard /> },
//        { path: "/analytics", element: <>Analytics</> },
//        { path: "/invoice", element: <>Invoice</> },
//        { path: "/schedule", element: <Schedule /> },
//        { path: "/calender", element: <>Calender</> },
//        { path: "/messages", element: <>Messages</> },
//        { path: "/notification", element: <>Notification</> },
//        { path: "/settings", element: <Settings /> },
//      ],
//    },
//    {
//      path: "/",
//      element: token ? <Navigate to='/dashboard' /> : <Layout />,
//      children: [
//        { path: "/", element: <Navigate to='/login' /> },
//        { path: "/login", element: <Login /> },
//        { path: "/reset", element: <ResetPassword /> },
//        { path: "/register", element: <SignUp /> },
//      ],
//    },
//  ]);
