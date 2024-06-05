import './App.css'

import { KonvaEventObject } from 'konva/lib/Node'
import { useCallback, useState } from 'react'
import { Circle, Layer, Rect, Ring, Stage } from 'react-konva'
import { v4 as uuidv4 } from 'uuid'

import { CIRCLE, RECT, RING } from './constants/const'
import { TShapes } from './constants/type'
import ToolPanel from './vendor/components/ToolPanel/ToolPanel'

const windowInnerWidth = document.documentElement.clientWidth
const windowInnerHeight = document.documentElement.clientHeight - 1

function App() {
  const [activeTools, setActiveTools] = useState('')
  const [shapes, setShapes] = useState<TShapes[]>([
    {
      type: RECT,
      x: 0,
      y: 0,
      id: 'Hi!'
    }
  ])

  const handleChangeShapePosition = (e: KonvaEventObject<MouseEvent>) => {
    const shapeId = e.target.attrs.id as string
    setShapes(shapes.map(shape => (shape.id === shapeId ? { ...shape, x: e.target.x(), y: e.target.y() } : shape)))
  }

  const handleToolClick = useCallback((type: string) => {
    setActiveTools(type)
  }, [])

  const handleStageClick = (e: KonvaEventObject<MouseEvent>) => {
    const pos = e.target.getStage()!.getRelativePointerPosition()
    if (!pos) return
    if (activeTools) {
      setShapes([...shapes, { ...pos, type: activeTools, id: uuidv4() }])
    }
  }

  const handleClickPointer = () => {
    setActiveTools('')
  }

  return (
    <>
      <div className="stage">
        <ToolPanel className="toolPosition" onClickSquare={handleToolClick} onClickPointer={handleClickPointer} />
        <Stage draggable={!activeTools} width={windowInnerWidth} height={windowInnerHeight} onClick={handleStageClick}>
          <Layer>
            {shapes.map(shape =>
              shape.type === RECT ? (
                <Rect
                  key={shape.id}
                  {...shape}
                  draggable={!activeTools}
                  fill="red"
                  width={100}
                  height={100}
                  onDragEnd={handleChangeShapePosition}
                />
              ) : shape.type === CIRCLE ? (
                <Circle
                  key={shape.id}
                  {...shape}
                  draggable={!activeTools}
                  fill="green"
                  width={100}
                  height={100}
                  onDragEnd={handleChangeShapePosition}
                />
              ) : shape.type === RING ? (
                <Ring
                  key={shape.id}
                  {...shape}
                  draggable={!activeTools}
                  innerRadius={25}
                  outerRadius={50}
                  fill="grey"
                  onDragEnd={handleChangeShapePosition}
                />
              ) : null
            )}
          </Layer>
        </Stage>
      </div>
    </>
  )
}

export default App
