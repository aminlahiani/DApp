import React from "react";
import { motion } from "framer-motion";
import { AppBar, Box } from "@mui/material";

const MAppBar = React.forwardRef((props, ref) => <AppBar ref={ref} {...props} />);
const MBox = React.forwardRef((props, ref) => <Box ref={ref} {...props} />);

export const AnimatedAppBar = motion(MAppBar);
export const AnimatedBox = motion(MBox);
