import cx from 'clsx'
import { Text } from '@mantine/core'
import { useListState } from '@mantine/hooks'
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd'
import classes from './DndList.module.css'

const tasks = [
  {
    id: 1,
    task: 'Buy groceries',
    priority: 'medium',
    completed: false
  },
  {
    id: 2,
    task: 'Finish reading the book',
    priority: 'low',
    completed: false
  },
  {
    id: 3,
    task: 'Clean the garage',
    priority: 'high',
    completed: false
  },
  {
    id: 4,
    task: 'Prepare presentation slides',
    priority: 'high',
    completed: false
  },
  {
    id: 5,
    task: 'Walk the dog',
    priority: 'medium',
    completed: true
  }
]

export function DndList() {
  const [state, handlers] = useListState(tasks)

  const items = state.map((item, index) => (
    <Draggable key={item.id} index={index} draggableId={item.id.toString()}>
      {(provided, snapshot) => (
        <div
          className={cx(classes.item, item.completed ? '!bg-green-900' : null, {
            [classes.itemDragging]: snapshot.isDragging
          })}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Text className={cx('w-16', classes.symbol)}>
            {/* TODO: Add checkmarks instead of Done/Not Done */}
            {item.completed ? 'Done' : 'Not Done'}
          </Text>
          <div>
            <Text>{item.task}</Text>
            <Text c="dimmed" size="sm">
              priority: {item.priority}
            </Text>
          </div>
        </div>
      )}
    </Draggable>
  ))

  return (
    <DragDropContext
      onDragEnd={({ destination, source }) =>
        handlers.reorder({ from: source.index, to: destination?.index || 0 })
      }
    >
      <Droppable droppableId="dnd-list" direction="vertical">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {items}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}
