import { KonvaEventObject } from 'konva/lib/Node'
import { FC } from 'react'
import { Circle, Layer, Rect, Ring, Stage } from 'react-konva'

import { CIRCLE, RECT, RING } from '../../constants/const'
import { TShape } from '../../constants/type'
import ToolPanel from '../ToolsPanel/ToolsPanel'

const windowInnerWidth = document.documentElement.clientWidth
const windowInnerHeight = document.documentElement.clientHeight - 1

type BoardWithShapesContainerProps = {
  shapes: TShape[]
  activeTool: string
  handleToolClick: (type: string) => void
  handlePointerClick: () => void
  handleStageClick: (evt: KonvaEventObject<MouseEvent>) => void
  handleChangeShapePosition: (evt: KonvaEventObject<DragEvent>) => void
}

const BoardWithShapesContainer: FC<BoardWithShapesContainerProps> = ({
  shapes,
  handleToolClick,
  handlePointerClick,
  handleStageClick,
  handleChangeShapePosition,
  activeTool: activeTools
}) => {
  return (
    <div className="Stage">
      <ToolPanel
        className="ToolsPosition"
        onClickSquare={e => handleToolClick(e)}
        onClickPointer={handlePointerClick}
      />
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
  )
}

export default BoardWithShapesContainer
