import React from "react"

type Props = {
  id:number
  taskName:string
  assignee:string
  onComplete:(id:number)=>void
  onDelete:(id:number)=>void
  done:boolean
}
export default function Task({
  id,
  taskName,
  assignee,
  onComplete,
  onDelete,
  done
}:Props) {
  return (
    <div key={id}>
      <div className='taskDiv d-flex justify-content-between'>
        <div>
          <p>{taskName}</p>
          <p>{assignee}</p>
        </div>

        <div>
          <button
            onClick={() => onDelete(id)}
            type='button'
            className='btn btn-danger d-block mb-2'
          >
            <i className='fa-solid fa-trash-can'></i>
          </button>

          {!done ? (
            <button
              onClick={() => onComplete(id)}
              type='button'
              className='btn btn-success'
            >
              <i className='fa-solid fa-check'></i>
            </button>
          ) : null}
        </div>
      </div>
    </div>
  )
}
