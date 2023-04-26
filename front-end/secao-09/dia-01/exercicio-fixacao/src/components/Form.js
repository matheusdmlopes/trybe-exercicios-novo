import React from 'react'

export default function Form({ handleChange, progress }) {

    return (
        <form>
            <label>
                <input
                    type='text'
                    placeholder='nome completo'
                    name='name'
                    onChange={handleChange}
                />
            </label>
            <label>
                <input
                    type='number'
                    placeholder='idade'
                    name='age'
                    onChange={handleChange}
                />
            </label>
            <label>
                <input type='text' placeholder='cidade' name='city' onChange={handleChange} />
            </label>
            <br></br>
            <label>
                Fundamentos
                <input type='radio' onChange={handleChange} name='progress' value='Fundamentos' checked={progress === 'Fundamentos'} />
            </label>
            <br></br>
            <label>
                Front-end
                <input type='radio' onChange={handleChange} name='progress' value='Front-end' checked={progress === 'Front-end'} />
            </label>
            <br></br>
            <label>
                Back-end
                <input type='radio' onChange={handleChange} name='progress' value='Back-end' checked={progress === 'Back-end'} />
            </label>
            <br></br>
            <label>
                Ciência da Computação
                <input type='radio' onChange={handleChange} name='progress' value='Ciência da Computação' checked={progress === 'Ciência da Computação'} />
            </label>
            <br></br>
            <button type='submit'>Submit</button>
        </form>
    )
}
