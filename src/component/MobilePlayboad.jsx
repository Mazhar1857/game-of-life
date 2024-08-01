import React, { useEffect, useState } from 'react'
import './MobilePlayboard.css'
import { useDispatch, useSelector } from 'react-redux';
import { startStopAction } from '../store/startStopSlice';
import { arrayAction } from '../store/arraySlice';
import { mobileArrayAction } from '../store/mobileArraySlice';

const MobilePlayboard = () => {
    const startBtn = useSelector(state => state.startStop);
    const mobileArray = useSelector(state => state.mobileArray);
    const dispatch = useDispatch();

    useEffect(() => {
        let arr = [];

        for (let i = 0; i < 36; i++) {
            arr[i] = [];
            for (let j = 0; j < 25; j++) {
                arr[i][j] = { r: i, c: j, s: false };
            }
        };


        const defLive = [[12, 14], [13, 15], [14, 15], [14, 14], [14, 13]]
        defLive.forEach((item) => {
            arr[item[0]][item[1]].s = true;
        });

        dispatch(mobileArrayAction.setMobileArray(arr));
    }, []);



    const handleClick = (r, c) => {

        let newArray = mobileArray.map(row => row.map(col => ({ ...col })))
        newArray[r][c].s = !newArray[r][c].s

        dispatch(mobileArrayAction.setMobileArray(newArray));
    };




    const liveNeighbourCount = (row, col) => {
        const neighbour = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
        let count = 0;

        neighbour.forEach((neighbourItem) => {
            let r = row + neighbourItem[0];
            let c = col + neighbourItem[1];

            if (r >= 0 && r < 36 && c >= 0 && c < 25 && mobileArray[r][c].s) {
                count++;
            }
        });

        return count;

    };

    useEffect(() => {

        if (startBtn === 'stop') {

            const interval = setInterval(() => {


                let newArray = mobileArray.map(row => row.map(col => ({ ...col })));


                mobileArray.forEach((row, rowInd) => {

                    row.forEach((col, colInd) => {

                        if (liveNeighbourCount(rowInd, colInd) < 2 || liveNeighbourCount(rowInd, colInd) > 3) {
                            newArray[rowInd][colInd].s = false;
                        }
                        if (liveNeighbourCount(rowInd, colInd) == 3) {
                            newArray[rowInd][colInd].s = true;
                        }
                    })
                })


                dispatch(mobileArrayAction.setMobileArray(newArray))


            }, 250);
            return () => clearInterval(interval);
        };

    }, [startBtn, mobileArray]);


    useEffect(() => {
        let flag = false;

        if (startBtn === 'stop') {
            mobileArray.forEach((row) => {
                row.forEach((col) => {
                    if (col.s) {
                        flag = true
                    }
                })
            })

            if (!flag) {
                dispatch(startStopAction.toggleStartStop())
            }
        }
    }, [mobileArray])


    return (
        <div className='mobile-play-board'>
            {mobileArray.map((row, indRow) => (
                row.map(((col, indCol) => (<div key={`${indRow}${indCol}`} onClick={() => handleClick(indRow, indCol)} className={mobileArray[indRow][indCol].s ? 'live' : 'dead'}></div>)))
            ))}
        </div>
    )
}

export default MobilePlayboard
