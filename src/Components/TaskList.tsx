import React from "react"
import Tasks from "./Tasks"
import { Todo } from "./TasksWrapper"
import { type } from "os"

export type TaskListProps = {
  dataParsed:Todo[]
  onComplete:(id:number)=>void
  onDelete:(id:number)=>void
  toggle:boolean
  token:string

}
export default function TaskList({
  dataParsed,
  onComplete,
  onDelete,
  toggle,
  token,
}:TaskListProps) {
  return (
    <div className='tasksTable'>
      <div id='tasksTable' className='tasks-table-container'>
        <Tasks dataParsed={dataParsed} onComplete={onComplete} onDelete={onDelete} toggle={toggle} token={token}/>
      </div>
    </div>
  )
}
