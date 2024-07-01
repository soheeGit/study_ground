import React, { useEffect, useRef, useState } from "react";
import { fabric } from "fabric";
import "./WhiteBoard.css";
import mouseIcon from "../images/mouse.png"; 
import penIcon from "../images/pen.png"; 
import eraserIcon from "../images/eraser.png"; 
import textIcon from "../images/text.png"; 
import leftIcon from "../images/left.png"; 
import centerIcon from "../images/center.png"; 
import rightIcon from "../images/right.png"; 
import deleteIcon from "../images/delete.png"; 

const WhiteBoard = () => {
  const canvasContainerRef = useRef(null);
  const canvasRef = useRef(null);
  const [canvas, setCanvas] = useState(null);
  const [activeTool, setActiveTool] = useState("pen");
  const [penColor, setPenColor] = useState("#000000");
  const [selectedTextObject, setSelectedTextObject] = useState(null);
  const [textSize, setTextSize] = useState("M");

  useEffect(() => {
    const canvasContainer = canvasContainerRef.current;
    const newCanvas = new fabric.Canvas(canvasRef.current, {
      width: canvasContainer.offsetWidth,
      height: canvasContainer.offsetHeight,
    });
    setCanvas(newCanvas);

    newCanvas.on("mouse:wheel", function (opt) {
      const delta = opt.e.deltaY;
      let zoom = newCanvas.getZoom();
      zoom *= 0.999 ** delta;
      if (zoom > 20) zoom = 20;
      if (zoom < 0.01) zoom = 0.01;
      newCanvas.zoomToPoint({ x: opt.e.offsetX, y: opt.e.offsetY }, zoom);
      opt.e.preventDefault();
      opt.e.stopPropagation();
    });

    const handleResize = () => {
      newCanvas.setDimensions({
        width: canvasContainer.offsetWidth,
        height: canvasContainer.offsetHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    newCanvas.freeDrawingBrush.width = 10;
    newCanvas.isDrawingMode = true;

    newCanvas.on("selection:created", (e) => {
      if (e.selected && e.selected.length > 0 && e.selected[0].type === "i-text") {
        setSelectedTextObject(e.selected[0]);
      } else {
        setSelectedTextObject(null);
      }
    });

    newCanvas.on("selection:updated", (e) => {
      if (e.selected && e.selected.length > 0 && e.selected[0].type === "i-text") {
        setSelectedTextObject(e.selected[0]);
      } else {
        setSelectedTextObject(null);
      }
    });

    newCanvas.on("selection:cleared", () => {
      setSelectedTextObject(null);
    });

    return () => {
      newCanvas.dispose();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!canvasContainerRef.current || !canvasRef.current || !canvas) return;

    canvas.off("mouse:down");
    canvas.off("mouse:move");
    canvas.off("mouse:up");

    switch (activeTool) {
      case "select":
        handleSelectTool();
        break;

      case "pen":
        handlePenTool();
        break;

      case "eraser":
        handleEraserTool();
        break;

      case "text":
        handleTextTool();
        break;
    }
  }, [activeTool]);

  const handleSelectTool = () => {
    canvas.isDrawingMode = false;
    canvas.selection = true;
    canvas.defaultCursor = "default";
  };

  const handlePenTool = () => {
    canvas.isDrawingMode = true;
    canvas.freeDrawingBrush.width = 10;
    canvas.freeDrawingBrush.color = penColor;
    canvas.selection = false;
    canvas.defaultCursor = "crosshair";
  };

  const handleEraserTool = () => {
    canvas.clear();
    setSelectedTextObject(null);
  };

  const handleTextTool = () => {
    canvas.isDrawingMode = false;
    canvas.selection = false;
    canvas.defaultCursor = "text";
    const handleTextMouseDown = (opt) => {
      const pointer = canvas.getPointer(opt.e);
      const text = new fabric.IText("더블 클릭해 메모 내용을 편집하세요.", {
        left: pointer.x,
        top: pointer.y,
        fill: penColor,
        fontSize: 20,
        backgroundColor: "yellow",
        editable: true,
      });
      canvas.add(text);
      text.enterEditing();
      text.selectAll();
      canvas.setActiveObject(text);
      canvas.renderAll();
      
      setSelectedTextObject(text);
      canvas.off("mouse:down", handleTextMouseDown);
    };
    canvas.on("mouse:down", handleTextMouseDown);
  };

  const handlePenColorChange = (color) => {
    setPenColor(color);
    if (activeTool === "pen") {
      canvas.freeDrawingBrush.color = color;
    }
  };

  const handleTextAlignment = (alignment) => {
    if (selectedTextObject) {
      selectedTextObject.set({ textAlign: alignment });
      canvas.renderAll();
    }
  };

  const handleDeleteText = () => {
    if (selectedTextObject) {
      canvas.remove(selectedTextObject);
      setSelectedTextObject(null);
      canvas.discardActiveObject();
      canvas.renderAll();
    }
  };

  const handleTextSizeChange = (size) => {
    setTextSize(size);
    if (selectedTextObject) {
      let fontSize = 22; 
      switch (size) {
        case "S":
          fontSize = 16;
          break;
        case "M":
          fontSize = 22;
          break;
        case "L":
          fontSize = 28;
          break;
        case "XL":
          fontSize = 34;
          break;
        default:
          fontSize = 22;
          break;
      }
      selectedTextObject.set({ fontSize });
      canvas.renderAll();
    }
  };

  return (
    <div className="canvas-container" ref={canvasContainerRef}>
      <canvas ref={canvasRef} />
      <div className="tool-bar">
        <button onClick={() => setActiveTool("select")} disabled={activeTool === "select"}>
          <img src={mouseIcon} alt="Mouse Icon" className="icon" width={"28px"} />
        </button>
        <button onClick={() => setActiveTool("pen")} disabled={activeTool === "pen"}>
          <img src={penIcon} alt="Pen Icon" className="icon" width={"28px"} />
        </button>
        <button onClick={() => setActiveTool("eraser")} disabled={activeTool === "eraser"}>
          <img src={eraserIcon} alt="Eraser Icon" className="icon" width={"28px"} />
        </button>
        <button onClick={() => setActiveTool("text")} disabled={activeTool === "text"}>
          <img src={textIcon} alt="Text Icon" className="icon" width={"28px"} />
        </button>
      </div>
      {activeTool === "pen" && (
        <div className="color-picker">
          <button
            style={{ backgroundColor: "#000000" }}
            onClick={() => handlePenColorChange("#000000")}
            className={`color-button ${penColor === "#000000" ? "pen-color-selected" : ""}`}
          >
            {penColor === "#000000" && <span className="check-mark">✔</span>}
          </button>
          <button
            style={{ backgroundColor: "#FF0000" }}
            onClick={() => handlePenColorChange("#FF0000")}
            className={`color-button ${penColor === "#FF0000" ? "pen-color-selected" : ""}`}
          >
            {penColor === "#FF0000" && <span className="check-mark">✔</span>}
          </button>
          <button
            style={{ backgroundColor: "#0000FF" }}
            onClick={() => handlePenColorChange("#0000FF")}
            className={`color-button ${penColor === "#0000FF" ? "pen-color-selected" : ""}`}
          >
            {penColor === "#0000FF" && <span className="check-mark">✔</span>}
          </button>
        </div>
      )}
      {selectedTextObject && (
        <div className="text-align-toolbar">
          <div className="text-size-toolbar">
            <button onClick={() => handleTextSizeChange("S")} className={textSize === "S" ? "active" : ""}>S</button>
            <button onClick={() => handleTextSizeChange("M")} className={textSize === "M" ? "active" : ""}>M</button>
            <button onClick={() => handleTextSizeChange("L")} className={textSize === "L" ? "active" : ""}>L</button>
            <button onClick={() => handleTextSizeChange("XL")} className={textSize === "XL" ? "active" : ""}>XL</button>
      
          <button onClick={() => handleTextAlignment("left")}>
            <img src={leftIcon} alt="Left Icon" className="icon" width={"20px"} />
          </button>
          <button onClick={() => handleTextAlignment("center")}>
            <img src={centerIcon} alt="Center Icon" className="icon" width={"20px"} />
          </button>
          <button onClick={() => handleTextAlignment("right")}>
            <img src={rightIcon} alt="Right Icon" className="icon" width={"20px"} />
          </button>
          <button onClick={handleDeleteText}>
            <img src={deleteIcon} alt="Delete Icon" className="icon" width={"20px"} />
          </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhiteBoard;
