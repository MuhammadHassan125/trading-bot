"use client";

import React, { useState } from "react";
import {
  Modal,
  Box,
  Button,
  Typography,
  Paper,
  Stack,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import theme from "../../../../Utils/Theme";
import PrimaryAuthInput from "../../../../Components/PrimaryAuthInput/Index";
import { FaArrowRightLong } from "react-icons/fa6";

const IndicatorButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: "#fff",
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
  },
  borderRadius: "20px",
  border: `1px solid ${theme.palette.outline.main}`,
  padding: "8px 24px",
}));

const FlowNode = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "#fff",
  padding: "8px 16px",
  border: `1px solid ${theme.palette.outline.main}`,
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
  gap: "8px",
}));

const InputContainer = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  margin: "24px 0",
  justifyContent: "center",
}));

function BotEditModal({ open, handleClose }) {
  const [selectedIndicator, setSelectedIndicator] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [flowNodes, setFlowNodes] = useState([
    { type: "SMA", value: "14" },
    { type: "SMA", value: "32" },
    { type: "MACD", value: "65" },
    { type: "Volume", value: "3505" },
    { type: "Send Order", value: "" },
  ]);


  const handleIndicatorClick = (indicator) => {
    setSelectedIndicator(indicator);
    setInputValue("");
  };

  const handleAddValue = () => {
    if (!inputValue) return;

    if (selectedIndicator === "SMA") {
      setFlowNodes((prev) => {
        const newNodes = [...prev];
        const smaIndex = newNodes.findIndex((node) => node.type === "SMA");
        if (smaIndex !== -1) {
          newNodes[smaIndex] = { type: "SMA", value: inputValue };
        }
        return newNodes;
      });
    } else {
      const nodeIndex = flowNodes.findIndex(
        (node) => node.type === selectedIndicator
      );
      if (nodeIndex !== -1) {
        const newNodes = [...flowNodes];
        newNodes[nodeIndex] = { type: selectedIndicator, value: inputValue };
        setFlowNodes(newNodes);
      }
    }
    setInputValue("");
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "800px",
          bgcolor: theme.palette.secondary.main,
          borderRadius: 2,
          p: 4,
          color: "white",
        }}
      >
        <Typography
          variant="h2"
          mb={4}
          sx={{
            textAlign: "center",
            fontSize: "26px",
            color: theme.palette.textDark.main,
          }}
        >
          New Bot
        </Typography>

        <Stack spacing={2} mb={4}>
          <Stack
            direction="row"
            spacing={2}
            flexWrap="wrap"
            sx={{ justifyContent: "center" }}
          >
            <IndicatorButton
              onClick={() => handleIndicatorClick("RSI")}
              variant={selectedIndicator === "RSI" ? "contained" : "outlined"}
            >
              RSI
            </IndicatorButton>
            <IndicatorButton
              onClick={() => handleIndicatorClick("MACD")}
              variant={selectedIndicator === "MACD" ? "contained" : "outlined"}
            >
              MACD
            </IndicatorButton>
            <IndicatorButton
              onClick={() => handleIndicatorClick("EMA")}
              variant={selectedIndicator === "EMA" ? "contained" : "outlined"}
            >
              EMA
            </IndicatorButton>
            <IndicatorButton
              onClick={() => handleIndicatorClick("Send Order")}
              variant={
                selectedIndicator === "Send Order" ? "contained" : "outlined"
              }
            >
              Send Order
            </IndicatorButton>
            <IndicatorButton
              onClick={() => handleIndicatorClick("Cancel Order")}
              variant={
                selectedIndicator === "Cancel Order" ? "contained" : "outlined"
              }
            >
              Cancel Order
            </IndicatorButton>
          </Stack>

          <Stack
            direction="row"
            spacing={2}
            flexWrap="wrap"
            sx={{ justifyContent: "center" }}
          >
            <IndicatorButton
              onClick={() => handleIndicatorClick("Volume")}
              variant={
                selectedIndicator === "Volume" ? "contained" : "outlined"
              }
            >
              Volume
            </IndicatorButton>
            <IndicatorButton
              onClick={() => handleIndicatorClick("Stochastic")}
              variant={
                selectedIndicator === "Stochastic" ? "contained" : "outlined"
              }
            >
              Stochastic
            </IndicatorButton>
            <IndicatorButton
              onClick={() => handleIndicatorClick("SMA")}
              variant={selectedIndicator === "SMA" ? "contained" : "outlined"}
            >
              SMA
            </IndicatorButton>
            <IndicatorButton
              onClick={() => handleIndicatorClick("Fibonacci")}
              variant={
                selectedIndicator === "Fibonacci" ? "contained" : "outlined"
              }
            >
              Fibonacci
            </IndicatorButton>
          </Stack>
        </Stack>

        {selectedIndicator && (
          <InputContainer>
            <Typography sx={{ opacity: 0.7 }}>{selectedIndicator}:</Typography>
            <PrimaryAuthInput
              bgColor={theme.palette.secondary.main}
              border={`1px solid ${theme.palette.outline.main}`}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <IconButton onClick={handleAddValue} sx={{ color: "#ffffff" }}>
              <ArrowCircleRightIcon sx={{ color: "#ffffff" }} />
            </IconButton>
          </InputContainer>
        )}

        <Box
          sx={{
            my: 4,
            display: "flex",
            alignItems: "center",
            gap: 1,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {flowNodes.map((node, index) => (
            <React.Fragment key={index}>
              {index > 0 && <FaArrowRightLong color="#92ECA2" />}
              <FlowNode>
                <Typography>
                  {node.type}: {node.value}
                </Typography>
              </FlowNode>
            </React.Fragment>
          ))}
        </Box>

        <Stack direction="row" spacing={2} justifyContent="center" mt={4}>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#34395C",
              padding: "8px 0",
              width: "150px",
              borderRadius: "20px",
              border: `1px solid ${theme.palette.outline.main}`,
              "&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
            }}
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#00D483",
              padding: "8px 0",
              width: "150px",
              borderRadius: "20px",
              border: `1px solid ${theme.palette.outline.main}`,
              color: "white",
              "&:hover": { bgcolor: "#00cc7d" },
            }}
            onClick={handleClose}
          >
            Save Bot
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
}

export default BotEditModal;
