
import React from 'react'
import { FormContainer } from './styles'

export function NewCycleForm() {
    

    return (
        <FormContainer>
        <label htmlFor="project-name">Vou trabalhar em </label>
        <input
          type="text"
          id="project-name"
          placeholder="Dê um nome para seu projeto"
          list="tasks-sugestions"
          disabled={!!activeCycle}
          {...register("name")}
        />

        <datalist id="tasks-sugestions">
          <option value="Porjeto 1">Porjeto 1</option>
          <option value="Porjeto 2">Porjeto 2</option>
          <option value="Porjeto 3">Porjeto 3</option>
          <option value="Porjeto 4">Porjeto 4</option>
        </datalist>
        <label htmlFor="duration">durante </label>
        <input
          type="number"
          id="duration"
          placeholder="- 00 +"
          step={5}
          min={5}
          max={60}
          disabled={!!activeCycle}
          {...register("duration", { valueAsNumber: true })}
        />
        <span>minutos</span>
      </FormContainer>
    )
}
