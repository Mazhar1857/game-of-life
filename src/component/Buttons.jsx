import React from 'react'
import './Buttons.css'
import clear from '../assets/svg/clear.svg'
import explanation from '../assets/svg/explanation.svg'
import lexicon from '../assets/svg/lexicon.svg'
import play from '../assets/svg/play.svg'
import reset from '../assets/svg/reset.svg'
import stop from '../assets/svg/stop.svg'
import { useDispatch, useSelector } from 'react-redux'
import { explanationAction } from '../store/explanationSlice'
import { startStopAction } from '../store/startStopSlice'
import { clearAction } from '../store/clearSlice'
import { arrayAction } from '../store/arraySlice'
import { mobileArrayAction } from '../store/mobileArraySlice'

const Buttons = () => {
    const startStopBtn = useSelector(state => state.startStop)
    const mobileArray = useSelector(state => state.mobileArray)
    const array = useSelector(state => state.array)
    const clearBtn = useSelector(state => state.clear)
    const explanations = useSelector(state => state.explanation)
    const dispatch = useDispatch();


    const handleExplanation = () => {
        dispatch(explanationAction.toggleExplanation())
    }

    const handleClear = () => {
        const newArray = array.map(row => row.map(col => ({ ...col })))
        array.forEach((row, rowInd) => {
            row.forEach((col, colInd) => {
                newArray[rowInd][colInd].s = false;
            })
        })

        const newMobileArray = mobileArray.map(row => row.map(col => ({ ...col })))
        mobileArray.forEach((row, rowInd) => {
            row.forEach((col, colInd) => {
                newMobileArray[rowInd][colInd].s = false;
            })
        })

        dispatch(arrayAction.setArray(newArray))
        dispatch(mobileArrayAction.setMobileArray(newMobileArray))
        dispatch(clearAction.toggleclearRest())
    }

    const handleReset = () => {
        const defLive = [[12, 14], [13, 15], [14, 15], [14, 14], [14, 13]]

        const newArray = array.map(row => row.map(col => ({ ...col })))
        array.forEach((row, rowInd) => {
            row.forEach((col, colInd) => {
                newArray[rowInd][colInd].s = false;
            })
        })

        defLive.forEach(item => {
            newArray[item[0]][item[1]].s = true;
        })

        const newMobileArray = mobileArray.map(row => row.map(col => ({ ...col })))
        newMobileArray.forEach((row, rowInd) => {
            row.forEach((col, colInd) => {
                newMobileArray[rowInd][colInd].s = false;
            })
        })

        defLive.forEach(item => {
            newMobileArray[item[0]][item[1]].s = true;
        })



        dispatch(arrayAction.setArray(newArray));
        dispatch(mobileArrayAction.setMobileArray(newMobileArray));
        dispatch(clearAction.toggleclearRest());
    }

    return (
        <div className='buttons'>
            <div onClick={handleExplanation} className='exp'>
                <img src={explanation} alt="" />
                <button>EXPLANATION</button>
            </div>
            <div onClick={() => dispatch(startStopAction.toggleStartStop())} className='start'>
                <img className={startStopBtn === 'stop' ? 'invisible' : ''} src={play} alt="" />
                <img className={startStopBtn === 'start' ? 'invisible' : ''} src={stop} alt="" />
                <button>{startStopBtn.toUpperCase()}</button>
            </div>
            <div className={`${clearBtn === 'reset' ? 'invisible' : ''} clear`} onClick={handleClear}>
                <img src={clear} alt="" />
                <button>CLEAR</button>
            </div>
            <div className={`${clearBtn === 'clear' ? 'invisible' : ''} clear`} onClick={handleReset}>
                <img src={reset} alt="" />
                <button >RESET</button>
            </div>
        </div>
    )
}

export default Buttons
